import { ArrowUpRight } from "lucide-react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

export default function Reality() {
  return (
    <section
      id="reality"
      className="chapter"
      style={{
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: C.white,
        position: "relative",
      }}
    >
      <div className="cp-container" style={{ width: "100%" }}>
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.riskRed, marginBottom: "1.75rem" }}>
            Caleb Pierre — Systems Engineering
          </p>

          <h1
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2.25rem, 6.5vw, 4.75rem)",
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              maxWidth: "18ch",
              marginBottom: "0.75rem",
            }}
          >
            Most companies don't have an AI problem.
          </h1>
          <h2
            style={{
              fontFamily: F.display,
              color: C.steel,
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              maxWidth: "20ch",
              marginBottom: "2rem",
            }}
          >
            They have an operations problem AI is exposing.
          </h2>

          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: 1.65,
              maxWidth: "52ch",
              marginBottom: "2.5rem",
            }}
          >
            I study how work actually moves through an organization, find
            where time, money, and judgment are being lost, and engineer
            systems that remove the constraint.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="https://calendly.com/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill cta-pill-primary"
              style={{ background: C.navy, boxShadow: `3px 3px 0 ${C.ink}` }}
            >
              Map my operation
              <span className="cta-icon-circle">
                <ArrowUpRight size={18} />
              </span>
            </a>
            <a
              href="#leverage"
              style={{
                fontFamily: F.mono,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                color: C.steel,
                textDecoration: "none",
                borderBottom: `1px solid ${C.line}`,
                paddingBottom: 2,
              }}
            >
              See how it works ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
