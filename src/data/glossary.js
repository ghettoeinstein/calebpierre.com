// Glossary — calebpierre.com
// Same paradigm as a trading glossary: categorized, dense, linkable.
// Every term gets a plain-English definition + why it actually matters
// to an operator deciding whether to build something.

export const GLOSSARY = [
  {
    category: "Foundations",
    slug: "foundations",
    terms: [
      {
        term: "Large Language Model (LLM)",
        slug: "large-language-model",
        def: "A model trained on enormous amounts of text to predict the next most likely word. It doesn't \"know\" facts the way a database does — it generates plausible language, which happens to be right most of the time when the training data was good and the question was well-posed.",
        why: "This is the single most misunderstood fact in the industry. An LLM is a language engine, not a source of truth. Every design decision downstream — evaluation, guardrails, human checkpoints — exists because of this one sentence.",
      },
      {
        term: "Prompt",
        slug: "prompt",
        def: "The instructions and context you give a model before it generates a response. Includes the system instructions, the conversation history, and any retrieved data.",
        why: "A prompt is a specification, not a suggestion. Sloppy prompts produce sloppy, inconsistent systems — the same way sloppy requirements produce sloppy software.",
      },
      {
        term: "Context Window",
        slug: "context-window",
        def: "The maximum amount of text (measured in tokens) a model can consider at once — instructions, history, and retrieved documents combined. Anything that doesn't fit gets truncated or dropped.",
        why: "This is a hard budget, not a soft guideline. Systems that silently exceed it don't error — they quietly forget things, which is far more dangerous than a crash.",
      },
      {
        term: "Token",
        slug: "token",
        def: "A chunk of text — roughly ¾ of a word in English — that a model reads and generates one unit at a time. Pricing, context limits, and latency are all measured in tokens.",
        why: "Tokens are the unit economics of AI. If you can't estimate tokens per request, you can't estimate cost per execution, and you can't build an honest ROI model.",
      },
      {
        term: "Inference",
        slug: "inference",
        def: "The act of running a trained model to produce an output — as opposed to training, which is how the model learned in the first place. Nearly everything a business does with AI day-to-day is inference.",
        why: "Inference cost scales with usage. A workflow that looks free in a demo can become expensive at 10,000 runs a month — model the unit economics before you commit.",
      },
      {
        term: "Fine-tuning",
        slug: "fine-tuning",
        def: "Further training a general-purpose model on your own examples so it specializes in a narrower task or adopts a particular style or format.",
        why: "It's usually the wrong first move. Most \"we need to fine-tune\" problems are actually retrieval problems or prompt problems — cheaper, faster, and easier to audit.",
      },
      {
        term: "Temperature",
        slug: "temperature",
        def: "A setting that controls how random a model's output is. Low temperature produces consistent, predictable answers; high temperature produces more varied, creative ones.",
        why: "For decisions that need to be repeatable — classification, routing, extraction — temperature should be low. Save the creativity for drafting, not deciding.",
      },
    ],
  },
  {
    category: "Architecture",
    slug: "architecture",
    terms: [
      {
        term: "Agent",
        slug: "agent",
        def: "A system that uses a model to decide which action to take next — not just to generate text, but to call tools, read data, and take multi-step actions toward a goal.",
        why: "\"Agent\" gets used as a marketing word. A real agent has a defined action space, a way to fail safely, and a boundary where it hands off to a human. Anything less is a chatbot with extra steps.",
      },
      {
        term: "Orchestration",
        slug: "orchestration",
        def: "The layer that sequences steps across models, tools, and systems — deciding what runs when, in what order, and what happens if a step fails.",
        why: "Orchestration is where reliability actually lives. The model is rarely the weak link; the missing retry logic, timeout handling, and state management usually are.",
      },
      {
        term: "RAG (Retrieval-Augmented Generation)",
        slug: "rag",
        def: "A pattern where the system retrieves relevant documents or data before generating a response, so the model answers from your actual information instead of only from what it memorized during training.",
        why: "RAG is the default fix for hallucination in business contexts — but the retrieval quality matters more than the model. Garbage search results in, garbage answers out.",
      },
      {
        term: "MCP (Model Context Protocol)",
        slug: "mcp",
        def: "An open standard that lets AI systems connect to external tools, data sources, and services through a common interface, instead of a custom integration for every pairing.",
        why: "It's the difference between building seven one-off integrations and building one interface seven systems can plug into. Fewer custom wires, less to maintain.",
      },
      {
        term: "Pipeline",
        slug: "pipeline",
        def: "A defined sequence of processing steps data moves through — validation, transformation, enrichment, decision, action — each with its own responsibility.",
        why: "A pipeline you can draw on a whiteboard is a pipeline you can debug. If nobody can explain the steps in order, nobody can explain why it broke.",
      },
      {
        term: "Workflow Engine",
        slug: "workflow-engine",
        def: "Software (Zapier, n8n, Make, Temporal, or custom code) that runs and tracks multi-step processes — including retries, branching logic, and state — without a human babysitting each step.",
        why: "Choosing off-the-shelf vs. custom here is a real engineering decision, not a preference. It trades speed of setup against control and cost at scale.",
      },
      {
        term: "API Integration",
        slug: "api-integration",
        def: "A connection that lets two systems exchange data or trigger actions in each other programmatically, rather than through a human copying information between them.",
        why: "Most \"AI problems\" are actually missing API integrations wearing a costume. Fix the plumbing before you add intelligence on top of it.",
      },
    ],
  },
  {
    category: "Evaluation & Trust",
    slug: "evaluation-trust",
    terms: [
      {
        term: "Eval / Evaluation Set",
        slug: "eval",
        def: "A curated set of test cases — including edge cases and failure modes — used to measure how a system performs before and after it's deployed, and to catch regressions when it changes.",
        why: "A demo proves a system can work once, on a good day. An eval proves it works reliably, on the cases that actually happen. This is the difference between a toy and a tool.",
      },
      {
        term: "Hallucination",
        slug: "hallucination",
        def: "When a model generates a plausible-sounding answer that's factually wrong or entirely fabricated — a citation that doesn't exist, a policy that was never written.",
        why: "Hallucination isn't a bug you patch out — it's a structural property of how these models generate language. You design around it with retrieval, verification, and human checkpoints, not wishful thinking.",
      },
      {
        term: "Confidence Score",
        slug: "confidence-score",
        def: "A number a model or system produces alongside a decision, indicating how certain it is. Low confidence should route to a human; high confidence can proceed autonomously.",
        why: "A confidence score is only useful if something changes when it's low. A system that logs low confidence but acts anyway hasn't earned the word \"confidence.\"",
      },
      {
        term: "Human-in-the-loop",
        slug: "human-in-the-loop",
        def: "A design where a person reviews or approves a system's output before it takes effect — as opposed to fully autonomous execution.",
        why: "This isn't a compromise or a placeholder until the AI is \"good enough.\" For high-stakes decisions, it's often the permanent, correct architecture.",
      },
      {
        term: "Guardrail",
        slug: "guardrail",
        def: "A hard constraint that prevents a system from taking certain actions regardless of what the model outputs — a spending cap, a list of disallowed actions, a required approval step.",
        why: "Guardrails live outside the model, in code, precisely because the model can't be fully trusted to enforce its own limits.",
      },
      {
        term: "Escalation Boundary",
        slug: "escalation-boundary",
        def: "The explicit line where a system stops acting on its own and hands the decision to a person — defined by risk, ambiguity, or confidence, not by convenience.",
        why: "If you can't point to where your escalation boundary is, you don't have one — you have a system that's autonomous by accident.",
      },
      {
        term: "Ground Truth",
        slug: "ground-truth",
        def: "The verified, correct answer used to measure whether a system's output is right — a human-confirmed label, a completed transaction, an audited record.",
        why: "Without ground truth, \"it seems to be working\" is a feeling, not a measurement. You need something to grade against.",
      },
    ],
  },
  {
    category: "Economics & Value",
    slug: "economics-value",
    terms: [
      {
        term: "Operating Capacity",
        slug: "operating-capacity",
        def: "The time, attention, and throughput an organization has available to do work — currently spent partly on the work itself and partly on friction: re-entry, coordination, exceptions.",
        why: "The goal of engineering a system isn't \"using AI.\" It's recovering operating capacity that's currently trapped in friction and redeploying it toward growth.",
      },
      {
        term: "Cost per Execution",
        slug: "cost-per-execution",
        def: "The fully-loaded cost of running a workflow once through an automated system — model inference, API calls, infrastructure — expressed per unit, the same way you'd cost a manual process per case.",
        why: "This is the number that makes automation ROI honest. If you can't state it, you're guessing, not modeling.",
      },
      {
        term: "ROI Model",
        slug: "roi-model",
        def: "A structured comparison of current-state cost (time, errors, delay) against engineered-state cost, translated into a dollar figure over a defined period.",
        why: "A good ROI model survives scrutiny from a CFO. A vague one — \"this will save time\" — doesn't, and shouldn't.",
      },
      {
        term: "Automation Boundary",
        slug: "automation-boundary",
        def: "The deliberate line separating what a system should decide autonomously from what requires human judgment — set by risk and ambiguity, not by what's technically possible.",
        why: "Technically possible and operationally wise are different questions. The boundary is where engineering judgment lives.",
      },
      {
        term: "Constraint",
        slug: "constraint",
        def: "The single element of a system that limits its overall output — from Theory of Constraints. Improving anything other than the constraint doesn't improve the whole system's throughput.",
        why: "This is why \"automate everything\" is bad strategy. Find the actual bottleneck first, or you'll optimize a step that was never slowing you down.",
      },
      {
        term: "Leverage Point",
        slug: "leverage-point",
        def: "A place in a system where a small, well-targeted change produces a disproportionately large improvement in the outcome.",
        why: "Not all workflows are equal. One badly-designed intake process can be worth more to fix than ten minor annoyances combined.",
      },
      {
        term: "Payback Period",
        slug: "payback-period",
        def: "How long it takes for the value an engineered system generates to exceed what it cost to build and run.",
        why: "A system with a six-month payback and a system with a two-year payback are different bets, even if both eventually pay off. Sequence work by payback, not by novelty.",
      },
    ],
  },
  {
    category: "Security & Risk",
    slug: "security-risk",
    terms: [
      {
        term: "Zero Trust Architecture",
        slug: "zero-trust-architecture",
        def: "A security model where no user, device, or system is trusted by default — every request is verified, every time, regardless of whether it originated inside or outside the network.",
        why: "As systems get more autonomous, the perimeter model (trust anything inside the firewall) breaks down faster. Zero trust is the architecture that scales with automation, not against it.",
      },
      {
        term: "Attack Surface",
        slug: "attack-surface",
        def: "The total set of points where an unauthorized actor could try to get in or extract data — every API endpoint, integration, and credential a system exposes.",
        why: "Every new integration is a new door. Convenience and attack surface trade off directly — that trade needs to be a conscious decision, not an accident.",
      },
      {
        term: "SOAR",
        slug: "soar",
        def: "Security Orchestration, Automation, and Response — tooling that automates the investigation and containment of security incidents so a human analyst isn't doing every step by hand.",
        why: "The same principles that make business workflows worth automating — repetitive, time-critical, well-defined — apply directly to incident response.",
      },
      {
        term: "SIEM",
        slug: "siem",
        def: "Security Information and Event Management — a system that collects and correlates logs across an organization to detect suspicious patterns in real time.",
        why: "You can't secure — or automate — what you can't see. A SIEM is the observability layer security decisions get made on top of.",
      },
      {
        term: "Least Privilege",
        slug: "least-privilege",
        def: "The principle that any user, system, or agent should have the minimum level of access required to do its job, and nothing more.",
        why: "This applies to AI agents just as much as to employees. An agent that can read a CRM doesn't need permission to delete records.",
      },
      {
        term: "Autonomous Action Risk",
        slug: "autonomous-action-risk",
        def: "The exposure created when a system can take a real-world, hard-to-reverse action (sending money, deleting data, notifying a customer) without a human checkpoint.",
        why: "This is the number that should determine your automation boundary. High-reversibility, low-stakes actions can run autonomously; the rest shouldn't, yet.",
      },
      {
        term: "Compliance Boundary",
        slug: "compliance-boundary",
        def: "The set of regulatory requirements (HIPAA, SOC 2, PCI, GDPR) that constrain what data a system can touch, store, or send — and to whom.",
        why: "Compliance isn't a checklist you complete once. It's a boundary that shapes the architecture from day one, especially once AI is reading regulated data.",
      },
    ],
  },
  {
    category: "Data & Integration",
    slug: "data-integration",
    terms: [
      {
        term: "System of Record",
        slug: "system-of-record",
        def: "The single authoritative source for a given piece of data — the CRM for customer status, the ERP for inventory — that every other system should defer to.",
        why: "Most operational chaos traces back to two systems both thinking they're the system of record for the same fact. Fixing that is often higher-leverage than adding AI.",
      },
      {
        term: "Data Pipeline",
        slug: "data-pipeline",
        def: "The path data takes as it moves from where it's created to where it's used — extracted, cleaned, transformed, and loaded into its destination.",
        why: "AI systems are only as good as the pipeline feeding them. A brilliant model on a broken pipeline still produces broken decisions.",
      },
      {
        term: "Webhook",
        slug: "webhook",
        def: "A way for one system to notify another instantly when something happens — a new order, a form submission — instead of the second system having to repeatedly check for updates.",
        why: "Webhooks are what make \"real-time\" automation actually real-time, instead of running on a five-minute polling delay that quietly costs you responsiveness.",
      },
      {
        term: "Schema Validation",
        slug: "schema-validation",
        def: "Checking that incoming data matches the expected structure and types before a system acts on it — the right fields, present, in the right format.",
        why: "This is the first gate in any reliable pipeline. Catching a malformed record at intake is cheap; catching it after it's corrupted three downstream systems is not.",
      },
      {
        term: "ETL",
        slug: "etl",
        def: "Extract, Transform, Load — the classic pattern for moving data from source systems into a destination (often a warehouse), reshaping it along the way.",
        why: "It's decades old and still correct. Most \"AI data problems\" are actually ETL problems that never got solved properly.",
      },
      {
        term: "Idempotency",
        slug: "idempotency",
        def: "A property of an operation where running it multiple times produces the same result as running it once — critical for systems that retry after failures.",
        why: "Without idempotency, a retried webhook can charge a customer twice or send the same email five times. It's invisible until the day it isn't.",
      },
      {
        term: "Event-Driven Architecture",
        slug: "event-driven-architecture",
        def: "A design where systems react to events (a record changed, a form was submitted) as they happen, rather than checking on a fixed schedule.",
        why: "This is what makes a system feel alive instead of laggy — and it's usually a smaller lift than teams expect once the webhook layer exists.",
      },
    ],
  },
];

export const ALL_TERMS = GLOSSARY.flatMap((cat) =>
  cat.terms.map((t) => ({ ...t, category: cat.category, categorySlug: cat.slug }))
);
