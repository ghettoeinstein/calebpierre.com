import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Agitation() {
  const logs = [
    {
      tag: "[DRAIN]",
      text: "Every missed follow-up, every broken handoff, every task that falls through the cracks — that's money walking out the door while you watch.",
    },
    {
      tag: "[MANUAL]",
      text: "You're paying capable people to do work a system could do in seconds. Not because they're lazy — because nobody built the system.",
    },
    {
      tag: "[RISK]",
      text: "One person leaves and your operations collapse. One bad day and your data is gone. You cannot build a predictable business on unpredictable human behavior.",
    },
  ];
  return (
    <section className="px-6 section-pad">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              marginBottom: "2.5rem",
              maxWidth: "22ch",
              letterSpacing: "-0.02em",
            }}
          >
            You don't have a growth problem. You have a people problem.
          </h2>
        </Reveal>
        <div className="flex flex-col gap-4">
          {logs.map((l, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="swiss-card swiss-card-hover"
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: F.mono,
                    color: C.red,
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    minWidth: "5.5ch",
                    flexShrink: 0,
                  }}
                >
                  {l.tag}
                </span>
                <span
                  style={{
                    fontFamily: F.body,
                    color: C.ink,
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                  }}
                >
                  {l.text}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
