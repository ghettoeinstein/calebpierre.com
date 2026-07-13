import { ArrowUpRight, Linkedin, Terminal, Shield, Code2, Zap } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const STATS = [
  { value: "50+", label: "Systems Shipped", sub: "Web apps, automations, AI agents, security audits" },
  { value: "99.9%", label: "Uptime Maintained", sub: "Across all deployed infrastructure" },
  { value: "6", label: "Service Modules", sub: "Full-stack coverage under one operator" },
  { value: "0", label: "Black Boxes", sub: "Everything comes with documentation" },
];

const STACK = [
  "React", "Next.js", "TypeScript", "Python", "FastAPI", "Node.js",
  "PostgreSQL", "Redis", "Docker", "Tailwind CSS", "Vite", "p5.js",
  "OpenAI", "Claude", "Ollama", "GitHub Actions", "AWS", "Cloudflare",
];

const CREDENTIALS = [
  {
    icon: Shield,
    title: "Security-First",
    body: "I find the holes before someone else does. Real security background, not just a label.",
  },
  {
    icon: Code2,
    title: "Full-Stack Builder",
    body: "Frontend, backend, infrastructure, AI, security — one person, no handoffs lost in translation.",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    body: "Custom AI agents that do real work. Automations that run without you watching them.",
  },
  {
    icon: Terminal,
    title: "Documented & Auditable",
    body: "Every system ships with readable docs. You can audit what I build. No black boxes.",
  },
];

const CASE_STUDIES = [
  {
    tag: "WEB + AUTOMATION",
    title: "OutsideTonight",
    body: "Full platform with 28 database tables, 126 tests, 3D parallax homepage, AI agent swarm, and a messaging system. Built solo, end to end.",
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    tag: "AI INFRASTRUCTURE",
    title: "Hermes Agent Deployment",
    body: "Production AI agent system with multi-provider routing, cron scheduling, skill system, and local Ollama models for cheap background tasks.",
    stack: ["Python", "Ollama", "OpenAI", "Claude", "Telegram API"],
  },
  {
    tag: "BUSINESS FRAMEWORK",
    title: "CalebOS 8.0",
    body: "Operating framework with a 95% profit + 95% automation filter on every decision. State machine for business growth from zero to infinity.",
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
              maxWidth: "22ch",
              letterSpacing: "-0.02em",
            }}
          >
            Don't take my word for it. Read the work.
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
            Every claim here is backed by shipped code, running systems, or
            documentation you can read yourself. No portfolio fluff.
          </p>
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

        {/* Case studies */}
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

        {/* Tech stack */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2" style={{ marginBottom: "3rem" }}>
            {STACK.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: F.mono,
                  fontSize: "0.72rem",
                  color: C.inkSoft,
                  border: `1px solid ${C.line}`,
                  background: "#FAFAFA",
                  padding: "0.45rem 0.75rem",
                  letterSpacing: "0.03em",
                }}
              >
                {tech}
              </span>
            ))}
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
              Check the background. Read the history. Then book the call.
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
