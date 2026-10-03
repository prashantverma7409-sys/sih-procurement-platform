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
    
    // Replace value="something" with defaultValue="something" only in input tags.
    // It's safer to just replace value=" with defaultValue=" across the board 
    // EXCEPT inside our <option> tags. Wait, <option value="..."> is perfectly valid in React!
    // So we shouldn't globally replace value="!
    
    // Let's do it specifically for inputs.
    content = content.replace(/<input([^>]*?)value="([^"]*)"([^>]*)>/gi, '<input$1defaultValue="$2"$3>');
    
    fs.writeFileSync(fullPath, content);
  }
});
