import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const SERVICES = [
  { title: "AI Agent Development", body: "Autonomous systems that run tasks, make decisions, and handle work without human intervention.", icon: "🤖" },
  { title: "Business Automation", body: "Every repetitive task eliminated. Data flows between tools without a human carrying it.", icon: "⚡" },
  { title: "Cybersecurity", body: "Full perimeter check, gap closure, continuous monitoring. I find the holes first.", icon: "🛡️" },
  { title: "Operations Engine", body: "Every workflow, handoff, and follow-up running without you watching it happen.", icon: "⚙️" },
  { title: "Business Intelligence", body: "Your entire business on one screen. Every number, every status, real time.", icon: "📊" },
  { title: "Always-On Support", body: "A real engineer on call. Not a ticket number — a person who answers.", icon: "📞" },
];

const STEPS = [
  { n: "01", t: "Audit", d: "Free 30-minute diagnostic to map your broken workflows." },
  { n: "02", t: "Blueprint", d: "Clear scope, deliverables, and fixed pricing — no hidden fees." },
  { n: "03", t: "Deploy", d: "Production-grade AI, automation, or security built in weeks." },
  { n: "04", t: "Maintain", d: "Ongoing support and monitoring so your infrastructure scales." },
];

export default function Services() {
  return (
    <section id="services" className="px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              marginBottom: "0.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            What I Build
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: "44ch",
              marginBottom: "2.5rem",
            }}
          >
            Six systems. One operator. No handoffs lost in translation.
          </p>
        </Reveal>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ marginBottom: "3rem" }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card card-hover" style={{ padding: "1.5rem", height: "100%" }}>
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }}>{s.icon}</span>
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
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process — clean horizontal strip, no numbered rectangles */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
            How It Works
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{
            gap: "1rem",
            position: "relative",
          }}>
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                style={{
                  padding: "1.25rem",
                  position: "relative",
                }}
              >
                {/* Connecting line — subtle, no boxes */}
                <span
                  style={{
                    display: "block",
                    fontFamily: F.body,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: C.red,
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.n}
                </span>
                <h4
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                  }}
                >
                  {s.t}
                </h4>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
