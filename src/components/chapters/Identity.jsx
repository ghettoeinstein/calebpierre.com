import { Linkedin, ArrowUpRight } from "lucide-react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const TRAITS = [
  "Close enough to the operation to understand what actually happens.",
  "Technical enough to engineer the system.",
  "Commercial enough to know whether it is worth building.",
  "Security-minded enough to know where autonomy should stop.",
];

export default function Identity() {
  return (
    <section id="about" className="chapter section-pad" style={{ background: C.offWhite }}>
      <div className="cp-container" style={{ maxWidth: 760 }}>
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.75rem" }}>
            Chapter 11 — The operator
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.9rem, 4.2vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "2rem",
              maxWidth: "18ch",
            }}
          >
            I work between the business and the machine.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
            {TRAITS.map((t) => (
              <p key={t} style={{ fontFamily: F.body, color: C.ink, fontSize: "1.02rem", fontWeight: 600, borderLeft: `3px solid ${C.wire}`, paddingLeft: "1rem" }}>
                {t}
              </p>
            ))}
          </div>

          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.02rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            I'm Caleb Pierre — ten years across Tinder (Security Engineer II),
            Verizon Media, Children's Hospital Los Angeles, and Glass
            Financial (CTO). I work with operators and technical teams to
            turn messy business processes into observable, testable, and
            increasingly automated systems. Sometimes the answer is AI.
            Sometimes it's conventional software. Often it's a carefully
            designed combination of both.
          </p>

          <a
            href="https://linkedin.com/in/calebpierre"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill cta-pill-ghost"
          >
            <Linkedin size={16} color={C.navy} />
            linkedin.com/in/calebpierre
            <span className="cta-icon-circle"><ArrowUpRight size={14} /></span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
