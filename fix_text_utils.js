const fs = require('fs');

const cssPath = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/globals.css';
let content = fs.readFileSync(cssPath, 'utf8');

// I will append explicit text utility classes
const configStr = `{"fontSize":{"body-lg":["16px",{"lineHeight":"24px","letterSpacing":"0em","fontWeight":"400"}],"body-md":["14px",{"lineHeight":"20px","letterSpacing":"0em","fontWeight":"400"}],"display-lg-mobile":["32px",{"lineHeight":"40px","letterSpacing":"-0.02em","fontWeight":"700"}],"headline-sm":["18px",{"lineHeight":"24px","letterSpacing":"0em","fontWeight":"600"}],"display-lg":["48px",{"lineHeight":"56px","letterSpacing":"-0.03em","fontWeight":"700"}],"headline-lg":["24px",{"lineHeight":"32px","letterSpacing":"-0.01em","fontWeight":"600"}],"label-lg":["13px",{"lineHeight":"18px","letterSpacing":"0.04em","fontWeight":"600"}],"body-sm":["12px",{"lineHeight":"16px","letterSpacing":"0.01em","fontWeight":"400"}],"label-md":["11px",{"lineHeight":"16px","letterSpacing":"0.06em","fontWeight":"500"}],"headline-xl":["32px",{"lineHeight":"40px","letterSpacing":"-0.02em","fontWeight":"600"}],"label-sm":["10px",{"lineHeight":"14px","letterSpacing":"0.08em","fontWeight":"500"}],"headline-xl-mobile":["24px",{"lineHeight":"32px","letterSpacing":"-0.01em","fontWeight":"600"}],"data-mono":["12px",{"lineHeight":"16px","letterSpacing":"0em","fontWeight":"400"}]}}`;

const config = JSON.parse(configStr);

let utils = `\n/* Explicit Text Utilities */\n`;
for (const [key, val] of Object.entries(config.fontSize)) {
  const size = val[0];
  const params = val[1];
  utils += `.text-${key} {\n`;
  utils += `  font-size: ${size};\n`;
  if (params.lineHeight) utils += `  line-height: ${params.lineHeight};\n`;
  if (params.letterSpacing) utils += `  letter-spacing: ${params.letterSpacing};\n`;
  // I will also put font-weight here just in case! 
  // Wait, if it has `font-medium`, Tailwind's font-medium will try to override this. 
  // But if I put font-weight here without !important, tailwind's `font-medium` will win if it's applied later.
  // Actually, I don't need font-weight in .text-* because the AI explicitly used `font-medium`, `font-bold` etc.!
  // AND the AI explicitly used `font-body-sm` which I ALREADY mapped!
  // Wait, I mapped .font-* to { font-family, font-weight }
  utils += `}\n`;
}

// Check if these explicit text utilities are already there to prevent duplication
if (!content.includes('/* Explicit Text Utilities */')) {
  // Insert inside @layer utilities {
  content = content.replace('@layer utilities {', '@layer utilities {\n' + utils);
  fs.writeFileSync(cssPath, content);
}
