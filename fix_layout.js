const fs = require('fs');

const srcPath = 'C:/Users/prash/OneDrive/Desktop/ps138/stitch_sovereign_procurement_terminal/code.html';
const layoutPath = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/layout.tsx';

let html = fs.readFileSync(srcPath, 'utf8');

// Extract aside and header
const asideMatch = html.match(/<aside[^>]*>([\s\S]*?)<\/aside>/);
const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/);

if (!asideMatch || !headerMatch) {
  console.log("Could not find aside or header");
  process.exit(1);
}

let asideJSX = `<aside ${asideMatch[0].match(/<aside([^>]*)>/)[1]}>${asideMatch[1]}</aside>`;
let headerJSX = `<header ${headerMatch[0].match(/<header([^>]*)>/)[1]}>${headerMatch[1]}</header>`;

// Convert HTML to JSX
const toJSX = (str) => {
  let jsx = str;
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); 
  jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  jsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  // Next.js Link instead of a
  jsx = jsx.replace(/<a([^>]*)data-path="dashboard"([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1href="/"$2$3>$4</Link>');
  jsx = jsx.replace(/<a([^>]*)data-path="ai-sanitizer"([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1href="/officer/post-tender"$2$3>$4</Link>');
  jsx = jsx.replace(/<a([^>]*)data-path="architecture-canvas"([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1href="/architecture-canvas"$2$3>$4</Link>');
  jsx = jsx.replace(/<a([^>]*)data-path="startup-squads"([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1href="/squads"$2$3>$4</Link>');
  jsx = jsx.replace(/<a([^>]*)data-path="synthetic-sandbox"([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1href="/sandbox"$2$3>$4</Link>');
  jsx = jsx.replace(/<a([^>]*)data-path="escrow-payments"([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1href="/escrow"$2$3>$4</Link>');
  // And Reputation? I asked them to generate Reputation. It might not be in the dashboard's html sidebar.
  
  return jsx;
};

asideJSX = toJSX(asideJSX);
headerJSX = toJSX(headerJSX);

// Build layout.tsx
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

// The layout has something like:
// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) { return ( ... ) }
// We need to replace the contents inside the `return (`...`)`

// But wait, it's easier to just recreate layout.tsx fully.

const newLayout = `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GovLaunch // SIH PS 136",
  description: "Startup-friendly public procurement mechanism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={\`\${inter.className} bg-background text-on-surface antialiased\`}>
        <div className="flex min-h-screen">
          ${asideJSX}
          <div className="pl-72 w-full">
            ${headerJSX}
            <main className="relative pt-16 w-full min-h-screen bg-surface">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
`;

fs.writeFileSync(layoutPath, newLayout);
