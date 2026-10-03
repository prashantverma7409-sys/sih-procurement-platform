const fs = require('fs');
const html = fs.readFileSync('C:/Users/prash/OneDrive/Desktop/ps138/code.html', 'utf8');
const match = html.match(/tailwind\.config=\{([\s\S]*?)\}<\/script>/);
if (match) {
  const configStr = '{' + match[1] + '}';
  const config = new Function('return ' + configStr)();
  
  let css = '@import "tailwindcss";\n\n@theme {\n';
  
  const colors = config.theme.extend.colors;
  for (let k in colors) {
    css += '  --color-' + k + ': ' + colors[k] + ';\n';
  }
  
  const fonts = config.theme.extend.fontFamily;
  for (let k in fonts) {
    css += '  --font-' + k + ': "' + fonts[k][0] + '", sans-serif;\n';
  }
  
  const textSizes = config.theme.extend.fontSize;
  for (let k in textSizes) {
    const size = textSizes[k];
    css += '  --text-' + k + ': ' + size[0] + ';\n';
    if(size[1]) {
      css += '  --text-' + k + '-line-height: ' + size[1].lineHeight + ';\n';
      css += '  --text-' + k + '-letter-spacing: ' + size[1].letterSpacing + ';\n';
      css += '  --text-' + k + '-font-weight: ' + size[1].fontWeight + ';\n';
    }
  }

  css += '}\n\n';
  css += '@layer base{\nhtml,body{margin:0;padding:0;}\nbody{overscroll-behavior:none;}\nmain>:first-child{margin-top:0!important;}\nmain>:last-child{margin-bottom:0!important;}\n}\n::-webkit-scrollbar{display:none;}';
  
  fs.writeFileSync('./src/app/globals.css', css);
  console.log('Done generating globals.css');
}
