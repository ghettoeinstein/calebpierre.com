import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Hero() {
  return (
    <section style={{
      paddingTop: "3rem",
      paddingBottom: "2rem",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      background: C.white,
    }}>
      <div className="cp-container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <Reveal>
          {/* Status badge */}
          <div className="badge" style={{
            marginBottom: "1.5rem",
            background: C.black,
            color: C.white,
            gap: "0.5rem",
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: C.red, display: "inline-block",
            }} />
            Wanna 10X Your Business? · Los Angeles &amp; Remote
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2.25rem, 6vw, 4.25rem)",
              lineHeight: 1.03,
              fontWeight: 900,
              marginBottom: "1.5rem",
              maxWidth: "17ch",
              letterSpacing: "-0.03em",
            }}
          >
            I'm your <span style={{ color: C.red }}>Business Automation Engineer.</span>
          </h1>

          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
              maxWidth: "50ch",
              marginBottom: "2rem",
            }}
          >
            Web design, AI programming, business automation, content marketing,
            remote tech support, and event experience — one operator who
            builds it, ships it, and answers the phone.
          </p>

          {/* Social proof bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "2.5rem",
              fontSize: "0.9rem",
              color: C.steel,
              fontFamily: F.body,
              fontWeight: 600,
            }}
          >
            <span>⚡ Ex-Tinder Security Engineer</span>
            <span>🚀 50+ Systems Deployed</span>
            <span>✅ 99.9% Uptime</span>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://calendly.com/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill cta-pill-primary"
              style={{ justifyContent: "center" }}
            >
              Start the Discovery
              <span className="cta-icon-circle">
                <ArrowUpRight size={18} />
              </span>
            </a>
            <a
              href="#work"
              className="cta-pill cta-pill-ghost"
              style={{ justifyContent: "center" }}
            >
              View Case Studies
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
