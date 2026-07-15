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
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.03em",
                }}
              >
                The Next Choice Is Entirely Yours
              </h2>
              <p
                style={{
                  fontFamily: F.body,
                  color: C.inkSoft,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                  maxWidth: "48ch",
                  margin: "0 auto 1rem",
                }}
              >
                You can keep managing chaos — paying people to do what systems
                should do, watching revenue leak through gaps you already know
                about, hoping today isn't the day something breaks.
              </p>
              <p
                style={{
                  fontFamily: F.body,
                  color: C.ink,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: "0.5rem",
                  maxWidth: "48ch",
                  margin: "0 auto 2rem",
                  fontWeight: 600,
                }}
              >
                Or you can decide you've paid that tax for the last time.
              </p>
              <a
                href="https://calendly.com/calebpierre"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pill cta-pill-primary"
                style={{ fontSize: "1rem", padding: "1rem 2rem" }}
              >
                Start the Discovery
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
