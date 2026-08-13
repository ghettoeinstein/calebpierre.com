import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Cpu,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

const FLOW_STEPS = ["Customer request", "Inbox", "Spreadsheet", "Employee", "Slack", "Manager", "CRM", "ERP"];
const FLOW_EXCEPTIONS = [
  "missing attachment", "wrong customer record", "waiting on approval",
  "copied twice", "forgotten follow-up", "manual re-entry",
  "“ask Sarah”", "spreadsheet_v4_FINAL_final.xlsx",
];

const JUDGMENT_COLUMNS = [
  {
    label: "SOFTWARE",
    title: "When the answer should always be the same.",
    items: ["Deterministic rules", "Validation & routing", "Data movement between systems"],
  },
  {
    label: "INTELLIGENCE",
    title: "When the work requires interpretation, classification, or judgment.",
    items: ["Ambiguous inputs", "Pattern & context recognition", "Drafting, not deciding"],
  },
  {
    label: "HUMAN",
    title: "When context, responsibility, or risk requires a person.",
    items: ["Accountability & sign-off", "Exceptions & edge cases", "Relationships that matter"],
  },
];

const EVAL_ROWS = [
  ["Normal", "✓", "✓", "✓", "✓"],
  ["Ambiguous", "✓", "✕", "—", "Human"],
  ["Missing data", "✕", "—", "—", "Human"],
  ["High risk", "✓", "✓", "✓", "Human"],
  ["Edge case", "✓", "✓", "✕", "Stop"],
];

const EVIDENCE_STATS = [
  ["96.4%", "validated runs"],
  ["0", "high-risk autonomous actions"],
  ["$0.06", "median execution cost"],
  ["3.2 sec", "median system latency"],
  ["12.8%", "human escalation rate"],
];

const DERISK_ITEMS = [
  "Salesforce can remain Salesforce.",
  "NetSuite can remain NetSuite.",
  "Your CRM, your cloud, your credentials — untouched.",
  "Your team can keep working in the tools they already know.",
];

const SYSTEMS = [
  {
    id: "agents",
    index: "01",
    title: "Autonomous AI systems",
    short: "Agents",
    description:
      "Production agents that read context, make decisions, use your tools, validate their own work, and escalate the edge cases that still require judgment.",
    detail: "RAG · MCP · Multi-agent orchestration",
    link: "/los-angeles/ai-programming.html",
    icon: BrainCircuit,
  },
  {
    id: "automation",
    index: "02",
    title: "Business automation",
    short: "Automation",
    description:
      "Operational pipelines that collapse repetitive work across intake, CRM, case management, reporting, and customer communication.",
    detail: "Python · n8n · Zapier · APIs",
    link: "/los-angeles/business-automation.html",
    icon: Workflow,
  },
  {
    id: "security",
    index: "03",
    title: "Security engineering",
    short: "Security",
    description:
      "Security architecture built into the operating system—from identity and detection to automated response, HIPAA controls, and audit-ready evidence.",
    detail: "SIEM · SOAR · Zero Trust · HIPAA",
    link: "/los-angeles/cybersecurity.html",
    icon: ShieldCheck,
  },
];

const WORK = [
  {
    number: "40%",
    label: "manual workload removed",
    client: "UNION RESCUE MISSION",
    title: "From disconnected channels to one operating loop.",
    body: "Connected CRM, email, social, and publishing into an auditable automation system. Staff stopped moving data by hand and got nearly half of the week back.",
    tags: ["Workflow design", "API orchestration", "Deployment"],
  },
  {
    number: "50%",
    label: "SOC efficiency increase",
    client: "TINDER / MATCH GROUP",
    title: "Threat response measured in seconds, not days.",
    body: "Designed SOAR playbooks connected to Splunk SIEM, turning repetitive triage into deterministic, logged response flows at consumer scale.",
    tags: ["Security automation", "SIEM", "Incident response"],
  },
  {
    number: "60%",
    label: "operational overhead eliminated",
    client: "LA NONPROFIT SYSTEMS",
    title: "An AI-native back office people could actually own.",
    body: "Built intelligent intake, case-management automation, knowledge retrieval, and documentation around the organization’s real workflows—not a generic chatbot.",
    tags: ["AI agents", "Knowledge systems", "Human handoff"],
  },
];

const PROCESS = [
  ["01", "Map the operating reality", "I shadow the work, trace every handoff, and quantify where attention, time, and trust are leaking."],
  ["02", "Design the smallest powerful system", "We choose the few automations that change the economics first, then define controls before code."],
  ["03", "Ship into production", "I build inside your environment, connect the real tools, instrument the workflow, and train the team."],
  ["04", "Transfer the capability", "You receive readable source code, operating documentation, observability, and a clear evolution roadmap."],
];

function SystemCore() {
  const [active, setActive] = useState(0);
  const current = SYSTEMS[active];

  return (
    <div className="system-core" aria-label="Interactive systems capability map">
      <div className="core-grid" aria-hidden="true" />
      <div className="core-orbit core-orbit-one" aria-hidden="true" />
      <div className="core-orbit core-orbit-two" aria-hidden="true" />
      <div className="core-center">
        <span className="core-status"><i /> LIVE SYSTEM</span>
        <strong>{current.short}</strong>
        <span>{current.detail}</span>
      </div>
      {SYSTEMS.map((system, index) => {
        const Icon = system.icon;
        return (
          <button
            key={system.id}
            className={`core-node core-node-${index + 1} ${active === index ? "is-active" : ""}`}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
          >
            <Icon size={18} />
            <span>{system.short}</span>
          </button>
        );
      })}
      <div className="core-readout">
        <span>{current.index} / 03</span>
        <p>{current.description}</p>
        <a href={current.link}>Explore system <ArrowUpRight size={15} /></a>
      </div>
    </div>
  );
}

function CostCalculator() {
  const [people, setPeople] = useState(8);
  const [hours, setHours] = useState(9);
  const [rate, setRate] = useState(48);

  const figures = useMemo(() => {
    const annual = people * hours * rate * 52;
    const recoverable = Math.round(annual * 0.6);
    return { annual, recoverable };
  }, [people, hours, rate]);

  const money = (value) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

  return (
    <div className="calculator-shell">
      <div className="calculator-controls">
        <div className="calculator-heading">
          <span className="kicker">LIVE DIAGNOSTIC</span>
          <h3>What is manual work actually costing you?</h3>
          <p>Move the controls. This is the invisible line item hiding inside payroll.</p>
        </div>
        <label>
          <span><b>People in the workflow</b><em>{people}</em></span>
          <input type="range" min="1" max="50" value={people} onChange={(e) => setPeople(Number(e.target.value))} />
        </label>
        <label>
          <span><b>Manual hours / person / week</b><em>{hours}h</em></span>
          <input type="range" min="1" max="30" value={hours} onChange={(e) => setHours(Number(e.target.value))} />
        </label>
        <label>
          <span><b>Loaded hourly cost</b><em>${rate}</em></span>
          <input type="range" min="20" max="150" step="2" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </label>
      </div>
      <div className="calculator-output" aria-live="polite">
        <span className="kicker">ANNUAL MANUAL-WORK EXPOSURE</span>
        <strong>{money(figures.annual)}</strong>
        <div className="recovery-number">
          <span>Potentially recoverable at 60%</span>
          <b>{money(figures.recoverable)}</b>
        </div>
        <a className="button button-light" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">
          Audit this workflow <ArrowUpRight size={17} />
        </a>
      </div>
    </div>
  );
}

function LeakageDiagram() {
  return (
    <div className="leakage-grid">
      <div className="leakage-column">
        <span className="kicker">THE WORKFLOW, ON PAPER</span>
        <div className="leakage-flow">
          {FLOW_STEPS.map((step) => <div key={step}>{step}</div>)}
        </div>
      </div>
      <div className="leakage-column">
        <span className="kicker leakage-kicker-alt">THE WORKFLOW, IN PRACTICE</span>
        <div className="leakage-exceptions">
          {FLOW_EXCEPTIONS.map((ex) => <div key={ex}>{ex}</div>)}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const pointer = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const scroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("pointermove", pointer, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      window.removeEventListener("pointermove", pointer);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="pointer-aura" aria-hidden="true" />
      <div className="page-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
      <Nav />

      <main>
        <section className="hero-section" id="top">
          <div className="hero-noise" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <div className="availability"><i /> Los Angeles · Available for select builds</div>
              <p className="hero-index">FORWARD-DEPLOYED AI ENGINEER / SECURITY ARCHITECT</p>
              <h1>I build systems that <span>think, decide,</span> and ship.</h1>
              <p className="hero-lede">
                AI agents, operational automation, and security infrastructure engineered around the way your organization actually works.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">
                  Start with the bottleneck <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#work">See production outcomes <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero-proof">
                <div><strong>10+</strong><span>years shipping high-stakes systems</span></div>
                <div><strong>5,000+</strong><span>enterprise assets secured</span></div>
                <div><strong>40–60%</strong><span>manual overhead removed</span></div>
              </div>
            </div>
            <SystemCore />
          </div>
          <div className="signal-strip" aria-label="Capabilities">
            <div>
              <span>AGENTIC WORKFLOWS</span><i />
              <span>SECURE BY DESIGN</span><i />
              <span>HUMAN IN THE LOOP</span><i />
              <span>YOUR CODE. YOUR CLOUD.</span><i />
              <span>AGENTIC WORKFLOWS</span><i />
              <span>SECURE BY DESIGN</span>
            </div>
          </div>
        </section>

        <section className="leakage-section section" id="leakage">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">WHERE VALUE LEAKS</span><p>Somewhere inside your company, value is leaking — in the handoffs nobody wrote down.</p></div>
              <h2>The SOP is not the operation.</h2>
            </div>
            <LeakageDiagram />
            <p className="leakage-note">The real business lives in exceptions, workarounds, judgment calls, handoffs, and the knowledge people carry in their heads.</p>
          </div>
        </section>

        <section className="work-section section" id="work">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">SELECTED OUTCOMES</span><p>Proof before promises.</p></div>
              <h2>Production work with a visible before and after.</h2>
            </div>
            <div className="work-grid">
              {WORK.map((project, index) => (
                <article className={`work-card work-card-${index + 1}`} key={project.client}>
                  <div className="work-card-top"><span>{String(index + 1).padStart(2, "0")}</span><ArrowUpRight size={20} /></div>
                  <div className="work-metric"><strong>{project.number}</strong><span>{project.label}</span></div>
                  <div className="work-content">
                    <span className="kicker">{project.client}</span>
                    <h3>{project.title}</h3>
                    <p>{project.body}</p>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="systems-section section" id="systems">
          <div className="site-container">
            <div className="section-heading section-heading-light">
              <div><span className="kicker">WHAT I BUILD</span><p>Three capabilities. One accountable engineer.</p></div>
              <h2>Not another tool. A new operating advantage.</h2>
            </div>
            <div className="systems-list">
              {SYSTEMS.map((system) => {
                const Icon = system.icon;
                return (
                  <a href={system.link} className="system-row" key={system.id}>
                    <span className="system-number">{system.index}</span>
                    <span className="system-icon"><Icon size={24} /></span>
                    <span className="system-copy"><strong>{system.title}</strong><small>{system.description}</small></span>
                    <span className="system-detail">{system.detail}</span>
                    <ArrowUpRight className="system-arrow" size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="judgment-section section" id="judgment">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">ENGINEERING JUDGMENT</span><p>The goal isn't to put AI everywhere. The goal is to put intelligence exactly where it creates leverage.</p></div>
              <h2>I don't start with AI. I start with the operation.</h2>
            </div>
            <div className="judgment-grid">
              {JUDGMENT_COLUMNS.map((col) => (
                <article key={col.label}>
                  <span className="kicker">{col.label}</span>
                  <h3>{col.title}</h3>
                  <ul>{col.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="calculator-section section" id="diagnostic">
          <div className="site-container"><CostCalculator /></div>
        </section>

        <section className="process-section section" id="process">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">THE DEPLOYMENT LOOP</span><p>Fast enough to matter. Controlled enough to trust.</p></div>
              <h2>From messy reality to an owned production system.</h2>
            </div>
            <div className="process-grid">
              {PROCESS.map(([number, title, body]) => (
                <article key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="evidence-section section" id="evidence">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">EVIDENCE, NOT DEMOS</span><p>A demo shows that something can work. Evidence shows whether it should be trusted.</p></div>
              <h2>Intelligence earns autonomy.</h2>
            </div>
            <div className="evidence-grid">
              <div className="evidence-table-wrap">
                <span className="kicker">EVALUATION SET</span>
                <table className="evidence-table">
                  <thead><tr><th>Scenario</th><th>Data</th><th>Decision</th><th>Policy</th><th>Safe</th></tr></thead>
                  <tbody>
                    {EVAL_ROWS.map((row) => (
                      <tr key={row[0]}>{row.map((cell, i) => <td key={i} data-flag={cell === "Human" || cell === "Stop" ? "risk" : undefined}>{cell}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="evidence-stats">
                <span className="kicker">DEPLOYMENT EVIDENCE</span>
                <div className="evidence-stats-grid">
                  {EVIDENCE_STATS.map(([value, label]) => (
                    <div key={label}><strong>{value}</strong><span>{label}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="derisk-section section" id="derisk">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">DE-RISKING THE DECISION</span><p>I engineer around the reality of your organization rather than forcing your organization around my technology.</p></div>
              <h2>Your systems do not need to be replaced.</h2>
            </div>
            <div className="derisk-list">
              {DERISK_ITEMS.map((item) => <p key={item}>{item}</p>)}
            </div>
            <p className="derisk-tagline">Integrate before migrate.</p>
          </div>
        </section>

        <section className="proof-section section" id="proof">
          <div className="site-container proof-layout">
            <div className="proof-copy">
              <span className="kicker">ENGINEERED IN THE REAL WORLD</span>
              <h2>Security depth. Product speed. Operator empathy.</h2>
              <p>
                A decade across Tinder, Verizon Media, Children’s Hospital Los Angeles, UCLA Health, fintech, and mission-driven organizations taught me the same thing: a system only matters if people can trust it on Monday morning.
              </p>
              <a className="text-link" href="/resume.html">Read the full field record <ArrowUpRight size={16} /></a>
            </div>
            <div className="proof-ledger">
              {[
                ["TINDER", "SOAR + SIEM at consumer scale", "50% SOC efficiency"],
                ["VERIZON MEDIA", "Enterprise bug bounty operations", "70% faster remediation"],
                ["CHILDREN’S HOSPITAL LA", "HIPAA detection engineering", "100% audit compliance"],
                ["UCLA HEALTH", "Vulnerability remediation", "5,000+ assets"],
              ].map(([company, work, result]) => (
                <div key={company}><span>{company}</span><strong>{work}</strong><em>{result}</em></div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="site-container about-layout">
            <div className="portrait-mark" aria-hidden="true"><Cpu size={42} /><span>CP / 10Y</span></div>
            <div>
              <span className="kicker">ABOUT CALEB PIERRE</span>
              <h2>I work where ambiguity is expensive.</h2>
              <p>
                I’m a Los Angeles–based forward-deployed engineer who can sit with leadership, shadow operators, model the system, write the code, secure the deployment, and hand your team something they can actually run.
              </p>
              <ul>
                <li><Check size={16} /> Direct access to the engineer doing the work</li>
                <li><Check size={16} /> Source code, documentation, and control stay with you</li>
                <li><Check size={16} /> Security and observability designed in from day one</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <div className="closing-orb" aria-hidden="true"><Radar size={120} /></div>
          <div className="site-container closing-copy">
            <span className="kicker"><Sparkles size={14} /> ONE CONVERSATION. A CLEARER SYSTEM.</span>
            <h2>Bring me the workflow everyone hates.</h2>
            <p>I’ll map the bottleneck, tell you what should—and should not—be automated, and outline the shortest path to production.</p>
            <a className="button button-primary" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">
              Book the systems diagnostic <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
