import { ArrowUpRight, Check } from "lucide-react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const MAP = ["the workflow", "the systems", "the people", "the exceptions", "the judgment points", "the economics", "the automation boundary"];
const LEAVE = ["a current-state operating map", "a future-state architecture", "an opportunity ranking", "a deployment recommendation", "an ROI model"];

export default function Offer() {
  return (
    <section
      id="start"
      className="chapter"
      style={{
        background: C.navy,
        padding: "clamp(3.5rem, 9vw, 7rem) 0",
      }}
    >
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.navyTextSoft, marginBottom: "0.75rem" }}>
            Chapter 12 — Start here
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.navyText,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "0.75rem",
              maxWidth: "16ch",
            }}
          >
            Start with one workflow.
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.navyTextSoft,
              fontSize: "1.05rem",
              lineHeight: 1.65,
              maxWidth: "52ch",
              marginBottom: "3rem",
            }}
          >
            Give me one process that is expensive, slow, fragile, or
            dependent on too much human coordination.
          </p>
        </Reveal>

        <Reveal>
          <div
            style={{
              border: `1px solid ${C.navyLine}`,
              background: C.navyPanel,
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              marginBottom: "2.5rem",
            }}
          >
            <p style={{ fontFamily: F.mono, fontSize: "0.75rem", letterSpacing: "0.1em", color: C.wire, marginBottom: "0.5rem" }}>
              THE OFFER
            </p>
            <h3 style={{ fontFamily: F.display, color: C.navyText, fontSize: "1.6rem", fontWeight: 800, marginBottom: "1.5rem" }}>
              Systems Intelligence Sprint
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mono-tag" style={{ color: C.navyTextSoft, marginBottom: "0.75rem" }}>WE WILL MAP</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {MAP.map((m) => (
                    <span key={m} style={{ fontFamily: F.body, color: C.navyText, fontSize: "0.92rem" }}>{m}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mono-tag" style={{ color: C.navyTextSoft, marginBottom: "0.75rem" }}>YOU LEAVE WITH</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {LEAVE.map((l) => (
                    <div key={l} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <Check size={15} color={C.green} style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontFamily: F.body, color: C.navyText, fontSize: "0.92rem" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <a
            href="https://calendly.com/calebpierre"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill cta-pill-primary"
            style={{ fontSize: "1rem", padding: "1rem 2rem" }}
          >
            Map my workflow
            <span className="cta-icon-circle">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
