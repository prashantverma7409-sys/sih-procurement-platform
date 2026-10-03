import type { Metadata } from "next";
import "./globals.css";
import Sidebar from '@/components/Sidebar';


export const metadata: Metadata = {
  title: "GovLaunch // SIH PS 136",
  description: "Startup-friendly public procurement mechanism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body-sm text-body-sm antialiased selection:bg-primary-container/30 selection:text-primary min-h-screen flex">
        
        <Sidebar />
        
        <div className="pl-72 w-full">
          <header  className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl z-40 flex items-center justify-between px-gutter-desktop shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-md flex-1 max-w-xl"><div className="relative w-full flex items-center"><span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">search</span><input className="w-full pl-9 pr-12 py-1.5 bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded focus:outline-none focus:bg-surface-container transition-all" placeholder="Search sanitized tenders, GeM IDs, ministry RFPs, squad bounties... (Press ⌘K)" type="text"/><span className="absolute right-2.5 px-1.5 py-0.5 bg-surface-container font-label-sm text-label-sm text-on-surface-variant rounded">⌘K</span></div></div><div className="flex items-center gap-space-lg"><div className="hidden xl:flex items-center gap-space-md"><div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-low rounded"><span className="material-symbols-outlined text-[14px] text-primary">account_balance_wallet</span><span className="font-label-sm text-label-sm text-on-surface-variant">Escrow:</span><span className="font-data-mono text-data-mono text-primary font-medium">0x8F94...42a1</span></div></div><div className="flex items-center gap-space-xs"><button className="flex items-center gap-1 px-space-sm py-1.5 bg-surface-container hover:bg-surface-container-high rounded text-on-surface-variant hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[16px]">receipt_long</span><span className="font-label-sm text-label-sm uppercase">Audit Log</span></button><div className="relative p-1.5 text-on-surface-variant hover:text-on-surface cursor-pointer rounded hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-4 h-4 bg-error text-on-error font-label-sm text-[9px] font-bold rounded-full flex items-center justify-center leading-none">3</span></div></div><div className="flex items-center gap-space-sm pl-space-sm"><div className="flex flex-col text-right"><span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Aarav Sharma</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Kavach Intelligence AI (DPIIT-84920)</span><div className="flex items-center justify-end gap-1 mt-0.5"><span className="material-symbols-outlined text-[12px] text-secondary">verified</span><span className="font-label-sm text-label-sm text-secondary font-semibold">DigiLocker Verified</span></div></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header>
          
          <main className="relative pt-16 w-full px-gutter-desktop min-h-screen bg-surface">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
