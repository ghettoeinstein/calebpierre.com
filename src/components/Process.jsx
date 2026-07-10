import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Process() {
  const steps = [
    { n: "01", t: "Diagnose", d: "Run the systems diagnostic, walk the audit together." },
    { n: "02", t: "Game Plan", d: "We get on a call, I take real notes, you get a written game plan — no guesswork." },
    { n: "03", t: "Build", d: "I build in the open — you see it take shape, not just the final reveal." },
    { n: "04", t: "Support", d: "Remote tech support on call for when things change, because they will." },
  ];
  return (
    <section id="process" className="px-6 py-24" style={{ backgroundColor: C.panel }}>
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
            How It Works
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
              margin: "0.75rem 0 3rem",
            }}
          >
            Four steps. No mystery in between.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div>
                <p
                  style={{
                    fontFamily: F.mono,
                    color: C.red,
                    fontSize: "1.6rem",
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
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.steel,
                    fontSize: "0.9rem",
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
