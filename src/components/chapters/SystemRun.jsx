import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const STEPS = [
  "INTAKE VALIDATED",
  "CONTEXT ASSEMBLED",
  "SYSTEM DECISION",
  "HUMAN CHECKPOINT",
  "ACTION EXECUTED",
  "RECORD UPDATED",
];

const LOG = [
  { t: "18:44:21", m: "request received" },
  { t: "18:44:21", m: "schema valid" },
  { t: "18:44:22", m: "account matched" },
  { t: "18:44:22", m: "policy retrieved" },
  { t: "18:44:23", m: "confidence 0.94" },
  { t: "18:44:23", m: "action drafted" },
  { t: "18:45:04", m: "human approved", accent: C.green },
  { t: "18:45:05", m: "CRM updated" },
  { t: "18:45:05", m: "evidence recorded", accent: C.wire },
];

export default function SystemRun() {
  return (
    <section
      id="systems"
      className="chapter"
      style={{
        background: C.navy,
        padding: "clamp(3rem, 8vw, 6rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="cp-container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.navyTextSoft, marginBottom: "0.75rem" }}>
            One run · end to end
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: F.mono,
              fontSize: "0.85rem",
              color: C.navyText,
              border: `1px solid ${C.navyLine}`,
              padding: "0.5rem 0.9rem",
              marginBottom: "2.5rem",
            }}
          >
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block" }} />
            vendor_invoice_0417.pdf
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* pipeline */}
          <Reveal stagger={0.12}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {STEPS.map((step, i) => (
                <div key={step}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      border: `1px solid ${C.navyLine}`,
                      background: C.navyPanel,
                      padding: "0.9rem 1.1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: F.mono,
                        fontSize: "0.72rem",
                        color: C.wire,
                        fontWeight: 700,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: F.mono,
                        fontSize: "0.82rem",
                        letterSpacing: "0.06em",
                        color: step === "HUMAN CHECKPOINT" ? C.riskRed : C.navyText,
                        fontWeight: 600,
                      }}
                    >
                      {step}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="wire-line" style={{ height: 20, width: 2, margin: "0 auto" }} />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* evidence log */}
          <Reveal stagger={0.1} delay={0.3}>
            <div
              style={{
                border: `1px solid ${C.navyLine}`,
                background: "rgba(0,0,0,0.25)",
                padding: "1.25rem",
                fontFamily: F.mono,
                fontSize: "0.8rem",
                lineHeight: 1.9,
                height: "100%",
              }}
            >
              <p style={{ color: C.navyTextSoft, marginBottom: "0.75rem", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
                EVIDENCE LOG
              </p>
              {LOG.map((l) => (
                <div key={l.t + l.m} style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#4A5C7A" }}>{l.t}</span>
                  <span style={{ color: l.accent || C.navyText }}>{l.m}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
