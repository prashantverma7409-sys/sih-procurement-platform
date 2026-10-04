"use client";
import { Handle, Position } from '@xyflow/react';

export default function IngressNode({ data }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm min-w-[240px] overflow-hidden flex flex-col font-sans">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          <span className="text-[10px] font-bold text-slate-600 tracking-wider uppercase">{data.label || 'DATA INGRESS'}</span>
        </div>
      </div>
      
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">CCTV Matrix / 4K</span>
          <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold rounded uppercase">Live</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[10px] text-slate-500 font-medium">Bandwidth:</span>
          <span className="text-[11px] text-slate-700 font-mono font-bold">14 Gbps</span>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-blue-500 border-2 border-white" />
    </div>
  );
}
