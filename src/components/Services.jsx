import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Services() {
  const items = [
    { title: "Web Design", body: "Websites built to turn visitors into paying customers. Not just pretty — profitable.", span: "md:col-span-2" },
    { title: "AI Agents", body: "Custom AI that does real work. Not chatbots — systems that run tasks for you.", span: "md:col-span-1" },
    { title: "Business Automation", body: "Every repetitive task, running on its own. No human needed. Hours saved every week.", span: "md:col-span-1" },
    { title: "Security Audits", body: "I find the holes before someone else does. Full check, fix, and lock-down.", span: "md:col-span-2" },
    { title: "Content Systems", body: "Content that shows up on schedule. Built once, runs forever. No more silence online.", span: "md:col-span-1" },
    { title: "Tech Support", body: "A real engineer on call. Not a ticket number — a person who answers.", span: "md:col-span-2" },
  ];

  return (
    <section id="services" className="px-6 section-pad">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
              fontWeight: 700,
              margin: "0 0 3rem",
              maxWidth: "18ch",
              letterSpacing: "-0.02em",
            }}
          >
            Six things. One person running all of them.
          </h2>
        </Reveal>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div
                className={`service-card swiss-card ${it.span}`}
                style={{
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      backgroundColor: C.red,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.62rem",
                      color: C.steel,
                      letterSpacing: "0.1em",
                    }}
                  >
                    ACTIVE
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.2rem",
                    marginBottom: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {it.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
