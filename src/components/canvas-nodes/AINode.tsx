"use client";
import { Handle, Position } from '@xyflow/react';

export default function AINode({ data }: any) {
  return (
    <div className="bg-white border-2 border-blue-500 rounded-lg shadow-md min-w-[280px] overflow-hidden flex flex-col font-sans relative">
      <div className="absolute -top-px -right-px px-2 py-0.5 bg-blue-600 text-white text-[9px] font-bold tracking-wider uppercase rounded-bl">Active Target</div>
      
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">{data.label || 'AI INFERENCE'}</span>
        </div>
      </div>
      
      <div className="p-3 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <span className="material-symbols-outlined text-[18px]">smart_toy</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800">AI Vision Model</span>
            <span className="text-[11px] text-slate-500">Jetson AGX Orin Cluster</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
           <span className="text-[10px] font-mono text-slate-600">YOLOv8x-Highway / TensorRT 8.6</span>
           <div className="flex items-center gap-1.5 mt-1">
             <span className="px-1.5 py-0.5 bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold rounded">AEC-Q100</span>
             <span className="text-[10px] font-semibold text-slate-500">32 TOPS INT8</span>
           </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-[10px] text-slate-500 font-medium">Concurrent Feed:</span>
          <span className="text-xs text-blue-700 font-bold font-mono">180 FPS <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block ml-1 animate-pulse"></span></span>
        </div>
      </div>

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-blue-500 border-2 border-white" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-blue-500 border-2 border-white" />
    </div>
  );
}
