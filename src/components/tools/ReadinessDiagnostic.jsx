import { useState } from "react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const QUESTIONS = [
  {
    q: "How well-documented is the workflow you're considering?",
    options: [
      { label: "There's no written process — it lives in people's heads", score: 0 },
      { label: "Loosely documented, frequently out of date", score: 1 },
      { label: "Documented and mostly followed", score: 2 },
      { label: "Documented, versioned, and audited", score: 3 },
    ],
  },
  {
    q: "How many systems does this workflow touch?",
    options: [
      { label: "One system, start to finish", score: 3 },
      { label: "Two or three, with manual handoffs", score: 2 },
      { label: "Four or more, stitched together by people", score: 1 },
      { label: "Unknown — nobody's mapped it", score: 0 },
    ],
  },
  {
    q: "What happens when this workflow hits an edge case today?",
    options: [
      { label: "A specific person handles it from memory", score: 0 },
      { label: "It gets escalated, inconsistently", score: 1 },
      { label: "There's a documented exception process", score: 2 },
      { label: "Edge cases are rare and well understood", score: 3 },
    ],
  },
  {
    q: "How reversible is a mistake in this workflow?",
    options: [
      { label: "Hard to reverse — money moves, data is deleted", score: 0 },
      { label: "Costly but fixable with effort", score: 1 },
      { label: "Annoying but easy to correct", score: 2 },
      { label: "Essentially free to undo", score: 3 },
    ],
  },
  {
    q: "Do you know roughly what this workflow costs today?",
    options: [
      { label: "No idea", score: 0 },
      { label: "Rough gut-feel estimate", score: 1 },
      { label: "We've estimated hours, not dollars", score: 2 },
      { label: "Yes — we have a number", score: 3 },
    ],
  },
];

function verdict(score) {
  if (score <= 4) {
    return {
      tier: "MAP FIRST",
      color: C.red,
      body: "This workflow isn't ready to engineer yet — it's ready to observe. Before any automation conversation, the process needs to be mapped: what actually happens, where the exceptions live, and what it costs. That mapping work is Chapter 1 of any real engagement, not a detour from it.",
    };
  }
  if (score <= 9) {
    return {
      tier: "PARTIALLY READY",
      color: C.steelDark,
      body: "Some structure exists, but the edge cases and cost model are thin. A short discovery pass — mapping the exceptions and pricing the current state — will tell you whether this is worth engineering before you commit to building anything.",
    };
  }
  return {
    tier: "READY TO ENGINEER",
    color: C.green,
    body: "This workflow is documented, bounded, and costed well enough to design a real system around — including where the automation boundary should sit. This is exactly the kind of workflow a Systems Intelligence Sprint is built for.",
  };
}

export default function ReadinessDiagnostic() {
  const [answers, setAnswers] = useState({});
  const done = Object.keys(answers).length === QUESTIONS.length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const v = done ? verdict(score) : null;

  return (
    <div id="readiness" style={{ scrollMarginTop: "56px" }}>
      <Reveal>
        <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.5rem" }}>Tool 02</p>
        <h2 style={{ fontFamily: F.display, color: C.black, fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
          Automation Readiness Diagnostic
        </h2>
        <p style={{ fontFamily: F.body, color: C.steelDark, fontSize: "0.98rem", lineHeight: 1.6, maxWidth: "58ch", marginBottom: "2rem" }}>
          Five questions. No email required. Answer honestly — the point
          is an accurate read, not a flattering one.
        </p>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2rem" }}>
        {QUESTIONS.map((item, qi) => (
          <Reveal key={item.q} delay={qi * 0.05}>
            <p style={{ fontFamily: F.display, color: C.black, fontWeight: 700, fontSize: "1.02rem", marginBottom: "0.75rem" }}>
              {qi + 1}. {item.q}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {item.options.map((opt) => {
                const active = answers[qi] === opt.score;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setAnswers((prev) => ({ ...prev, [qi]: opt.score }))}
                    style={{
                      textAlign: "left",
                      fontFamily: F.body,
                      fontSize: "0.9rem",
                      padding: "0.65rem 0.9rem",
                      border: `1.5px solid ${active ? C.navy : C.line}`,
                      background: active ? C.navy : "transparent",
                      color: active ? C.white : C.black,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>

      {done && (
        <Reveal>
          <div style={{ border: `1.5px solid ${v.color}`, padding: "1.75rem" }}>
            <p className="mono-tag" style={{ color: v.color, marginBottom: "0.5rem", fontWeight: 700 }}>{v.tier}</p>
            <p style={{ fontFamily: F.body, color: C.black, fontSize: "0.98rem", lineHeight: 1.65 }}>{v.body}</p>
          </div>
        </Reveal>
      )}
    </div>
  );
}
