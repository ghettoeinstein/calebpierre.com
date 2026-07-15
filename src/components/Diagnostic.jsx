import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";

const QUESTIONS = [
  {
    q: "What's quietly costing you the most right now?",
    options: [
      { label: "Customers fall through the cracks — nobody follows up", tag: "operations" },
      { label: "My team drowns in repetitive work that should run itself", tag: "automation" },
      { label: "I don't actually know if my business is secure", tag: "security" },
      { label: "I can't see what's happening in my own operations", tag: "data" },
    ],
  },
  {
    q: "How are you dealing with it today?",
    options: [
      { label: "We push through manually and hope nothing breaks", tag: "manual" },
      { label: "We patched together tools that don't talk to each other", tag: "friction" },
      { label: "One person holds it all together — if they leave, it collapses", tag: "risk" },
      { label: "Honestly? We're not dealing with it. We're ignoring it.", tag: "ignoring" },
    ],
  },
  {
    q: "If this were handled in 30 days, what changes for you?",
    options: [
      { label: "I stop babysitting and start leading", tag: "freedom" },
      { label: "Hours back every single week — permanently", tag: "time" },
      { label: "I stop lying awake wondering if today is the day it breaks", tag: "peace" },
      { label: "I can see my entire business at a glance, anytime", tag: "control" },
    ],
  },
];

const RESULTS = {
  operations: {
    title: "Your business has a people problem disguised as an operations problem.",
    body: "Every missed follow-up, every dropped handoff, every 'I thought you were handling it' — that's not a staffing issue. It's a systems issue. I'll build the layer that makes these failures impossible.",
    service: "Operational",
  },
  automation: {
    title: "You're paying people to do a machine's job.",
    body: "Every hour spent on repetitive work is an hour of human potential wasted — and money drained. I'll build systems that handle ten times the work at zero marginal cost. Your people do what only people can do.",
    service: "Automation",
  },
  security: {
    title: "You're one bad day from losing everything.",
    body: "Most businesses never check the perimeter until something already broke through. I'll find every gap first, seal it, and make sure you never have to think about it again.",
    service: "Security",
  },
  data: {
    title: "You're flying blind in your own business.",
    body: "You can't manage what you can't see. I'll build the data flow that shows you everything — every number, every status, every signal — in one place, updated in real time.",
    service: "Data",
  },
  manual: {
    title: "You're running a business on willpower.",
    body: "Pushing through manually works until it doesn't. One sick day, one vacation, one resignation — and the whole thing wobbles. I'll replace willpower with systems that hold without you.",
    service: "Operational",
  },
  friction: {
    title: "Your tools are fighting each other — and you're paying for it.",
    body: "Every disconnected tool creates a gap. Every gap creates a manual step. Every manual step creates a failure point. I'll make your systems talk to each other so information flows without friction.",
    service: "Data",
  },
  risk: {
    title: "Your business has a single point of failure — and it's a person.",
    body: "When one person is the only one who knows how something works, that's not a team. That's a hostage situation. I'll build systems that any qualified person can operate — documented, auditable, and transferable.",
    service: "Operational",
  },
  ignoring: {
    title: "You already know the answer. You're just not ready to hear it.",
    body: "The cost of doing nothing isn't zero. It's the slow leak — the missed opportunities, the wasted hours, the risk you carry every day. That leak compounds. I'll help you stop it.",
    service: "Discovery",
  },
  freedom: {
    title: "You don't need more hours. You need fewer fires.",
    body: "Babysitting isn't leadership. When the systems handle the operations, you stop managing people and start directing the business. I'll build the layer that makes that shift permanent.",
    service: "Operational",
  },
  time: {
    title: "You can't get those hours back — but you can stop losing the next ones.",
    body: "Every repetitive task that a system could handle is stealing time from the work that actually moves your business forward. I'll build the automation that gives those hours back — permanently.",
    service: "Automation",
  },
  peace: {
    title: "Peace of mind isn't a luxury. It's a system.",
    body: "The worry you carry isn't about what might go wrong — it's about not knowing when it will. I'll build the perimeter that makes the question irrelevant. You stop worrying because there's nothing left to worry about.",
    service: "Security",
  },
  control: {
    title: "Control isn't about working harder. It's about seeing everything.",
    body: "When your data flows in one direction — up to you — you stop guessing and start deciding. I'll build the infrastructure that puts your entire business on a single dashboard, in real time.",
    service: "Data",
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
      setResult(RESULTS[primary] || RESULTS.ignoring);
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
          7-Minute Discovery
        </p>
        <h2
          style={{
            fontFamily: F.display,
            color: C.ink,
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            maxWidth: "24ch",
            letterSpacing: "-0.02em",
          }}
        >
          Measure the Cost of Your Current Chaos
        </h2>
        <p
          style={{
            fontFamily: F.body,
            color: C.inkSoft,
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "48ch",
            marginBottom: "2rem",
          }}
        >
          Three questions. No fluff. You'll see exactly where your business is
          bleeding — and what it's costing you every day you wait.
        </p>

        {/* Swiss card container */}
        <div className="swiss-card" style={{ maxWidth: "36rem" }}>
          {/* Progress bar */}
          <div style={{ height: 2, background: "#E5E5E5" }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: C.red,
                transition: "width 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
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
                        border: "1px solid #E5E5E5",
                        background: "#FAFAFA",
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
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
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
                    color: C.ink,
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "1.75rem",
                    fontWeight: 600,
                  }}
                >
                  Start the discovery. You'll walk away with a written plan —
                  no obligation, no guesswork, just a straight answer about
                  what to fix first.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href="https://calendly.com/calebpierre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-pill cta-pill-primary"
                  >
                    Start My {result.service} Discovery
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
                    Retake discovery
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
