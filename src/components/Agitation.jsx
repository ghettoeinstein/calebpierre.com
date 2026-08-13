import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const PAINS = [
  {
    icon: "🌐",
    title: "Outdated Web & Funnels",
    body: "Your site was built once and forgotten — costing you leads every day.",
  },
  {
    icon: "🔄",
    title: "Manual & Repetitive Work",
    body: "Your team spends hours copying data between tools instead of growing the business.",
  },
  {
    icon: "🛡️",
    title: "Unchecked Security Risks",
    body: "One unmonitored vulnerability or compliance gap can disrupt your entire operation.",
  },
];

export default function Agitation() {
  return (
    <section className="px-6" style={{ paddingTop: "3rem", paddingBottom: "3rem", background: "#F8F9FA" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: 700,
              marginBottom: "0.5rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            What's quietly costing you right now?
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
            These aren't theoretical problems. They're draining revenue from your
            business right now.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="card card-hover" style={{ padding: "1.5rem" }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>
                  {p.icon}
                </span>
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.95rem",
                    lineHeight: 1.55,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
