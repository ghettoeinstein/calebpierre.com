import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import BootSequence from "./BootSequence.jsx";
import Ticker from "./Ticker.jsx";

export default function Hero() {
  const [booted, setBooted] = useState(false);

  return (
    <section style={{
      paddingTop: "2rem",
      paddingBottom: "0",
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
    }}>
      <div className="haring-bg" />

      <div className="cp-container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Boot terminal */}
        <div
          className="swiss-card"
          style={{
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
            maxWidth: "28rem",
            background: "#FFFFFF",
          }}
        >
          <BootSequence onDone={() => setBooted(true)} />
        </div>

        {/* Main hero content */}
        <div
          style={{
            opacity: booted ? 1 : 0,
            transform: booted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
            Los Angeles · Remote-First
          </p>

          <h1
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              lineHeight: 1.0,
              fontWeight: 400,
              marginBottom: "1.25rem",
              maxWidth: "16ch",
              letterSpacing: "-0.03em",
            }}
          >
            The Hidden Drain Inside Your Business
          </h1>

          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.6,
              maxWidth: "46ch",
              marginBottom: "1.75rem",
            }}
          >
            Every day, human error quietly drains revenue. Missed follow-ups,
            broken handoffs, tasks that should take minutes but consume hours.
            I replace that uncertainty with systems that run themselves.
          </p>

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#diagnostic"
              className="cta-pill cta-pill-primary"
              style={{ justifyContent: "center" }}
            >
              UNCOVER THE DRAIN
              <span className="cta-icon-circle">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <a
              href="#work"
              className="cta-pill cta-pill-ghost"
              style={{ justifyContent: "center" }}
            >
              See the Work
            </a>
          </div>
        </div>
      </div>

      {/* Ticker at the bottom */}
      <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
        <Ticker />
      </div>
    </section>
  );
}
