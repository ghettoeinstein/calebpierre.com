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
    tag: "LIVE BETA",
    title: "OutsideTonight",
    body: "LA nightlife social OS — real-time venue discovery, viral plan coordination, autonomous ingestion.",
    url: "https://outsidetonight.com",
    stack: ["FastAPI", "Next.js", "Redis", "H3 Spatial"],
  },
  {
    tag: "REDESIGN",
    title: "Eden's Candy",
    body: "Full visual overhaul of an existing confectionery brand — identity, store, experience.",
    url: "https://edenscandy.com",
    stack: ["Shopify", "Brand", "UX"],
  },
  {
    tag: "GREENFIELD",
    title: "Hummingbyrd Apparel",
    body: "End-to-end Shopify build — print-on-demand, custom theme, zero to launch.",
    url: "https://hummingbyrdapparelandprint.com",
    stack: ["Shopify", "Print-on-Demand", "E2E"],
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
              <a
                key={cs.title}
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
                      backgroundColor: C.red,
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
                      color: C.blue,
                    }}
                  >
                    {cs.url.replace("https://", "")}
                  </span>
                  <ArrowUpRight size={12} color={C.ink} style={{ marginLeft: "auto" }} />
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
