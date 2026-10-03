"use client";
import React from 'react';
import Link from 'next/link';

export default function AuditVault() {
  const [selectedBid, setSelectedBid] = React.useState<number | null>(null);

  const mockBids = [
    {
      id: 1,
      name: "ANONYMOUS SQUAD #A-892",
      score: 98.4,
      cost: "₹72.50 Lakhs",
      time: "12 Weeks",
      tech: ["Rust", "TensorRT", "Zero-Trust TLS"],
      risk: "LOW"
    },
    {
      id: 2,
      name: "ANONYMOUS SQUAD #B-441",
      score: 91.2,
      cost: "₹70.00 Lakhs",
      time: "14 Weeks",
      tech: ["Python", "OpenCV", "AWS"],
      risk: "MEDIUM"
    },
    {
      id: 3,
      name: "ANONYMOUS SQUAD #C-109",
      score: 74.8,
      cost: "₹85.00 Lakhs",
      time: "20 Weeks",
      tech: ["Java", "Legacy CV", "Azure"],
      risk: "HIGH"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)] pb-space-lg">
      
      {/* Header */}
      <div className="w-full bg-surface-container-low px-space-md py-space-sm flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30 shrink-0">
        <div className="flex items-center gap-space-md flex-wrap">
          <div className="flex items-center gap-1.5 px-space-xs py-0.5 bg-error/10 rounded border border-error/30">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-error uppercase font-bold tracking-wider">RESTRICTED CVC AUDIT VAULT // DOUBLE-BLIND ACTIVE</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-space-sm py-1 bg-surface-container-lowest rounded flex items-center gap-2 border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-[14px]">shield_lock</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">BIAS FILTER:</span>
            <span className="font-data-mono text-data-mono text-primary font-semibold">100% ANONYMIZED</span>
          </div>
        </div>
      </div>

      <div className="p-space-lg w-full max-w-5xl mx-auto flex flex-col gap-space-md">
        
        <div className="flex flex-col gap-2">
          <h1 className="font-headline-md text-[24px] text-on-surface font-bold">Double-Blind Bid Evaluation</h1>
          <p className="text-on-surface-variant font-body-sm max-w-2xl">
            To prevent corruption, nepotism, and bias, all startup names, logos, and founder identities have been cryptographically hidden. You must select the winning bid based purely on technical merit, cost, and GovMesh trust scores.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          {mockBids.map((bid) => (
            <div 
              key={bid.id}
              onClick={() => setSelectedBid(bid.id)}
              className={`p-space-md rounded-lg border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                selectedBid === bid.id 
                  ? "bg-primary/5 border-primary shadow-[0_0_20px_rgba(6,182,212,0.15)]" 
                  : "bg-surface-container border-outline-variant/30 hover:bg-surface-container-high"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-data-mono text-[16px] font-bold text-on-surface">{bid.name}</span>
                  {bid.score > 95 && (
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold tracking-wider rounded border border-secondary/20">TOP TIER</span>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {bid.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-surface-container-lowest border border-outline-variant/30 rounded text-[10px] font-data-mono text-on-surface-variant">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-label-sm text-on-surface-variant uppercase">GovMesh Trust Score</span>
                  <span className={`font-data-mono text-[18px] font-bold ${bid.score > 90 ? 'text-primary' : 'text-error'}`}>{bid.score}/100</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-label-sm text-on-surface-variant uppercase">Escrow Bid</span>
                  <span className="font-data-mono text-[18px] font-bold text-on-surface">{bid.cost}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-label-sm text-on-surface-variant uppercase">Timeline</span>
                  <span className="font-data-mono text-[18px] font-bold text-on-surface">{bid.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedBid && (
          <div className="mt-8 p-6 bg-surface-container-low border border-primary/30 rounded-xl flex flex-col items-center justify-center text-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="material-symbols-outlined text-[48px] text-secondary">verified_user</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-headline-sm text-on-surface font-bold">Approve Anonymous Bidder</h2>
              <p className="text-on-surface-variant text-[13px] max-w-lg">
                By approving this bid, the system will permanently lock this decision on the blockchain. A cryptographic "Safe-Harbor" PDF report will be generated instantly to provide full bureaucratic cover against CVC/CAG audits.
              </p>
            </div>
            <button className="mt-2 px-8 py-3 bg-primary text-on-primary font-bold tracking-wider rounded shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform flex items-center gap-2">
              <span className="material-symbols-outlined">description</span>
              GENERATE SAFE-HARBOR AUDIT PDF
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
