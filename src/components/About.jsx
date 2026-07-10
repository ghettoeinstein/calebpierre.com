import { CheckCircle2, Linkedin, ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function About() {
  const points = [
    "Security-engineering background — I look for the hole before someone else finds it.",
    "Remote-first by design — your team gets the same attention wherever you're based.",
    "Everything I build comes with documentation you can actually read.",
    "Full-stack operator — frontend, backend, infrastructure, AI, and security under one roof.",
  ];
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p
            style={{
              fontFamily: F.mono,
              color: C.red,
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Who's Behind This
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              margin: "0.75rem 0 1.5rem",
              maxWidth: "24ch",
            }}
          >
            I'm Caleb Pierre — I build the systems, and I show you exactly how they work.
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.steel,
              fontSize: "1.02rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Los Angeles-based, remote-first. I don't sell hype and I don't hide the
            work behind a black box — a system you can't audit isn't a system you
            can trust, and that's the whole reason I do this the way I do.
          </p>
          <div className="flex flex-col gap-3" style={{ marginBottom: "2.5rem" }}>
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  color={C.red}
                  style={{ marginTop: 3, flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: F.body,
                    color: C.ink,
                    fontSize: "0.96rem",
                    lineHeight: 1.6,
                  }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/calebpierre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: F.mono,
              color: C.ink,
              fontSize: "0.82rem",
              border: `1px solid ${C.line}`,
              padding: "0.6rem 1rem",
              textDecoration: "none",
            }}
          >
            <Linkedin size={16} color={C.red} />
            linkedin.com/in/calebpierre
            <ArrowUpRight size={14} color={C.steel} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
