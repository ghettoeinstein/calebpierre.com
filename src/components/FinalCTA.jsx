import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function FinalCTA() {
  return (
    <section id="contact" className="px-6 section-pad">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div
            className="swiss-card"
            style={{
              padding: "3rem 2.5rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: F.display,
                  color: C.ink,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.03em",
                }}
              >
                Get on the call. Get a real plan. That's it.
              </h2>
              <p
                style={{
                  fontFamily: F.body,
                  color: C.inkSoft,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: "0.75rem",
                }}
              >
                No pressure, no vague advice. I'll look at what you have and
                tell you exactly what's broken and how to fix it.
              </p>
              <p
                style={{
                  fontFamily: F.body,
                  color: C.steel,
                  fontSize: "0.95rem",
                  marginBottom: "2rem",
                }}
              >
                Free systems audit. No obligation. Just a straight answer.
              </p>
              <a
                href="https://calendly.com/calebpierre"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pill cta-pill-primary"
                style={{ fontSize: "1rem", padding: "1rem 2rem" }}
              >
                Book Your Free Audit
                <span className="cta-icon-circle">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
