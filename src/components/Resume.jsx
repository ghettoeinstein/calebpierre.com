import { useRef, useEffect, useState } from "react";
import {
  Brain, Shield, Code2, ArrowUpRight, Linkedin,
  Cpu, Lock, Terminal, Cloud, Zap, Activity,
} from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

/* =========================================================
   PARALLAX HOOK — depth layers move at different scroll speeds
   ========================================================= */
function useParallax(speed = 0.3) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const screenCenter = windowH / 2;
      const delta = elementCenter - screenCenter;
      setOffset(delta * speed);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return [ref, offset];
}

/* =========================================================
   SKILL PILLAR DATA
   ========================================================= */
const PILLARS = [
  {
    icon: Brain,
    title: "AI & Automation",
    color: C.red,
    skills: [
      "AI Agent Development",
      "LLM Orchestration",
      "MCP Integration",
      "Zapier · n8n · Make",
      "Prompt Engineering",
      "RAG Pipelines",
    ],
  },
  {
    icon: Shield,
    title: "Security Engineering",
    color: C.ink,
    skills: [
      "SOAR / SIEM (Splunk, QRadar)",
      "Zero Trust Architecture",
      "HIPAA · HiTECH Compliance",
      "Rapid7 · Tenable",
      "Incident Response",
      "Bug Bounty (HackerOne)",
    ],
  },
  {
    icon: Code2,
    title: "Build & Deploy",
    color: C.steel,
    skills: [
      "Python · Go · Bash",
      "Next.js · React · Node",
      "AWS · GCP · Docker",
      "CI/CD · GitHub Actions",
      "PostgreSQL · MongoDB",
      "REST · GraphQL APIs",
    ],
  },
];

/* =========================================================
   EXPERIENCE TIMELINE — 11 roles, narratively ordered
   ========================================================= */
const EXPERIENCE = [
  {
    period: "Feb 2021 – Present",
    role: "Forward Deployed AI Engineer / Founder",
    company: "Caleb Pierre Ventures",
    location: "Carson, CA",
    icon: Brain,
    tag: "CURRENT",
    highlights: [
      "Architect and deploy end-to-end AI agent systems embedded directly inside client environments — scoping ambiguous operational problems on day one and owning them through production.",
      "Built agentic workflows integrating LLMs, MCP servers, and business APIs (CRM, EHR-adjacent, communication channels) that eliminated 40–60% of manual overhead for nonprofit and enterprise clients.",
      "Designed multi-stack automation pipelines using Zapier, n8n, Python agents, and REST/GraphQL integrations connecting disparate systems into unified, self-operating infrastructure.",
      "Deployed production AI systems on Next.js + Docker + AWS/GCP including NLP-powered intake automation, intelligent knowledge bases, and AI-native customer interaction layers.",
      "Conducted HIPAA/HiTECH security audits for healthcare organizations — delivering technical remediation roadmaps and automated compliance monitoring pipelines.",
    ],
  },
  {
    period: "Jun 2025 – Present",
    role: "IT Director",
    company: "Social Service Advocacy",
    location: "Gardena, CA",
    icon: Cloud,
    tag: "CURRENT",
    highlights: [
      "Serve as embedded IT Director for a nonprofit serving justice-impacted individuals — owning the full technical environment including infrastructure, compliance, security policy, and workflow automation.",
      "Implemented GCP and Google Workspace across the organization with HIPAA-aligned data privacy controls, access governance, and encryption policies — bringing the environment into full compliance.",
      "Authored and enforced organization-wide security policies covering data handling, acceptable use, incident response, and user access management — establishing the first formal security posture in the organization's history.",
      "Automated administrative and case management workflows using no-code and AI-native tools to eliminate manual data entry, reduce staff overhead, and create auditable, repeatable operational processes.",
    ],
  },
  {
    period: "Dec 2023 – Apr 2024",
    role: "AI Workflow Engineer (Contract)",
    company: "Union Rescue Mission",
    location: "Los Angeles, CA",
    icon: Zap,
    highlights: [
      "Deployed Zapier-driven automation pipelines connecting CRM, email, and social channels via REST API orchestration, reducing manual workload by 40%.",
      "Containerized multi-environment WordPress infrastructure (staging / testing / production) with Git-based version control — achieving zero deployment errors.",
    ],
  },
  {
    period: "May 2024 – Sep 2024",
    role: "Full-Stack Engineer (Apprenticeship)",
    company: "Hack Reactor",
    location: "Remote",
    icon: Code2,
    highlights: [
      "Shipped 5+ full-stack applications in Python and React deployed to AWS with Docker-based CI/CD via GitHub Actions, cutting deployment cycle time by 60%.",
    ],
  },
  {
    period: "Dec 2019 – Feb 2021",
    role: "Security Engineer II",
    company: "Tinder",
    location: "West Hollywood, CA",
    icon: Lock,
    highlights: [
      "Designed and deployed SOAR playbooks integrated with Splunk SIEM — automating threat detection, incident response, and access event handling end-to-end. Increased SOC efficiency by 50%.",
      "Automated endpoint protection and vulnerability management workflows across the full enterprise, maintaining secure asset identity and access controls at consumer scale.",
    ],
  },
  {
    period: "Dec 2018 – Nov 2019",
    role: "Technical Security Engineer (Contract)",
    company: "Verizon Media",
    location: "Playa Del Rey, CA",
    icon: Shield,
    highlights: [
      "Managed HackerOne external bug bounty program — triaging and validating web application vulnerabilities including access control flaws across production systems.",
      "Built custom Bash/Ruby automation scripts that accelerated vulnerability remediation cycles by 70% across enterprise infrastructure and application stacks.",
    ],
  },
  {
    period: "Aug 2018 – Nov 2018",
    role: "Information Security Engineer (Contract)",
    company: "Willis Towers Watson",
    location: "Los Angeles, CA",
    icon: Activity,
    highlights: [
      "Deployed and automated enterprise-wide asset discovery via Rapid7, achieving 100% asset visibility for IAM and compliance reporting across the full environment.",
    ],
  },
  {
    period: "Jul 2017 – Apr 2018",
    role: "Information Security Analyst II (Contract)",
    company: "Children's Hospital Los Angeles",
    location: "Los Angeles, CA",
    icon: Shield,
    highlights: [
      "Maintained 100% HIPAA audit compliance through precision SIEM tuning and threat intelligence integration. Reduced security alert noise by 40%.",
    ],
  },
  {
    period: "Nov 2016 – Jun 2017",
    role: "Co-Founder & CTO",
    company: "Glass Financial",
    location: "Los Angeles, CA",
    icon: Cpu,
    highlights: [
      "Architected Golang backend API with MongoDB and enterprise-grade security controls for a production fintech application.",
    ],
  },
  {
    period: "Aug 2016 – Dec 2016",
    role: "Vulnerability Engineer (Contract)",
    company: "UCLA Health",
    location: "Los Angeles, CA",
    icon: Lock,
    highlights: [
      "Executed vulnerability remediation across 5,000+ assets ensuring HIPAA compliance across critical healthcare infrastructure.",
    ],
  },
  {
    period: "Jul 2015 – Aug 2016",
    role: "Frontline Support Engineer",
    company: "Rapid7",
    location: "Los Angeles, CA",
    icon: Terminal,
    highlights: [
      "Frontline security support and product guidance for enterprise customers deploying vulnerability management solutions.",
    ],
  },
];

/* =========================================================
   PARALLAX LAYER — wraps children with scroll-driven Y offset
   ========================================================= */
function ParallaxLayer({ children, speed = 0.15, className = "" }) {
  const [ref, offset] = useParallax(speed);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   SKILL PILLAR CARD
   ========================================================= */
function SkillPillar({ pillar, index }) {
  const Icon = pillar.icon;
  return (
    <Reveal delay={index * 0.1}>
      <div
        style={{
          backgroundColor: C.paper,
          border: `1px solid ${C.line}`,
          padding: "2rem 1.75rem",
          position: "relative",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {/* glow accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: pillar.color,
          }}
        />
        <div
          className="flex items-center gap-3"
          style={{ marginBottom: "1.5rem" }}
        >
          <Icon size={24} color={pillar.color} />
          <h3
            style={{
              fontFamily: F.display,
              fontSize: "1.25rem",
              fontWeight: 700,
              color: C.ink,
            }}
          >
            {pillar.title}
          </h3>
        </div>
        <div className="flex flex-col gap-2.5">
          {pillar.skills.map((skill, i) => (
            <div
              key={skill}
              className="flex items-center gap-2.5"
              style={{
                opacity: 0,
                animation: `fadeInSkill 0.4s ease ${0.3 + i * 0.08}s forwards`,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: C.red,
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: F.mono,
                  fontSize: "0.82rem",
                  color: C.ink,
                  letterSpacing: "0.01em",
                }}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* =========================================================
   TIMELINE ENTRY
   ========================================================= */
function TimelineEntry({ exp, index }) {
  const Icon = exp.icon;
  const isEven = index % 2 === 0;
  return (
    <Reveal delay={0.05}>
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          marginBottom: "3rem",
          position: "relative",
        }}
      >
        {/* Timeline rail + dot */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: 0,
            width: "48px",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: `2px solid ${C.red}`,
              backgroundColor: C.paper,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              zIndex: 2,
              position: "relative",
            }}
          >
            <Icon size={18} color={C.ink} />
          </div>
          {/* vertical line */}
          {index < EXPERIENCE.length - 1 && (
            <div
              style={{
                width: 2,
                flexGrow: 1,
                backgroundColor: C.line,
                marginTop: "0.5rem",
                minHeight: "60px",
              }}
            />
          )}
        </div>

        {/* Content card */}
        <div
          style={{
            flex: 1,
            backgroundColor: C.paper,
            border: `1px solid ${C.line}`,
            padding: "1.5rem 1.75rem",
            position: "relative",
            overflow: "hidden",
          }}
          className="timeline-card"
        >
          {/* tag badge */}
          {exp.tag && (
            <span
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontFamily: F.mono,
                fontSize: "0.62rem",
                fontWeight: 700,
                color: "#fff",
                backgroundColor: C.red,
                padding: "0.2rem 0.5rem",
                letterSpacing: "0.08em",
              }}
            >
              {exp.tag}
            </span>
          )}

          {/* period */}
          <p
            style={{
              fontFamily: F.mono,
              fontSize: "0.7rem",
              color: C.red,
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}
          >
            {exp.period}
          </p>

          {/* role + company */}
          <h3
            style={{
              fontFamily: F.display,
              fontSize: "1.15rem",
              fontWeight: 700,
              color: C.ink,
              marginBottom: "0.25rem",
              lineHeight: 1.3,
            }}
          >
            {exp.role}
          </h3>
          <p
            style={{
              fontFamily: F.body,
              fontSize: "0.88rem",
              color: C.steel,
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            {exp.company} · {exp.location}
          </p>

          {/* highlights */}
          <div className="flex flex-col gap-2">
            {exp.highlights.map((h, i) => (
              <p
                key={i}
                style={{
                  fontFamily: F.body,
                  fontSize: "0.85rem",
                  color: C.ink,
                  lineHeight: 1.65,
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: C.red,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  ▸
                </span>
                <span>{h}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* =========================================================
   MAIN RESUME SECTION
   ========================================================= */
export default function Resume() {
  const [heroRef, heroOffset] = useParallax(0.12);

  return (
    <section className="px-6 py-24" style={{ backgroundColor: C.paper }}>
      {/* Parallax background decorative elements */}
      <ParallaxLayer speed={0.08} className="resume-bg-layer">
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(225,6,0,0.04) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.15} className="resume-bg-layer">
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "-8%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(11,11,11,0.03) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      </ParallaxLayer>

      <div className="max-w-4xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        {/* ---- Hero header ---- */}
        <div ref={heroRef} style={{ transform: `translateY(${heroOffset}px)` }}>
          <Reveal>
            <p
              style={{
                fontFamily: F.mono,
                color: C.red,
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              The Record
            </p>
            <h2
              style={{
                fontFamily: F.display,
                color: C.ink,
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                maxWidth: "18ch",
              }}
            >
              From securing Tinder to building AI agents that run themselves.
            </h2>
            <p
              style={{
                fontFamily: F.body,
                color: C.steel,
                fontSize: "1.05rem",
                lineHeight: 1.75,
                maxWidth: "56ch",
                marginBottom: "2rem",
              }}
            >
              A decade inside enterprise security teams, startup CTO roles, and
              nonprofit infrastructure — now building the AI systems that replace
              the manual work I used to audit. Every role below is a chapter, not
              a bullet point.
            </p>
            <a
              href="https://linkedin.com/in/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: F.mono,
                color: C.ink,
                fontSize: "0.82rem",
                border: `1px solid ${C.line}`,
                padding: "0.6rem 1rem",
                textDecoration: "none",
                marginBottom: "3.5rem",
              }}
            >
              <Linkedin size={16} color={C.red} />
              Full history on LinkedIn
              <ArrowUpRight size={14} color={C.steel} />
            </a>
          </Reveal>
        </div>

        {/* ---- Skill Pillars ---- */}
        <Reveal>
          <p
            style={{
              fontFamily: F.mono,
              color: C.red,
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Three Disciplines, One Operator
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5" style={{ marginBottom: "4rem" }}>
          {PILLARS.map((pillar, i) => (
            <SkillPillar key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* ---- Timeline ---- */}
        <Reveal>
          <p
            style={{
              fontFamily: F.mono,
              color: C.red,
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Professional Experience
          </p>
        </Reveal>
        <div>
          {EXPERIENCE.map((exp, i) => (
            <TimelineEntry key={exp.company + exp.period} exp={exp} index={i} />
          ))}
        </div>

        {/* ---- Bottom CTA ---- */}
        <Reveal>
          <div
            style={{
              borderTop: `2px solid ${C.ink}`,
              paddingTop: "2rem",
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: F.body,
                color: C.steel,
                fontSize: "0.95rem",
                lineHeight: 1.7,
                maxWidth: "50ch",
              }}
            >
              10 years. 11 roles. Enterprise security at Tinder and Verizon.
              Fintech CTO. Healthcare compliance. AI agent systems for nonprofits.
              All of it documented, all of it auditable.
            </p>
            <a
              href="https://linkedin.com/in/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3"
              style={{
                backgroundColor: C.ink,
                color: "#fff",
                fontFamily: F.body,
                fontWeight: 600,
                fontSize: "0.88rem",
                textDecoration: "none",
                alignSelf: "flex-start",
              }}
            >
              <Linkedin size={16} />
              Verify on LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
