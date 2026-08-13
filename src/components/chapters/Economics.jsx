import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";
import CountUp from "./CountUp.jsx";

export default function Economics() {
  return (
    <section className="chapter section-pad" style={{ background: C.offWhite }}>
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.75rem" }}>
            Chapter 03 — What it costs
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "2.5rem",
              maxWidth: "16ch",
            }}
          >
            Inefficiency compounds.
          </h2>
        </Reveal>

        <Reveal>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ marginBottom: "2rem" }}
          >
            {[
              { to: 11, suffix: " min", label: "per request" },
              { to: 428, prefix: "×", label: "requests / week" },
              { to: 52, prefix: "×", label: "weeks / year" },
              { to: 4081, label: "hours / year", accent: true },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  border: `1.5px solid ${s.accent ? C.navy : C.line}`,
                  background: C.white,
                  padding: "1.25rem 1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: F.display,
                    color: s.accent ? C.navy : C.ink,
                    fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                    fontWeight: 800,
                    marginBottom: "0.35rem",
                  }}
                >
                  {s.prefix}
                  <CountUp to={s.to} />
                  {s.suffix}
                </p>
                <p className="mono-tag" style={{ color: C.steel }}>{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              marginBottom: "2.5rem",
            }}
          >
            {["errors", "missed revenue", "rework", "customer delay", "management attention", "compliance exposure"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: F.mono,
                  fontSize: "0.75rem",
                  color: C.riskRed,
                  border: `1px solid ${C.riskRed}`,
                  padding: "0.3rem 0.7rem",
                }}
              >
                + {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div
            style={{
              borderTop: `2px solid ${C.ink}`,
              paddingTop: "1.75rem",
            }}
          >
            <p className="mono-tag" style={{ color: C.steel, marginBottom: "0.5rem" }}>
              ONE WORKFLOW, ILLUSTRATIVE MODEL
            </p>
            <p
              style={{
                fontFamily: F.display,
                color: C.green,
                fontWeight: 900,
                fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
                letterSpacing: "-0.03em",
                marginBottom: "0.75rem",
              }}
            >
              $<CountUp to={387000} />
            </p>
            <p
              style={{
                fontFamily: F.body,
                color: C.ink,
                fontSize: "1.05rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              of operating capacity trapped in one workflow.
            </p>
            <p
              style={{
                fontFamily: F.body,
                color: C.inkSoft,
                fontSize: "0.95rem",
                lineHeight: 1.6,
                maxWidth: "56ch",
              }}
            >
              You don't need to believe AI is revolutionary for this to
              matter. This is a modeled example of a mid-size operational
              workflow — the same math applies to yours once we measure it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
