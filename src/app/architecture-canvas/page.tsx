"use client";

import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  BackgroundVariant
} from '@xyflow/react';

import IngressNode from '../../components/canvas-nodes/IngressNode';
import AuthNode from '../../components/canvas-nodes/AuthNode';
import AINode from '../../components/canvas-nodes/AINode';
import EscrowNode from '../../components/canvas-nodes/EscrowNode';
import TelemetryNode from '../../components/canvas-nodes/TelemetryNode';

import '@xyflow/react/dist/style.css';

const LightEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, data, markerEnd }: any) => {
  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  
  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ ...style, strokeWidth: 2, stroke: '#3b82f6' }} className={data?.animateClass || 'animate-[dash_12s_linear_infinite]'} />
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
            <span className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 font-semibold text-[10px] rounded shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
              {data.label}
            </span>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

const nodeTypes = {
  ingress: IngressNode,
  auth: AuthNode,
  ai: AINode,
  escrow: EscrowNode,
  telemetry: TelemetryNode,
};

const edgeTypes = {
  glowing: LightEdge,
};

const initialNodes = [
  {
    id: 'ingress-1',
    type: 'ingress',
    position: { x: 50, y: 150 },
    data: { label: 'DATA INGRESS' },
  },
  {
    id: 'auth-1',
    type: 'auth',
    position: { x: 350, y: 120 },
    data: { label: 'SOVEREIGN AUTH 02' },
  },
  {
    id: 'ai-1',
    type: 'ai',
    position: { x: 700, y: 150 },
    data: { label: 'AI INFERENCE' },
  },
  {
    id: 'telemetry-1',
    type: 'telemetry',
    position: { x: 1050, y: 80 },
    data: { label: 'TELEMETRY SINK' },
  },
  {
    id: 'escrow-1',
    type: 'escrow',
    position: { x: 1050, y: 220 },
    data: { label: 'PROCUREMENT & SETTLEMENT' },
  },
];

const initialEdges = [
  { id: 'e1-2', source: 'ingress-1', target: 'auth-1', type: 'glowing', data: { label: 'AES-256 GCM' }, style: { strokeDasharray: '4 4' } },
  { id: 'e2-3', source: 'auth-1', target: 'ai-1', type: 'glowing', data: { label: 'mTLS 1.3 / e-KYC' }, style: { strokeDasharray: '4 4' } },
  { id: 'e3-4', source: 'ai-1', target: 'telemetry-1', type: 'glowing', data: { label: 'TELEMETRY HASH' }, style: { strokeDasharray: '4 4' } },
  { id: 'e3-5', source: 'ai-1', target: 'escrow-1', type: 'glowing', data: { label: 'PFMS TRIGGER' }, style: { strokeDasharray: '4 4' } },
];

export default function ArchitectureCanvasPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-4rem)] overflow-hidden select-none bg-slate-50 relative font-sans">
      
      {/* Top Action Bar */}
      <div className="w-full bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0 shadow-sm z-30">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 border border-blue-100 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] text-blue-700 uppercase font-bold tracking-wider">LIVE MESH</span>
          </div>
          <div className="flex items-center gap-2 truncate text-xs">
            <span className="text-slate-500 font-medium tracking-tight truncate">
              CANVAS <span className="text-slate-300">/</span> ARCHITECTURE BLUEPRINT (MoRTH-NHAI-8941029) <span className="text-slate-300">/</span> <span className="text-slate-800 font-bold">TOPOLOGY: ZERO-TRUST EDGE MESH</span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-xs">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-slate-500">save</span>
            Save Blueprint
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow-sm transition-colors">
            <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
            Deploy Sandbox
          </button>
        </div>
      </div>

      <div className="flex-1 flex relative">
        {/* Left Sidebar - Node Library */}
        <div className="w-64 bg-white border-r border-slate-200 flex flex-col z-10 shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-800 text-[20px]">account_tree</span>
              <span className="font-bold text-slate-800 text-sm">Node Library</span>
            </div>
            <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded">18 Available</span>
          </div>
          <div className="p-3 border-b border-slate-100">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-2.5 top-1.5 text-slate-400 text-[16px]">search</span>
              <input type="text" placeholder="Filter modules..." className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase mb-1">SECURITY & AUTHENTICATION</span>
              <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-300 hover:shadow-sm transition-all cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100"><span className="material-symbols-outlined text-[15px]">badge</span></div>
                  <div className="flex flex-col"><span className="text-xs font-bold text-slate-800">DigiLocker KYC</span><span className="text-[10px] text-slate-500">OAuth 2.0 PKCE</span></div>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-[14px]">drag_indicator</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-300 hover:shadow-sm transition-all cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100"><span className="material-symbols-outlined text-[15px]">security</span></div>
                  <div className="flex flex-col"><span className="text-xs font-bold text-slate-800">mTLS Mesh Sidecar</span><span className="text-[10px] text-slate-500">Zero-Trust Standard</span></div>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-[14px]">drag_indicator</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase mb-1">AI & EDGE INFERENCE</span>
              <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-300 hover:shadow-sm transition-all cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200"><span className="material-symbols-outlined text-[15px]">memory</span></div>
                  <div className="flex flex-col"><span className="text-xs font-bold text-slate-800">Edge Compute Cluster</span><span className="text-[10px] text-slate-500">On-Premises Inference</span></div>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-[14px]">drag_indicator</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-300 hover:shadow-sm transition-all cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200"><span className="material-symbols-outlined text-[15px]">center_focus_strong</span></div>
                  <div className="flex flex-col"><span className="text-xs font-bold text-slate-800">ANPR License OCR</span><span className="text-[10px] text-slate-500">FASTag Gateway Integration</span></div>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-[14px]">drag_indicator</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase mb-1">PROCUREMENT & SETTLEMENT</span>
              <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-300 hover:shadow-sm transition-all cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100"><span className="material-symbols-outlined text-[15px]">account_balance</span></div>
                  <div className="flex flex-col"><span className="text-xs font-bold text-slate-800">PFMS Escrow Trigger</span><span className="text-[10px] text-slate-500">Ministry Treasury Ledger</span></div>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-[14px]">drag_indicator</span>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Standard NIC Blueprint</span>
            <button className="text-blue-600 font-bold bg-white border border-slate-200 px-2 py-1 rounded shadow-sm hover:bg-slate-50">Load Preset</button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            className="bg-slate-50"
          >
            <Background color="#cbd5e1" variant={BackgroundVariant.Dots} gap={16} size={1} />
          </ReactFlow>
        </div>

        {/* Right Sidebar - Node Inspector */}
        <div className="w-72 bg-white border-l border-slate-200 flex flex-col z-10 shadow-[-2px_0_10px_rgba(0,0,0,0.02)]">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-800 text-[20px]">tune</span>
              <span className="font-bold text-slate-800 text-sm">Node Inspector</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-bold text-slate-900">AI Vision Model</h2>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 self-start px-1.5 py-0.5 rounded border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                AEC-Q100 Spec Validated
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-600 font-semibold text-xs">Sovereign Cloud Fit:</span>
              <p className="text-[10px] text-slate-500 leading-relaxed border-b border-slate-100 pb-3">Fully compliant with MeitY Cloud-First Directive 2024.</p>
              
              <div className="flex flex-col gap-1.5 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-600 font-semibold">Processing Latency:</span>
                  <span className="text-[11px] font-mono font-bold text-emerald-700">18ms <span className="text-slate-400">/ 50ms</span></span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '36%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase border-b border-slate-100 pb-2">STATUTORY CLEARANCE</span>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[16px] text-emerald-600 shrink-0">check_circle</span>
                <span className="text-xs text-slate-700 font-medium leading-tight">100% Data On-Soil (India)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[16px] text-emerald-600 shrink-0">check_circle</span>
                <span className="text-xs text-slate-700 font-medium leading-tight">EMD Exemption Verified</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[16px] text-emerald-600 shrink-0">check_circle</span>
                <span className="text-xs text-slate-700 font-medium leading-tight">STQC Level-2 HSM Security</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase border-b border-slate-100 pb-2">NODE CONFIGURATION</span>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-slate-600 font-semibold uppercase">Maximum Ingress Throughput</label>
                <input type="text" className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-500 transition-colors" defaultValue="120 FPS Stream Cap" />
              </div>
              
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-[10px] text-slate-600 font-semibold uppercase">Audit Logging Destination</label>
                <input type="text" className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800 font-mono font-medium focus:outline-none focus:border-blue-500 transition-colors" defaultValue="NIC-BLOCKCHAIN-DELHI-04" />
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-slate-200 bg-white">
            <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded shadow-md transition-colors flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">code</span>
              View Manifest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
