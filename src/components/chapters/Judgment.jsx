import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const COLUMNS = [
  {
    title: "SOFTWARE",
    subtitle: "When the answer should always be the same.",
    color: C.ink,
    items: ["Deterministic rules", "Validation & routing", "Data movement between systems"],
  },
  {
    title: "INTELLIGENCE",
    subtitle: "When the work requires interpretation, classification, or judgment.",
    color: C.wire,
    items: ["Ambiguous inputs", "Pattern & context recognition", "Drafting, not deciding"],
  },
  {
    title: "HUMAN",
    subtitle: "When context, responsibility, or risk requires a person.",
    color: C.riskRed,
    items: ["Accountability & sign-off", "Exceptions & edge cases", "Relationships that matter"],
  },
];

export default function Judgment() {
  return (
    <section className="chapter section-pad" style={{ background: C.white }}>
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.75rem" }}>
            Chapter 04 — Engineering judgment
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "0.25rem",
            }}
          >
            I don't start with AI.
          </h2>
          <h2
            style={{
              fontFamily: F.display,
              color: C.steel,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "3rem",
            }}
          >
            I start with the operation.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: "2.5rem" }}>
          {COLUMNS.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.1}>
              <div
                style={{
                  border: `1.5px solid ${C.ink}`,
                  borderTop: `4px solid ${col.color}`,
                  padding: "1.5rem",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    fontFamily: F.mono,
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    color: col.color,
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                  }}
                >
                  {col.title}
                </p>
                <p
                  style={{
                    fontFamily: F.display,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: C.ink,
                    lineHeight: 1.35,
                    marginBottom: "1.1rem",
                  }}
                >
                  {col.subtitle}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {col.items.map((it) => (
                    <p
                      key={it}
                      style={{
                        fontFamily: F.body,
                        fontSize: "0.85rem",
                        color: C.inkSoft,
                        borderTop: `1px solid ${C.line}`,
                        paddingTop: "0.5rem",
                      }}
                    >
                      {it}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.1rem, 2.4vw, 1.4rem)",
              fontWeight: 700,
              lineHeight: 1.5,
              maxWidth: "50ch",
            }}
          >
            The goal isn't to put AI everywhere. The goal is to put
            intelligence exactly where it creates leverage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
