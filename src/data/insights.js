// Insights — long-form knowledge, same tone as the rest of the site.
// Each essay should stand alone: valuable to read even if you never book anything.

export const INSIGHTS = [
  {
    slug: "why-automation-projects-fail",
    tag: "Operations",
    title: "Why most automation projects fail before they start",
    dek: "Not because the AI didn't work. Because nobody mapped the operation first.",
    body: [
      "The failure pattern is almost always the same. A team picks a tool — an AI agent platform, a workflow builder, a chatbot vendor — before anyone has written down what the current process actually is. Not the SOP. What actually happens, including the parts nobody wants to admit: the spreadsheet nobody officially owns, the Slack thread that functions as an approval system, the one person everyone routes exceptions to.",
      "You cannot automate a process you haven't mapped. This sounds obvious and gets skipped constantly, because mapping is slower and less exciting than deploying something. But every dollar spent building on top of an unmapped process is a dollar spent guessing.",
      "Mapping means walking the actual path a request takes, end to end, and writing down every handoff, every wait, and every place a human makes a judgment call that isn't written anywhere. It usually takes a few days. It usually reveals that the real bottleneck isn't where anyone assumed it was.",
      "Once you have the map, the automation conversation becomes concrete instead of aspirational. You're not asking \"should we use AI here?\" — you're asking \"this specific step, right here, costs us four hours a week and produces errors 8% of the time; what's the cheapest reliable way to fix it?\" Sometimes the answer is a model. Often it's a spreadsheet becoming a real database, or two systems finally talking to each other through an API instead of a person.",
      "The projects that fail spent their first dollar on a tool. The ones that work spent their first day with a notebook, watching the work actually happen.",
    ],
  },
  {
    slug: "demo-vs-deployed",
    tag: "Evaluation",
    title: "The difference between a demo and a deployed system",
    dek: "A demo proves something can work once. Production proves it works on Tuesday, at 4pm, when the input is malformed.",
    body: [
      "Demos are built to succeed. That's not a criticism — it's the point of a demo. You pick a clean input, a favorable scenario, and you show the happy path. The problem starts when a demo gets mistaken for evidence that a system is ready for production.",
      "Production is different in one crucial way: it has to handle the case you didn't think of. The customer who submits a form with a typo in the account number. The document that's missing a page. The request that arrives at 2am when nobody's watching. A system that only works on the cases someone anticipated isn't a system — it's a demo with a bigger audience.",
      "This is why evaluation sets matter more than most people realize. Before anything ships, it should be tested against a deliberately ugly set of cases: missing data, ambiguous requests, conflicting information, high-stakes edge cases. Not to make the system look bad — to find out, on your terms, before a customer finds out on theirs.",
      "The output of a real evaluation isn't a single \"it works\" — it's a breakdown. This class of input, handled correctly, every time. This class, correctly routed to a human. This class, the system should refuse and say so, rather than guess. That breakdown is what \"production ready\" actually means, and it's very different from \"I saw it work in a meeting.\"",
      "If a vendor or a builder can't show you their evaluation set — not their demo, their evaluation set — that's the question to ask next, before the check gets written.",
    ],
  },
  {
    slug: "pricing-an-operations-problem",
    tag: "Economics",
    title: "How to price an operations problem",
    dek: "\"This will save time\" isn't a number. Here's how to turn friction into a dollar figure a CFO will believe.",
    body: [
      "Most internal pitches for fixing a broken process die because they're vague. \"This process is inefficient\" doesn't survive a budget meeting. \"This process costs $180,000 a year and a fix costs $40,000, paying back in under four months\" does.",
      "The model is simpler than people expect. Start with volume — how many times does this happen per month? Then time — how many minutes does it take, honestly, including the parts people don't log? Multiply by fully-loaded hourly cost, not just salary — include benefits, overhead, and management time spent on escalations.",
      "Then add the cost of errors. Every process has an error rate, even if nobody's measured it. Estimate conservatively: how often does something get missed, duplicated, or done wrong, and what does fixing that cost in rework, customer goodwill, or compliance exposure? This number is almost always larger than people expect, because errors compound — a mistake caught late costs far more than one caught immediately.",
      "Add those together and multiply by twelve. That's the current-state annual cost. Now model the engineered state: what would this cost if the deterministic parts were automated, the ambiguous parts were assisted by a system a human still signs off on, and only the genuinely judgment-heavy parts stayed fully manual? The gap between those two numbers is the size of the opportunity — and it's the number that gets a project funded, not the adjective \"inefficient.\"",
    ],
  },
  {
    slug: "build-vs-buy",
    tag: "Strategy",
    title: "Build vs. buy: when off-the-shelf automation is the right call",
    dek: "Custom engineering isn't always the answer. Sometimes the right move is Zapier and twenty minutes.",
    body: [
      "There's a bias in this industry toward building custom systems, because that's the interesting, fundable work. It's also frequently the wrong answer. If a workflow is common — lead routing, calendar syncing, basic data entry between two popular tools — there's a very good chance an off-the-shelf platform (Zapier, n8n, Make) already solves it reliably, cheaply, and without a maintenance burden.",
      "The right question isn't \"can I build something better?\" It's usually yes, you can. The right question is whether the workflow is common enough, stable enough, and low-stakes enough that a pre-built connector is good enough — freeing engineering time for the workflow that's actually unique to your business and actually worth the investment.",
      "Custom engineering earns its cost when the workflow is specific to how your business operates, when the volume is high enough that a small efficiency gain compounds into real money, or when the stakes are high enough that off-the-shelf error handling isn't good enough. Below that bar, buying is usually smarter than building.",
      "A good engineer will tell you when to buy, not just when to build. If the answer to every problem is \"let's build something custom,\" that's a conflict of interest worth noticing.",
    ],
  },
  {
    slug: "human-in-the-loop-boundary",
    tag: "Trust",
    title: "The human-in-the-loop boundary, explained",
    dek: "Not every process should be fully autonomous. Here's how to decide where the line actually goes.",
    body: [
      "\"Human-in-the-loop\" gets treated as a compromise — something you add until the AI is good enough to remove it. That's the wrong mental model. For a meaningful category of decisions, a human checkpoint is the permanent, correct architecture, not a temporary scaffold.",
      "The boundary should be set by two questions, not by what's technically possible. First: how reversible is a mistake? Sending an internal Slack notification and sending a wire transfer are not the same category of risk, even if both could technically be automated. Second: how much does this decision depend on context a model doesn't have — a relationship, an unwritten exception, institutional judgment about a specific customer?",
      "High-reversibility, low-context decisions are good candidates for full autonomy. Low-reversibility or high-context decisions should keep a human in the loop indefinitely — not because the technology can't do it, but because the cost of a rare mistake outweighs the time saved on the common case.",
      "In between sits the largest category: decisions where a system should draft, recommend, or flag, and a person approves. This is where most real value gets captured safely — the system does the tedious 90%, a person spends thirty seconds instead of ten minutes on the final call, and accountability stays exactly where it should.",
      "A system that quietly expands its own autonomy over time, without anyone deciding that on purpose, is not a feature. It's a risk nobody signed off on.",
    ],
  },
  {
    slug: "what-ai-ready-data-means",
    tag: "Data",
    title: "What \"AI-ready\" data actually means",
    dek: "It has almost nothing to do with AI, and everything to do with whether your data is clean, structured, and where it says it is.",
    body: [
      "Vendors love the phrase \"AI-ready data\" because it implies a special, AI-specific preparation. In practice, it means the same thing data readiness has always meant: is there one system of record for a given fact, is the data structured consistently, and is it actually accessible through an API instead of trapped in someone's inbox?",
      "Before any AI system can help, three unglamorous questions need real answers. Where does this data live, and is that the only place it lives? What format is it in, and is that format consistent across every record, or does 20% of it break the pattern? And can a system read it programmatically, or does getting it out require a person to open a spreadsheet and copy-paste?",
      "Most \"AI implementation\" projects that stall are actually data plumbing projects wearing an AI label. The fix isn't a smarter model — it's schema validation at intake, a single system of record instead of three competing ones, and an API where there used to be a manual export.",
      "This is good news, in a way. It means the highest-leverage first step toward AI-readiness is often not exotic or expensive — it's the same data hygiene work that would have paid off with or without a model on top of it.",
    ],
  },
];
