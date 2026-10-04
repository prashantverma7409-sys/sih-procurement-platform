"use client";
import { Handle, Position } from '@xyflow/react';

export default function AuthNode({ data }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm min-w-[280px] overflow-hidden flex flex-col font-sans">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">{data.label || 'SOVEREIGN AUTH 02'}</span>
        </div>
        <span className="material-symbols-outlined text-[14px] text-blue-600">verified_user</span>
      </div>
      
      <div className="p-3 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <span className="material-symbols-outlined text-[18px]">badge</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800">DigiLocker & Identity Vault</span>
            <span className="text-[11px] text-slate-500">OAuth2 PKCE + e-KYC 2.1</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold rounded">CERT-In Validated</span>
          <span className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-semibold rounded">DPIIT Approved</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-[10px] text-slate-500 font-medium">Security Standard:</span>
          <span className="text-xs text-slate-700 font-bold font-mono">STQC Level-2</span>
        </div>
      </div>

      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-blue-500 border-2 border-white" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-blue-500 border-2 border-white" />
    </div>
  );
}
