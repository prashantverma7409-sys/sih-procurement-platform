"use client";
import React from 'react';
import Skeleton, { SkeletonText } from '@/components/Skeleton';
// from 'react';

export default function Page() {

  const [datasetType, setDatasetType] = React.useState('Live Traffic Telemetry (MoRTH NHAI-V2X)');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-sandbox-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ datasetType }),
      });
      const json = await res.json();
      setData(json.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (data) {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      alert("Copied to clipboard!");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">

<div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-48 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

<header className="flex flex-col gap-space-sm pb-space-lg">

<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant tracking-wider">
<span className="text-primary font-semibold">PORTAL</span>
<span>//</span>
<span>DEV ENVIRONMENT</span>
<span>//</span>
<span className="text-on-surface font-semibold">SYNTHETIC CIVIC DATA GENERATOR</span>
<span className="px-space-xs py-0.5 bg-surface-container rounded text-primary font-data-mono text-[9px] font-bold">SANDBOX v1.8</span>
</div>
<div className="flex items-center gap-2 px-space-sm py-1 bg-surface-container-low rounded shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">AIR-GAPPED SYNTHESIS ENGINE</span>
<span className="font-label-sm text-label-sm text-outline-variant font-mono">|</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">ISOLATION LEVEL: KERNEL-L2</span>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm">
<div className="p-1.5 bg-primary/10 rounded flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[26px]">security</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Synthetic Data Sandbox</h1>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5 mt-0.5">
<span className="material-symbols-outlined text-secondary text-[16px]">verified_user</span>
<span className="text-secondary font-semibold">DPDP Act 2023 Compliant</span>
<span className="text-outline-variant">•</span>
<span className="text-on-surface font-medium">Zero-PII Sovereign Guarantee</span>
<span className="text-outline-variant">•</span>
<span>Deterministic Pseudorandom Vector Stream</span>
</p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface-container-lowest p-2 rounded shadow-sm">
<div className="flex flex-col px-3 py-1.5 bg-surface-container-low rounded">
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase tracking-widest leading-none">Mock Engine</span>
<span className="font-label-md text-label-md text-primary font-semibold mt-1">Sovereign-v3</span>
</div>
<div className="flex flex-col px-3 py-1.5 bg-surface-container-low rounded">
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase tracking-widest leading-none">Seed Entropy</span>
<span className="font-data-mono text-data-mono text-on-surface mt-1 truncate">0x9f4a...e12d</span>
</div>
<div className="flex flex-col px-3 py-1.5 bg-surface-container-low rounded">
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase tracking-widest leading-none">Throughput</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-1">50,000 rec/s</span>
</div>
<div className="flex flex-col px-3 py-1.5 bg-surface-container-low rounded">
<span className="font-label-sm text-[9px] text-on-surface-variant uppercase tracking-widest leading-none">Kernel Latency</span>
<span className="font-data-mono text-data-mono text-secondary mt-1">4.12 ms</span>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pb-space-xl">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-low rounded p-space-md flex flex-col gap-space-md shadow-md">

<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">01 // Dataset Configuration</span>
</div>
<span className="font-label-sm text-[9px] px-2 py-0.5 rounded bg-surface-container font-mono text-on-surface-variant">SPEC: MoRTH-v4.2</span>
</div>

<div className="flex flex-col gap-space-md">

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Civic Domain Target</label>
<span className="font-label-sm text-[10px] text-secondary font-semibold">MoRTH Verified Schema</span>
</div>
<div className="relative">
<select className="w-full pl-3 pr-8 py-2 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded appearance-none focus:outline-none focus:bg-surface-container transition-colors cursor-pointer" id="datasetSelector" value={datasetType} onChange={(e) => setDatasetType(e.target.value)}>
<option  value="traffic">Live Traffic Telemetry (MoRTH NHAI-V2X)</option>
<option value="health">Digital Health Records (ABDM / HL7 FHIR)</option>
<option value="energy">Smart Power Grid &amp; Solar Inverters (DISCOM-SCADA)</option>
<option value="land">Bhoomi Spatial Deeds &amp; Cadastral Records</option>
<option value="water">Municipal SCADA Flow &amp; Water Quality Sensors</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
</div>
</div>

<div className="flex flex-col gap-1.5 p-space-sm bg-surface-container-lowest rounded">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Differential Privacy Model</span>
<span className="font-label-sm text-label-sm text-secondary font-bold font-mono">DP-ε = 0.5</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Laplace Perturbation active. Provably zero identity reconstruction risk under DPDP guidelines.</p>
<div className="flex items-center gap-2 mt-1">
<div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-secondary"></div>
</div>
<span className="font-data-mono text-[10px] text-secondary">MAX GUARANTEE</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Anomaly Injection Rate</label>
<span className="font-data-mono text-data-mono text-tertiary font-semibold" id="anomalyRateDisplay">5% Crash / Congestion</span>
</div>
<input className="w-full accent-primary h-1 bg-surface-container-highest rounded cursor-pointer" id="anomalySlider" max="25" min="0" type="range" defaultValue="5"/>
<div className="flex justify-between font-label-sm text-[10px] text-on-surface-variant">
<span>0% (Nominal Baseline)</span>
<span>12% (Edge Failures)</span>
<span>25% (Critical Stress)</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Serialization Format</label>
<div className="grid grid-cols-3 gap-1.5 p-1 bg-surface-container-lowest rounded">
<button className="py-1.5 rounded font-label-sm text-label-sm font-semibold uppercase bg-primary text-on-primary shadow-sm transition-all text-center" type="button">
                JSON / NDJSON
              </button>
<button className="py-1.5 rounded font-label-sm text-label-sm font-medium uppercase text-on-surface-variant hover:text-on-surface transition-all text-center" type="button">
                GeoJSON
              </button>
<button className="py-1.5 rounded font-label-sm text-label-sm font-medium uppercase text-on-surface-variant hover:text-on-surface transition-all text-center" type="button">
                Protobuf 3.0
              </button>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Geographic Envelope &amp; Node Cluster</label>
<div className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded">
<span className="material-symbols-outlined text-primary text-[18px]">satellite_alt</span>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Delhi-NCR Corridor 7 (Expressway NH-48)</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">100 AI Junctions • 4K Edge Node Cam Feeds</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[16px] cursor-pointer hover:text-primary">tune</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Record Burst Volume</label>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 px-3 bg-surface-container-lowest hover:bg-surface-container rounded font-label-sm text-label-sm font-medium text-on-surface-variant transition-colors text-center" type="button">
                100 Packets
              </button>
<button className="py-2 px-3 bg-surface-container-high rounded font-label-sm text-label-sm font-semibold text-primary shadow-sm text-center" type="button">
                500 Packets
              </button>
<button className="py-2 px-3 bg-surface-container-lowest hover:bg-surface-container rounded font-label-sm text-label-sm font-medium text-on-surface-variant transition-colors text-center" type="button">
                5,000 Stream
              </button>
</div>
</div>
</div>

<div className="flex flex-col gap-2 pt-space-xs">

<button className="w-full py-3 px-4 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider rounded font-bold hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(6,182,212,0.3)]" id="btnGenerate" type="button" onClick={handleGenerate} disabled={loading}>

<span className="material-symbols-outlined text-[20px]">bolt</span>
<span>GENERATE TEST PAYLOAD [⌘ + ↵]</span>

</button>
<span className="font-body-sm text-[11px] text-on-surface-variant text-center">
            Zero-leakage telemetry conforming to MoRTH Spec v4.2 under DGFT sandbox envelope.
          </span>
</div>

<div className="grid grid-cols-2 gap-2 pt-1">
<button className="px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface font-medium flex items-center justify-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">bookmark</span>
<span>Save Schema Preset</span>
</button>
<button className="px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface font-medium flex items-center justify-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-secondary">sensors</span>
<span>Stream WS (:8080)</span>
</button>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Sandbox Key Custody</span>
</div>
<span className="font-data-mono text-data-mono text-primary font-medium">HSM//DEL-04-SIGMA</span>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-sm">

<div className="bg-surface-container-lowest rounded shadow-xl flex flex-col overflow-hidden">

<div className="h-10 px-space-md bg-surface-container-low flex items-center justify-between select-none">

<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#ef4444] opacity-80 inline-block"></span>
<span className="w-3 h-3 rounded-full bg-tertiary opacity-80 inline-block"></span>
<span className="w-3 h-3 rounded-full bg-secondary opacity-80 inline-block"></span>
<span className="ml-2 font-data-mono text-[11px] text-on-surface-variant font-medium hidden sm:inline-block">
              sovereign-sandbox@mesh-node-04: ~/telemetry/traffic-morth.json
            </span>
</div>

<div className="flex items-center gap-space-xs">
<span className="hidden font-label-sm text-[10px] text-secondary bg-surface-container px-2 py-0.5 rounded font-mono animate-pulse" id="copyConfirmPill">
              COPIED [SHA-256 VALID]
            </span>
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" id="btnCopyTerminal" title="Copy payload" type="button" onClick={handleCopy}>
<span className="material-symbols-outlined text-[14px] text-primary">content_copy</span>
<span className="hidden md:inline">Copy</span>
</button>
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high rounded text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" id="btnDownloadJson" title="Export as File" type="button">
<span className="material-symbols-outlined text-[14px]">download</span>
<span className="hidden md:inline">Export</span>
</button>
<div className="flex bg-surface-container rounded p-0.5">
<button className="px-2 py-0.5 bg-surface-container-highest rounded font-label-sm text-[10px] text-on-surface font-semibold">Beautified</button>
<button className="px-2 py-0.5 font-label-sm text-[10px] text-on-surface-variant hover:text-on-surface">Raw</button>
</div>
</div>
</div>

<div className="px-space-md py-1.5 bg-surface-container flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-sm">
<span className="font-data-mono text-[11px] text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              BUFFER STREAM ACTIVE
            </span>
<span className="text-outline-variant">|</span>
<span>INGRESS PORT: <strong>49152</strong></span>
<span className="text-outline-variant">|</span>
<span>NIC-CERT HASH: <span className="font-data-mono text-primary">#e3b0c442...</span></span>
</div>
<span className="font-data-mono text-[10px] text-tertiary">DP-PII FILTER: 100% REJECTION RATE</span>
</div>

<div className="relative p-space-md bg-surface-container-lowest max-h-[580px] overflow-y-auto">
<pre className="font-data-mono text-data-mono text-on-surface leading-relaxed" id="jsonPayloadDisplay">{loading ? (
          <div className="flex flex-col gap-3 py-2">
            <Skeleton className="h-4 w-[40%]" />
            <SkeletonText lines={12} />
          </div>
        ) : (data ? JSON.stringify(data, null, 2) : "// Awaiting generation command...")}</pre>
</div>

<div className="px-space-md py-2 bg-surface-container-low flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-[11px] select-none">
<div className="flex items-center gap-2">
<span className="text-primary font-semibold font-mono">BUFFER: 500 RECORDS COMPILED</span>
<span className="text-outline-variant">•</span>
<span>SIZE: <strong>184.2 KB</strong></span>
<span className="text-outline-variant">•</span>
<span className="text-secondary font-medium">ZERO PII DETECTED (NIC-CERT VERIFIED)</span>
</div>
<div className="flex items-center gap-space-sm font-data-mono">
<span className="text-on-surface-variant">STREAM:</span>
<span className="text-secondary font-semibold">IDLE_READY</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
<div className="p-space-sm bg-surface-container-low rounded flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">rule</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">JSON-Schema v7</span>
<span className="font-label-sm text-[10px] text-secondary font-mono">100% PASS (0 ERRORS)</span>
</div>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">PII Sanitization</span>
<span className="font-label-sm text-[10px] text-secondary font-mono">CLEARED (0 LEAKS)</span>
</div>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-[18px]">dataset</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">GeM Sandbox ID</span>
<span className="font-label-sm text-[10px] text-tertiary font-mono">#GEM-SBX-8821-DEL</span>
</div>
</div>
</div>
</div>
</div>


</div>
    </>
  );
}
