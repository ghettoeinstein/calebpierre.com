import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const SERVICES = [
  { title: "Operations Engine", body: "Every workflow, handoff, and follow-up running without you watching.", icon: "⚙️" },
  { title: "Autonomous Systems", body: "Systems that do real work — not dashboards, workers.", icon: "🤖" },
  { title: "Automation Layer", body: "Repetitive tasks eliminated. Data flows without humans carrying it.", icon: "⚡" },
  { title: "Business Intelligence", body: "Your entire business on one screen, updated in real time.", icon: "📊" },
  { title: "Security Infrastructure", body: "I find the holes before someone else does. Perimeter sealed.", icon: "🛡️" },
  { title: "Always-On Support", body: "A real engineer on call. Not a ticket — a person who answers.", icon: "📞" },
];

const STEPS = [
  { n: "01", t: "Look", d: "7-minute discovery finds where you're bleeding." },
  { n: "02", t: "Plan", d: "Written blueprint. Every system, in priority order." },
  { n: "03", t: "Build", d: "I build it. Documented. Nothing hidden." },
  { n: "04", t: "Support", d: "I stay on call. Systems adapt when things change." },
];

export default function Services() {
  return (
    <section id="services" className="px-6" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem", background: "#F5F5F5" }}>
      <div className="max-w-5xl mx-auto">
        {/* Services bento */}
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: 700,
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            What I Build
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "0.92rem",
              lineHeight: 1.5,
              maxWidth: "44ch",
              marginBottom: "1.75rem",
            }}
          >
            Six systems. One operator. No handoffs lost in translation.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ marginBottom: "2.5rem" }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div
                className="swiss-card swiss-card-hover"
                style={{ padding: "1.1rem 1.25rem", height: "100%" }}
              >
                <span style={{ fontSize: "1.3rem", display: "block", marginBottom: "0.5rem" }}>{s.icon}</span>
                <h4
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h4>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.8rem",
                    lineHeight: 1.45,
                  }}
                >
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process — compact horizontal strip */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            How It Works
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="swiss-card"
                style={{ padding: "1rem 1.1rem" }}
              >
                <span
                  style={{
                    fontFamily: F.mono,
                    color: C.red,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                  }}
                >
                  {s.n}
                </span>
                <h4
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    margin: "0.25rem 0",
                  }}
                >
                  {s.t}
                </h4>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.78rem",
                    lineHeight: 1.4,
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
