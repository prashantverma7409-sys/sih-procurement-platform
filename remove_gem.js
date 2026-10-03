const fs = require('fs');
let code = fs.readFileSync('src/app/layout.tsx', 'utf8');

const oldStr = `<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-low rounded"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><span className="font-label-sm text-label-sm text-on-surface-variant">GeM API 3.1:</span><span className="font-label-sm text-label-sm text-secondary font-semibold">SYNCED</span></div>`;

if (code.includes(oldStr)) {
  code = code.replace(oldStr, '');
  fs.writeFileSync('src/app/layout.tsx', code);
  console.log('Removed GeM API badge via direct string replacement');
} else {
  console.log('Could not find the badge string');
}
