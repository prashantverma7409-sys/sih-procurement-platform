const fs = require('fs');

const html = fs.readFileSync('C:/Users/prash/OneDrive/Desktop/ps138/code.html', 'utf8');

// Extract body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Convert HTML to JSX
let jsx = bodyContent.replace(/class=/g, 'className=');
jsx = jsx.replace(/viewbox=/g, 'viewBox=');
jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
jsx = jsx.replace(/stroke-dasharray=/g, 'strokeDasharray=');
jsx = jsx.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
jsx = jsx.replace(/stop-color=/g, 'stopColor=');
jsx = jsx.replace(/font-family=/g, 'fontFamily=');
jsx = jsx.replace(/font-size=/g, 'fontSize=');
jsx = jsx.replace(/font-weight=/g, 'fontWeight=');
jsx = jsx.replace(/text-anchor=/g, 'textAnchor=');
jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments

jsx = jsx.replace(/style="([^"]+)"/g, (match, p1) => {
  const parts = p1.split(':').map(s => s.trim());
  if(parts.length === 2) {
    const key = parts[0].replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return `style={{ ${key}: '${parts[1]}' }}`;
  }
  return match;
});

// Split the JSX into layout parts and page parts
// The structure is <aside>...</aside> <div className="pl-72"><header>...</header><main><div className="flex flex-col w-full"> [PAGE CONTENT] </div></main></div>
const asideRegex = /(<aside className="fixed left-0 top-0 h-full w-72[\s\S]*?<\/aside>)/;
const headerRegex = /(<header className="fixed top-0 left-72[\s\S]*?<\/header>)/;
const mainStartRegex = /<main className="w-full pt-20 bg-background min-h-screen">/;
const pageContentRegex = /<main[^>]*>([\s\S]*?)<\/main>/;

const asideMatch = jsx.match(asideRegex);
const headerMatch = jsx.match(headerRegex);
const pageContentMatch = jsx.match(pageContentRegex);

let aside = asideMatch ? asideMatch[1] : '';
let header = headerMatch ? headerMatch[1] : '';
let pageContent = pageContentMatch ? pageContentMatch[1] : '';

// Update links in aside
aside = aside.replace(/href="#"/g, 'href="/"');
// Let's replace specific data-paths with actual links
aside = aside.replace(/href="\/"([\s\S]*?)data-path="dashboard"/g, 'href="/"$1data-path="dashboard"');
aside = aside.replace(/href="\/"([\s\S]*?)data-path="opportunity-feed"/g, 'href="/officer/post-tender"$1data-path="opportunity-feed"');
aside = aside.replace(/href="\/"([\s\S]*?)data-path="architecture-canvas"/g, 'href="/architecture-canvas"$1data-path="architecture-canvas"');

// Fix unescaped >
pageContent = pageContent.replace(/\(MII > 80%\)/g, '(MII &gt; 80%)');

// Generate layout.tsx
const layoutTsx = `
import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..900&family=Plus+Jakarta+Sans:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary">
        ${aside.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>')}
        <div className="pl-72">
          ${header}
          <main className="w-full pt-20 bg-background min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
`;

fs.writeFileSync('./src/app/layout.tsx', layoutTsx);

// Generate page.tsx
const pageTsx = `
export default function Dashboard() {
  return (
    <>
      ${pageContent}
    </>
  );
}
`;

fs.writeFileSync('./src/app/page.tsx', pageTsx);

console.log('Layout and page successfully split and linked!');
