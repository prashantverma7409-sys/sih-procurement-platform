"use client";



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

import IngressNode from '../../components/canvas-nodes/IngressNode';
import AuthNode from '../../components/canvas-nodes/AuthNode';
import AINode from '../../components/canvas-nodes/AINode';
import EscrowNode from '../../components/canvas-nodes/EscrowNode';
import TelemetryNode from '../../components/canvas-nodes/TelemetryNode';

import '@xyflow/react/dist/style.css';

const GlowingEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, data, markerEnd }: any) => {
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
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'all',
            }}
            className="nodrag nopan"
          >
            <span className={`px-1.5 py-0.5 bg-surface-container-high font-label-sm text-[9px] font-bold rounded shadow-md cursor-pointer hover:bg-surface-bright transition-colors ${data.labelColor}`}>
              {data.label}
            </span>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

const HtmlNode = ({ data }: any) => {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
};

const nodeTypes = { ingress: IngressNode, auth: AuthNode, ai: AINode, escrow: EscrowNode, telemetry: TelemetryNode };
const edgeTypes = { glowingEdge: GlowingEdge };

const initialNodes = [
  { id: '1', type: 'ingress', position: { x: 80, y: 140 }, data: { throughput: '24.8k req/s', latency: '2.1ms avg' } },
  { id: '2', type: 'auth', position: { x: 430, y: 130 }, data: { validity: '900s / Session' } },
  { id: '3', type: 'ai', position: { x: 810, y: 200 }, data: { fps: '100 FPS', fpsProgress: '78%' } },
  { id: '4', type: 'escrow', position: { x: 1200, y: 370 }, data: { status: 'SYNCHRONIZED', hash: '0x8F94...42a1' } },
  { id: '5', type: 'telemetry', position: { x: 1200, y: 120 }, data: { nodeName: 'Corridor 7 (Delhi-Jaipur)', storage: 'Air-Gapped Cold' } }
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

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="absolute inset-0 w-full h-full" style={{ background: '#0a0e17' }}>
      
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

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full h-[calc(100vh-4rem)] overflow-hidden select-none relative">

<div className="w-full bg-surface-container-low px-space-md py-space-xs flex items-center justify-between shrink-0 shadow-sm z-30">
<div className="flex items-center gap-space-md min-w-0">
<div className="flex items-center gap-1.5 px-space-xs py-0.5 bg-surface-container-lowest rounded">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">LIVE MESH</span>
</div>
<div className="flex items-center gap-2 truncate">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium tracking-tight truncate">
          CANVAS <span className="text-outline">//</span> ARCHITECTURE BLUEPRINT (MoRTH-NHAI-8941029) <span className="text-outline">//</span> <span className="text-primary font-semibold">TOPOLOGY: ZERO-TRUST EDGE MESH</span>
</span>
</div>
</div>

<div className="flex items-center gap-space-md">
<div className="hidden 2xl:flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
<div className="flex items-center gap-1 px-space-xs py-0.5 bg-surface-container rounded">
<span className="material-symbols-outlined text-[12px] text-outline">grid_4x4</span>
<span>SNAP: 16PX</span>
</div>
<div className="flex items-center gap-1 px-space-xs py-0.5 bg-surface-container rounded">
<span className="material-symbols-outlined text-[12px] text-secondary">verified_user</span>
<span className="text-secondary font-medium">0 HARD FAULTS</span>
</div>
<div className="flex items-center gap-1 px-space-xs py-0.5 bg-surface-container rounded text-outline">
<span className="material-symbols-outlined text-[12px] text-primary">history</span>
<span>LEDGER SYNC: 2s AGO</span>
</div>
</div>

<div className="flex items-center gap-1 bg-surface-container-lowest p-0.5 rounded shadow-sm">
<button className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors" id="btn-undo" title="Undo (⌘Z)">
<span className="material-symbols-outlined text-[15px]">undo</span>
</button>
<button className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors" id="btn-redo" title="Redo (⌘⇧Z)">
<span className="material-symbols-outlined text-[15px]">redo</span>
</button>
<div className="w-px h-4 bg-surface-container-highest my-auto"></div>
<button className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors" id="zoom-out">
<span className="material-symbols-outlined text-[15px]">remove</span>
</button>
<span className="font-data-mono text-data-mono text-on-surface px-1.5 min-w-[3rem] text-center font-medium" id="zoom-display">100%</span>
<button className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors" id="zoom-in">
<span className="material-symbols-outlined text-[15px]">add</span>
</button>
<button className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors" id="zoom-reset" title="Reset Viewport">
<span className="material-symbols-outlined text-[15px]">aspect_ratio</span>
</button>
<div className="w-px h-4 bg-surface-container-highest my-auto"></div>
<button className="flex items-center gap-1 px-space-xs h-7 text-primary hover:bg-surface-container rounded font-label-sm text-label-sm transition-colors" id="export-json">
<span className="material-symbols-outlined text-[14px]">file_download</span>
<span>SCHEMA</span>
</button>
</div>
</div>
</div>

<div className="relative flex-1 w-full h-full overflow-hidden bg-surface-container-lowest">

<div className="absolute inset-0 pointer-events-none opacity-40">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="dot-grid" patternUnits="userSpaceOnUse" width="24">
<circle className="fill-outline-variant" cx="12" cy="12" r="0.75"></circle>
<path className="text-outline-variant/30" d="M 0 12 L 2 12 M 12 0 L 12 2" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#dot-grid)" height="100%" width="100%"></rect>
</svg>
</div>


<div className="absolute inset-0 w-full h-full z-10">
  <FlowCanvas />
</div>
<div className="absolute left-space-md top-space-md bottom-20 w-64 bg-surface-container-low/95 backdrop-blur-md rounded shadow-2xl flex flex-col z-30 overflow-hidden">

<div className="p-space-sm bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[18px]">account_tree</span>
<span className="font-headline-sm text-[13px] text-on-surface font-semibold">Node Library</span>
</div>
<span className="px-1.5 py-0.5 bg-surface-container-lowest text-on-surface-variant font-label-sm text-[10px] rounded">18 AVAIL</span>
</div>

<div className="p-space-xs bg-surface-container-lowest">
<div className="relative w-full flex items-center">
<span className="material-symbols-outlined absolute left-2 text-outline text-[14px]">search</span>
<input className="w-full pl-7 pr-2 py-1 bg-surface-container text-on-surface placeholder:text-outline font-body-sm text-[11px] rounded focus:outline-none" placeholder="Filter blocks..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-space-xs flex flex-col gap-space-xs">

<div className="flex flex-col gap-1">
<span className="font-label-sm text-[10px] text-primary uppercase font-bold tracking-wider px-1">01 // Security &amp; Auth</span>
<div className="p-space-xs bg-surface-container hover:bg-surface-container-high rounded cursor-grab active:cursor-grabbing transition-colors flex items-center justify-between group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">fingerprint</span>
<div className="flex flex-col">
<span className="font-body-md text-[12px] text-on-surface font-medium leading-tight">DigiLocker KYC</span>
<span className="font-label-sm text-[9px] text-on-surface-variant">OAuth 2.0 PKCE</span>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary text-[16px]">drag_indicator</span>
</div>
<div className="p-space-xs bg-surface-container hover:bg-surface-container-high rounded cursor-grab active:cursor-grabbing transition-colors flex items-center justify-between group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">security</span>
<div className="flex flex-col">
<span className="font-body-md text-[12px] text-on-surface font-medium leading-tight">mTLS Mesh Sidecar</span>
<span className="font-label-sm text-[9px] text-on-surface-variant">Envoy Proxy Zero-Trust</span>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary text-[16px]">drag_indicator</span>
</div>
</div>

<div className="flex flex-col gap-1 pt-1">
<span className="font-label-sm text-[10px] text-primary uppercase font-bold tracking-wider px-1">02 // AI &amp; Edge Inference</span>
<div className="p-space-xs bg-surface-container hover:bg-surface-container-high rounded cursor-grab active:cursor-grabbing transition-colors flex items-center justify-between group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">memory</span>
<div className="flex flex-col">
<span className="font-body-md text-[12px] text-on-surface font-medium leading-tight">Jetson Orin Cluster</span>
<span className="font-label-sm text-[9px] text-on-surface-variant">TensorRT 8.x Accelerator</span>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary text-[16px]">drag_indicator</span>
</div>
<div className="p-space-xs bg-surface-container hover:bg-surface-container-high rounded cursor-grab active:cursor-grabbing transition-colors flex items-center justify-between group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">analytics</span>
<div className="flex flex-col">
<span className="font-body-md text-[12px] text-on-surface font-medium leading-tight">ANPR License OCR</span>
<span className="font-label-sm text-[9px] text-on-surface-variant">NHAI FastTag Sync</span>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary text-[16px]">drag_indicator</span>
</div>
</div>

<div className="flex flex-col gap-1 pt-1">
<span className="font-label-sm text-[10px] text-tertiary uppercase font-bold tracking-wider px-1">03 // Gov Settlement &amp; Telemetry</span>
<div className="p-space-xs bg-surface-container hover:bg-surface-container-high rounded cursor-grab active:cursor-grabbing transition-colors flex items-center justify-between group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">account_balance_wallet</span>
<div className="flex flex-col">
<span className="font-body-md text-[12px] text-on-surface font-medium leading-tight">PFMS Escrow Trigger</span>
<span className="font-label-sm text-[9px] text-on-surface-variant">CGA-DBT Ledger</span>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-tertiary text-[16px]">drag_indicator</span>
</div>
<div className="p-space-xs bg-surface-container hover:bg-surface-container-high rounded cursor-grab active:cursor-grabbing transition-colors flex items-center justify-between group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">hub</span>
<div className="flex flex-col">
<span className="font-body-md text-[12px] text-on-surface font-medium leading-tight">GeM 3.1 Contract Sink</span>
<span className="font-label-sm text-[9px] text-on-surface-variant">JSON-LD Dispatch</span>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary text-[16px]">drag_indicator</span>
</div>
</div>
</div>

<div className="p-space-xs bg-surface-container flex items-center justify-between">
<span className="font-label-sm text-[10px] text-on-surface-variant">Load NIC Standard Blueprint</span>
<button className="px-2 py-0.5 bg-surface-container-high text-primary hover:bg-surface-bright font-label-sm text-[10px] rounded transition-colors">
          Preset
        </button>
</div>
</div>

<div className="absolute right-space-md top-space-md bottom-20 w-80 bg-surface-container-low/95 backdrop-blur-md rounded shadow-2xl flex flex-col z-30 overflow-hidden">

<div className="p-space-sm bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[18px]">tune</span>
<span className="font-headline-sm text-[13px] text-on-surface font-semibold">Node Inspector</span>
</div>
<span className="px-1.5 py-0.5 bg-primary/10 text-primary font-data-mono text-[10px] font-bold rounded">#NODE-EDGE-03</span>
</div>

<div className="p-space-sm bg-surface-container-lowest flex items-center justify-between">
<div>
<h5 className="font-headline-sm text-[13px] text-on-surface font-semibold">AI Vision Model</h5>
<span className="font-label-sm text-[10px] text-secondary flex items-center gap-1 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            AEC-Q100 Spec Validated
          </span>
</div>
<span className="px-2 py-1 bg-surface-container text-on-surface font-label-sm text-[10px] font-semibold rounded">
          TIER-1 EDGE
        </span>
</div>

<div className="flex-1 overflow-y-auto p-space-sm flex flex-col gap-space-md">

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-[11px]">
<span className="text-on-surface-variant">Sovereign Cloud Fit:</span>
<span className="font-data-mono text-primary font-bold">94%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{ width: '94%' }}></div>
</div>
<span className="font-body-sm text-[10px] text-on-surface-variant">MeitY Cloud-First Directive 2024 compliant.</span>
</div>

<div className="flex flex-col gap-1 p-space-xs bg-surface-container rounded">
<div className="flex items-center justify-between font-label-sm text-[11px]">
<span className="text-on-surface-variant">Latency Budget:</span>
<span className="font-data-mono text-secondary font-semibold">18ms / 50ms (PASSED)</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ width: '36%' }}></div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Statutory Clearance</span>
<div className="flex items-center justify-between p-space-xs bg-surface-container rounded">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span className="font-body-sm text-[11px] text-on-surface font-medium">100% Data On-Soil (India)</span>
</div>
<span className="font-data-mono text-[9px] text-secondary">MeitY OK</span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface-container rounded">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span className="font-body-sm text-[11px] text-on-surface font-medium">EMD Exemption Verified</span>
</div>
<span className="font-data-mono text-[9px] text-secondary">DPIIT-84920</span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface-container rounded">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span className="font-body-sm text-[11px] text-on-surface font-medium">Hardware Cryptography</span>
</div>
<span className="font-data-mono text-[9px] text-secondary">TPM 2.0</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Node Configuration</span>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-[10px] text-on-surface-variant">MAX CONCURRENT INGRESS FPS</label>
<div className="flex items-center bg-surface-container-lowest rounded px-2 py-1">
<span className="font-data-mono text-[10px] text-outline mr-2">CFG//:</span>
<input className="w-full bg-transparent font-data-mono text-[11px] text-primary focus:outline-none" type="text" defaultValue="120_FPS_CAPPED"/>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-[10px] text-on-surface-variant">HASH AUDIT DESTINATION</label>
<div className="flex items-center bg-surface-container-lowest rounded px-2 py-1">
<span className="font-data-mono text-[10px] text-outline mr-2">LEDGER//:</span>
<input className="w-full bg-transparent font-data-mono text-[11px] text-on-surface focus:outline-none" type="text" defaultValue="NIC-BLOCKCHAIN-DELHI-04"/>
</div>
</div>
</div>
</div>

<div className="p-space-sm bg-surface-container flex items-center gap-2">
<button className="flex-1 py-1.5 bg-surface-container-high hover:bg-surface-bright text-on-surface rounded font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[15px]">code</span>
<span>View Manifest</span>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-error/10 text-error hover:bg-error hover:text-on-error rounded transition-colors" title="Disconnect Node">
<span className="material-symbols-outlined text-[16px]">link_off</span>
</button>
</div>
</div>

<div className="absolute right-space-md bottom-space-md w-52 h-32 bg-surface-container-low/90 backdrop-blur-md rounded shadow-xl z-20 overflow-hidden flex flex-col pointer-events-auto">
<div className="px-2 py-1 bg-surface-container flex items-center justify-between">
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase font-semibold">Mesh Minimap</span>
<span className="font-data-mono text-[9px] text-primary">5 NODES</span>
</div>
<div className="relative flex-1 bg-surface-container-lowest p-2">

<div className="absolute left-3 top-4 w-4 h-3 bg-secondary/80 rounded-[1px]"></div>
<div className="absolute left-10 top-3 w-4 h-3 bg-secondary/80 rounded-[1px]"></div>
<div className="absolute left-20 top-6 w-5 h-4 bg-primary rounded-[1px] shadow-[0_0_6px_rgba(6,182,212,0.8)]"></div>
<div className="absolute left-36 top-3 w-4 h-3 bg-primary/70 rounded-[1px]"></div>
<div className="absolute left-36 top-11 w-4 h-3 bg-tertiary/80 rounded-[1px]"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
<path d="M 18 18 L 44 17 L 84 28 L 148 18" fill="none" stroke="#4cd7f6" strokeWidth="1"></path>
<path d="M 94 30 L 148 48" fill="none" stroke="#ffb95f" strokeWidth="1"></path>
</svg>

<div className="absolute left-1 top-1 w-44 h-24 bg-primary/5 rounded pointer-events-none"></div>
</div>
</div>

<div className="absolute bottom-space-md left-1/2 -translate-x-1/2 z-40 flex items-center gap-space-sm bg-surface-container-low/95 backdrop-blur-xl p-1.5 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.6)]">

<div className="flex items-center gap-1 bg-surface-container rounded-full p-0.5">
<button className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-on-primary shadow-sm" title="Select Tool (V)">
<span className="material-symbols-outlined text-[16px]">near_me</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Hand / Pan Tool (H)">
<span className="material-symbols-outlined text-[16px]">pan_tool</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Connector Circuit Wire Tool (C)">
<span className="material-symbols-outlined text-[16px]">conversion_path</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Add Node Preset (A)">
<span className="material-symbols-outlined text-[16px]">add_box</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Comment Marker (M)">
<span className="material-symbols-outlined text-[16px]">chat_bubble_outline</span>
</button>
</div>
<div className="w-px h-6 bg-surface-container-highest my-auto"></div>

<button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded-full transition-colors font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">auto_fix_high</span>
<span>NIC-CERT Auto-Fix</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded-full transition-colors font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">picture_as_pdf</span>
<span>Export MoRTH PDF</span>
</button>
<div className="w-px h-6 bg-surface-container-highest my-auto"></div>

<button className="flex items-center gap-2 pl-3.5 pr-2.5 py-1.5 bg-primary text-on-primary hover:bg-primary-fixed rounded-full shadow-[0_0_16px_rgba(6,182,212,0.4)] transition-all transform active:scale-95" id="run-compliance-scan">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Run Compliance Scan</span>
<span className="px-1.5 py-0.5 bg-on-primary/20 text-on-primary font-label-sm text-[9px] font-bold rounded-full">⌘↵</span>
</button>
</div>
</div>

<div className="hidden absolute top-20 right-8 z-50 bg-surface-container-low/95 backdrop-blur-xl p-space-md rounded shadow-2xl flex flex-col gap-2 max-w-sm" id="compliance-toast">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">task_alt</span>
<span className="font-headline-sm text-[13px] text-on-surface font-bold">Topology Compliance Passed</span>
</div>
<button className="text-on-surface-variant hover:text-on-surface" id="close-toast">
<span className="material-symbols-outlined text-[16px]">close</span>
</button>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">All 5 edge nodes conform to MeitY Zero-Trust Guideline 2024 and MoRTH Highway Camera Stream standard 4.1.</p>
<div className="flex items-center justify-between pt-1">
<span className="font-data-mono text-[10px] text-primary">SHA-256: 9e0b...7f22</span>
<span className="font-label-sm text-[10px] text-secondary font-bold">DIGILOCKER SEALED</span>
</div>
</div>
</div>

    </>
  );
}
