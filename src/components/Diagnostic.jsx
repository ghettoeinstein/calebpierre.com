import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";

const QUESTIONS = [
  {
    q: "What's costing you the most right now?",
    options: [
      { label: "My website isn't bringing in customers", tag: "web" },
      { label: "Everything is still done by hand", tag: "automation" },
      { label: "I don't know if my systems are safe", tag: "security" },
      { label: "I'm not showing up online enough", tag: "content" },
    ],
  },
  {
    q: "How are you dealing with it today?",
    options: [
      { label: "We're fixing it ourselves as we go", tag: "manual" },
      { label: "We pay for tools that don't work together", tag: "toolchain" },
      { label: "One person handles all of it", tag: "bandwidth" },
      { label: "Honestly? We're not dealing with it", tag: "ignoring" },
    ],
  },
  {
    q: "If this got fixed in 30 days, what changes?",
    options: [
      { label: "More customers, more sales", tag: "revenue" },
      { label: "Hours back every week", tag: "time" },
      { label: "Stop worrying about getting hacked", tag: "risk" },
      { label: "Look as good as we actually are", tag: "brand" },
    ],
  },
];

const RESULTS = {
  web: {
    title: "Your website is losing you money.",
    body: "People visit but don't buy because the site wasn't built to sell. I'll rebuild it so it turns visitors into paying customers.",
    service: "Web Design",
  },
  automation: {
    title: "You're paying people to do a machine's job.",
    body: "Every hour spent on repeat tasks is an hour wasted. I'll build systems that do the boring stuff automatically — no human needed.",
    service: "Business Automation",
  },
  security: {
    title: "You're one bad day from losing everything.",
    body: "Most businesses don't find the hole until a hacker does. I'll find it first and seal it shut.",
    service: "Security Audit",
  },
  content: {
    title: "Nobody knows you exist.",
    body: "If you're not showing up online, you're leaving money on the table. I'll build a content system that runs itself.",
    service: "Content Marketing",
  },
};

export default function Diagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const choose = (tag) => {
    const next = [...answers, tag];
    setAnswers(next);
    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      const primary = next[0];
      setResult(RESULTS[primary] || RESULTS.automation);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  const progress = result ? 100 : Math.round((step / QUESTIONS.length) * 100);

  return (
    <section id="diagnostic" className="px-6 section-pad">
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
          Free Systems Diagnostic
        </p>
        <h2
          style={{
            fontFamily: F.display,
            color: C.ink,
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            marginBottom: "2rem",
            maxWidth: "24ch",
            letterSpacing: "-0.01em",
          }}
        >
          Three questions. One honest answer about what's costing you money.
        </h2>

        {/* Glass card container */}
        <div className="bezel" style={{ maxWidth: "36rem" }}>
          <div className="bezel-inner" style={{ overflow: "hidden" }}>
            {/* Progress bar */}
            <div style={{ height: 3, background: "rgba(255,255,255,0.04)" }}>
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${C.red}, #FF3000)`,
                  transition: "width 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
                  boxShadow: "0 0 12px rgba(225, 6, 0, 0.4)",
                }}
              />
            </div>

            <div style={{ padding: "2rem 1.75rem" }}>
              {!result ? (
                <>
                  <p
                    style={{
                      fontFamily: F.mono,
                      color: C.steel,
                      fontSize: "0.72rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    QUESTION {step + 1} / {QUESTIONS.length}
                  </p>
                  <h3
                    style={{
                      fontFamily: F.body,
                      color: C.ink,
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      marginBottom: "1.5rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {QUESTIONS[step].q}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {QUESTIONS[step].options.map((o) => (
                      <button
                        key={o.label}
                        onClick={() => choose(o.tag)}
                        className="diag-option"
                        style={{
                          fontFamily: F.body,
                          color: C.inkSoft,
                          fontSize: "0.95rem",
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.02)",
                          padding: "0.9rem 1.1rem",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div>
                  <p
                    style={{
                      fontFamily: F.mono,
                      color: C.red,
                      fontSize: "0.72rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    DIAGNOSIS COMPLETE
                  </p>
                  <h3
                    style={{
                      fontFamily: F.display,
                      color: C.ink,
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginBottom: "0.9rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {result.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: F.body,
                      color: C.inkSoft,
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {result.body}
                  </p>
                  <p
                    style={{
                      fontFamily: F.body,
                      color: C.inkSoft,
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      marginBottom: "1.75rem",
                    }}
                  >
                    Get on a free call. I'll look at everything and give you a
                    written plan. No pressure, no guesswork.
                  </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <a
                      href="https://calendly.com/calebpierre"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-pill cta-pill-primary"
                    >
                      Book My {result.service} Call
                      <span className="cta-icon-circle">
                        <ArrowUpRight size={16} />
                      </span>
                    </a>
                    <button
                      onClick={reset}
                      style={{
                        fontFamily: F.mono,
                        color: C.steel,
                        fontSize: "0.78rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Retake diagnostic
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
