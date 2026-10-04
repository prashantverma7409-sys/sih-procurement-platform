"use client";
import { Handle, Position } from '@xyflow/react';

export default function EscrowNode({ data }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm min-w-[240px] overflow-hidden flex flex-col font-sans">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-emerald-50/30">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span className="text-[10px] font-bold text-emerald-700 tracking-wider uppercase">{data.label || 'PFMS ESCROW'}</span>
        </div>
      </div>
      
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">Ministry Treasury</span>
          <span className="material-symbols-outlined text-[16px] text-emerald-600">account_balance</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[10px] text-slate-500 font-medium">Status:</span>
          <span className="text-[11px] text-emerald-700 font-mono font-bold">Locked</span>
        </div>
      </div>

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-emerald-500 border-2 border-white" />
    </div>
  );
}
