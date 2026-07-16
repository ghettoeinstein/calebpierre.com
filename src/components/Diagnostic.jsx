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
      { label: "Patched together tools that don't talk to each other", tag: "friction" },
      { label: "One person holds it all together — if they leave, it collapses", tag: "risk" },
      { label: "Honestly? We're not dealing with it.", tag: "ignoring" },
    ],
  },
  {
    q: "If this were handled in 30 days, what changes for you?",
    options: [
      { label: "I stop babysitting and start leading", tag: "freedom" },
      { label: "Hours back every single week — permanently", tag: "time" },
      { label: "I stop lying awake wondering if today is the day", tag: "peace" },
      { label: "I can see my entire business at a glance, anytime", tag: "control" },
    ],
  },
];

const RESULTS = {
  operations: { title: "Your business has a people problem disguised as an operations problem.", body: "Every missed follow-up, every dropped handoff — that's not staffing, it's systems. I build the layer that makes these failures impossible.", service: "Operational" },
  automation: { title: "You're paying people to do a machine's job.", body: "Every hour on repetitive work is human potential wasted. I build systems that handle ten times the work at zero marginal cost.", service: "Automation" },
  security: { title: "You're one bad day from losing everything.", body: "Most businesses never check the perimeter until something breaks through. I find every gap first, seal it, and make sure you never think about it again.", service: "Security" },
  data: { title: "You're flying blind in your own business.", body: "You can't manage what you can't see. I build the data flow that shows you everything — in one place, in real time.", service: "Data" },
  manual: { title: "You're running a business on willpower.", body: "Pushing through manually works until it doesn't. I replace willpower with systems that hold without you.", service: "Operational" },
  friction: { title: "Your tools are fighting each other — and you're paying for it.", body: "Every disconnected tool creates a gap. Every gap creates a manual step. I make your systems talk to each other.", service: "Data" },
  risk: { title: "Your business has a single point of failure — and it's a person.", body: "When one person is the only one who knows how something works, that's a hostage situation. I build systems that any qualified person can operate.", service: "Operational" },
  ignoring: { title: "You already know the answer. You're just not ready to hear it.", body: "The cost of doing nothing isn't zero. It's the slow leak that compounds. I'll help you stop it.", service: "Discovery" },
  freedom: { title: "You don't need more hours. You need fewer fires.", body: "When systems handle operations, you stop managing people and start directing the business.", service: "Operational" },
  time: { title: "You can't get those hours back — but you can stop losing the next ones.", body: "Every repetitive task a system could handle is stealing time from work that actually moves your business forward.", service: "Automation" },
  peace: { title: "Peace of mind isn't a luxury. It's a system.", body: "The worry you carry isn't about what might go wrong — it's about not knowing when. I build the perimeter that makes the question irrelevant.", service: "Security" },
  control: { title: "Control isn't about working harder. It's about seeing everything.", body: "When your data flows in one direction — up to you — you stop guessing and start deciding.", service: "Data" },
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
      setResult(RESULTS[next[0]] || RESULTS.ignoring);
    }
  };

  const reset = () => { setStep(0); setAnswers([]); setResult(null); };
  const progress = result ? 100 : Math.round((step / QUESTIONS.length) * 100);

  return (
    <section id="diagnostic" className="px-6" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
          7-Minute Discovery
        </p>
        <h2
          style={{
            fontFamily: F.display,
            color: C.ink,
            fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
            fontWeight: 700,
            marginBottom: "0.75rem",
            maxWidth: "22ch",
            letterSpacing: "-0.02em",
          }}
        >
          Measure the Cost of Your Chaos
        </h2>

        <div className="swiss-card" style={{ maxWidth: "34rem" }}>
          <div style={{ height: 3, background: "#E5E5E5" }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: C.red,
                transition: "width 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            />
          </div>

          <div style={{ padding: "1.5rem 1.5rem" }}>
            {!result ? (
              <>
                <p style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.68rem", marginBottom: "0.4rem" }}>
                  QUESTION {step + 1} / {QUESTIONS.length}
                </p>
                <h3
                  style={{
                    fontFamily: F.body,
                    color: C.ink,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "1.25rem",
                    lineHeight: 1.4,
                  }}
                >
                  {QUESTIONS[step].q}
                </h3>
                <div className="flex flex-col gap-2">
                  {QUESTIONS[step].options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => choose(o.tag)}
                      className="swiss-card-hover"
                      style={{
                        fontFamily: F.body,
                        color: C.inkSoft,
                        fontSize: "0.88rem",
                        border: `2px solid ${C.line}`,
                        background: "#FAFAFA",
                        padding: "0.75rem 1rem",
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
                <p style={{ fontFamily: F.mono, color: C.red, fontSize: "0.68rem", marginBottom: "0.5rem" }}>
                  DIAGNOSIS COMPLETE
                </p>
                <h3
                  style={{
                    fontFamily: F.display,
                    color: C.ink,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                  }}
                >
                  {result.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    color: C.inkSoft,
                    fontSize: "0.9rem",
                    lineHeight: 1.55,
                    marginBottom: "1rem",
                  }}
                >
                  {result.body}
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  <a
                    href="https://calendly.com/calebpierre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-pill cta-pill-primary"
                    style={{ fontSize: "0.82rem", padding: "0.7rem 1.25rem" }}
                  >
                    Start My {result.service} Discovery
                    <span className="cta-icon-circle">
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                  <button
                    onClick={reset}
                    style={{
                      fontFamily: F.mono,
                      color: C.steel,
                      fontSize: "0.72rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Retake
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
