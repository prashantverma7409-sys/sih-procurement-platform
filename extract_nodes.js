const fs = require('fs');

const content = fs.readFileSync('src/app/architecture-canvas/page.tsx', 'utf8');

const regex = /<div className="absolute left-\[([0-9]+)px\] top-\[([0-9]+)px\] [^>]+ cursor-(?:move|pointer)[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*(?:<!--|$|<div className="absolute|<span className="px-1.5|<svg)/g;

let nodes = [];
let match;
while ((match = regex.exec(content)) !== null) {
  nodes.push({
    x: parseInt(match[1]),
    y: parseInt(match[2]),
    html: match[0]
  });
}

console.log(nodes.length + ' nodes found.');
if (nodes.length > 0) {
  console.log(nodes[0].html.slice(0, 150));
}
