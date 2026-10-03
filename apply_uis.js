const fs = require('fs');
const path = require('path');

const map = {
  'stitch_sovereign_procurement_terminal': 'src/app/page.tsx',
  'stitch_sovereign_procurement_terminal (1)': 'src/app/escrow/page.tsx',
  'stitch_sovereign_procurement_terminal (2)': 'src/app/squads/page.tsx',
  'stitch_sovereign_procurement_terminal (3)': 'src/app/architecture-canvas/page.tsx',
  'stitch_sovereign_procurement_terminal (4)': 'src/app/officer/post-tender/page.tsx',
  'stitch_sovereign_procurement_terminal (5)': 'src/app/sandbox/page.tsx',
  'stitch_sovereign_procurement_terminal (6)': 'src/app/reputation-passport/page.tsx'
};

const baseSrc = 'C:/Users/prash/OneDrive/Desktop/ps138';
const baseDest = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform';

for (const [folderName, destPath] of Object.entries(map)) {
  const htmlPath = path.join(baseSrc, folderName, 'code.html');
  if (!fs.existsSync(htmlPath)) {
    console.log(`Missing ${htmlPath}`);
    continue;
  }
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract main content
  const mainRegex = /<main[^>]*>([\s\S]*?)<\/main>/;
  const match = html.match(mainRegex);
  
  if (!match) {
    console.log(`No <main> found in ${folderName}`);
    continue;
  }
  
  let jsx = match[1];
  
  // Convert HTML to JSX
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/viewbox=/g, 'viewBox=');
  jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  jsx = jsx.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
  jsx = jsx.replace(/stop-color=/g, 'stopColor=');
  jsx = jsx.replace(/stop-opacity=/g, 'stopOpacity=');
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments
  
  // Fix inline styles
  jsx = jsx.replace(/style="([^"]+)"/g, (m, p1) => {
    const parts = p1.split(';').filter(s => s.trim());
    const styles = parts.map(part => {
      const [k, v] = part.split(':').map(s => s.trim());
      if (!k || !v) return '';
      const camelK = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${camelK}: '${v}'`;
    }).filter(Boolean).join(', ');
    return `style={{ ${styles} }}`;
  });
  
  // Fix unescaped entities
  jsx = jsx.replace(/>/g, (m, offset, str) => {
    // Only replace if it's outside a tag. This is tricky with simple regex.
    // Instead we'll just fix known issues like "(MII > 80%)"
    return m;
  });
  jsx = jsx.replace(/\(MII > 80%\)/g, '(MII &gt; 80%)');
  
  // Also fix `<input ...>` and `<br>` not being self-closed
  jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  jsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  
  const componentName = path.basename(path.dirname(destPath)) === 'app' ? 'Dashboard' 
    : path.basename(path.dirname(destPath)).replace(/-/g, '').toUpperCase() + 'Page';
  
  const fileContent = `"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;
  
  const destFull = path.join(baseDest, destPath);
  fs.mkdirSync(path.dirname(destFull), { recursive: true });
  fs.writeFileSync(destFull, fileContent);
  console.log(`Updated ${destPath}`);
}
