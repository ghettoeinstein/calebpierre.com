import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Services() {
  const desires = [
    {
      desire: "Absolute Operational Certainty",
      tagline: "The end of babysitting.",
      items: [
        { title: "Operations Engine", body: "Every workflow, every handoff, every follow-up — running without you watching. No more 'I thought you were handling it.' The system handles it. Always.", span: "md:col-span-2" },
        { title: "Autonomous Systems", body: "Systems that do real work. Not dashboards — workers. They run tasks, make decisions, and handle the load without human intervention.", span: "md:col-span-1" },
      ],
    },
    {
      desire: "Unbroken Data Flow",
      tagline: "The end of friction.",
      items: [
        { title: "Automation Layer", body: "Every repetitive task — gone. Data moves between your tools without a human carrying it. No more copy-paste. No more 'I'll get to it.' The system already did.", span: "md:col-span-1" },
        { title: "Business Intelligence", body: "Your entire business on one screen. Every number, every status, every signal — updated in real time. You stop guessing and start deciding.", span: "md:col-span-2" },
      ],
    },
    {
      desire: "Total Perimeter Security",
      tagline: "The end of worry.",
      items: [
        { title: "Security Infrastructure", body: "I find the holes before someone else does. Full perimeter check, gap closure, and continuous monitoring. You stop lying awake wondering if today is the day.", span: "md:col-span-2" },
        { title: "Always-On Support", body: "A real engineer on call. Not a ticket number — a person who answers. When something changes, I fix it. Your systems don't just run. They adapt.", span: "md:col-span-1" },
      ],
    },
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
              margin: "0 0 1rem",
              maxWidth: "22ch",
              letterSpacing: "-0.02em",
            }}
          >
            Three desires. One system that delivers all of them.
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "52ch",
              marginBottom: "3.5rem",
            }}
          >
            You don't need more tools. You don't need more people. You need
            three things — and they're the same three things every owner
            actually wants.
          </p>
        </Reveal>

        {desires.map((group, gi) => (
          <div key={group.desire} style={{ marginBottom: "3rem" }}>
            <Reveal delay={gi * 0.05}>
              <div style={{ marginBottom: "1.5rem" }}>
                <p
                  style={{
                    fontFamily: F.mono,
                    color: C.red,
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                  }}
                >
                  DESIRE 0{gi + 1}
                </p>
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {group.desire}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.steel,
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                  }}
                >
                  {group.tagline}
                </p>
              </div>
            </Reveal>

            {/* Asymmetric bento grid per desire */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {group.items.map((it, i) => (
                <Reveal key={it.title} delay={(gi * 2 + i) * 0.05}>
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
                    <h4
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
                    </h4>
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
        ))}
      </div>
    </section>
  );
}
