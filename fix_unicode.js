const fs = require('fs');

const layoutPath = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/layout.tsx';
let content = fs.readFileSync(layoutPath, 'utf8');

// Replace any non-ascii garbage before K with ⌘
content = content.replace(/[^\x00-\x7F]+K/g, '⌘K');

fs.writeFileSync(layoutPath, content);
