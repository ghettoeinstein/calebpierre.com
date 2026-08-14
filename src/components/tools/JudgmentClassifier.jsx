import { useMemo, useState } from "react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const TRAITS = [
  { key: "repetitive", label: "The correct answer is (almost) always the same" },
  { key: "ambiguous", label: "It requires interpreting incomplete or messy information" },
  { key: "highStakes", label: "A mistake is expensive or hard to reverse" },
  { key: "relational", label: "It depends on trust, relationship, or context only a person has" },
  { key: "rare", label: "It happens rarely enough that building for it isn't worth it yet" },
];

function classify(t) {
  if (t.highStakes || t.relational) {
    return {
      verdict: "HUMAN",
      color: C.red,
      reason: t.highStakes
        ? "The cost of a mistake is high enough, or hard enough to reverse, that accountability needs to sit with a person — even if a system drafts the first pass."
        : "This depends on context or trust that lives in a relationship, not in data. A system can support the person doing this — it shouldn't replace them.",
    };
  }
  if (t.rare) {
    return {
      verdict: "HUMAN (for now)",
      color: C.red,
      reason: "Infrequent enough that the engineering cost of automating it likely exceeds the value recovered — revisit if volume grows.",
    };
  }
  if (t.ambiguous) {
    return {
      verdict: "INTELLIGENCE",
      color: C.steelDark,
      reason: "This needs interpretation or classification a fixed rule can't handle cleanly — a good fit for a model, with a human checkpoint on low-confidence cases.",
    };
  }
  if (t.repetitive) {
    return {
      verdict: "SOFTWARE",
      color: C.black,
      reason: "The answer should always be the same. This doesn't need judgment — it needs a deterministic rule, which will be faster, cheaper, and more auditable than a model.",
    };
  }
  return {
    verdict: "Select at least one trait",
    color: C.steel,
    reason: "Check the boxes that describe the task to get a recommendation.",
  };
}

export default function JudgmentClassifier() {
  const [traits, setTraits] = useState({});
  const result = useMemo(() => classify(traits), [traits]);

  return (
    <div id="classifier" style={{ scrollMarginTop: "56px" }}>
      <Reveal>
        <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.5rem" }}>Tool 03</p>
        <h2 style={{ fontFamily: F.display, color: C.black, fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
          Software, Intelligence, or Human?
        </h2>
        <p style={{ fontFamily: F.body, color: C.steelDark, fontSize: "0.98rem", lineHeight: 1.6, maxWidth: "58ch", marginBottom: "2rem" }}>
          Think of one specific task inside a workflow. Check what applies,
          and see where it lands on the same framework used to design
          every system on this site.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {TRAITS.map((t) => {
              const active = !!traits[t.key];
              return (
                <label
                  key={t.key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    border: `1.5px solid ${active ? C.navy : C.line}`,
                    background: active ? C.greenDim : "transparent",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => setTraits((prev) => ({ ...prev, [t.key]: !prev[t.key] }))}
                    style={{ accentColor: C.navy, width: 16, height: 16, flexShrink: 0 }}
                  />
                  <span style={{ fontFamily: F.body, fontSize: "0.92rem", color: C.black }}>{t.label}</span>
                </label>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ border: `1.5px solid ${result.color}`, padding: "1.75rem", height: "100%" }}>
            <p className="mono-tag" style={{ color: C.steel, marginBottom: "0.5rem" }}>RECOMMENDATION</p>
            <p style={{ fontFamily: F.display, color: result.color, fontWeight: 900, fontSize: "1.75rem", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              {result.verdict}
            </p>
            <p style={{ fontFamily: F.body, color: C.black, fontSize: "0.95rem", lineHeight: 1.6 }}>{result.reason}</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
