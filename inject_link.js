const fs = require('fs');
const path = require('path');

const layoutPath = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/layout.tsx';
let content = fs.readFileSync(layoutPath, 'utf8');

const target = '<Link className="flex items-center justify-between px-space-md py-space-sm rounded transition-all text-on-surface-variant hover:bg-surface-container hover:text-on-surface" href="/escrow" ><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[18px]">currency_rupee</span><span className="font-body-md text-body-md font-medium">Escrow Payments</span></div><span className="font-label-sm text-label-sm text-on-surface-variant">05</span></Link>';

const replacement = target + '<Link className="flex items-center justify-between px-space-md py-space-sm rounded transition-all text-on-surface-variant hover:bg-surface-container hover:text-on-surface" href="/reputation-passport" ><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[18px]">verified_user</span><span className="font-body-md text-body-md font-medium">Reputation Passport</span></div><span className="font-label-sm text-label-sm text-on-surface-variant">06</span></Link>';

content = content.replace(target, replacement);

fs.writeFileSync(layoutPath, content);
