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
    
    // Remove selected="" from <option> tags
    content = content.replace(/selected=""/gi, '');
    content = content.replace(/selected="true"/gi, '');
    
    fs.writeFileSync(fullPath, content);
  }
});
