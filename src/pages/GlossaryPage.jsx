import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";
import { useHashScroll } from "../hooks/useHashScroll.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { GLOSSARY, ALL_TERMS } from "../data/glossary.js";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  useHashScroll();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GLOSSARY;
    return GLOSSARY
      .map((cat) => ({
        ...cat,
        terms: cat.terms.filter(
          (t) =>
            t.term.toLowerCase().includes(q) ||
            t.def.toLowerCase().includes(q) ||
            t.why.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.terms.length > 0);
  }, [query]);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section style={{ background: C.white, padding: "clamp(2.5rem, 6vw, 4.5rem) 0 clamp(2rem, 5vw, 3rem)" }}>
        <div className="cp-container">
          <Reveal>
            <p className="chapter-eyebrow" style={{ color: C.red, marginBottom: "0.75rem" }}>
              {ALL_TERMS.length} terms · {GLOSSARY.length} categories
            </p>
            <h1
              style={{
                fontFamily: F.display,
                color: C.black,
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "1rem",
                maxWidth: "18ch",
              }}
            >
              The AI &amp; systems glossary
            </h1>
            <p
              style={{
                fontFamily: F.body,
                color: C.steelDark,
                fontSize: "1.1rem",
                lineHeight: 1.65,
                maxWidth: "58ch",
                marginBottom: "2rem",
              }}
            >
              No jargon for jargon's sake. Every term here is defined in
              plain English, plus the one thing that actually matters:
              why an operator deciding whether to build something should
              care.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                border: `1.5px solid ${C.black}`,
                padding: "0.75rem 1rem",
                maxWidth: 440,
              }}
            >
              <Search size={16} color={C.steel} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search terms — e.g. “hallucination”"
                style={{
                  border: "none",
                  outline: "none",
                  fontFamily: F.body,
                  fontSize: "0.95rem",
                  color: C.black,
                  width: "100%",
                  background: "transparent",
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category jump nav */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderTop: `1px solid ${C.line}`,
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div
          className="cp-container"
          style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", padding: "0.75rem 1rem" }}
        >
          {GLOSSARY.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              style={{
                fontFamily: F.mono,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.steelDark,
                textDecoration: "none",
              }}
            >
              {cat.category}
            </a>
          ))}
        </div>
      </div>

      {/* Categories */}
      {filtered.length === 0 ? (
        <div className="cp-container" style={{ padding: "4rem 0", textAlign: "center" }}>
          <p style={{ fontFamily: F.body, color: C.steelDark }}>No terms match “{query}.”</p>
        </div>
      ) : (
        filtered.map((cat, ci) => (
          <section
            key={cat.slug}
            id={cat.slug}
            className="chapter"
            style={{
              background: ci % 2 === 0 ? C.white : C.offWhite,
              padding: "clamp(2.5rem, 5vw, 3.5rem) 0",
              scrollMarginTop: "56px",
            }}
          >
            <div className="cp-container">
              <Reveal>
                <h2
                  style={{
                    fontFamily: F.display,
                    color: C.navy,
                    fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    marginBottom: "1.75rem",
                  }}
                >
                  {cat.category}
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cat.terms.map((t) => (
                  <Reveal key={t.slug}>
                    <div id={t.slug} style={{ borderLeft: `3px solid ${C.steelDark}`, paddingLeft: "1.1rem", scrollMarginTop: "70px" }}>
                      <h3
                        style={{
                          fontFamily: F.display,
                          color: C.black,
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {t.term}
                      </h3>
                      <p
                        style={{
                          fontFamily: F.body,
                          color: C.steelDark,
                          fontSize: "0.92rem",
                          lineHeight: 1.6,
                          marginBottom: "0.6rem",
                        }}
                      >
                        {t.def}
                      </p>
                      <p
                        style={{
                          fontFamily: F.body,
                          color: C.green,
                          fontSize: "0.85rem",
                          lineHeight: 1.55,
                          fontWeight: 600,
                        }}
                      >
                        Why it matters: <span style={{ fontWeight: 400, color: C.black }}>{t.why}</span>
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))
      )}

      {/* CTA */}
      <section style={{ background: C.navy, padding: "clamp(2.5rem, 6vw, 4rem) 0" }}>
        <div className="cp-container" style={{ textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: F.display, color: C.white, fontSize: "clamp(1.2rem, 2.6vw, 1.6rem)", fontWeight: 700, marginBottom: "1.25rem", maxWidth: "40ch", margin: "0 auto 1.25rem" }}>
              Vocabulary is free. Knowing where your constraint actually is takes a look at your operation.
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
