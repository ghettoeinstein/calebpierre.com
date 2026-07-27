import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const PROJECTS = [
  {
    name: "Last Peg Lose",
    url: "https://lastpeglose.com",
    tag: "REAL-TIME · MULTIPLAYER",
    desc: "Engineered a real-time multiplayer 2D skirmish game powered by low-latency WebSockets. Built with secure guest and JWT authentication, backed by a Drizzle ORM and Neon Postgres architecture, and deployed seamlessly via Railway.",
    accent: C.blue,
    badge: "Live",
  },
  {
    name: "Latraderrrs",
    url: "https://latraderrrs.com",
    tag: "SERVICES · COMMERCE",
    desc: "Executive technical direction and platform architecture for an elite trading community and investment club. Built a high-converting web platform featuring tiered service packages (Diagnose / Calibrate / Execute), interactive anime.js animations, Gumroad monetization, and lightweight GitHub Pages deployment.",
    accent: C.purple,
    badge: "Live",
  },
  {
    name: "Eden's Candy",
    url: "https://edenscandy.com",
    tag: "REDESIGN · SQUARESPACE",
    desc: "Architected a comprehensive Squarespace redesign and complete digital identity for a women's wellness and yoni ritual brand. Engineered an immersive, end-to-end storefront and sacred commerce platform, leveraging custom CSS and third-party application integrations for optimal user experience and brand engagement.",
    accent: C.red,
    badge: "Live",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
            The Ecosystem
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              marginBottom: "0.75rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Things I Built That Are Running Right Now
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: "48ch",
              marginBottom: "2.5rem",
            }}
          >
            Not case studies. Not mockups. Live products serving real people.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} tilt>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover"
                style={{
                  display: "block",
                  padding: "1.5rem",
                  textDecoration: "none",
                  height: "100%",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.8rem",
                      color: C.steel,
                      fontWeight: 600,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span className="badge" style={{
                    background: p.badge === "Beta" ? C.red : C.black,
                    color: C.white,
                  }}>
                    {p.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.name}
                </h3>

                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.95rem",
                    lineHeight: 1.55,
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.desc}
                </p>

                <div
                  className="flex items-center gap-2"
                  style={{
                    borderTop: `1px solid ${C.line}`,
                    paddingTop: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.8rem",
                      color: p.accent,
                      fontWeight: 600,
                    }}
                  >
                    {p.url.replace("https://", "")}
                  </span>
                  <ArrowUpRight
                    size={16}
                    color={C.ink}
                    style={{ marginLeft: "auto", flexShrink: 0 }}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
