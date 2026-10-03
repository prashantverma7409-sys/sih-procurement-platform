# GovMesh Protocol

> An AI-assisted procurement platform that makes it easier for government departments to hire agile startups, and for startups to bid on government tenders without armies of lawyers.

Built for **Smart India Hackathon (SIH) – PS 136**.

**Live demo:** _add your Vercel URL here_

---

## The Problem

- Government tenders are 100–200 page legal PDFs. Startups rarely read, understand, or bid on them.
- Small startups often cannot meet a tender's full requirements alone (e.g., software *and* hardware).
- Vendor onboarding takes months, and payment delays make startups wary of government work.
- Officers fear bias and audit trouble when choosing newer, unknown vendors.

## The Solution

GovMesh sits on top of existing procurement infrastructure (such as GeM) and adds an AI layer that simplifies tenders, helps startups team up, lets them test safely, and gives officers an unbiased, auditable way to pick a winner.

---

## Features

| # | Feature | Route | Status |
|---|---------|-------|--------|
| 1 | **AI Tender Sanitizer** – upload a PDF/DOCX (or paste text) and get clean KPIs (budget, timeline, tech stack) as structured JSON | `/officer/post-tender` | **Live** (LlamaParse + Groq) |
| 2 | **Command Feed** – social-style feed of simplified tenders | `/` | UI prototype, data from `src/lib/mockFeedData.ts` |
| 3 | **Consortium Matchmaker (Squads)** – gap analysis against tender requirements and suggested partner startups | `/squads` | UI prototype (static demo data) |
| 4 | **Escrow Payments** – milestone-based payout dashboard and consortium agreement builder | `/escrow` | UI prototype (static demo data) |
| 5 | **Synthetic Sandbox** – generates fake but realistic government-style datasets (GPS telemetry, financials, etc.) so startups can test without real citizen data | `/sandbox` | **Live** (Groq) |
| 6 | **Architecture Canvas** – drag-and-drop blueprint of a startup's system with a node inspector | `/architecture-canvas` | Interactive UI (React Flow); compliance results are demo values |
| 7 | **Reputation Passport** – verification and trust-score profile for a startup | `/reputation-passport` | UI prototype (static demo data) |
| 8 | **Double-Blind Audit Vault** – officers evaluate anonymized bids, then download a Safe-Harbor PDF report with a SHA-256 integrity hash | `/officer/audit-vault` | **Live** PDF generation; bid data is demo data |

> **Honesty note:** This is a hackathon prototype. Items marked *UI prototype* illustrate the intended product and use demo data. There is no database, user authentication, live GeM integration, or real payment/escrow backend yet (see [Future Scope](docs/FUTURE_SCOPE.md)).

---

## Tech Stack

**Frontend**
- [Next.js](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- [React Flow (`@xyflow/react`)](https://reactflow.dev) for the architecture canvas

**AI / Data pipeline**
- [Groq](https://groq.com) API (`groq-sdk`) running `qwen-2.5-32b` for structured JSON extraction and synthetic data generation
- [LlamaParse (LlamaCloud)](https://cloud.llamaindex.ai) to turn PDF/DOCX tenders into clean Markdown before extraction

**Documents**
- [jsPDF](https://github.com/parallax/jsPDF) for the Safe-Harbor audit report; Web Crypto API for the SHA-256 hash

**Hosting & tooling**
- Vercel (deployment), GitHub (source control / CI trigger)

**Planned (installed, not yet wired up)**
- Supabase (`@supabase/supabase-js`) for PostgreSQL storage and authentication

---

## How the AI Sanitizer Works

```
Officer uploads PDF/DOCX
        │
        ▼
POST /api/sanitize-tender  (multipart/form-data)
        │
        ▼
LlamaParse  ── upload, poll until done ──► clean Markdown
        │
        ▼
Groq (qwen-2.5-32b, JSON mode) ──► { budget, timeline, tech stack, ... }
        │
        ▼
Rendered in the UI as simplified KPIs
```

Pasted text skips LlamaParse and goes straight to Groq.

**Known limitation:** the API route polls LlamaParse for up to ~30 seconds. Very large PDFs can exceed serverless time limits on Vercel's free tier. Use a small PDF for live demos.

---

## Getting Started

### Prerequisites
- Node.js 20+
- A [Groq API key](https://console.groq.com/keys)
- A [LlamaCloud API key](https://cloud.llamaindex.ai) (only needed for PDF/DOCX upload)

### Setup

```bash
git clone https://github.com/prashantverma7409-sys/sih-procurement-platform.git
cd sih-procurement-platform
npm install
```

Create a `.env.local` file in the project root:

```env
GROQ_API_KEY=your_groq_key_here
LLAMA_CLOUD_API_KEY=your_llamacloud_key_here
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Deploying to Vercel
Add `GROQ_API_KEY` and `LLAMA_CLOUD_API_KEY` under **Project → Settings → Environment Variables**, then redeploy. Never commit `.env.local`.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Command Feed
│   ├── officer/
│   │   ├── post-tender/          # AI Sanitizer
│   │   └── audit-vault/          # Double-blind evaluation + PDF
│   ├── squads/  escrow/  sandbox/
│   ├── reputation-passport/
│   ├── architecture-canvas/
│   └── api/
│       ├── sanitize-tender/      # LlamaParse + Groq
│       └── generate-sandbox-data/# Groq synthetic data
├── components/                   # Sidebar, canvas nodes, skeletons
└── lib/mockFeedData.ts           # Demo data for the feed
```

---

## Roadmap

See [docs/FUTURE_SCOPE.md](docs/FUTURE_SCOPE.md).
