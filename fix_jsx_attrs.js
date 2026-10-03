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
    
    // Fix SVG tags and attributes
    content = content.replace(/<fecomposite/gi, '<feComposite');
    content = content.replace(/<\/fecomposite>/gi, '</feComposite>');
    content = content.replace(/<lineargradient/gi, '<linearGradient');
    content = content.replace(/<\/lineargradient>/gi, '</linearGradient>');
    content = content.replace(/attributename=/gi, 'attributeName=');
    content = content.replace(/repeatcount=/gi, 'repeatCount=');
    
    // Fix general HTML to JSX attributes
    content = content.replace(/readonly=/gi, 'readOnly=');
    content = content.replace(/onclick=/gi, 'onClick=');
    
    // Fix boolean string attributes like checked="checked"
    content = content.replace(/checked="checked"/gi, 'defaultChecked={true}');
    content = content.replace(/checked="true"/gi, 'defaultChecked={true}');
    
    fs.writeFileSync(fullPath, content);
  }
});
