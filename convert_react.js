const fs = require('fs');

const html = fs.readFileSync('C:/Users/prash/OneDrive/Desktop/ps138/code.html', 'utf8');

// Extract the body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Convert HTML attributes to React JSX attributes
bodyContent = bodyContent.replace(/class=/g, 'className=');
bodyContent = bodyContent.replace(/viewbox=/g, 'viewBox=');
bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
bodyContent = bodyContent.replace(/stroke-dasharray=/g, 'strokeDasharray=');
bodyContent = bodyContent.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
bodyContent = bodyContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
bodyContent = bodyContent.replace(/stop-color=/g, 'stopColor=');
bodyContent = bodyContent.replace(/font-family=/g, 'fontFamily=');
bodyContent = bodyContent.replace(/font-size=/g, 'fontSize=');
bodyContent = bodyContent.replace(/font-weight=/g, 'fontWeight=');
bodyContent = bodyContent.replace(/text-anchor=/g, 'textAnchor=');
bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments to avoid JSX issues

// Fix style="width: 30%" to style={{width: '30%'}}
bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, p1) => {
  const parts = p1.split(':').map(s => s.trim());
  if(parts.length === 2) {
    // Basic conversion for width: 30%
    const key = parts[0].replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return `style={{ ${key}: '${parts[1]}' }}`;
  }
  return match;
});

const pageTsx = `
export default function Dashboard() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync('./src/app/page.tsx', pageTsx);

// Generate layout.tsx
const layoutTsx = `
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GovLaunch",
  description: "Autonomous Public Sector Procurement Terminal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..900&family=Plus+Jakarta+Sans:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
`;

fs.writeFileSync('./src/app/layout.tsx', layoutTsx);

console.log('Done generating page.tsx and layout.tsx');
