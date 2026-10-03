const fs = require('fs');
const origContent = fs.readFileSync('src/app/architecture-canvas/page.tsx', 'utf8');

const canvasStart = origContent.indexOf('<div className="absolute inset-0 w-full h-full transition-transform duration-75 origin-top-left" id="canvas-world"');
const canvasEnd = origContent.indexOf('<div className="absolute left-space-md top-space-md bottom-20 w-64');

const prefix = origContent.slice(0, canvasStart);
const suffix = origContent.slice(canvasEnd);

const reactFlowCode = `
import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Handle,
  Position,
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const GlowingEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, data, markerEnd }) => {
  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  
  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ ...style, strokeWidth: 3, opacity: 0.2 }} />
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} className={data?.animateClass || 'animate-[dash_12s_linear_infinite]'} />
      {data?.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: \`translate(-50%, -50%) translate(\${labelX}px,\${labelY}px)\`,
              pointerEvents: 'all',
            }}
            className="nodrag nopan"
          >
            <span className={\`px-1.5 py-0.5 bg-surface-container-high font-label-sm text-[9px] font-bold rounded shadow-md cursor-pointer hover:bg-surface-bright transition-colors \${data.labelColor}\`}>
              {data.label}
            </span>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

const HtmlNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
};

const nodeTypes = { htmlNode: HtmlNode };
const edgeTypes = { glowingEdge: GlowingEdge };

const initialNodes = [
  { id: '1', type: 'htmlNode', position: { x: 80, y: 140 }, data: { html: \`<div class="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] transition-all z-20"><div class="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t"><div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span><span class="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">INGRESS // 01</span></div><span class="font-data-mono text-[9px] text-secondary bg-surface-container-lowest px-1 rounded">200 OK</span></div><div class="p-space-sm flex flex-col gap-1.5 relative"><div class="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-surface-container-highest rounded-full flex items-center justify-center"><div class="w-1.5 h-1.5 bg-outline rounded-full"></div></div><div class="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-container rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.6)]"><div class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div></div><div class="flex items-start gap-space-xs"><span class="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">router</span><div><h4 class="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">GovLaunch Ingress API</h4><p class="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">Kong EE / Zero-Trust TLS 1.3</p></div></div><div class="mt-1 pt-1.5 bg-surface-container-lowest p-space-xs rounded flex flex-col gap-0.5"><div class="flex items-center justify-between font-label-sm text-[10px]"><span class="text-on-surface-variant">Throughput:</span><span class="font-data-mono text-primary font-medium">24.8k req/s</span></div><div class="flex items-center justify-between font-label-sm text-[10px]"><span class="text-on-surface-variant">Edge Latency:</span><span class="font-data-mono text-secondary">2.1ms avg</span></div></div></div></div>\` } },
  { id: '2', type: 'htmlNode', position: { x: 430, y: 130 }, data: { html: \`<div class="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(16,185,129,0.2)] transition-all z-20"><div class="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t"><div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-secondary"></span><span class="font-label-sm text-[10px] text-secondary uppercase font-semibold">SOVEREIGN AUTH // 02</span></div><span class="material-symbols-outlined text-secondary text-[14px]">verified</span></div><div class="p-space-sm flex flex-col gap-1.5 relative"><div class="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-container rounded-full flex items-center justify-center"><div class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div></div><div class="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.6)]"><div class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div></div><div class="flex items-start gap-space-xs"><span class="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">key</span><div><h4 class="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">DigiLocker & Aadhaar Vault</h4><p class="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">OAuth2 PKCE + e-KYC 2.1</p></div></div><div class="flex flex-wrap gap-1 mt-0.5"><span class="px-1.5 py-0.5 bg-secondary/10 text-secondary font-label-sm text-[9px] font-semibold rounded">CERT-IN SECURED</span><span class="px-1.5 py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-[9px] rounded">DPIIT VALID</span></div><div class="mt-1 pt-1.5 bg-surface-container-lowest p-space-xs rounded flex items-center justify-between font-label-sm text-[10px]"><span class="text-on-surface-variant">HSM Validity:</span><span class="font-data-mono text-on-surface">900s / Session</span></div></div></div>\` } },
  { id: '3', type: 'htmlNode', position: { x: 810, y: 200 }, data: { html: \`<div class="w-[250px] bg-surface-container rounded shadow-2xl shadow-primary/20 z-20"><div class="px-space-sm py-1.5 bg-surface-container-high flex items-center justify-between rounded-t"><div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span><span class="font-label-sm text-[10px] text-primary uppercase font-bold tracking-wider">AI INFERENCE // 03</span></div><span class="px-1 bg-primary text-on-primary font-label-sm text-[8px] font-bold rounded">ACTIVE TARGET</span></div><div class="p-space-sm flex flex-col gap-1.5 relative"><div class="absolute -left-1.5 top-[70px] w-3.5 h-3.5 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(78,222,163,0.8)]"><div class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div></div><div class="absolute -right-1.5 top-[50px] w-3 h-3 bg-primary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(76,215,246,0.8)]"><div class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div></div><div class="absolute -right-1.5 top-[110px] w-3 h-3 bg-tertiary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(255,185,95,0.8)]"><div class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div></div><div class="flex items-start gap-space-xs"><span class="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">smart_toy</span><div><h4 class="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">AI Vision Model</h4><p class="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">Jetson AGX Orin Cluster</p></div></div><p class="font-body-sm text-[11px] text-on-surface-variant">YOLOv8x-Highway / TensorRT 8.6</p><div class="flex items-center gap-1"><span class="px-1.5 py-0.5 bg-primary/10 text-primary font-label-sm text-[9px] font-semibold rounded">AEC-Q100</span><span class="px-1.5 py-0.5 bg-surface-container-lowest text-on-surface-variant font-label-sm text-[9px] rounded">32 TOPS INT8</span></div><div class="mt-1 bg-surface-container-lowest p-space-xs rounded flex flex-col gap-1"><div class="flex items-center justify-between font-label-sm text-[10px]"><span class="text-on-surface-variant">Concurrent Feed:</span><span class="font-data-mono text-primary font-semibold">100 FPS</span></div><div class="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden"><div class="h-full bg-primary rounded-full" style="width: 78%"></div></div></div></div></div>\` } },
  { id: '4', type: 'htmlNode', position: { x: 1200, y: 370 }, data: { html: \`<div class="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(255,185,95,0.2)] transition-all z-20"><div class="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t"><div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-tertiary"></span><span class="font-label-sm text-[10px] text-tertiary uppercase font-semibold">FINANCIAL MESH // 04</span></div><span class="material-symbols-outlined text-tertiary text-[14px]">account_balance</span></div><div class="p-space-sm flex flex-col gap-1.5 relative"><div class="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-tertiary rounded-full flex items-center justify-center"><div class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div></div><div class="flex items-start gap-space-xs"><span class="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">currency_rupee</span><div><h4 class="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">PFMS Smart Escrow</h4><p class="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">Hyperledger & RBI Bridge</p></div></div><div class="mt-1 pt-1 bg-surface-container-lowest p-space-xs rounded flex flex-col gap-1"><div class="flex items-center justify-between font-label-sm text-[10px]"><span class="text-on-surface-variant">Relay Status:</span><span class="text-secondary font-semibold">SYNCHRONIZED</span></div><div class="flex items-center justify-between font-label-sm text-[10px]"><span class="text-on-surface-variant">Tx Hash:</span><span class="font-data-mono text-tertiary">0x8F94...42a1</span></div></div></div></div>\` } },
  { id: '5', type: 'htmlNode', position: { x: 1200, y: 120 }, data: { html: \`<div class="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] transition-all z-20"><div class="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t"><div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span><span class="font-label-sm text-[10px] text-primary uppercase font-semibold">GOV ENDPOINT // 05</span></div><span class="material-symbols-outlined text-primary text-[14px]">cloud_sync</span></div><div class="p-space-sm flex flex-col gap-1.5 relative"><div class="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full flex items-center justify-center"><div class="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div></div><div class="flex items-start gap-space-xs"><span class="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">lan</span><div><h4 class="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">MoRTH Telemetry Sink</h4><p class="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">Kafka / NIC Secured Cloud</p></div></div><div class="mt-1 pt-1 bg-surface-container-lowest p-space-xs rounded flex flex-col gap-1"><div class="flex items-center justify-between font-label-sm text-[10px]"><span class="text-on-surface-variant">NHAI Node:</span><span class="text-on-surface font-semibold">Corridor 7 (Delhi-Jaipur)</span></div><div class="flex items-center justify-between font-label-sm text-[10px]"><span class="text-on-surface-variant">Storage Class:</span><span class="font-data-mono text-primary">Air-Gapped Cold</span></div></div></div></div>\` } }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'glowingEdge', data: { label: 'AES-256 GCM', labelColor: 'text-primary' }, style: { stroke: '#4cd7f6', strokeDasharray: '6,4' } },
  { id: 'e2-3', source: '2', target: '3', type: 'glowingEdge', data: { label: 'mTLS 1.3 // e-KYC', labelColor: 'text-secondary' }, style: { stroke: '#4edea3', strokeDasharray: '8,4' } },
  { id: 'e3-4', source: '3', target: '4', type: 'glowingEdge', data: { label: 'PFMS TRIGGER', labelColor: 'text-tertiary', animateClass: 'animate-[dash_6s_linear_infinite_reverse]' }, style: { stroke: '#ffb95f', strokeDasharray: '7,3' } },
  { id: 'e3-5', source: '3', target: '5', type: 'glowingEdge', data: { label: 'TELEMETRY HASH', labelColor: 'text-primary' }, style: { stroke: '#4cd7f6', strokeDasharray: '4,4' } }
];

export function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="absolute inset-0 w-full h-full" style={{ background: '#0a0e17' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#1c1f29" gap={24} size={1.5} />
      </ReactFlow>
    </div>
  );
}
`;

const newContent = prefix + '\n<div className="absolute inset-0 w-full h-full z-10">\n  <FlowCanvas />\n</div>\n' + suffix;

let finalCode = newContent.replace('export default function Page() {', reactFlowCode + '\nexport default function Page() {');

fs.writeFileSync('src/app/architecture-canvas/page.tsx', finalCode);
console.log('Successfully injected React Flow!');
