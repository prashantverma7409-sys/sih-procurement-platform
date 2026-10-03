# GovMesh – Future Scope

What exists today is a working prototype. This document describes what we plan to build next, in priority order. Nothing below is claimed as already implemented.

---

## Slide: "Where we are → Where we're going"

| Today (prototype) | Next (production) |
|---|---|
| Demo data in code | PostgreSQL database (Supabase) |
| No login | Role-based auth: Government officer vs Startup |
| Mock tender feed | Live tender sync from GeM / CPPP |
| Static trust score | Score computed from verified data |
| Demo escrow screens | Real milestone payment integration |

---

## Phase 1 – Data & Identity (0–3 months)
- **Database (Supabase / PostgreSQL):** persist tenders, startups, squads, bids, and audit reports.
- **Authentication & roles:** separate officer and startup experiences with role-based access control.
- **Startup verification:** DPIIT recognition check and DigiLocker-based identity verification (subject to API access approvals).
- **Persist AI output:** store sanitized tenders so the feed shows real, officer-published tenders instead of demo data.

## Phase 2 – Real Procurement Integration (3–6 months)
- **GeM / CPPP integration:** ingest published tenders automatically and push results back, subject to official API access and policy approval.
- **Reputation Passport with real signals:** compute the trust score from verified delivery history, milestone outcomes, and (with consent) public code activity such as GitHub.
- **Smarter matchmaking:** rank partner startups using stored capability profiles and past consortium outcomes, not static data.

## Phase 3 – Trust & Payments (6–12 months)
- **Escrow with a regulated partner:** milestone-based release through a bank or payment-aggregator escrow arrangement. Requires legal and financial compliance review.
- **Consortium agreement templates:** lawyer-reviewed MoU templates generated from squad inputs (revenue split, IP ownership, replacement clauses).
- **Audit trail hardening:** sign audit reports with a digital signature (e.g., DSC/eSign) and store hashes in an append-only log so reports are verifiable, not only tamper-evident.

## Phase 4 – Safety, Scale & Governance (12+ months)
- **Sandbox improvements:** schema-aware synthetic data tied to each tender's data model, with automated validation of a startup's submission against it.
- **Architecture compliance engine:** replace demo values with rule-based checks (data residency, encryption, hosting region) mapped to actual government guidelines.
- **Multilingual support:** Hindi and regional-language tender summaries.
- **Reliability:** background job queue for large PDF parsing, instead of in-request polling.
- **Security review:** penetration testing, audit logging, and data-protection compliance before any real deployment.

---

## Risks & Honest Constraints
- **Government API access** depends on approvals outside our control; the prototype demonstrates the value without it.
- **Payments and legal agreements** must involve licensed partners and legal review.
- **AI extraction can be wrong:** production use needs human review of extracted tender KPIs before publishing.
- **Trust score fairness:** the scoring method must be transparent and auditable to avoid creating a new source of bias.

---

## One-line closing for the slide
*"Today GovMesh proves the workflow; the roadmap turns it into a verified, integrated, auditable procurement layer."*
