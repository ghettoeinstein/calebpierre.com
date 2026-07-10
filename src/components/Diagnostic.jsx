import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

const QUESTIONS = [
  {
    q: "What's costing you the most right now?",
    options: [
      { label: "My website isn't converting", tag: "web" },
      { label: "Everything is still done manually", tag: "automation" },
      { label: "I don't trust that my systems are secure", tag: "security" },
      { label: "Content goes out inconsistently, if at all", tag: "content" },
    ],
  },
  {
    q: "How is your team handling it today?",
    options: [
      { label: "We're duct-taping it ourselves", tag: "manual" },
      { label: "Paying for five tools that don't talk to each other", tag: "toolchain" },
      { label: "One overwhelmed person owns all of it", tag: "bandwidth" },
      { label: "Honestly? We're just ignoring it", tag: "ignoring" },
    ],
  },
  {
    q: "If this got fixed in 30 days, what changes?",
    options: [
      { label: "We close more deals", tag: "revenue" },
      { label: "We get hours back every single week", tag: "time" },
      { label: "We stop worrying about getting hacked", tag: "risk" },
      { label: "We finally look as sharp as we actually are", tag: "brand" },
    ],
  },
];

const RESULTS = {
  web: {
    title: "Your website is leaking revenue.",
    body: "The traffic you already have isn't converting because the site was built to look fine, not to sell. That's a Web Design engagement — rebuilt around one job: turning visitors into booked calls.",
    service: "Web Design",
  },
  automation: {
    title: "You're paying humans to do a machine's job.",
    body: "Every hour your team spends on repetitive manual work is an hour not spent on the business itself. That's a Business Automation build — the repetitive stuff runs itself, on schedule, without you in the loop.",
    service: "Business Automation",
  },
  security: {
    title: "You're one incident away from a very bad week.",
    body: "Most businesses don't find the hole until someone else does first. That's a full systems audit and hardening pass — the kind of security work I did long before I built agencies.",
    service: "Remote Tech Support",
  },
  content: {
    title: "You're invisible when you should be everywhere.",
    body: "Inconsistent content isn't a discipline problem, it's a systems problem. That's a Content Marketing engine — built once, running on autopilot after that.",
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
    <section
      id="diagnostic"
      className="px-6 py-24"
      style={{ backgroundColor: C.panelDark }}
    >
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <p
            style={{
              fontFamily: F.mono,
              color: C.red,
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Systems Diagnostic
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: "#fff",
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              marginBottom: "2rem",
              maxWidth: "22ch",
            }}
          >
            Three questions. One honest read on what's actually costing you money.
          </h2>
        </Reveal>

        <div
          style={{
            border: `1px solid ${C.lineOnDark}`,
            backgroundColor: "#161616",
          }}
        >
          <div style={{ height: 3, backgroundColor: "#2A2A2A" }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: C.red,
                transition: "width .4s ease",
              }}
            />
          </div>
          <div className="p-7">
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
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  {QUESTIONS[step].q}
                </h3>
                <div className="flex flex-col gap-3">
                  {QUESTIONS[step].options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => choose(o.tag)}
                      className="diag-option text-left"
                      style={{
                        fontFamily: F.body,
                        color: "#EDEDED",
                        fontSize: "0.95rem",
                        border: `1px solid ${C.lineOnDark}`,
                        backgroundColor: "transparent",
                        padding: "0.85rem 1.1rem",
                        cursor: "pointer",
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
                    color: "#fff",
                    fontSize: "1.5rem",
                    marginBottom: "0.9rem",
                  }}
                >
                  {result.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: "#C9C9C9",
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {result.body}
                </p>
                <p
                  style={{
                    fontFamily: F.body,
                    color: "#C9C9C9",
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                    marginBottom: "1.75rem",
                  }}
                >
                  Get on a call and I'll take real notes on your situation, then
                  hand you a written game plan — every step, every
                  recommendation, no guesswork.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href="https://calendly.com/calebpierre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3"
                    style={{
                      backgroundColor: C.red,
                      color: "#fff",
                      fontFamily: F.body,
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                    }}
                  >
                    Book My {result.service} Call <ArrowUpRight size={16} />
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
    </section>
  );
}
