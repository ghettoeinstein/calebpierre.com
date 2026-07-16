import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Agitation() {
  const drains = [
    { tag: "[DRAIN]", text: "Missed follow-ups and broken handoffs — money walking out the door." },
    { tag: "[MANUAL]", text: "Paying capable people to do work a system could do in seconds." },
    { tag: "[RISK]", text: "One person leaves and operations collapse. Unpredictable foundations." },
  ];

  return (
    <section className="px-6" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1.5rem",
              maxWidth: "20ch",
              letterSpacing: "-0.02em",
            }}
          >
            You don't have a growth problem. You have a people problem.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {drains.map((d, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                className="swiss-card swiss-card-hover"
                style={{ padding: "1.1rem 1.25rem" }}
              >
                <span
                  style={{
                    fontFamily: F.mono,
                    color: C.red,
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {d.tag}
                </span>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.ink,
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                  }}
                >
                  {d.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
