import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";
import { useHashScroll } from "../hooks/useHashScroll.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { INSIGHTS } from "../data/insights.js";

export default function InsightsPage() {
  useHashScroll();
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Nav />

      <section style={{ background: C.white, padding: "clamp(2.5rem, 6vw, 4.5rem) 0 clamp(2rem, 5vw, 3rem)" }}>
        <div className="cp-container">
          <Reveal>
            <p className="chapter-eyebrow" style={{ color: C.riskRed, marginBottom: "0.75rem" }}>
              Field notes
            </p>
            <h1
              style={{
                fontFamily: F.display,
                color: C.ink,
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "1rem",
                maxWidth: "18ch",
              }}
            >
              Knowledge worth having, whether or not you ever hire me.
            </h1>
            <p
              style={{
                fontFamily: F.body,
                color: C.inkSoft,
                fontSize: "1.1rem",
                lineHeight: 1.65,
                maxWidth: "58ch",
              }}
            >
              No gated PDFs, no email wall. These are the actual arguments
              behind how systems get engineered here — written out in full.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Index */}
      <section style={{ background: C.offWhite, padding: "1.5rem 0" }}>
        <div className="cp-container">
          <Reveal stagger={0.05}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {INSIGHTS.map((post) => (
                <a
                  key={post.slug}
                  href={`#${post.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0.9rem 0",
                    borderBottom: `1px solid ${C.line}`,
                    textDecoration: "none",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "baseline", gap: "0.85rem", minWidth: 0 }}>
                    <span className="mono-tag" style={{ color: C.wire, flexShrink: 0 }}>{post.tag}</span>
                    <span style={{ fontFamily: F.display, color: C.ink, fontWeight: 700, fontSize: "1.02rem" }}>
                      {post.title}
                    </span>
                  </span>
                  <ArrowUpRight size={16} color={C.steel} style={{ flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Essays */}
      {INSIGHTS.map((post, i) => (
        <section
          key={post.slug}
          id={post.slug}
          className="chapter"
          style={{
            background: i % 2 === 0 ? C.white : C.offWhite,
            padding: "clamp(2.75rem, 6vw, 4.5rem) 0",
            scrollMarginTop: "56px",
          }}
        >
          <div className="cp-container" style={{ maxWidth: 720 }}>
            <Reveal>
              <p className="chapter-eyebrow" style={{ color: C.wire, marginBottom: "0.6rem" }}>{post.tag}</p>
              <h2
                style={{
                  fontFamily: F.display,
                  color: C.ink,
                  fontSize: "clamp(1.6rem, 3.5vw, 2.35rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  marginBottom: "0.75rem",
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontFamily: F.body,
                  color: C.steel,
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  lineHeight: 1.5,
                  marginBottom: "1.75rem",
                }}
              >
                {post.dek}
              </p>
              {post.body.map((para, pi) => (
                <p
                  key={pi}
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "1.02rem",
                    lineHeight: 1.75,
                    marginBottom: "1.1rem",
                  }}
                >
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <section style={{ background: C.navy, padding: "clamp(2.5rem, 6vw, 4rem) 0" }}>
        <div className="cp-container" style={{ textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: F.display, color: C.navyText, fontSize: "clamp(1.2rem, 2.6vw, 1.6rem)", fontWeight: 700, marginBottom: "1.25rem", maxWidth: "44ch", margin: "0 auto 1.25rem" }}>
              If any of this sounds like your operation, the next step is mapping it — not reading about it.
            </p>
            <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener noreferrer" className="cta-pill cta-pill-primary">
              Map my operation
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
