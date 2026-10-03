const fs = require('fs');

const layoutPath = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/layout.tsx';
let content = fs.readFileSync(layoutPath, 'utf8');

const headFonts = `<head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>`;

content = content.replace(/<head>[\s\S]*?<\/head>/, headFonts);
fs.writeFileSync(layoutPath, content);
