import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Services() {
  const items = [
    { title: "Web Design", body: "Sites built to convert, not just to look nice." },
    { title: "AI Programming", body: "Custom agents that do the job, not chatbot toys." },
    { title: "Business Automation", body: "Every repetitive task, off your plate and running itself." },
    { title: "Content Marketing", body: "Content systems that compound, not one-off posts." },
    { title: "Remote Tech Support", body: "A real engineer on call, not a ticket number." },
    { title: "Experience / Event Design", body: "Digital experiences built for the room, not just the screen." },
  ];
  return (
    <section id="services" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
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
            Core Offerings
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
              margin: "0.75rem 0 3rem",
              maxWidth: "20ch",
            }}
          >
            Six modules. One team running all of them.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div
                className="service-card h-full"
                style={{
                  border: `1px solid ${C.line}`,
                  backgroundColor: C.panel,
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
                      borderRadius: "50%",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: "0.68rem",
                      color: C.steel,
                      letterSpacing: "0.08em",
                    }}
                  >
                    ONLINE
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.15rem",
                    marginBottom: "0.6rem",
                    fontWeight: 700,
                  }}
                >
                  {it.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.steel,
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                  }}
                >
                  {it.body}
                </p>
                <div className="scan-sweep" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
