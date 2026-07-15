import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import BootSequence from "./BootSequence.jsx";
import Ticker from "./Ticker.jsx";

export default function Hero() {
  const [booted, setBooted] = useState(false);

  return (
    <section style={{ paddingTop: "8rem", paddingBottom: "0", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Boot terminal */}
        <div
          className="swiss-card"
          style={{ padding: "1.5rem 1.75rem", marginBottom: "2.5rem", maxWidth: "32rem" }}
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
          <p
            className="eyebrow"
            style={{ marginBottom: "1.25rem" }}
          >
            Los Angeles · Remote-First
          </p>

          <h1
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              lineHeight: 1.05,
              fontWeight: 700,
              marginBottom: "1.75rem",
              maxWidth: "20ch",
              letterSpacing: "-0.03em",
            }}
          >
            The Hidden Drain inside Your Business that You Are Constantly Trying to Ignore
          </h1>

          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.1rem",
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

          <div className="flex flex-wrap gap-4">
            <a
              href="#diagnostic"
              className="cta-pill cta-pill-primary"
            >
              UNCOVER THE 7-MINUTE DISCOVERY
              <span className="cta-icon-circle">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <a href="#services" className="cta-pill cta-pill-ghost">
              See the Work
            </a>
          </div>
        </div>
      </div>

      {/* Ticker at the bottom of hero */}
      <div style={{ marginTop: "auto" }}>
        <Ticker />
      </div>
    </section>
  );
}
