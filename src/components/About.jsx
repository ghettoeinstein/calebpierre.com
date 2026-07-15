import { CheckCircle2, Linkedin, ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function About() {
  const points = [
    "Security background — I look for the hole before someone else finds it.",
    "Remote-first — same attention wherever you're based.",
    "Everything I build comes with documentation you can actually read.",
    "Full-stack — operations, automation, and security under one roof. No handoffs lost in translation.",
  ];

  return (
    <section id="about" className="px-6 section-pad">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 700,
              marginBottom: "1.5rem",
              maxWidth: "24ch",
              letterSpacing: "-0.02em",
            }}
          >
            I build the machine that replaces the babysitting.
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.05rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            I'm Caleb Pierre. I don't sell hope and I don't hide behind
            jargon. I look at your business, find the places where human effort
            is propping up something a system should handle, and I replace it
            with something that works without you watching it. A system you
            can't inspect isn't a system you can trust. That's why everything
            I build comes documented, auditable, and owned by you.
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
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://linkedin.com/in/calebpierre"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill cta-pill-ghost"
          >
            <Linkedin size={16} color={C.red} />
            linkedin.com/in/calebpierre
            <span className="cta-icon-circle"><ArrowUpRight size={14} /></span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
