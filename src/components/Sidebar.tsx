'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Command Feed', path: '/', icon: 'terminal', num: '01' },
    { name: 'AI Sanitizer', path: '/officer/post-tender', icon: 'psychology', num: '02' },
    { name: 'Architecture Canvas', path: '/architecture-canvas', icon: 'account_tree', num: '03' },
    { name: 'Startup Squads', path: '/squads', icon: 'groups_3', num: '04' },
    { name: 'Escrow Payments', path: '/escrow', icon: 'currency_rupee', num: '05' },
    { name: 'Synthetic Sandbox', path: '/sandbox', icon: 'science', num: '06' },
    { name: 'Reputation Passport', path: '/reputation-passport', icon: 'verified_user', num: '07' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col">
        <div className="p-space-lg flex flex-col gap-space-xs bg-surface-container">
          <div className="flex items-center gap-space-sm">
            <Image alt="GovLaunch v2.4 Emblem" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Vb_rkpHeDlxKXn4l0nBIUE4ps4PuvWNYzOdLI0zZsuzcBr11LYodVoKkYIYFXSW10_4d31xv84UbquQ35lAIIGnOop_77MSCttmomi0zbRwlbgAorH70SYjcqK9wPcdwjvKDjEya6zzQzOa_x5VFppNuFPg4J-Q7k2DJ1jnKbTzRTZ8k8LN2udUDzPSpMFD7Z1VuhkKBA0oW5tpkaSZOEIKBIEZhQNI8ptLzyy6ioqj1bZgL65YeoY-w" width={32} height={32} />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">GovLaunch v2.4</span>
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase mt-0.5">Sovereign Terminal</span>
            </div>
          </div>
          <div className="mt-space-xs inline-flex items-center gap-space-xs px-space-xs py-0.5 bg-surface-container-lowest rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium tracking-tight">NIC-DGFT SECURE PROTOCOL // SH-2024</span>
          </div>
        </div>
        
        <nav className="flex flex-col gap-1 p-space-sm mt-space-xs">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center justify-between px-space-md py-space-sm rounded transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                  <span className="font-body-md text-body-md font-medium">{link.name}</span>
                </div>
                <span className={`font-label-sm text-label-sm ${isActive ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                  {link.num}
                </span>
              </Link>
            );
          })}
        </nav>
        
        <div className="mx-space-sm mt-space-sm p-space-sm bg-surface-container-lowest rounded flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant">CLEARANCE</span>
            <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider">TIER-1 FAST-TRACK</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant">NIC-CA HASH</span>
            <span className="font-data-mono text-data-mono text-primary">#7F02-99C1</span>
          </div>
        </div>
      </div>
      
      <div className="p-space-sm">
        <div className="p-space-sm bg-surface-container rounded flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium uppercase tracking-wider">Mesh Node Status</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">ONLINE</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Latency</span>
            <span className="font-data-mono text-data-mono text-secondary font-medium">12ms</span>
          </div>
          <div className="flex flex-col pt-0.5">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Gateway Relay</span>
            <span className="font-label-sm text-label-sm text-on-surface font-medium truncate">CERT-In Secured Relay / Delhi-04</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
