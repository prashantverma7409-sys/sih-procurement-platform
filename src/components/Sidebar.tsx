"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', icon: 'grid_view', label: 'Tender Dashboard' },
    { href: '/officer/post-tender', icon: 'rule', label: 'AI Tender Sanitizer' },
    { href: '/officer/audit-vault', icon: 'gavel', label: 'Double-Blind Evaluation' },
    { href: '/architecture-canvas', icon: 'account_tree', label: 'Technical Architecture' },
    { href: '/squads', icon: 'group_work', label: 'Startup Consortium' },
    { href: '/escrow', icon: 'account_balance', label: 'Escrow Payments' },
    { href: '/reputation-passport', icon: 'badge', label: 'Reputation Passport' },
    { href: '/sandbox', icon: 'biotech', label: 'Synthetic Sandbox' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-white z-50 flex flex-col justify-between border-r border-border">
      <div className="flex flex-col">
        <div className="p-5 flex flex-col gap-1.5 border-b border-border bg-slate-50/70">
          <div className="flex items-center gap-3">
            <img 
              alt="GovLaunch Logo" 
              className="h-8 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1Vb_rkpHeDlxKXn4l0nBIUE4ps4PuvWNYzOdLI0zZsuzcBr11LYodVoKkYIYFXSW10_4d31xv84UbquQ35lAIIGnOop_77MSCttmomi0zbRwlbgAorH70SYjcqK9wPcdwjvKDjEya6zzQzOa_x5VFppNuFPg4J-Q7k2DJ1jnKbTzRTZ8k8LN2udUDzPSpMFD7Z1VuhkKBA0oW5tpkaSZOEIKBIEZhQNI8ptLzyy6ioqj1bZgL65YeoY-w"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 leading-none">GovTech Open Procurement Portal</span>
              <span className="text-xs text-primary font-semibold tracking-wide uppercase mt-1">National Procurement Hub</span>
            </div>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-border rounded text-xs text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="font-medium">Government e-Marketplace Synced</span>
          </div>
        </div>
        
        <nav className="flex flex-col gap-1 p-3 mt-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2.5 px-3 py-2 rounded text-sm transition-colors ${
                  isActive 
                    ? 'bg-primary text-white font-medium shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className={`material-symbols-outlined text-[19px] ${isActive ? '' : 'text-slate-500'}`}>
                  {link.icon}
                </span>
                <span className={isActive ? '' : 'font-medium'}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
        
        <div className="mx-3 mt-2 p-3 bg-slate-50 border border-border rounded flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Clearance Level</span>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">DPIIT Certified</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Digital Signature</span>
            <span className="font-mono text-slate-700 font-medium">DSC-Active</span>
          </div>
        </div>
      </div>
      
      <div className="p-3 border-t border-border">
        <div className="p-3 bg-slate-50 border border-border rounded flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">National Registry Status</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span className="text-xs text-emerald-700 font-semibold">Operational</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 pt-1">MoRTH &amp; GeM Accredited</div>
        </div>
      </div>
    </aside>
  );
}

