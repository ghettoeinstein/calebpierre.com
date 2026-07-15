import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Process() {
  const steps = [
    { n: "01", t: "Look", d: "You take the 7-minute discovery. I find where your business is bleeding — the manual tasks, the broken handoffs, the gaps you already feel but haven't measured." },
    { n: "02", t: "Plan", d: "We get on a call. I listen, then I hand you a written blueprint. Every system you need, in order of what stops the bleeding fastest. No guesswork." },
    { n: "03", t: "Build", d: "I build it. You watch it happen. Every piece documented, every decision explained. Nothing hidden, nothing you can't inspect." },
    { n: "04", t: "Support", d: "I stay on call. When something changes — and it always does — I fix it. Your systems don't just run. They adapt." },
  ];

  return (
    <section id="process" className="px-6 section-pad" style={{ background: "#F5F5F5" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Four steps. No mystery in between.
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: C.inkSoft,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "52ch",
              marginBottom: "3rem",
            }}
          >
            This isn't a template. It's not a course. It's a process built
            for owners who are done guessing — and done paying for solutions
            that don't solve anything.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div
                className="swiss-card"
                style={{
                  padding: "1.75rem",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    fontFamily: F.mono,
                    color: C.red,
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.n}
                </p>
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
