import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const PROJECTS = [
  {
    name: "Eden's Candy",
    url: "https://edenscandy.com",
    tag: "REDESIGN",
    desc: "Full visual overhaul of an existing confectionery brand — new identity, new store experience, same sweet soul.",
    accent: C.red,
    badge: "Live",
  },
  {
    name: "Hummingbyrd Apparel & Print",
    url: "https://hummingbyrdapparelandprint.com",
    tag: "GREENFIELD · SHOPIFY",
    desc: "End-to-end Shopify build — product architecture, print-on-demand integration, custom theme, zero to launch.",
    accent: C.blue,
    badge: "Live",
  },
  {
    name: "OutsideTonight",
    url: "https://outsidetonight.com",
    tag: "LIVE BETA",
    desc: "LA nightlife social OS — real-time venue discovery, viral plan coordination, autonomous event ingestion. The empire's flagship.",
    accent: C.green,
    badge: "Beta",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p
            className="eyebrow"
            style={{ marginBottom: "1rem" }}
          >
            The Ecosystem
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 700,
              marginBottom: "0.75rem",
              maxWidth: "20ch",
              letterSpacing: "-0.02em",
            }}
          >
            Things I Built That Are Running Right Now
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1rem",
              lineHeight: 1.65,
              maxWidth: "48ch",
              marginBottom: "2.5rem",
            }}
          >
            Not case studies. Not mockups. Live products serving real people.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="swiss-card swiss-card-hover"
                style={{
                  display: "block",
                  padding: "1.75rem",
                  textDecoration: "none",
                  height: "100%",
                }}
              >
                {/* Tag row */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.62rem",
                      color: C.steel,
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: p.badge === "Beta" ? C.inkSoft : "#fff",
                      background: p.badge === "Beta" ? C.yellow : C.green,
                      border: `2px solid ${C.line}`,
                      padding: "0.15rem 0.5rem",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.desc}
                </p>

                {/* Link row */}
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
                      fontSize: "0.72rem",
                      color: p.accent,
                      fontWeight: 600,
                    }}
                  >
                    {p.url.replace("https://", "")}
                  </span>
                  <ArrowUpRight
                    size={14}
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
