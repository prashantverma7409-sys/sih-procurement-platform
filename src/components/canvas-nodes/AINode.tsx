
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
