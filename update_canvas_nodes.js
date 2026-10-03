const fs = require('fs');
let code = fs.readFileSync('src/app/architecture-canvas/page.tsx', 'utf8');

const imports = `
import IngressNode from '../../components/canvas-nodes/IngressNode';
import AuthNode from '../../components/canvas-nodes/AuthNode';
import AINode from '../../components/canvas-nodes/AINode';
import EscrowNode from '../../components/canvas-nodes/EscrowNode';
import TelemetryNode from '../../components/canvas-nodes/TelemetryNode';
`;

code = code.replace(/import \{.*?\} from '@xyflow\/react';/s, (m) => m + '\n' + imports);

code = code.replace(/const nodeTypes = \{ htmlNode: HtmlNode \};/, 
  "const nodeTypes = { ingress: IngressNode, auth: AuthNode, ai: AINode, escrow: EscrowNode, telemetry: TelemetryNode };");

const newNodes = `
const initialNodes = [
  { id: '1', type: 'ingress', position: { x: 80, y: 140 }, data: { throughput: '24.8k req/s', latency: '2.1ms avg' } },
  { id: '2', type: 'auth', position: { x: 430, y: 130 }, data: { validity: '900s / Session' } },
  { id: '3', type: 'ai', position: { x: 810, y: 200 }, data: { fps: '100 FPS', fpsProgress: '78%' } },
  { id: '4', type: 'escrow', position: { x: 1200, y: 370 }, data: { status: 'SYNCHRONIZED', hash: '0x8F94...42a1' } },
  { id: '5', type: 'telemetry', position: { x: 1200, y: 120 }, data: { nodeName: 'Corridor 7 (Delhi-Jaipur)', storage: 'Air-Gapped Cold' } }
];
`;

code = code.replace(/const initialNodes = \[\s*\{ id: '1'.*?\];/s, newNodes.trim());

fs.writeFileSync('src/app/architecture-canvas/page.tsx', code);
console.log('Updated canvas to use React components!');
