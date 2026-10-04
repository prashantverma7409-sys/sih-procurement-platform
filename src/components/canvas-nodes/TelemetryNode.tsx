"use client";
import { Handle, Position } from '@xyflow/react';

export default function TelemetryNode({ data }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm min-w-[240px] overflow-hidden flex flex-col font-sans">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span className="text-[10px] font-bold text-amber-700 tracking-wider uppercase">{data.label || 'TELEMETRY SINK'}</span>
        </div>
      </div>
      
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">GeM Audit Ledger</span>
          <span className="material-symbols-outlined text-[16px] text-slate-400">database</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[10px] text-slate-500 font-medium">Hash Relay:</span>
          <span className="text-[11px] text-amber-700 font-mono font-bold">SHA-256</span>
        </div>
      </div>

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-amber-500 border-2 border-white" />
    </div>
  );
}
