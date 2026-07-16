import { ArrowUpRight, Linkedin } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Closing() {
  return (
    <section id="about" className="px-6" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
      <div className="max-w-3xl mx-auto">
        <Reveal>
          {/* About — condensed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ marginBottom: "2rem" }}>
            <div className="swiss-card" style={{ padding: "1.25rem" }}>
              <h2
                style={{
                  fontFamily: F.display,
                  color: C.ink,
                  fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em",
                }}
              >
                I build the machine that replaces the babysitting.
              </h2>
              <p
                style={{
                  fontFamily: F.body,
                  color: C.inkSoft,
                  fontSize: "0.88rem",
                  lineHeight: 1.55,
                }}
              >
                Caleb Pierre. 10 years across Tinder, Verizon Media, CHLA, Glass Financial.
                Security-first, full-stack, documented. No black boxes.
              </p>
            </div>
            <div className="swiss-card" style={{ padding: "1.25rem" }}>
              <a
                href="https://linkedin.com/in/calebpierre"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p
                  style={{
                    fontFamily: F.mono,
                    color: C.red,
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                  }}
                >
                  VERIFY THE OPERATOR
                </p>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} color={C.red} />
                  <span
                    style={{
                      fontFamily: F.body,
                      color: C.ink,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    linkedin.com/in/calebpierre
                  </span>
                  <ArrowUpRight size={14} color={C.steel} />
                </div>
              </a>
            </div>
          </div>

          {/* Final CTA — compact */}
          <div
            id="contact"
            className="swiss-card"
            style={{
              padding: "2rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontFamily: F.display,
                color: C.ink,
                fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                fontWeight: 700,
                marginBottom: "0.75rem",
                letterSpacing: "-0.03em",
              }}
            >
              The Next Choice Is Yours
            </h2>
            <p
              style={{
                fontFamily: F.body,
                color: C.ink,
                fontSize: "0.92rem",
                lineHeight: 1.6,
                maxWidth: "40ch",
                margin: "0 auto 1.5rem",
                fontWeight: 600,
              }}
            >
              Keep managing chaos — or decide you've paid that tax for the last time.
            </p>
            <a
              href="https://calendly.com/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill cta-pill-primary"
              style={{ fontSize: "0.9rem", padding: "0.85rem 1.75rem" }}
            >
              Start the Discovery
              <span className="cta-icon-circle">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
