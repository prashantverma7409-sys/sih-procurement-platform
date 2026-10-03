const fs = require('fs');
const path = require('path');

const files = [
  'src/app/page.tsx',
  'src/app/escrow/page.tsx',
  'src/app/squads/page.tsx',
  'src/app/architecture-canvas/page.tsx',
  'src/app/officer/post-tender/page.tsx',
  'src/app/sandbox/page.tsx',
  'src/app/reputation-passport/page.tsx'
];

files.forEach(f => {
  const fullPath = path.join('C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform', f);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix specific SVG attributes
    content = content.replace(/patternunits=/gi, 'patternUnits=');
    content = content.replace(/fegaussianblur/gi, 'feGaussianBlur');
    content = content.replace(/stddeviation=/gi, 'stdDeviation=');
    
    // I also see 1/4 in the screenshot, so there might be 3 more errors. 
    // Let me fix any potential `xmlns:xlink` or `xlink:href`
    content = content.replace(/xmlns:xlink=/gi, 'xmlnsXlink=');
    content = content.replace(/xlink:href=/gi, 'xlinkHref=');
    
    fs.writeFileSync(fullPath, content);
  }
});
