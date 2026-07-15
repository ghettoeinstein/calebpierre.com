import { ArrowUpRight, Linkedin, Terminal, Shield, Code2, Zap } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const STATS = [
  { value: "50+", label: "Systems Shipped", sub: "Operational engines, automations, security infrastructure" },
  { value: "99.9%", label: "Uptime Maintained", sub: "Across all deployed systems" },
  { value: "0", label: "Black Boxes", sub: "Everything documented and auditable" },
  { value: "1", label: "Operator", sub: "One person. No handoffs lost in translation." },
];

const COMPARISON = [
  {
    frustration: "You follow up manually — and sometimes you forget.",
    relief: "The system follows up. Every time. Without you thinking about it.",
  },
  {
    frustration: "Your tools don't talk to each other. Data lives in silos.",
    relief: "Every tool connected. Data flows in one direction — up to you.",
  },
  {
    frustration: "One person leaves and operations wobble.",
    relief: "Systems hold regardless of who's in the chair. Documented. Transferable.",
  },
  {
    frustration: "You don't know if your business is secure until it isn't.",
    relief: "Perimeter checked, gaps sealed, monitoring continuous. You know before anyone else.",
  },
  {
    frustration: "You spend hours on work a system should handle.",
    relief: "Systems handle ten times the work at zero marginal cost. Hours returned permanently.",
  },
  {
    frustration: "You're flying blind — no real-time view of your own business.",
    relief: "Your entire business on one screen. Every signal, every status, in real time.",
  },
];

const CREDENTIALS = [
  {
    icon: Shield,
    title: "Security-First",
    body: "I find the holes before someone else does. Real security background — not a label on a website.",
  },
  {
    icon: Code2,
    title: "Full-Stack Builder",
    body: "Operations, automation, security, infrastructure — one person. No handoffs lost in translation.",
  },
  {
    icon: Zap,
    title: "Systems That Work",
    body: "Autonomous systems that do real work. Automations that run without you watching them. Not dashboards — workers.",
  },
  {
    icon: Terminal,
    title: "Documented & Auditable",
    body: "Every system ships with readable documentation. You can audit what I build. No black boxes. Ever.",
  },
];

const CASE_STUDIES = [
  {
    tag: "OPERATIONS + AUTOMATION",
    title: "OutsideTonight",
    body: "Full platform — every workflow, every data flow, every system running end to end. Built solo. Operational. Documented.",
    stack: ["Operations Engine", "Automation Layer", "Data Infrastructure"],
  },
  {
    tag: "AUTONOMOUS SYSTEMS",
    title: "Hermes Agent Deployment",
    body: "Production autonomous system with multi-provider routing, scheduled tasks, and a skill system. Runs continuously without human intervention.",
    stack: ["Autonomous Systems", "Task Automation", "Continuous Operation"],
  },
  {
    tag: "OPERATING FRAMEWORK",
    title: "CalebOS 8.0",
    body: "Operating framework with a 95% profit + 95% automation filter on every decision. A system for building systems — from zero to scale.",
    stack: ["Strategy", "Automation", "Documentation"],
  },
];

export default function Proof() {
  return (
    <section id="proof" className="px-6 section-pad">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              maxWidth: "24ch",
              letterSpacing: "-0.02em",
            }}
          >
            The Frustration You Experience Now vs The Relief You Experience Tomorrow
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "52ch",
              marginBottom: "3rem",
            }}
          >
            This is what changes. Not someday — the moment the systems go live.
          </p>
        </Reveal>

        {/* Comparison table — Frustration vs Relief */}
        <Reveal>
          <div className="swiss-card" style={{ marginBottom: "3.5rem", overflow: "hidden" }}>
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: `1px solid ${C.line}`,
              }}
            >
              <div style={{ padding: "1.25rem 1.75rem", borderRight: `1px solid ${C.line}` }}>
                <p style={{ fontFamily: F.mono, color: C.red, fontSize: "0.72rem", letterSpacing: "0.1em", fontWeight: 700 }}>
                  NOW — THE FRUSTRATION
                </p>
              </div>
              <div style={{ padding: "1.25rem 1.75rem" }}>
                <p style={{ fontFamily: F.mono, color: C.ink, fontSize: "0.72rem", letterSpacing: "0.1em", fontWeight: 700 }}>
                  TOMORROW — THE RELIEF
                </p>
              </div>
            </div>
            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderTop: i > 0 ? `1px solid ${C.line}` : "none",
                }}
              >
                <div
                  style={{
                    padding: "1.25rem 1.75rem",
                    borderRight: `1px solid ${C.line}`,
                    background: "#FAFAFA",
                  }}
                >
                  <p style={{ fontFamily: F.body, color: C.steel, fontSize: "0.92rem", lineHeight: 1.6 }}>
                    {row.frustration}
                  </p>
                </div>
                <div style={{ padding: "1.25rem 1.75rem" }}>
                  <p style={{ fontFamily: F.body, color: C.ink, fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 500 }}>
                    {row.relief}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stats — full-width strip */}
        <Reveal>
          <div
            className="swiss-card"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              marginBottom: "3.5rem",
              overflow: "hidden",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "2rem 1.75rem",
                  borderRight: `1px solid ${C.line}`,
                }}
              >
                <p
                  style={{
                    fontFamily: F.display,
                    color: C.red,
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: F.mono,
                    color: C.ink,
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.steel,
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                  }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Deployed systems */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
            Deployed Systems
          </p>
          <div className="flex flex-col gap-4" style={{ marginBottom: "3.5rem" }}>
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.title}
                className="swiss-card swiss-card-hover"
                style={{
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      backgroundColor: C.red,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.62rem",
                      color: C.steel,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {cs.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {cs.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}
                >
                  {cs.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: F.mono,
                        fontSize: "0.68rem",
                        color: C.inkSoft,
                        border: `1px solid ${C.line}`,
                        background: "#FAFAFA",
                        padding: "0.3rem 0.6rem",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Credentials */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
            What You're Actually Getting
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: "3.5rem" }}>
            {CREDENTIALS.map((cred) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.title}
                  className="swiss-card swiss-card-hover"
                  style={{
                    padding: "1.5rem",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Icon size={20} color={C.red} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <h3
                        style={{
                          fontFamily: F.display,
                          color: C.ink,
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          marginBottom: "0.4rem",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {cred.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: F.body,
                          color: C.inkSoft,
                          fontSize: "0.92rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {cred.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* LinkedIn CTA */}
        <Reveal>
          <div
            className="swiss-card"
            style={{
              padding: "2rem 2.25rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <p className="eyebrow">Verify the Operator</p>
            <h3
              style={{
                fontFamily: F.display,
                color: C.ink,
                fontSize: "1.4rem",
                fontWeight: 700,
                maxWidth: "30ch",
                letterSpacing: "-0.02em",
              }}
            >
              Check the background. Read the history. Then decide.
            </h3>
            <p
              style={{
                fontFamily: F.body,
                color: C.inkSoft,
                fontSize: "0.95rem",
                lineHeight: 1.65,
                maxWidth: "52ch",
              }}
            >
              My full career history, recommendations, and credentials are on
              LinkedIn. No curated portfolio — just the real record.
            </p>
            <a
              href="https://linkedin.com/in/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill cta-pill-ghost"
            >
              <Linkedin size={18} />
              linkedin.com/in/calebpierre
              <span className="cta-icon-circle"><ArrowUpRight size={14} /></span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
