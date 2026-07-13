import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Agitation() {
  const logs = [
    {
      tag: "[SLOW]",
      text: "Your website was built once and never fixed. It's losing you money.",
    },
    {
      tag: "[MANUAL]",
      text: "Your team is doing the same task over and over. A machine should be doing it.",
    },
    {
      tag: "[RISK]",
      text: "Nobody has checked your systems for security holes. One bad day costs everything.",
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
            If any of this sounds like you, we should talk.
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
