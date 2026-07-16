import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import BootSequence from "./BootSequence.jsx";
import Ticker from "./Ticker.jsx";

export default function Hero() {
  const [booted, setBooted] = useState(false);

  return (
    <section style={{
      paddingTop: "3rem",
      paddingBottom: "0",
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
    }}>
      {/* Haring background dots */}
      <div className="haring-bg" />

      <div className="cp-container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Boot terminal */}
        <div
          className="swiss-card"
          style={{
            padding: "1.5rem 1.75rem",
            marginBottom: "2.5rem",
            maxWidth: "32rem",
            background: "#FFFFFF",
          }}
        >
          <BootSequence onDone={() => setBooted(true)} />
        </div>

        {/* Main hero content */}
        <div
          style={{
            opacity: booted ? 1 : 0,
            transform: booted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Eyebrow — one line at all breakpoints */}
          <p
            className="eyebrow"
            style={{
              marginBottom: "1.25rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Los Angeles · Remote-First
          </p>

          {/* Headline — responsive max-width in ch units */}
          <h1
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2.2rem, 6vw, 4.75rem)",
              lineHeight: 1.0,
              fontWeight: 400, // Archivo Black is already heavy
              marginBottom: "1.75rem",
              maxWidth: "18ch",
              letterSpacing: "-0.03em",
            }}
          >
            The Hidden Drain inside Your Business that You Are Constantly Trying to Ignore
          </h1>

          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.7,
              maxWidth: "50ch",
              marginBottom: "2.5rem",
            }}
          >
            Every day, human error quietly drains revenue from your business.
            Missed follow-ups. Broken handoffs. Tasks that should take minutes
            but consume hours. I replace that uncertainty with systems that run
            themselves — so you stop managing people and start owning a business
            that works without you watching it.
          </p>

          {/* CTA row — stacked on xs/sm, side-by-side md+ */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <a
              href="#diagnostic"
              className="cta-pill cta-pill-primary"
              style={{ justifyContent: "center" }}
            >
              UNCOVER THE 7-MINUTE DISCOVERY
              <span className="cta-icon-circle">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <a
              href="#services"
              className="cta-pill cta-pill-ghost"
              style={{ justifyContent: "center" }}
            >
              See the Work
            </a>
          </div>

          {/* Side-by-side from md up */}
          <style>{`
            @media (min-width: 768px) {
              section > div > div:last-of-type > div[style*="flex-direction: column"] {
                flex-direction: row !important;
                flex-wrap: wrap;
              }
            }
          `}</style>
        </div>
      </div>

      {/* Ticker at the bottom — true infinite marquee */}
      <div style={{ marginTop: "auto" }}>
        <Ticker />
      </div>
    </section>
  );
}
