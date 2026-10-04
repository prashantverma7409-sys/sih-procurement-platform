export interface SquadStatus {
  text: string;
  highlight: string;
  extra?: string;
  type?: 'recruiting' | 'forming' | 'cleared';
  seats?: { filled: number; total: number; k1: string; r9: string; unknown: string; };
  icon?: string;
}

export interface TenderCard {
  id: string;
  priorityMission: string;
  themeColor: 'primary' | 'secondary' | 'tertiary'; // Tailwind colors
  department: string;
  rfpId: string;
  title: string;
  icon: string;
  aiSanitizerTitle: string;
  aiSanitizerDesc: string;
  escrowQuantum: string;
  escrowSubtext: string;
  sprintVelocityLabel: string;
  sprintVelocity: string;
  sprintSubtext: string;
  securityDepLabel: string;
  securityDepStatus: string;
  securityDepSubtext: string;
  tags: { text: string; color: string }[];
  squadStatus: SquadStatus;
  viewDiffIcon: string;
  viewDiffText: string;
  applyIcon: string;
}

export const mockFeedData: TenderCard[] = [
  {
    id: "1",
    priorityMission: "PRIORITY MISSION  - FAST-TRACK",
    themeColor: "primary",
    department: "MoRTH  - NHAI Cyber-Grid",
    rfpId: "GEM/2024/B/8941029",
    title: "Edge-AI Traffic Modulator & Emergency Corridor Preemption",
    icon: "auto_awesome",
    aiSanitizerTitle: "AI Sanitizer Telemetry Digest",
    aiSanitizerDesc: "Original 142 pages of redundant compliance distilled into 4 microservice milestones. Statutory liabilities isolated. EMD barrier liquidated.",
    escrowQuantum: "₹75.00 L",
    escrowSubtext: "100% Guaranteed",
    sprintVelocityLabel: "Project Duration",
    sprintVelocity: "14 Weeks",
    sprintSubtext: "Bi-Weekly Payouts",
    securityDepLabel: "Security Dep.",
    securityDepStatus: "WAIVED",
    securityDepSubtext: "Sec 80-IAC",
    tags: [
      { text: "Rust / WASM", color: "primary" },
      { text: "NVIDIA Jetson AGX", color: "on-surface-variant" },
      { text: "MQTT / LoRaWAN", color: "on-surface-variant" },
      { text: "Zero-Trust TLS 1.3", color: "secondary" }
    ],
    squadStatus: {
      type: "forming",
      text: "Squad Forming: ",
      highlight: "2/3 Seats Filled",
      extra: "Need: Embedded Rust Core Dev",
      seats: { filled: 2, total: 3, k1: "K1", r9: "R9", unknown: "?" }
    },
    viewDiffIcon: "visibility",
    viewDiffText: "View AI Blueprint",
    applyIcon: "group_add"
  },
  {
    id: "2",
    priorityMission: "DEFENCE iDEX  - MAKE-II",
    themeColor: "tertiary",
    department: "Ministry of Defence  - iDEX",
    rfpId: "GEM/2024/B/9012441",
    title: "Autonomous Swarm EW De-Confliction & Cryptographic Jam-Resistant Mesh",
    icon: "security",
    aiSanitizerTitle: "Kavach Defence Exemption",
    aiSanitizerDesc: "Pre-cleared under Category Make-II. 100% IP ownership retained by participating tech consortium. Military validation node attached.",
    escrowQuantum: "₹1.50 Cr",
    escrowSubtext: "iDEX Tranche 1 Ready",
    sprintVelocityLabel: "Timeline",
    sprintVelocity: "24 Weeks",
    sprintSubtext: "Live Field Trials",
    securityDepLabel: "Security Dep.",
    securityDepStatus: "WAIVED",
    securityDepSubtext: "Make-II Sandbox",
    tags: [
      { text: "Software Defined Radio", color: "primary" },
      { text: "FPGA Synthesis", color: "on-surface-variant" },
      { text: "Post-Quantum Lattice", color: "secondary" },
      { text: "MIL-STD-810H", color: "on-surface-variant" }
    ],
    squadStatus: {
      type: "recruiting",
      text: "Eligibility: ",
      highlight: "Solo Bid or Squad Eligible",
      extra: "18 Competitor Telemetries Active",
    },
    viewDiffIcon: "difference",
    viewDiffText: "View Architecture Diff",
    applyIcon: "rocket_launch"
  },
  {
    id: "3",
    priorityMission: "NHA  - HEALTHCARE SANDBOX",
    themeColor: "secondary",
    department: "National Health Authority  - ABDM",
    rfpId: "GEM/2024/B/7710928",
    title: "Zero-Knowledge Federated Health Data Synthesizer for EHR Analytics",
    icon: "enhanced_encryption",
    aiSanitizerTitle: "Privacy Engine Specification",
    aiSanitizerDesc: "Synthesize anonymized longitudinal clinical pathways across 500M ABHA accounts without breaching patient provenance.",
    escrowQuantum: "₹45.00 L",
    escrowSubtext: "Multisig Secured",
    sprintVelocityLabel: "Project Duration",
    sprintVelocity: "12 Weeks",
    sprintSubtext: "Monthly Escrow",
    securityDepLabel: "Security Dep.",
    securityDepStatus: "WAIVED",
    securityDepSubtext: "Tier-1 Sandbox",
    tags: [
      { text: "ZK-SNARKs", color: "secondary" },
      { text: "FHIR Standards", color: "on-surface-variant" },
      { text: "Confidential Computing", color: "primary" },
      { text: "PyTorch / CUDA", color: "on-surface-variant" }
    ],
    squadStatus: {
      type: "recruiting",
      text: "Squad Status: ",
      highlight: "Open Recruiting",
      extra: "Seeking: Cryptographer + HIPAA/ABDM Auditor",
    },
    viewDiffIcon: "code_blocks",
    viewDiffText: "View Architecture Diff",
    applyIcon: "group_add"
  },
  {
    id: "4",
    priorityMission: "MEITY  - BHASHINI MISSION",
    themeColor: "primary",
    department: "MeitY  - National Language Engine",
    rfpId: "GEM/2024/B/6638102",
    title: "Indic LLM Quantization & Low-Latency Voice Inference for Gram Panchayats",
    icon: "translate",
    aiSanitizerTitle: "Inference Target Architecture",
    aiSanitizerDesc: "Sub-200ms roundtrip ASR+LLM+TTS deployment on commodity edge CPU units across 250,000 decentralized Panchayat terminals.",
    escrowQuantum: "₹90.00 L",
    escrowSubtext: "GeM Escrow Locked",
    sprintVelocityLabel: "Timeline",
    sprintVelocity: "16 Weeks",
    sprintSubtext: "Milestone Releases",
    securityDepLabel: "Security Dep.",
    securityDepStatus: "WAIVED",
    securityDepSubtext: "Startup India Tier",
    tags: [
      { text: "vLLM Inference", color: "primary" },
      { text: "GGML / GGUF", color: "on-surface-variant" },
      { text: "22 Scheduled Languages", color: "secondary" },
      { text: "Triton Engine", color: "on-surface-variant" }
    ],
    squadStatus: {
      type: "recruiting",
      text: "Formation: ",
      highlight: "'IndicVoice Consortium' (3 Startups)",
      extra: "Consensus: 85%",
    },
    viewDiffIcon: "data_object",
    viewDiffText: "View Architecture Diff",
    applyIcon: "group_add"
  },
  {
    id: "5",
    priorityMission: "JAL SHAKTI  - NWIC",
    themeColor: "primary",
    department: "Ministry of Jal Shakti  - NWIC",
    rfpId: "GEM/2024/B/5519403",
    title: "Satellite Synthetic Aperture Radar (SAR) Aquifer Depletion Predictor",
    icon: "water_drop",
    aiSanitizerTitle: "Groundwater Telemetry Vector",
    aiSanitizerDesc: "Process interferometric Sentinel-1 phase differentials into automated block-level agricultural recharge warnings with 5m spatial accuracy.",
    escrowQuantum: "₹60.00 L",
    escrowSubtext: "Milestone Backed",
    sprintVelocityLabel: "Project Duration",
    sprintVelocity: "18 Weeks",
    sprintSubtext: "Bi-weekly Sync",
    securityDepLabel: "Security Dep.",
    securityDepStatus: "WAIVED",
    securityDepSubtext: "Fast-Track 100%",
    tags: [
      { text: "Sentinel-1 SAR API", color: "primary" },
      { text: "GeoPandas", color: "on-surface-variant" },
      { text: "Temporal Graph Nets", color: "secondary" },
      { text: "Docker / K8s", color: "on-surface-variant" }
    ],
    squadStatus: {
      type: "recruiting",
      text: "Squad Status: ",
      highlight: "1/2 Seats",
      extra: "Seeking: Satellite Remote Sensing Specialist",
    },
    viewDiffIcon: "satellite",
    viewDiffText: "View Architecture Diff",
    applyIcon: "group_add"
  },
  {
    id: "6",
    priorityMission: "ISRO  - IN-SPACe MISSION",
    themeColor: "secondary",
    department: "ISRO  - IN-SPACe Gateway",
    rfpId: "GEM/2024/B/4491208",
    title: "Cryogenic Propellant Telemetry Micro-Sensors with Rad-Hardened Telemetry",
    icon: "rocket",
    aiSanitizerTitle: "Deep Space Spec Matrix",
    aiSanitizerDesc: "Extreme low-temperature pressure transduction (-253°C) with single-event-upset mitigation and zero-leakage MEMS packaging.",
    escrowQuantum: "₹2.20 Cr",
    escrowSubtext: "Sovereign Grant",
    sprintVelocityLabel: "Timeline",
    sprintVelocity: "32 Weeks",
    sprintSubtext: "Lab Validation",
    securityDepLabel: "Security Dep.",
    securityDepStatus: "WAIVED",
    securityDepSubtext: "Spacetech Special",
    tags: [
      { text: "Silicon-on-Insulator", color: "primary" },
      { text: "CAN-Bus Aero", color: "on-surface-variant" },
      { text: "Telemetry Decoders", color: "secondary" },
      { text: "Custom ASIC", color: "on-surface-variant" }
    ],
    squadStatus: {
      type: "cleared",
      text: "Vetting: ",
      highlight: "Pre-Cleared (Aarav Sharma Pre-Approved)",
      extra: "TIER-1 CLEARANCE",
      icon: "lock"
    },
    viewDiffIcon: "memory",
    viewDiffText: "View Architecture Diff",
    applyIcon: "rocket_launch"
  }
];

