
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
