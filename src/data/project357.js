// Campaign config — edit these three values to update the fundraiser.
// STRIPE_PAYMENT_LINK: paste a Stripe Payment Link URL from dashboard.stripe.com/payment-links
// (Payment Links need no backend — they're the right fit for a static site like this one).
export const CAMPAIGN = {
  name: "Project 357",
  goalCents: 2500000, // $25,000 pilot activation goal
  raisedCents: 0, // update manually, or wire to a Stripe balance/webhook later
  contributorCount: 0,
  deadline: "First 90-day activation window",
  stripePaymentLink: "", // e.g. "https://buy.stripe.com/xxxxxxxx"
};

export const ZONES = [
  {
    id: "lab",
    label: "A / Technology & Workflow Lab",
    short: "Tech & Workflow Lab",
    status: "Active",
    description:
      "Modular desks, a segmented secure network, a presentation display, a hardware test bench, and lockable equipment storage — reconfigured between instruction, client work, and demos.",
    capabilities: ["Segmented wired + wireless networks", "Device testing bench", "Flexible instruction layout"],
  },
  {
    id: "studio",
    label: "B / Media & Podcast Studio",
    short: "Media & Podcast Studio",
    status: "Active",
    description:
      "A two-to-four-person recording layout with controllable acoustic treatment, prewired camera positions, and safe lighting — built to reset fast between sessions.",
    capabilities: ["Multi-camera broadcast setup", "Acoustic treatment", "Rapid reset between bookings"],
  },
  {
    id: "commerce",
    label: "C / Product & E-Commerce Station",
    short: "Product & E-Commerce",
    status: "Active",
    description:
      "Neutral backdrops, a tabletop sweep, high-CRI product lighting, an overhead rig, and a motorized turntable for listing-ready product capture.",
    capabilities: ["High-CRI product lighting", "Overhead capture rig", "Motorized turntable staging"],
  },
  {
    id: "prototype",
    label: "D / Supervised Prototyping Station",
    short: "Prototyping Station",
    status: "Phase 2",
    description:
      "Enclosed, supervised 3D printing with lower-risk materials in v1. Any expansion into lasers, resin, or industrial fabrication requires a separate safety review, landlord approval, and insurance sign-off.",
    capabilities: ["Bounded 3D-printing envelope", "Supervised access only", "Safety RFC required to expand"],
  },
  {
    id: "quiet",
    label: "E / Quiet Operations Zone",
    short: "Quiet Operations Zone",
    status: "Active",
    description:
      "A private room for partner meetings, case-management conversations, intake, and focused engineering work — away from studio and lab traffic.",
    capabilities: ["Private partner meetings", "Secure records handling", "Confidential intake"],
  },
];

export const SERVICES = [
  {
    name: "Software, AI & Infosec Engineering",
    items: ["Cloud architecture & deployment", "AI automation pipelines", "Web application builds", "Vulnerability testing"],
  },
  {
    name: "Media & Content Studio",
    items: ["Video production", "Podcast engineering", "Product photography & staging", "Creative distribution pipelines"],
  },
];

export const PARTNERSHIPS = [
  { role: "CPT", detail: "Facility, technical curriculum, instructors, supervised projects, commercial demand." },
  { role: "ACE", detail: "Nonprofit prime, grant administration, community outreach, compliance, case coordination." },
  { role: "SBWIB / AJCC", detail: "Eligibility, referrals, OJT / work experience, employer services, CalJOBS reporting." },
  { role: "JCOD / SECTOR", detail: "Reentry-specific referrals, paid pathways, supportive-service alignment." },
];

export const PROGRAM_PILLARS = [
  { title: "Paid work-based learning", detail: "Participants are never unpaid production labor — compensation is a Charter invariant, not a perk." },
  { title: "Tangible portfolio deployment", detail: "Every cohort ships something real: a live product, a produced media asset, a client deliverable." },
  { title: "Direct pathways", detail: "To employment, contracting, or venture creation — tracked past program exit, not just at graduation." },
];

export const CAPITAL_STACK = [
  { source: "Client retainers & deposits", note: "Commercial revenue that sustains the hub day to day." },
  { source: "CDFI working capital", note: "Equipment financing tied to a use-of-funds plan, not speculative buildout." },
  { source: "Workforce contracts & reimbursements", note: "Paid work-experience reimbursements from public workforce partners." },
  { source: "Foundation & community grants", note: "Administered by eligible nonprofit partners, restricted to approved purpose." },
  { source: "Earned media & studio revenue", note: "Training, deployment, and membership revenue earned on-site." },
];

export const MILESTONES = [
  {
    phase: "Phase 0",
    title: "Legibility & Control",
    window: "Days 1–14",
    detail: "Entity, banking, lease, insurance, and partner roles verified — before anything is public.",
  },
  {
    phase: "Phase 1",
    title: "Contract Pre-Sales",
    window: "Days 15–30",
    detail: "Three deployment or media engagements pre-sold with deposits collected before buildout spend.",
  },
  {
    phase: "Phase 2",
    title: "Minimum Viable Hub",
    window: "Days 31–60",
    detail: "Network, lab, product station, and media capability activated; booking and safety procedures tested.",
  },
  {
    phase: "Phase 3",
    title: "First Reentry Cohort",
    window: "Days 61–90",
    detail: "6–10 adults enrolled through approved partners; outcomes and financials reconciled and reported.",
  },
];

export const CHARTER_RIGHTS = [
  "Clear program terms, costs, expectations, and outcomes.",
  "Safe, respectful, accessible instruction.",
  "Privacy and control over public use of identity or story.",
  "Compensation for productive client work.",
  "Accurate attribution for contributions.",
  "Exportable evidence of completed work and acquired skills.",
];
