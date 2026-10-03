
import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function AuthNode({ data }: any) {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div className="w-[250px] bg-surface-container-low rounded shadow-xl group hover:shadow-[0_0_24px_rgba(16,185,129,0.2)] transition-all z-20">
        <div className="px-space-sm py-1.5 bg-surface-container flex items-center justify-between rounded-t">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-[10px] text-secondary uppercase font-semibold">SOVEREIGN AUTH // 02</span>
          </div>
          <span className="material-symbols-outlined text-secondary text-[14px]">verified</span>
        </div>
        <div className="p-space-sm flex flex-col gap-1.5 relative">
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-container rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.6)]">
            <div className="w-1.5 h-1.5 bg-surface-container-lowest rounded-full"></div>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">key</span>
            <div>
              <h4 className="font-headline-sm text-[14px] text-on-surface font-semibold leading-tight">DigiLocker & Aadhaar Vault</h4>
              <p className="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5">OAuth2 PKCE + e-KYC 2.1</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mt-0.5">
            <span className="px-1.5 py-0.5 bg-secondary/10 text-secondary font-label-sm text-[9px] font-semibold rounded">CERT-IN SECURED</span>
            <span className="px-1.5 py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-[9px] rounded">DPIIT VALID</span>
          </div>
          <div className="mt-1 pt-1.5 bg-surface-container-lowest p-space-xs rounded flex items-center justify-between font-label-sm text-[10px]">
            <span className="text-on-surface-variant">HSM Validity:</span>
            <span className="font-data-mono text-on-surface">{data?.validity || '900s / Session'}</span>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </>
  );
}
