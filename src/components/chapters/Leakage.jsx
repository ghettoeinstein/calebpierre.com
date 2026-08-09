import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const FLOW = [
  "Customer request",
  "Inbox",
  "Spreadsheet",
  "Employee",
  "Slack",
  "Manager",
  "CRM",
  "ERP",
];

const EXCEPTIONS = [
  "missing attachment",
  "wrong customer record",
  "waiting for approval",
  "copied twice",
  "forgotten follow-up",
  "manual re-entry",
  "“ask Sarah”",
  "spreadsheet_v4_FINAL_final.xlsx",
];

export default function Leakage() {
  return (
    <section id="leverage" className="chapter section-pad" style={{ background: C.white }}>
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.riskRed, marginBottom: "0.75rem" }}>
            Chapter 02 — Where value leaks
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              maxWidth: "18ch",
              marginBottom: "3rem",
            }}
          >
            Somewhere inside your company, value is leaking.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: "2.5rem" }}>
          <Reveal stagger={0.08}>
            <p className="mono-tag" style={{ color: C.steel, marginBottom: "0.75rem" }}>
              THE WORKFLOW, ON PAPER
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {FLOW.map((step, i) => (
                <div key={step}>
                  <div
                    style={{
                      border: `1.5px solid ${C.ink}`,
                      background: C.white,
                      padding: "0.65rem 1rem",
                      fontFamily: F.body,
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      color: C.ink,
                    }}
                  >
                    {step}
                  </div>
                  {i < FLOW.length - 1 && (
                    <div
                      style={{
                        height: 18,
                        width: 2,
                        background: C.line,
                        margin: "0 auto",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal stagger={0.06} delay={0.25}>
            <p className="mono-tag" style={{ color: C.riskRed, marginBottom: "0.75rem" }}>
              THE WORKFLOW, IN PRACTICE
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {EXCEPTIONS.map((ex) => (
                <div
                  key={ex}
                  style={{
                    border: `1px dashed ${C.riskRed}`,
                    background: C.riskRedGlow,
                    padding: "0.55rem 0.85rem",
                    fontFamily: F.mono,
                    fontSize: "0.78rem",
                    color: "#8A241B",
                  }}
                >
                  {ex}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            The SOP is not the operation.
          </h3>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.05rem",
              lineHeight: 1.65,
              maxWidth: "56ch",
            }}
          >
            The real business lives in exceptions, workarounds, judgment
            calls, handoffs, and the knowledge people carry in their heads.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
