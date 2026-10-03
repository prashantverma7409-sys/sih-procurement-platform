const fs = require('fs');
let code = fs.readFileSync('src/app/officer/post-tender/page.tsx', 'utf8');
code = code.replace(/readOnly=""/g, 'readOnly={true}');
fs.writeFileSync('src/app/officer/post-tender/page.tsx', code);
console.log('Fixed readOnly');
