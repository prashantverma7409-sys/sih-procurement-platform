
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
