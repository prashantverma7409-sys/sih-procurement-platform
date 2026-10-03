
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
