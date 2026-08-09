import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const SYSTEMS = ["Salesforce can remain Salesforce.", "NetSuite can remain NetSuite.", "Google Workspace can remain Google Workspace.", "Your team can keep working in the tools they already know."];

export default function DeRisk() {
  return (
    <section className="chapter section-pad" style={{ background: C.offWhite }}>
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.75rem" }}>
            Chapter 07 — De-risking the decision
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.9rem, 4.2vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "2.25rem",
              maxWidth: "20ch",
            }}
          >
            Your systems do not need to be replaced.
          </h2>
        </Reveal>

        <Reveal stagger={0.08}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2.5rem", maxWidth: "48ch" }}>
            {SYSTEMS.map((s) => (
              <p
                key={s}
                style={{
                  fontFamily: F.body,
                  color: C.ink,
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  borderLeft: `3px solid ${C.green}`,
                  paddingLeft: "1rem",
                }}
              >
                {s}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h3
            style={{
              fontFamily: F.display,
              color: C.navy,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Integrate before migrate.
          </h3>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.02rem",
              lineHeight: 1.65,
              maxWidth: "56ch",
            }}
          >
            I engineer around the reality of your organization rather than
            forcing your organization around my technology.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
