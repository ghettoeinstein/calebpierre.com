import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const STATS = [
  { value: "50+", label: "Systems Shipped" },
  { value: "99.9%", label: "Uptime" },
  { value: "0", label: "Black Boxes" },
  { value: "1", label: "Operator" },
];

const CASE_STUDIES = [
  {
    tag: "REAL-TIME · MULTIPLAYER",
    title: "Last Peg Lose",
    body: "2D cartoon peg-skirmish game — WebSocket real-time battles, guest + JWT auth, Drizzle/Neon Postgres.",
    url: "https://lastpeglose.com",
    stack: ["React", "Express", "WebSocket", "Neon"],
    accent: C.blue,
  },
  {
    tag: "SERVICES · COMMERCE",
    title: "Latraderrrs",
    body: "Trading services marketplace — Diagnose / Calibrate / Execute tiers, Gumroad checkout, anime.js motion.",
    url: "https://latraderrrs.com",
    stack: ["HTML", "Gumroad", "anime.js", "GitHub Pages"],
    accent: C.green,
  },
  {
    tag: "REDESIGN · SHOPIFY",
    title: "Eden's Candy",
    body: "Women's wellness and yoni ritual brand — full digital identity, store experience, sacred commerce.",
    url: "https://edenscandy.com",
    stack: ["Shopify", "Brand", "UX"],
    accent: C.red,
  },
];

export default function Proof() {
  return (
    <section id="proof" className="px-6" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
      <div className="max-w-5xl mx-auto">
        {/* Stats strip */}
        <Reveal>
          <div
            className="swiss-card"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "1.25rem",
                  borderRight: `1px solid ${C.line}`,
                }}
              >
                <p
                  style={{
                    fontFamily: F.display,
                    color: C.red,
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: F.mono,
                    color: C.ink,
                    fontSize: "0.68rem",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Case studies */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Deployed Systems
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {CASE_STUDIES.map((cs) => (
              <Reveal key={cs.title} tilt>
              <a
                href={cs.url}
                target="_blank"
                rel="noopener noreferrer"
                className="swiss-card swiss-card-hover"
                style={{
                  padding: "1.25rem",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      backgroundColor: cs.accent,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.58rem",
                      color: C.steel,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {cs.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                  }}
                >
                  {cs.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                    marginBottom: "0.75rem",
                  }}
                >
                  {cs.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: F.mono,
                        fontSize: "0.6rem",
                        color: C.inkSoft,
                        border: `1px solid ${C.line}`,
                        background: "#FAFAFA",
                        padding: "0.2rem 0.45rem",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="flex items-center gap-1"
                  style={{
                    borderTop: `1px solid ${C.line}`,
                    marginTop: "0.75rem",
                    paddingTop: "0.6rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.65rem",
                      color: cs.accent,
                    }}
                  >
                    {cs.url.replace("https://", "")}
                  </span>
                  <ArrowUpRight size={12} color={C.ink} style={{ marginLeft: "auto" }} />
                </div>
              </a>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
