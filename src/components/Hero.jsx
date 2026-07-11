import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import BootSequence from "./BootSequence.jsx";
import Ticker from "./Ticker.jsx";

export default function Hero() {
  const [booted, setBooted] = useState(false);

  return (
    <section style={{ paddingTop: "7rem", paddingBottom: "0", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Boot terminal */}
        <div
          className="glass"
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
            className="glitch-headline"
            data-text="Stop doing it by hand. I'll build the systems that do it for you."
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              lineHeight: 1.05,
              fontWeight: 700,
              marginBottom: "1.75rem",
              maxWidth: "20ch",
              letterSpacing: "-0.02em",
            }}
          >
            Stop doing it by hand. I'll build the systems that do it for you.
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
            I build websites, AI agents, and security systems that run your
            business while you sleep. Book a free call. I'll look at what you
            have, tell you what's broken, and give you a plan to fix it.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#diagnostic"
              className="cta-pill cta-pill-primary"
            >
              Find What's Broken
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
