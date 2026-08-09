import { useState } from "react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const STEPS = [
  { t: "OBSERVE", d: "See the work performed, not merely described." },
  { t: "MAP", d: "Capture systems, people, decisions, exceptions, and dependencies." },
  { t: "VALUE", d: "Determine where improvement materially changes revenue, cost, or risk." },
  { t: "ENGINEER", d: "Use software, AI, and human judgment deliberately." },
  { t: "EVALUATE", d: "Test the system against reality before trusting it." },
  { t: "DEPLOY", d: "Integrate gradually into the existing environment." },
  { t: "IMPROVE", d: "Production evidence reveals the next constraint." },
];

export default function Method() {
  const [active, setActive] = useState(0);

  return (
    <section className="chapter section-pad" style={{ background: C.white }}>
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.75rem" }}>
            Chapter 08 — The method
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.9rem, 4.2vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "2.5rem",
              maxWidth: "22ch",
            }}
          >
            From operational reality to measurable advantage.
          </h2>
        </Reveal>

        <Reveal>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "1.75rem",
            }}
          >
            {STEPS.map((s, i) => (
              <button
                key={s.t}
                onClick={() => setActive(i)}
                style={{
                  fontFamily: F.mono,
                  fontSize: "0.78rem",
                  letterSpacing: "0.06em",
                  padding: "0.55rem 0.9rem",
                  cursor: "pointer",
                  border: `1.5px solid ${i === active ? C.navy : C.line}`,
                  background: i === active ? C.navy : "transparent",
                  color: i === active ? C.white : C.ink,
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                }}
              >
                {s.t}
              </button>
            ))}
          </div>

          <div
            style={{
              border: `1.5px solid ${C.ink}`,
              padding: "1.75rem",
              minHeight: 110,
            }}
          >
            <p className="mono-tag" style={{ color: C.wire, marginBottom: "0.5rem" }}>
              {String(active + 1).padStart(2, "0")} / {STEPS[active].t}
            </p>
            <p
              style={{
                fontFamily: F.display,
                color: C.ink,
                fontSize: "1.35rem",
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              {STEPS[active].d}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
