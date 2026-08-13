// Portfolio — selected projects, real and live.
// Extensible by design: to add a project, add one object here.
// `caseStudy` fields are intentionally light scaffolding — extend them
// with real metrics/narrative as deeper write-ups are ready.

export const PROJECTS = [
  {
    slug: "calebpierre",
    name: "Caleb Pierre",
    url: "calebpierre.com",
    href: "https://calebpierre.com",
    category: "Systems engineering · Personal brand",
    tagline: "The site you're on right now.",
    summary:
      "A cinematic, narrative-driven homepage plus a full knowledge layer — a 40+ term glossary, three free interactive tools, and long-form field notes — built so it's worth visiting even if you never book a call.",
    stack: ["React", "Vite", "Astro-style static SEO pages", "GitHub Pages"],
    accent: "acid",
    caseStudy: {
      challenge:
        "Most freelance/agency sites are a brochure: a hero, a services grid, a contact form. None of that demonstrates systems thinking — the actual product being sold.",
      approach:
        "Built the homepage as a narrative that mirrors the actual engagement: the operational problem, the judgment framework for what to automate, live evidence of a system running end to end, and de-risking language before the ask. Layered a Glossary, three free diagnostic tools, and long-form essays on top — genuine utility, not lead-gen bait.",
      result:
        "A site that functions as both a sales instrument and a working demonstration of how the underlying systems are actually engineered.",
    },
  },
  {
    slug: "lastpeglose",
    name: "Last Peg Lose",
    url: "lastpeglose.com",
    href: "https://lastpeglose.com",
    category: "Real-time multiplayer game",
    tagline: "A real-time multiplayer 2D skirmish game.",
    summary:
      "Low-latency WebSocket architecture with guest and JWT authentication, a Drizzle ORM / Neon Postgres data layer, and a Railway deployment built to hold state under concurrent sessions.",
    stack: ["React", "Express", "WebSocket", "Drizzle ORM", "Neon Postgres", "Railway"],
    accent: "blue",
    caseStudy: {
      challenge:
        "A real-time multiplayer game needed to feel instant — at anything over ~150ms of lag, a skirmish game stops feeling like a skirmish and starts feeling like a queue.",
      approach:
        "Built a low-latency WebSocket architecture from the ground up, with guest and JWT authentication so players can jump in without friction, and a Postgres data layer (via Neon + Drizzle) sized for real concurrent game state.",
      result:
        "Live, multiplayer, and running — the state machine holds under real concurrent sessions, not just a demo lobby.",
    },
  },
  {
    slug: "latraderrrs",
    name: "Latraderrrs",
    url: "latraderrrs.com",
    href: "https://latraderrrs.com",
    category: "Services · Commerce platform",
    tagline: "An elite trading community & investment club platform.",
    summary:
      "Executive technical direction and platform architecture: tiered service packages (Diagnose / Calibrate / Execute), anime.js-driven motion, Gumroad monetization, and a lightweight GitHub Pages deployment.",
    stack: ["HTML", "anime.js", "Gumroad", "GitHub Pages"],
    accent: "purple",
    caseStudy: {
      challenge:
        "An elite trading community needed a platform that could sell tiered services without feeling like a generic membership site — the offer itself needed to read as a system.",
      approach:
        "Provided executive technical direction and platform architecture: staged the offer into Diagnose / Calibrate / Execute tiers, used anime.js motion to make the tiers feel alive rather than static, and wired Gumroad for monetization on a lightweight, fast GitHub Pages deployment.",
      result:
        "Live and converting members through a structured, staged offer rather than a flat sales page.",
    },
  },
  {
    slug: "creditcookbook",
    name: "Credit Cookbook",
    url: "creditcookbook.com",
    href: "https://creditcookbook.com",
    category: "Open-source fintech education",
    tagline: "Open-source credit education — free, versioned, inspectable.",
    summary:
      "Dispute letters, bureau response scripts, and credit-repair playbooks published as an open, Swiss-design static site — the repository itself is the product. Built on Astro, deployed to GitHub Pages, monetized through contextual affiliate partnerships and a newsletter, with zero login and zero client dashboards.",
    stack: ["Astro", "Swiss / International Typographic Style", "Buttondown", "GitHub Pages"],
    accent: "orange",
    caseStudy: {
      challenge:
        "Credit-repair content online is either paywalled, vague, or written to sell a $99/mo \"credit repair service\" rather than actually help. Trust is the entire product here — and closed, gated content erodes it.",
      approach:
        "Made openness the growth mechanism instead of the liability: the templates, scripts, and playbooks are published directly, versioned, and inspectable — the repo is the product. Design discipline borrowed from Swiss / International Typographic Style (strict grid, one grotesque typeface, hairline rules) to make dense legal and financial content easy to actually read and use.",
      result:
        "A 12-page Medical Debt content cluster live (FCRA/HIPAA/FDCPA rights, dispute and validation letter templates, the 2023 $500 threshold rule, bureau response scripts), with Collections, Late Payments, and Hard Inquiries clusters underway.",
    },
  },
];

export const ALL_STACK = [...new Set(PROJECTS.flatMap((p) => p.stack))].sort();
