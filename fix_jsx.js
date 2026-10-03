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
    
    // Remove scripts
    content = content.replace(/<script>[\s\S]*?<\/script>/gi, '');
    
    fs.writeFileSync(fullPath, content);
  }
});

// Targeted fix for sandbox JSON braces
const sandboxPath = path.join('C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform', 'src/app/sandbox/page.tsx');
if (fs.existsSync(sandboxPath)) {
    let content = fs.readFileSync(sandboxPath, 'utf8');
    content = content.replace(/<span className="text-outline">\{<\/span>/g, '<span className="text-outline">{"{"}</span>');
    content = content.replace(/<span className="text-outline">\}<\/span>/g, '<span className="text-outline">{"}"}</span>');
    content = content.replace(/<span className="text-outline">\},<\/span>/g, '<span className="text-outline">{"},"}</span>');
    content = content.replace(/<span className="text-outline">\}\]<\/span>/g, '<span className="text-outline">{"}]"}</span>');
    content = content.replace(/<span className="text-outline">\}, \{<\/span>/g, '<span className="text-outline">{"}, {"}</span>');
    fs.writeFileSync(sandboxPath, content);
}
