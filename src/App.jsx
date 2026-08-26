import { useEffect, useState } from "react";
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
import BootSequence, { hasSeenBoot } from "./components/BootSequence.jsx";

// Single source for the marquee ticker copy — update here only.
const MARQUEE_ITEMS = [
  "Enterprise of One",
  "CalebOS",
  "Operator, Not Labor",
  "Practiced, Not Theorized",
];

const METHOD_PILLARS = [
  {
    id: "reality",
    index: "01",
    title: "Operating reality, mapped",
    short: "Reality",
    description:
      "How work actually moves: the handoffs, exceptions, informal knowledge, and approvals that the org chart never shows.",
    detail: "Operating Reality Map",
    link: "#method",
    icon: Workflow,
  },
  {
    id: "authority",
    index: "02",
    title: "Decision rights, defined",
    short: "Authority",
    description:
      "What the operator decides, what software executes on its own, and what still requires a person to approve.",
    detail: "Decision Rights Matrix",
    link: "#method",
    icon: ShieldCheck,
  },
  {
    id: "evidence",
    index: "03",
    title: "Evidence, made visible",
    short: "Evidence",
    description:
      "Cost, quality, risk, and outcomes visible enough for the operator to steer the function instead of guessing.",
    detail: "Evidence Loop",
    link: "#method",
    icon: BrainCircuit,
  },
];

const METHOD_COMPONENTS = [
  {
    num: "01",
    name: "Mandate",
    description: "Define the outcome, boundary, customer, authority, and conditions for escalation.",
  },
  {
    num: "02",
    name: "Operating Reality",
    description: "Map how work actually moves, including exceptions, informal knowledge, approvals, and value leaks.",
  },
  {
    num: "03",
    name: "Decision Rights",
    description: "Separate what the operator decides, what software executes, and what leadership must approve.",
  },
  {
    num: "04",
    name: "Leverage System",
    description: "Use software, automation, AI, and specialist support where each creates measurable capacity.",
  },
  {
    num: "05",
    name: "Evidence Loop",
    description: "Make cost, quality, risk, and outcomes visible enough for the operator to steer the function.",
  },
  {
    num: "06",
    name: "Capability Transfer",
    description: "Document the system so knowledge compounds and the organization is not dependent on one person.",
  },
];

const OFFERS = [
  {
    num: "01",
    id: "keynotes",
    name: "Keynotes and Executive Briefings",
    description:
      "Provocative, practical sessions for leadership teams examining how AI, automation, and new operating models change the unit of work. Each engagement is adapted to the audience while staying grounded in the Enterprise of One thesis.",
    cta: "Explore Speaking Topics",
    href: "#ideas",
  },
  {
    num: "02",
    id: "workshops",
    name: "Enterprise of One Workshops",
    description:
      "Half-day, full-day, and multi-session working formats. A team maps one real function, defines operator authority, separates human judgment from machine execution, and leaves with an implementation charter.",
    cta: "Request a Workshop Briefing",
    href: "https://calendly.com/calebpierre",
    external: true,
  },
  {
    num: "03",
    id: "advisory",
    name: "Strategic Advisory and Fractional Architecture",
    description:
      "Ongoing guidance for leaders introducing agentic systems, operating-model changes, or internal operator programs. Advisory connects organizational design, technical architecture, security, and measurable control.",
    cta: "Discuss an Advisory Engagement",
    href: "https://calendly.com/calebpierre",
    external: true,
  },
];

const SIGNATURE_TALKS = [
  {
    title: "The Enterprise of One",
    premise: "The next unit of transformation is not the department. It is the equipped operator.",
    abstract:
      "Organizations have spent decades adding tools around jobs while leaving authority, context, and economic visibility fragmented. Caleb shows how an Enterprise of One operates a bounded function with founder-level ownership and enterprise-grade controls. The audience leaves with a practical model for redesigning work without turning transformation into a software rollout or a headcount exercise.",
    bestFor: "Executive conferences, future-of-work programs, people leadership, innovation events",
  },
  {
    title: "Intelligence Earns Autonomy",
    premise: "AI should receive authority only after it demonstrates evidence, boundaries, and a reliable path back to a person.",
    abstract:
      "Agentic systems can act, but action is not the same as judgment. Drawing from security engineering and operating-system design, Caleb presents a graduated model for machine authority: what software may observe, recommend, execute, escalate, and never do. Leaders leave with a language for moving past AI experimentation without surrendering accountability.",
    bestFor: "CTO, CISO, AI governance, regulated-industry, and engineering audiences",
  },
  {
    title: "You Already Have the Talent. You Are Missing the OS.",
    premise: "Many performance problems are system-design problems wearing employee names.",
    abstract:
      "Capable employees often inherit fragmented tools, invisible dependencies, incomplete authority, and metrics disconnected from customer value. Caleb explains how to identify operator potential inside an existing team and build the mandate, decision rights, leverage system, and evidence loop needed for that person to own an outcome.",
    bestFor: "CHROs, learning leaders, workforce programs, operations teams, and mission-driven organizations",
  },
];

const WORKSHOP_LOOP = [
  ["01", "Choose the function", "Select one bounded workflow, team responsibility, or recurring outcome."],
  ["02", "Map operating reality", "Capture handoffs, exceptions, decisions, systems, risk, and tacit knowledge."],
  ["03", "Design the operator model", "Define mandate, decision rights, metrics, automation, evidence, and escalation."],
  ["04", "Commit the next experiment", "Assign a responsible owner, success measure, review date, and stop condition."],
];

const WORKSHOP_DELIVERABLES = [
  "Operating Reality Map",
  "Enterprise of One Charter",
  "Decision Rights Matrix",
  "30-day experiment brief",
];

const CAREER_EVIDENCE = [
  ["TINDER / MATCH GROUP", "SOAR and SIEM security engineering at consumer scale", "Consumer technology"],
  ["VERIZON MEDIA", "Enterprise bug bounty program operations", "Media"],
  ["CHILDREN'S HOSPITAL LOS ANGELES", "HIPAA-aligned detection engineering", "Healthcare"],
  ["UCLA HEALTH", "Vulnerability remediation program", "Healthcare"],
];

const BIO_FACTS = [
  "Creator of Enterprise of One",
  "Builder of CalebOS",
  "Los Angeles-based, remote-first practice",
];

function SystemCore() {
  const [active, setActive] = useState(0);
  const current = METHOD_PILLARS[active];

  return (
    <div className="system-core" aria-label="Interactive CalebOS method map">
      <div className="core-grid" aria-hidden="true" />
      <div className="core-orbit core-orbit-one" aria-hidden="true" />
      <div className="core-orbit core-orbit-two" aria-hidden="true" />
      <div className="core-center">
        <span className="core-status"><i /> CALEBOS</span>
        <strong>{current.short}</strong>
        <span>{current.detail}</span>
      </div>
      {METHOD_PILLARS.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <button
            key={pillar.id}
            className={`core-node core-node-${index + 1} ${active === index ? "is-active" : ""}`}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
          >
            <Icon size={18} />
            <span>{pillar.short}</span>
          </button>
        );
      })}
      <div className="core-readout">
        <span>{current.index} / 03</span>
        <p>{current.description}</p>
        <a href={current.link}>Explore the method <ArrowUpRight size={15} /></a>
      </div>
    </div>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [booting, setBooting] = useState(() => !hasSeenBoot());

  useEffect(() => {
    document.body.style.overflow = booting ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [booting]);

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
      {booting && <BootSequence onDone={() => setBooting(false)} />}
      <div className="pointer-aura" aria-hidden="true" />
      <div className="page-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
      <Nav />

      <main>
        <section className="hero-section" id="top">
          <div className="hero-noise" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <div className="availability"><i /> Los Angeles · Available for keynotes, workshops, and select advisory engagements</div>
              <p className="hero-index">SPEAKER · SYSTEMS STRATEGIST · CREATOR OF ENTERPRISE OF ONE</p>
              <h1>I built an operating system for becoming an <em>Enterprise of One</em>. Now I install the method inside teams.</h1>
              <p className="hero-lede">
                Enterprise of One gives a person the context, tools, controls, and bounded authority to run a function as an operator. CalebOS is the method I built by practicing it across my own ventures first.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">
                  Inquire About Speaking <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#method">Explore the Enterprise of One method <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero-proof">
                <div><strong>CalebOS</strong><span>the operating method for a portfolio of ventures</span></div>
                <div><strong>20+</strong><span>years across IT, security, software, and AI systems</span></div>
                <div><strong>Enterprise scale</strong><span>experience spanning consumer technology, healthcare, media, and mission-driven organizations</span></div>
              </div>
            </div>
            <SystemCore />
          </div>
        </section>

        <div className="marquee" aria-label="Positioning">
          <div className="marquee__track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i}>{item}</span>
            )).reduce((acc, el, i) => {
              if (i > 0) acc.push(<i key={`dot-${i}`} aria-hidden="true" />);
              acc.push(el);
              return acc;
            }, [])}
          </div>
        </div>

        <section className="leakage-section section" id="worldview">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">THE ENTERPRISE OF ONE THESIS</span><p>Companies keep hiring around broken operating models instead of fixing what the people they already have can own.</p></div>
              <h2>Headcount stopped being the only growth lever.</h2>
            </div>
            <p className="leakage-note">
              Meanwhile, capable people work without the context, authority, automation, or economic visibility needed to own an outcome. Enterprise of One changes the unit of transformation. It equips one person to operate a bounded function with the discipline of a founder and the controls of an enterprise.
            </p>
            <div className="derisk-list">
              <p>This is not a program for extracting more labor from fewer people. It is a method for giving people stronger systems, clearer authority, and greater ownership of the value they already create.</p>
            </div>
          </div>
        </section>

        <section className="work-section section" id="origin">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">BUILT IN OPERATING REALITY</span><p>The idea did not start as a slide. It started as a problem I had to solve for myself.</p></div>
              <h2>I needed a system that could hold more than one ambition at a time.</h2>
            </div>
            <p className="leakage-note">
              I did not create CalebOS in a strategy off-site. I built it because I was operating across software, security, media, education, community work, and new ventures while remaining accountable for what shipped. Ordinary productivity tools could hold tasks. They could not hold the relationships between goals, decisions, money, risk, evidence, and human judgment.
            </p>
            <p className="derisk-tagline">CalebOS is the structure I use to decide what deserves attention, what software can own, what requires approval, and what must stop.</p>
            <a className="text-link" href="/portfolio.html" style={{ marginTop: 26 }}>
              See where CalebOS gets tested <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="disciplines-section section" id="method">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">CALEBOS / OPERATOR METHOD</span><p>Not a generic services grid. Six components that turn responsibility into ownership.</p></div>
              <h2>Six capabilities turn responsibility into ownership.</h2>
            </div>
            <div className="disciplines-grid">
              {METHOD_COMPONENTS.map((m) => (
                <div className="discipline-block" key={m.num}>
                  <span className="discipline-block__num">{m.num}</span>
                  <h3>{m.name}</h3>
                  <p>{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="judgment-section section" id="offers">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">WAYS TO WORK WITH CALEB</span><p>Bring the idea into the room. Then put it to work.</p></div>
              <h2>Speaking, workshops, and advisory.</h2>
            </div>
            <div className="disciplines-grid">
              {OFFERS.map((offer) => (
                <a
                  href={offer.href}
                  target={offer.external ? "_blank" : undefined}
                  rel={offer.external ? "noreferrer" : undefined}
                  className="discipline-block"
                  key={offer.num}
                  id={offer.id}
                >
                  <span className="discipline-block__num">{offer.num}</span>
                  <h3>{offer.name}</h3>
                  <p>{offer.description}</p>
                  <span className="discipline-block__link">{offer.cta} <ArrowUpRight size={14} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="evidence-section section" id="ideas">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">SIGNATURE IDEAS</span><p>For organizations navigating the agentic shift.</p></div>
              <h2>Talks built from practice, not theory.</h2>
            </div>
            <div className="judgment-grid">
              {SIGNATURE_TALKS.map((talk) => (
                <article key={talk.title}>
                  <span className="kicker">{talk.title}</span>
                  <h3>{talk.premise}</h3>
                  <ul>
                    <li>{talk.abstract}</li>
                    <li>Best for: {talk.bestFor}</li>
                    <li><a className="text-link" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">Inquire About This Talk <ArrowUpRight size={14} /></a></li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section section" id="workshop-loop">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="kicker">THE WORKSHOP LOOP</span><p>Fast enough to matter. Controlled enough to trust.</p></div>
              <h2>Leave with an operating charter, not a motivational afterglow.</h2>
            </div>
            <div className="process-grid">
              {WORKSHOP_LOOP.map(([number, title, body]) => (
                <article key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{body}</p>
                </article>
              ))}
            </div>
            <div className="tag-row" style={{ marginTop: 30 }}>
              {WORKSHOP_DELIVERABLES.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="proof-section section" id="proof">
          <div className="site-container proof-layout">
            <div className="proof-copy">
              <span className="kicker">EXPERIENCE BEHIND THE METHOD</span>
              <h2>Built across environments where reliability, security, and people all matter.</h2>
              <p>
                Enterprise of One did not emerge from productivity theory. My perspective was shaped by production systems across consumer technology, healthcare, media, security, and mission-driven organizations. Those environments taught me that leverage without controls becomes fragility, and controls without operator empathy become bureaucracy.
              </p>
              <a className="text-link" href="/resume.html">See the full career record <ArrowUpRight size={16} /></a>
            </div>
            <div className="proof-ledger">
              {CAREER_EVIDENCE.map(([company, work, domain]) => (
                <div key={company}><span>{company}</span><strong>{work}</strong><em>{domain}</em></div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="site-container about-layout">
            <div className="portrait-mark" aria-hidden="true"><Cpu size={42} /><span>CP / EO1</span></div>
            <div>
              <span className="kicker">ABOUT CALEB PIERRE</span>
              <h2>Systems strategist. Creator of Enterprise of One.</h2>
              <p>
                I'm a Los Angeles-based systems strategist, technologist, and the creator of Enterprise of One. I developed CalebOS while coordinating a portfolio of software, media, education, and community ventures, then translated that practice into a method teams can use to give people greater operating leverage and accountable authority.
              </p>
              <p>
                My background spans cybersecurity, full-stack software, automation, AI systems, and production environments across consumer technology, healthcare, media, and mission-driven organizations. I speak and advise on the design of human-governed intelligent systems and the operating models forming around them.
              </p>
              <ul>
                {BIO_FACTS.map((fact) => <li key={fact}><Check size={16} /> {fact}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <div className="closing-orb" aria-hidden="true"><Radar size={120} /></div>
          <div className="site-container closing-copy">
            <span className="kicker"><Sparkles size={14} /> ONE IDEA. A CLEAR NEXT CONVERSATION.</span>
            <h2>Bring Enterprise of One to your stage, leadership team, or operating model.</h2>
            <p>Share the audience, function, or transformation question you are working through. I will respond with the most useful format: keynote, executive briefing, workshop, or advisory conversation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">
                Inquire About Speaking <ArrowUpRight size={18} />
              </a>
              <a className="button button-light" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">
                Request an Executive Briefing <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
