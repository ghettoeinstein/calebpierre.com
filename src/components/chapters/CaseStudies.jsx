import { ArrowUpRight } from "lucide-react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const CASES = [
  {
    name: "Last Peg Lose",
    url: "https://lastpeglose.com",
    constraint: "A real-time multiplayer game needed to feel instant, with no server lag giving away a player's move.",
    reality: "Latency wasn't a nice-to-have — at anything over ~150ms, the game stopped feeling like a skirmish and started feeling like a queue.",
    intervention: "Low-latency WebSocket architecture with guest and JWT authentication, a Drizzle ORM / Neon Postgres data layer, and a Railway deployment built to hold state under concurrent load.",
    evidence: "Live, multiplayer, and running — the state machine holds under real concurrent sessions, not just a demo lobby.",
    stack: ["React", "Express", "WebSocket", "Neon"],
  },
  {
    name: "Latraderrrs",
    url: "https://latraderrrs.com",
    constraint: "An elite trading community needed a platform that could sell tiered services without feeling like a generic membership site.",
    reality: "The offer itself — Diagnose / Calibrate / Execute — needed to read as a system, not a pricing table.",
    intervention: "Executive technical direction and platform architecture: tiered packaging, anime.js-driven motion to make the tiers feel alive, Gumroad monetization, and a lightweight GitHub Pages deployment.",
    evidence: "Live and converting members through a structured, staged offer rather than a flat sales page.",
    stack: ["HTML", "Gumroad", "anime.js", "GitHub Pages"],
  },
  {
    name: "Eden's Candy",
    url: "https://edenscandy.com",
    constraint: "A women's wellness brand had an outdated storefront that didn't match the intimacy of the product.",
    reality: "The commerce layer and the brand identity had been built separately, at different times — the seams showed.",
    intervention: "A comprehensive Squarespace redesign and complete digital identity: custom CSS, third-party integrations, and an end-to-end storefront rebuilt around the brand rather than around the template.",
    evidence: "Live storefront, one coherent identity from landing page to checkout.",
    stack: ["Squarespace", "Brand", "UX"],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="chapter section-pad" style={{ background: C.white }}>
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.75rem" }}>
            Chapter 10 — Systems in the field
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.9rem, 4.2vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "3rem",
              maxWidth: "22ch",
            }}
          >
            Not case studies. Systems running right now.
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {CASES.map((cs, i) => (
            <Reveal key={cs.name} delay={i * 0.08}>
              <div style={{ border: `1.5px solid ${C.ink}`, padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                <div className="flex items-center justify-between" style={{ marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3
                    style={{
                      fontFamily: F.display,
                      color: C.ink,
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {cs.name}
                  </h3>
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: F.mono,
                      fontSize: "0.78rem",
                      color: C.wire,
                      textDecoration: "none",
                    }}
                  >
                    {cs.url.replace("https://", "")}
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    ["01 / THE CONSTRAINT", cs.constraint],
                    ["02 / THE REALITY", cs.reality],
                    ["03 / THE INTERVENTION", cs.intervention],
                    ["04 / THE EVIDENCE", cs.evidence],
                  ].map(([label, body]) => (
                    <div key={label}>
                      <p className="mono-tag" style={{ color: C.riskRed, marginBottom: "0.3rem" }}>{label}</p>
                      <p style={{ fontFamily: F.body, color: C.inkSoft, fontSize: "0.92rem", lineHeight: 1.55 }}>
                        {body}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.25rem", borderTop: `1px solid ${C.line}`, paddingTop: "1rem" }}>
                  {cs.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: F.mono,
                        fontSize: "0.65rem",
                        color: C.inkSoft,
                        border: `1px solid ${C.line}`,
                        padding: "0.2rem 0.5rem",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
