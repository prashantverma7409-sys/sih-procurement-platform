"use client";
export default function SquadsPage() {
  return (
    <div className="flex flex-col w-full pb-10">
{/*  Breadcrumbs & System Status  */}
<div className="flex flex-col gap-2 py-5">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
<span className="text-primary font-semibold">Tenders</span>
<span className="text-slate-400">/</span>
<span>Active Bid Preparation</span>
<span className="text-slate-400">/</span>
<span className="text-slate-800 font-semibold">Startup Consortium Formation</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-border rounded text-xs text-slate-600">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span className="font-medium">DPIIT Startup Teaming Rule v4.2 Active</span>
</div>
</div>
{/*  Target Tender Overview Card  */}
<div className="bg-white border border-border p-5 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm">
<div className="flex flex-col gap-1.5 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 bg-primary text-white text-xs font-semibold rounded">
            Target RFP
          </span>
<span className="text-xs font-semibold text-slate-900 tracking-wide font-mono">
            MoRTH-NHAI-8941029
          </span>
<span className="text-slate-300">â€¢</span>
<span className="text-xs text-slate-700 font-semibold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Sanctioned Budget: â‚¹75.00 Lakhs</span>
</div>
<h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Edge-AI Traffic Modulator &amp; Emergency Corridor Preemption
        </h1>
<div className="flex items-center gap-3 text-slate-600 text-xs flex-wrap">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-emerald-600">verified_user</span>
            Lead Bidder: <strong className="text-slate-800 font-semibold">Kavach Intelligence AI (DPIIT-84920)</strong>
</span>
<span className="text-slate-300">â€¢</span>
<span className="text-emerald-700 font-medium flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Consortium Status: Open for Hardware Partner
          </span>
</div>
</div>
{/*  Action Cluster  */}
<div className="flex items-center gap-2.5 shrink-0">
<button className="px-3.5 py-2 bg-white border border-border hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[17px] text-slate-500">download</span>
          Tender Specifications
        </button>
<button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded transition-colors shadow-sm flex items-center gap-1.5">
<span className="material-symbols-outlined text-[17px]">autorenew</span>
          Re-Analyze Compliance
        </button>
</div>
</div>
</div>
{/*  Primary Section: Compliance Audit Scorecard  */}
<div className="bg-white border border-border p-6 rounded-lg shadow-sm flex flex-col gap-5">
{/*  Analysis Title and Scorecard Header  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border pb-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">assignment_turned_in</span>
<h2 className="text-lg font-bold text-slate-900">Tender Capability &amp; Compliance Audit Scorecard</h2>
</div>
<p className="text-xs text-slate-500 mt-0.5">Comparative matrix: MoRTH Mandatory Prerequisites vs. Verified Kavach Intelligence AI Verified Audit</p>
</div>
<div className="px-3 py-1.5 bg-slate-50 border border-border rounded flex items-center gap-2 self-start md:self-auto"><span className="text-xs text-slate-600 font-medium">DPIIT Verified Compliance Rating:</span><span className="text-sm font-bold text-primary font-mono">72.4%</span></div>
</div>
{/*  Critical Alert Box (Enterprise GovTech styled)  */}
<div className="p-4 bg-rose-50 border border-rose-200 rounded-lg flex items-start gap-3.5">
<div className="w-8 h-8 rounded bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">error_outline</span>
</div>
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="text-xs font-bold text-rose-700 uppercase tracking-wide">
            Mandatory Requirement Gap Identified
          </span>
<span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-xs font-semibold rounded">
            Disqualification Risk: High without Hardware Co-Bidder
          </span>
</div>
<p className="text-sm text-slate-800 font-medium leading-relaxed">
          Missing Tier-1 Hardware Bench &amp; Edge Embedded Hardware Fabrication Capabilities. Section 4.2.A mandates physical field-tested AEC-Q100 hardware nodes in current operational fleets.
        </p>
<div className="text-xs text-slate-600 mt-0.5 flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-primary">gavel</span>
<span>
            Under <strong className="text-slate-900">GeM Rule 149(v) &amp; DPIIT Startup Consortium Clause 4.1</strong>, partnering with a recognized hardware startup aggregates 100% eligibility with zero prior turnover penalty.
          </span>
</div>
</div>
</div>
{/*  3-Pillar Capability Progress Breakdown  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Pillar 1: Software/AI  */}
<div className="bg-slate-50 border border-border p-4 rounded-lg flex flex-col justify-between gap-4">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Pillar 1: Software &amp; AI</span>
<span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs rounded font-semibold">Verified</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="text-2xl font-bold text-slate-900 font-mono">98%</span>
<span className="text-xs text-emerald-700 font-medium">Exceeds Requirement</span>
</div>
<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full" style={{ width: '98%' }}></div>
</div>
</div>
<div className="flex flex-col gap-1.5 text-xs text-slate-600 border-t border-border pt-3">
<div className="flex items-center gap-1.5 text-slate-700 font-medium">
<span className="material-symbols-outlined text-[15px] text-emerald-600">check_circle</span>
<span>PyTorch 2.3 + TensorRT Jetson Stacks</span>
</div>
<div className="flex items-center gap-1.5 text-slate-700 font-medium">
<span className="material-symbols-outlined text-[15px] text-emerald-600">check_circle</span>
<span>Zero-Trust TLS 1.3 Telemetry Relay</span>
</div>
<div className="text-xs text-primary font-semibold mt-1">Kavach Intelligence AI (In-House Capability)</div>
</div>
</div>
{/*  Pillar 2: Regulatory & Security Clearance  */}
<div className="bg-slate-50 border border-border p-4 rounded-lg flex flex-col justify-between gap-4">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Pillar 2: Regulatory &amp; Trust</span>
<span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs rounded font-semibold">Verified</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="text-2xl font-bold text-slate-900 font-mono">100%</span>
<span className="text-xs text-emerald-700 font-medium">Fully Cleared</span>
</div>
<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full" style={{ width: '100%' }}></div>
</div>
</div>
<div className="flex flex-col gap-1.5 text-xs text-slate-600 border-t border-border pt-3">
<div className="flex items-center gap-1.5 text-slate-700 font-medium">
<span className="material-symbols-outlined text-[15px] text-emerald-600">check_circle</span>
<span>DPIIT Recognized Startup (Sec 80-IAC)</span>
</div>
<div className="flex items-center gap-1.5 text-slate-700 font-medium">
<span className="material-symbols-outlined text-[15px] text-emerald-600">check_circle</span>
<span>DigiLocker Entity Vault Verified</span>
</div>
<div className="text-xs text-emerald-700 font-semibold mt-1">Zero Financial EMD Exemption Granted</div>
</div>
</div>
{/*  Pillar 3: Hardware & Edge Systems (THE GAP)  */}
<div className="bg-rose-50/50 border border-rose-200 p-4 rounded-lg flex flex-col justify-between gap-4">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-rose-800 uppercase tracking-wider">Pillar 3: Edge Hardware Bench</span>
<span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-xs rounded font-semibold">Deficit</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="text-2xl font-bold text-rose-700 font-mono">28%</span>
<span className="text-xs text-rose-600 font-semibold">72% Gap Remaining</span>
</div>
<div className="w-full h-2 bg-rose-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-600 rounded-full" style={{ width: '28%' }}></div>
</div>
</div>
<div className="flex flex-col gap-1.5 text-xs text-slate-600 border-t border-rose-200 pt-3">
<div className="flex items-center gap-1.5 text-rose-700 font-medium">
<span className="material-symbols-outlined text-[15px]">cancel</span>
<span>Custom Jetson Carrier + IP67 Fabrication</span>
</div>
<div className="flex items-center gap-1.5 text-rose-700 font-medium">
<span className="material-symbols-outlined text-[15px]">cancel</span>
<span>AEC-Q100 Automotive Highway Tests</span>
</div>
<div className="text-xs text-primary font-semibold mt-1">Requires Qualified Hardware Co-Bidder</div>
</div>
</div>
</div>
</div>
{/*  Filter & Search Toolbar  */}
<div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white border border-border p-3 rounded-lg shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
<div className="relative w-full sm:w-72">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[18px]">search</span>
<input className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-border text-slate-900 placeholder:text-slate-400 text-xs rounded focus:outline-none focus:border-primary focus:bg-white transition-all" placeholder="Search verified vendor partners..." type="text"/>
</div>
{/*  Quick Filter Pills  */}
<div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
<button className="px-3 py-1 bg-primary text-white text-xs font-medium rounded shrink-0">
          Hardware Specialized (3)
        </button>
<button className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded shrink-0 transition-colors">
          MoRTH Tested
        </button>
<button className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded shrink-0 transition-colors">
          Escrow Verified
        </button>
<button className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded shrink-0 transition-colors">
          DPIIT Fast-Track
        </button>
</div>
</div>
{/*  Match Metric Badge  */}
<div className="flex items-center gap-2 self-start md:self-auto shrink-0 text-xs text-slate-600">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span>Registry Matches: <strong className="text-slate-900 font-semibold font-mono">3 Verified Startups</strong></span>
</div>
</div>
{/*  Partner Recommendation Cards (Clean High-Trust Vendor Profiles)  */}
<div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
{/*  Partner Card 1: VortexEdge Embedded  */}
<div className="bg-white border border-border rounded-lg p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-3">
{/*  Header Meta & Match Score  */}
<div className="flex items-start justify-between gap-2 border-b border-border pb-3">
<div>
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold rounded">Recommended</span>
<span className="text-xs text-slate-500 font-mono">DPIIT-67210</span>
</div>
<h3 className="text-base font-bold text-slate-900 leading-snug mt-1.5">
              VortexEdge Embedded Systems
            </h3>
<p className="text-xs text-slate-600 mt-0.5">Hardware Lead &amp; Highway Edge Nodes</p>
</div>
<div className="flex flex-col items-end shrink-0">
<div className="px-2 py-1 bg-emerald-50 border border-emerald-200 rounded flex items-center gap-1">
<span className="text-xs font-bold text-emerald-800 font-mono">96.4%</span>
</div>
<span className="text-[10px] text-emerald-700 font-medium mt-1">High Synergy</span>
</div>
</div>
{/*  High-Trust Visual Context  */}
<div className="w-full h-32 rounded bg-slate-100 overflow-hidden relative border border-slate-200">
<img alt="Industrial IP67 ruggedized edge computing unit on highway" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyxZO_QRD2gGJ9TlqFKFZt5lxg_sQpZ9GorlWuBUv6aq-ynPQuMrIFotV0JctnBMUdbrzDUlyEe6DfpRQBZ5v6F_Joxso2_CbitcvrTrS-d69LmerUKD6Lds_1gqFt23XVk2OV_Ka9024mJobk5FT2-MV3KmXVQnQFsyT8z2P2nGOzW1WnpMyxTs0-rq5bpD1YndJ06LwGf0G3Y9G04HIAfP-kGhUMF299Zi1FFWs7S_uKqEPbZnvR"/>
<div className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/95 backdrop-blur-sm rounded border border-border text-[11px] font-medium text-slate-800 flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[13px] text-emerald-600">verified</span>
<span>Make in India Class-1</span>
</div>
</div>
{/*  Core Capabilities  */}
<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Core Capabilities</span>
<p className="text-xs text-slate-700 leading-relaxed">
            Custom NVIDIA Jetson AGX Orin Carrier Boards, IP67 Ruggedized Thermal Telemetry, LoRaWAN / 4G Automotive Gateways, AEC-Q100 Bench Fabrication.
          </p>
</div>
{/*  Execution Track Record  */}
<div className="p-3 bg-slate-50 border border-border rounded text-xs flex flex-col gap-1.5">
<div className="flex items-center justify-between text-slate-600 font-medium">
<span>Past Government Deployments</span>
<span className="text-emerald-700 font-bold font-mono">400+ Units Deployed</span>
</div>
<div className="text-slate-800 font-medium">
            NHAI Corridor-7 Smart Sensors (â‚¹1.2 Cr Escrow Completed, 0 Breaches)
          </div>
<div className="flex items-center gap-1.5 text-primary text-[11px] font-medium mt-0.5">
<span className="material-symbols-outlined text-[14px]">task_alt</span>
<span>NIC-Approved Consortium Agreement Template Ready</span>
</div>
</div>
</div>
{/*  Action Panel  */}
<div className="flex flex-col gap-2 pt-1 border-t border-border">
<button className="w-full py-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded shadow-sm transition-colors flex items-center justify-center gap-1.5" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">handshake</span>
<span>Invite to Joint Venture</span>
</button>
<button className="w-full py-1.5 bg-white hover:bg-slate-50 border border-border text-slate-700 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-slate-500">analytics</span>
<span>View Verification Dossier</span>
</button>
</div>
</div>
{/*  Partner Card 2: ParamSens Micro-Electronics  */}
<div className="bg-white border border-border rounded-lg p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-3">
{/*  Header Meta & Match Score  */}
<div className="flex items-start justify-between gap-2 border-b border-border pb-3">
<div>
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-blue-50 border border-blue-200 text-primary text-[11px] font-semibold rounded">Verified Partner</span>
<span className="text-xs text-slate-500 font-mono">DPIIT-81044</span>
</div>
<h3 className="text-base font-bold text-slate-900 leading-snug mt-1.5">
              ParamSens Micro-Electronics
            </h3>
<p className="text-xs text-slate-600 mt-0.5">Sensor Fusion &amp; CAN Bus Integration</p>
</div>
<div className="flex flex-col items-end shrink-0">
<div className="px-2 py-1 bg-blue-50 border border-blue-200 rounded flex items-center gap-1">
<span className="text-xs font-bold text-primary font-mono">91.8%</span>
</div>
<span className="text-[10px] text-primary font-medium mt-1">High Synergy</span>
</div>
</div>
{/*  High-Trust Visual Context  */}
<div className="w-full h-32 rounded bg-slate-100 overflow-hidden relative border border-slate-200">
<img alt="Automotive radar sensor PCB prototype" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCuHdU4LAu8qSQtt-_NUBpgwwAao19R2VpsSwlXrHUMIApAww5YYD9KacDqcJCoRIfix2eDAeDWnr05z51wGPfBjfSEKzpvVXtdgD0Flo6DAGU0PweU_pzH1Y-kvVXreencCWOKnGd8Xc3TQUS_bYTPnxdiEgk5awKY_US0m1REKXd4UVEk_0QAFqDbyQ5NiStn4SxRUwpcnHmn_ila77752JA-MYKVu9z_X_wJbeoENZQoKkfebIZ"/>
<div className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/95 backdrop-blur-sm rounded border border-border text-[11px] font-medium text-slate-800 flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[13px] text-emerald-600">verified</span>
<span>iDEX Winner Disc-8</span>
</div>
</div>
{/*  Core Capabilities  */}
<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Core Capabilities</span>
<p className="text-xs text-slate-700 leading-relaxed">
            Automotive Radar Integration, AEC-Q100 Silicon PCB Prototyping, Real-time CAN Bus Telemetry, ISO 26262 ASIL-B Safety Verification.
          </p>
</div>
{/*  Execution Track Record  */}
<div className="p-3 bg-slate-50 border border-border rounded text-xs flex flex-col gap-1.5">
<div className="flex items-center justify-between text-slate-600 font-medium">
<span>Past Government Deployments</span>
<span className="text-emerald-700 font-bold font-mono">100% On-Time</span>
</div>
<div className="text-slate-800 font-medium">
            DRDO Tactical Sensor Payload; 100% on-time milestone payout in Bengaluru testbed.
          </div>
<div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-medium mt-0.5">
<span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
<span>ISO 26262 Certified Lab Audit Passed</span>
</div>
</div>
</div>
{/*  Action Panel  */}
<div className="flex flex-col gap-2 pt-1 border-t border-border">
<button className="w-full py-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded shadow-sm transition-colors flex items-center justify-center gap-1.5" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">handshake</span>
<span>Invite to Joint Venture</span>
</button>
<button className="w-full py-1.5 bg-white hover:bg-slate-50 border border-border text-slate-700 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-slate-500">analytics</span>
<span>View Verification Dossier</span>
</button>
</div>
</div>
{/*  Partner Card 3: AstraMesh Systems  */}
<div className="bg-white border border-border rounded-lg p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-3">
{/*  Header Meta & Match Score  */}
<div className="flex items-start justify-between gap-2 border-b border-border pb-3">
<div>
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-semibold rounded">Verified Partner</span>
<span className="text-xs text-slate-500 font-mono">DPIIT-55419</span>
</div>
<h3 className="text-base font-bold text-slate-900 leading-snug mt-1.5">
              AstraMesh Systems Technologies
            </h3>
<p className="text-xs text-slate-600 mt-0.5">Field Hardware &amp; Municipal Mesh</p>
</div>
<div className="flex flex-col items-end shrink-0">
<div className="px-2 py-1 bg-slate-100 border border-border rounded flex items-center gap-1">
<span className="text-xs font-bold text-slate-800 font-mono">88.2%</span>
</div>
<span className="text-[10px] text-slate-600 font-medium mt-1">Strong Synergy</span>
</div>
</div>
{/*  High-Trust Visual Context  */}
<div className="w-full h-32 rounded bg-slate-100 overflow-hidden relative border border-slate-200">
<img alt="Intelligent traffic gantry installation on urban highway" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDFSOlZTb-V_tcg3RKMhEGWyspBkaYW8azVqZVkBooS5dex2GikVoKImqF4MLV-MgKurS7IWiLfCACa5Fb-KIFpI-so1WQytSQYV9SFi6TxWtOsjnhbSy3v8s1wSytzDwAwDt7sl91uB4MFMZB7yupfdVrYBUpIyoMPSuDiaVh2auSzLZ8mE10-ZCCNzdV5IDSlcq24aHvBcrU-34sa_nICKwm6QXozKlJAoA8g9SsoRxp-IJLaJ8i"/>
<div className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/95 backdrop-blur-sm rounded border border-border text-[11px] font-medium text-slate-800 flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[13px] text-emerald-600">verified</span>
<span>NIC Certified Deployment</span>
</div>
</div>
{/*  Core Capabilities  */}
<div className="flex flex-col gap-1">
<span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Core Capabilities</span>
<p className="text-xs text-slate-700 leading-relaxed">
            Solar-Assisted Edge AI Traffic Poles, V2X Mesh Networking, COTS Hardware Ruggedization, Optical Fibre to Edge Gateway Junctions.
          </p>
</div>
{/*  Execution Track Record  */}
<div className="p-3 bg-slate-50 border border-border rounded text-xs flex flex-col gap-1.5">
<div className="flex items-center justify-between text-slate-600 font-medium">
<span>Past Government Deployments</span>
<span className="text-emerald-700 font-bold font-mono">60 Junctions Active</span>
</div>
<div className="text-slate-800 font-medium">
            Smart Cities Mission Tier-1 vendor; deployed Surat Smart Junction Matrix.
          </div>
<div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-medium mt-0.5">
<span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
<span>Municipal Corporation Completion Certificate Granted</span>
</div>
</div>
</div>
{/*  Action Panel  */}
<div className="flex flex-col gap-2 pt-1 border-t border-border">
<button className="w-full py-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded shadow-sm transition-colors flex items-center justify-center gap-1.5" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">handshake</span>
<span>Invite to Joint Venture</span>
</button>
<button className="w-full py-1.5 bg-white hover:bg-slate-50 border border-border text-slate-700 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-slate-500">analytics</span>
<span>View Verification Dossier</span>
</button>
</div>
</div>
</div>
{/*  Standard Enterprise Consortium Agreement Builder Section  */}
<div className="mt-8 bg-white border border-border p-6 rounded-lg shadow-sm flex flex-col gap-5">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-border pb-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">policy</span>
<h3 className="text-lg font-bold text-slate-900">
            Standard GeM Consortium Agreement Builder
          </h3>
</div>
<p className="text-xs text-slate-500 mt-0.5">Comparative matrix: MoRTH Mandatory Prerequisites vs. Verified Kavach Intelligence AI Verified Audit</p>
</div>
<div className="flex items-center gap-2"><span className="text-xs text-slate-600 font-medium">DPIIT Verified Compliance Rating:</span><span className="text-sm font-bold text-primary font-mono">72.4%</span></div>
</div>
{/*  Legal Terms & Escrow Distribution Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 bg-slate-50 border border-border rounded-lg flex flex-col gap-1.5"><span className="text-xs font-semibold text-primary uppercase tracking-wide">Milestone Budget Allocation</span><div className="text-xl font-bold text-slate-900 font-mono">60% Software / 40% Hardware</div><p className="text-xs text-slate-600 leading-relaxed mt-1">Milestone budget allocation cleared through RBI &amp; PFMS treasury escrow contract.</p></div>
<div className="p-4 bg-slate-50 border border-border rounded-lg flex flex-col gap-1.5">
<span className="text-xs font-semibold text-primary uppercase tracking-wide">Intellectual Property Ownership</span>
<div className="text-xl font-bold text-slate-900">Air-Gapped IP Rights</div>
<p className="text-xs text-slate-600 leading-relaxed mt-1">
          Kavach AI retains 100% core neural net weights; Partner startup retains proprietary PCB and firmware IP.
        </p>
</div>
<div className="p-4 bg-slate-50 border border-border rounded-lg flex flex-col gap-1.5">
<span className="text-xs font-semibold text-primary uppercase tracking-wide">Default &amp; Substitution Clause</span>
<div className="text-xl font-bold text-slate-900">14-Day Cure Period</div>
<p className="text-xs text-slate-600 leading-relaxed mt-1">
          If hardware testing fails initial benchmark, Ministry guidelines allow partner substitution within 14 days without bid cancelation.
        </p>
</div>
</div>
{/*  Active Draft Status & Execution Bar  */}
<div className="p-4 bg-slate-50 border border-border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs text-slate-700">
<span className="material-symbols-outlined text-primary text-[18px]">how_to_reg</span>
<span>Lead Bidder Ready: <strong className="text-slate-900">Kavach Intelligence AI (DSC Verified)</strong></span>
<span className="text-slate-300">â€¢</span>
<span className="text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Awaiting Hardware Co-Signer Selection</span>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="px-3.5 py-1.5 bg-white border border-border hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded transition-colors">
          Download Draft MoU (PDF)
        </button>
<button className="px-4 py-1.5 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded shadow-sm transition-colors">Finalize Statutory Joint Venture Agreement (Form 149-JV)</button>
</div>
</div>
</div>
{/*  Standard Enterprise Modal for Dispatching Consortium Agreement  */}
<div className="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4" id="inviteModal">
<div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-xl border border-border flex flex-col gap-4">
<div className="flex items-start justify-between border-b border-border pb-3">
<div className="flex flex-col">
<span className="text-xs text-primary uppercase font-bold tracking-wide">Official Consortium Invitation</span>
<h3 className="text-lg font-bold text-slate-900 mt-1" id="modalPartnerName">
            Partner Invitation
          </h3>
</div>
<button className="text-slate-400 hover:text-slate-600" onClick={() => {}}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="p-3.5 bg-slate-50 border border-border rounded-lg flex flex-col gap-2 text-xs">
<div className="flex items-center justify-between">
<span className="text-slate-500 font-medium">Compatibility Score</span>
<span className="text-emerald-700 font-bold font-mono" id="modalMatchScore">--</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-500 font-medium">Proposed Contract Tranche</span>
<span className="text-slate-800 font-medium font-mono" id="modalTranche">--</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-border">
<span className="text-slate-500 font-medium">Digital Signature Certificate</span>
<span className="text-slate-700 font-mono font-medium">Class-3 DSC Kavach Intelligence AI</span>
</div>
</div>
<p className="text-xs text-slate-600 leading-relaxed">
        Dispatching this invite transmits a verified GeM Consortium Agreement to the registered executive terminal of the selected startup. Upon acceptance within 48 hours, both entities will merge credentials into a unified tender submission dossier.
      </p>
<div className="flex items-center justify-end gap-2 pt-2 border-t border-border">
<button className="px-4 py-2 bg-white border border-border text-slate-700 hover:bg-slate-50 text-xs font-semibold rounded" onClick={() => {}}>
          Cancel
        </button>
<button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded shadow-sm flex items-center gap-1.5 transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">send</span>
<span>Sign &amp; Dispatch Agreement</span>
</button>
</div>
</div>
</div>

</div>
  );
}
