const fs = require('fs');

if (!fs.existsSync('src/components/canvas-nodes')) {
  fs.mkdirSync('src/components/canvas-nodes', { recursive: true });
}

// 1. Ingress Node
const ingressNodeCode = `
import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function IngressNode({ data }: any) {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div className="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] transition-all z-20">
        <div className="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">INGRESS // 01</span>
          </div>
          <span className="font-data-mono text-[9px] text-secondary bg-surface-container-lowest px-1 rounded">200 OK</span>
        </div>
        <div className="p-space-sm flex flex-col gap-1.5 relative">
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-surface-container-highest rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-outline rounded-full"></div>
          </div>
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-container rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.6)]">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">router</span>
            <div>
              <h4 className="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">GovLaunch Ingress API</h4>
              <p className="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">Kong EE / Zero-Trust TLS 1.3</p>
            </div>
          </div>
          <div className="mt-1 pt-1.5 bg-surface-container-lowest p-space-xs rounded flex flex-col gap-0.5">
            <div className="flex items-center justify-between font-label-sm text-[10px]">
              <span className="text-on-surface-variant">Throughput:</span>
              <span className="font-data-mono text-primary font-medium">{data?.throughput || '24.8k req/s'}</span>
            </div>
            <div className="flex items-center justify-between font-label-sm text-[10px]">
              <span className="text-on-surface-variant">Edge Latency:</span>
              <span className="font-data-mono text-secondary">{data?.latency || '2.1ms avg'}</span>
            </div>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
}
`;
fs.writeFileSync('src/components/canvas-nodes/IngressNode.tsx', ingressNodeCode);

// 2. Auth Node
const authNodeCode = `
import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function AuthNode({ data }: any) {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div className="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(16,185,129,0.2)] transition-all z-20">
        <div className="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-[10px] text-secondary uppercase font-semibold">SOVEREIGN AUTH // 02</span>
          </div>
          <span className="material-symbols-outlined text-secondary text-[14px]">verified</span>
        </div>
        <div className="p-space-sm flex flex-col gap-1.5 relative">
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-container rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.6)]">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">key</span>
            <div>
              <h4 className="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">DigiLocker & Aadhaar Vault</h4>
              <p className="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">OAuth2 PKCE + e-KYC 2.1</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mt-0.5">
            <span className="px-1.5 py-0.5 bg-secondary/10 text-secondary font-label-sm text-[9px] font-semibold rounded">CERT-IN SECURED</span>
            <span className="px-1.5 py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-[9px] rounded">DPIIT VALID</span>
          </div>
          <div className="mt-1 pt-1.5 bg-surface-container-lowest p-space-xs rounded flex items-center justify-between font-label-sm text-[10px]">
            <span className="text-on-surface-variant">HSM Validity:</span>
            <span className="font-data-mono text-on-surface">{data?.validity || '900s / Session'}</span>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
}
`;
fs.writeFileSync('src/components/canvas-nodes/AuthNode.tsx', authNodeCode);

// 3. AI Node
const aiNodeCode = `
import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function AINode({ data }: any) {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div className="w-[250px] bg-surface-container rounded shadow-2xl shadow-primary/20 z-20">
        <div className="px-space-sm py-1.5 bg-surface-container-high flex items-center justify-between rounded-t">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-[10px] text-primary uppercase font-bold tracking-wider">AI INFERENCE // 03</span>
          </div>
          <span className="px-1 bg-primary text-on-primary font-label-sm text-[8px] font-bold rounded">ACTIVE TARGET</span>
        </div>
        <div className="p-space-sm flex flex-col gap-1.5 relative">
          <div className="absolute -left-1.5 top-[70px] w-3.5 h-3.5 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(78,222,163,0.8)]">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="absolute -right-1.5 top-[50px] w-3 h-3 bg-primary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(76,215,246,0.8)]">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="absolute -right-1.5 top-[110px] w-3 h-3 bg-tertiary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(255,185,95,0.8)]">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">smart_toy</span>
            <div>
              <h4 className="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">AI Vision Model</h4>
              <p className="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">Jetson AGX Orin Cluster</p>
            </div>
          </div>
          <p className="font-body-sm text-[11px] text-on-surface-variant">YOLOv8x-Highway / TensorRT 8.6</p>
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 bg-primary/10 text-primary font-label-sm text-[9px] font-semibold rounded">AEC-Q100</span>
            <span className="px-1.5 py-0.5 bg-surface-container-lowest text-on-surface-variant font-label-sm text-[9px] rounded">32 TOPS INT8</span>
          </div>
          <div className="mt-1 bg-surface-container-lowest p-space-xs rounded flex flex-col gap-1">
            <div className="flex items-center justify-between font-label-sm text-[10px]">
              <span className="text-on-surface-variant">Concurrent Feed:</span>
              <span className="font-data-mono text-primary font-semibold">{data?.fps || '100 FPS'}</span>
            </div>
            <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: data?.fpsProgress || '78%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
}
`;
fs.writeFileSync('src/components/canvas-nodes/AINode.tsx', aiNodeCode);

// 4. Escrow Node
const escrowNodeCode = `
import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function EscrowNode({ data }: any) {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div className="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(255,185,95,0.2)] transition-all z-20">
        <div className="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="font-label-sm text-[10px] text-tertiary uppercase font-semibold">FINANCIAL MESH // 04</span>
          </div>
          <span className="material-symbols-outlined text-tertiary text-[14px]">account_balance</span>
        </div>
        <div className="p-space-sm flex flex-col gap-1.5 relative">
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-tertiary rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">currency_rupee</span>
            <div>
              <h4 className="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">PFMS Smart Escrow</h4>
              <p className="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">Hyperledger & RBI Bridge</p>
            </div>
          </div>
          <div className="mt-1 pt-1 bg-surface-container-lowest p-space-xs rounded flex flex-col gap-1">
            <div className="flex items-center justify-between font-label-sm text-[10px]">
              <span className="text-on-surface-variant">Relay Status:</span>
              <span className="text-secondary font-semibold">{data?.status || 'SYNCHRONIZED'}</span>
            </div>
            <div className="flex items-center justify-between font-label-sm text-[10px]">
              <span className="text-on-surface-variant">Tx Hash:</span>
              <span className="font-data-mono text-tertiary">{data?.hash || '0x8F94...42a1'}</span>
            </div>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
}
`;
fs.writeFileSync('src/components/canvas-nodes/EscrowNode.tsx', escrowNodeCode);

// 5. Telemetry Node
const telemetryNodeCode = `
import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function TelemetryNode({ data }: any) {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div className="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] transition-all z-20">
        <div className="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-[10px] text-primary uppercase font-semibold">GOV ENDPOINT // 05</span>
          </div>
          <span className="material-symbols-outlined text-primary text-[14px]">cloud_sync</span>
        </div>
        <div className="p-space-sm flex flex-col gap-1.5 relative">
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">lan</span>
            <div>
              <h4 className="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">MoRTH Telemetry Sink</h4>
              <p className="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">Kafka / NIC Secured Cloud</p>
            </div>
          </div>
          <div className="mt-1 pt-1 bg-surface-container-lowest p-space-xs rounded flex flex-col gap-1">
            <div className="flex items-center justify-between font-label-sm text-[10px]">
              <span className="text-on-surface-variant">NHAI Node:</span>
              <span className="text-on-surface font-semibold">{data?.nodeName || 'Corridor 7 (Delhi-Jaipur)'}</span>
            </div>
            <div className="flex items-center justify-between font-label-sm text-[10px]">
              <span className="text-on-surface-variant">Storage Class:</span>
              <span className="font-data-mono text-primary">{data?.storage || 'Air-Gapped Cold'}</span>
            </div>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
}
`;
fs.writeFileSync('src/components/canvas-nodes/TelemetryNode.tsx', telemetryNodeCode);

console.log('Nodes extracted!');
