const fs = require('fs');
let code = fs.readFileSync('src/app/architecture-canvas/page.tsx', 'utf8');

const svgDefs = `
<svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
  <defs>
    <filter height="140%" id="glow-cyan" width="140%" x="-20%" y="-20%">
      <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
      <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
    </filter>
    <filter height="140%" id="glow-emerald" width="140%" x="-20%" y="-20%">
      <feGaussianBlur result="blur" stdDeviation="2.5"></feGaussianBlur>
      <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
    </filter>
    <filter height="140%" id="glow-amber" width="140%" x="-20%" y="-20%">
      <feGaussianBlur result="blur" stdDeviation="2.5"></feGaussianBlur>
      <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
    </filter>
    <linearGradient id="grad-cyan-pulse" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"></stop>
      <stop offset="50%" stopColor="#4cd7f6" stopOpacity="1"></stop>
      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8"></stop>
    </linearGradient>
    <linearGradient id="grad-emerald" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stopColor="#00a572" stopOpacity="0.9"></stop>
      <stop offset="100%" stopColor="#4edea3" stopOpacity="1"></stop>
    </linearGradient>
    <linearGradient id="grad-amber" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.9"></stop>
      <stop offset="100%" stopColor="#ffb95f" stopOpacity="1"></stop>
    </linearGradient>
  </defs>
</svg>
`;

code = code.replace('<ReactFlow', svgDefs + '\n      <ReactFlow');
fs.writeFileSync('src/app/architecture-canvas/page.tsx', code);
console.log('Added SVG definitions for ReactFlow nodes');
