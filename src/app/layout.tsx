import type { Metadata } from "next";
import "./globals.css";
import Sidebar from '@/components/Sidebar';


export const metadata: Metadata = {
  title: "Samarth GovTech Platform - SIH PS 136",
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
      <body className="bg-background font-sans text-slate-800 antialiased selection:bg-primary-100 selection:text-primary min-h-screen flex">
        
        <Sidebar />
        
        <div className="pl-72 w-full">
          <header className="fixed top-0 left-72 right-0 h-16 bg-white border-b border-border z-40 flex items-center justify-between px-6"><div className="flex items-center gap-4 flex-1 max-w-xl"><div className="relative w-full flex items-center"><span className="material-symbols-outlined absolute left-3 text-slate-400 text-[18px]">search</span><input className="w-full pl-9 pr-12 py-1.5 bg-slate-50 border border-border text-slate-900 placeholder:text-slate-400 text-sm rounded focus:outline-none focus:border-primary focus:bg-white transition-all" placeholder="Search GeM RFPs, startup directory, consortium bids (Press âŒ˜K)..." type="text"/><span className="absolute right-2.5 px-1.5 py-0.5 bg-slate-200 text-slate-600 text-[11px] font-mono rounded">âŒ˜K</span></div></div><div className="flex items-center gap-6"><div className="hidden xl:flex items-center gap-4 text-xs"><div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 border border-border rounded text-slate-700"><span className="w-2 h-2 rounded-full bg-emerald-600"></span><span>GeM API 3.1:</span><span className="font-semibold text-emerald-700">Connected</span></div><div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 border border-border rounded text-slate-700"><span className="material-symbols-outlined text-[15px] text-primary">account_balance</span><span>PFMS Escrow ID:</span><span className="font-mono text-slate-800 font-medium">PFMS/2026/DEL/8849</span></div></div><div className="flex items-center gap-2"><button className="flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white hover:bg-primary/90 rounded text-xs font-bold shadow-sm transition-all" type="button"><span className="material-symbols-outlined text-[16px]">add</span><span>Sanitize New Tender</span></button><button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border hover:bg-slate-50 text-slate-700 rounded text-xs font-semibold transition-colors" type="button"><span className="material-symbols-outlined text-[16px] text-slate-500">description</span><span>Audit Log</span></button><div className="relative p-1.5 text-slate-600 hover:text-slate-900 cursor-pointer rounded hover:bg-slate-100 transition-colors"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-4 h-4 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">3</span></div></div><div className="flex items-center gap-3 pl-2 border-l border-border"><div className="flex flex-col text-right"><span className="text-xs text-slate-900 font-semibold leading-tight">Aarav Sharma</span><span className="text-[11px] text-slate-500 leading-tight">Kavach Intelligence AI (DPIIT-84920)</span><div className="flex items-center justify-end gap-1 mt-0.5"><span className="material-symbols-outlined text-[13px] text-emerald-600">verified</span><span className="text-[11px] text-emerald-700 font-medium">DigiLocker Verified</span></div></div><div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">AS</div></div></div></header>
          
          <main className="relative pt-16 w-full px-8 min-h-screen bg-slate-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


