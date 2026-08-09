import { useMemo, useState } from "react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

function Field({ label, value, onChange, suffix, min = 0, step = 1 }) {
  return (
    <label style={{ display: "block" }}>
      <span className="mono-tag" style={{ color: C.steel, display: "block", marginBottom: "0.4rem" }}>
        {label}
      </span>
      <div style={{ display: "flex", alignItems: "center", border: `1.5px solid ${C.ink}`, padding: "0.6rem 0.85rem" }}>
        <input
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          style={{
            border: "none",
            outline: "none",
            fontFamily: F.body,
            fontWeight: 700,
            fontSize: "1.05rem",
            color: C.ink,
            width: "100%",
            background: "transparent",
          }}
        />
        {suffix && <span style={{ fontFamily: F.mono, fontSize: "0.75rem", color: C.steel, whiteSpace: "nowrap" }}>{suffix}</span>}
      </div>
    </label>
  );
}

export default function CostCalculator() {
  const [volume, setVolume] = useState(600);
  const [minutes, setMinutes] = useState(12);
  const [hourlyCost, setHourlyCost] = useState(38);
  const [errorRate, setErrorRate] = useState(4);
  const [errorCost, setErrorCost] = useState(45);
  const [efficiency, setEfficiency] = useState(70);

  const result = useMemo(() => {
    const laborCostPerCase = (minutes / 60) * hourlyCost;
    const errorCostPerCase = (errorRate / 100) * errorCost;
    const currentCostPerCase = laborCostPerCase + errorCostPerCase;
    const currentAnnual = currentCostPerCase * volume * 12;

    const engineeredCostPerCase = currentCostPerCase * (1 - efficiency / 100);
    const engineeredAnnual = engineeredCostPerCase * volume * 12;

    const recovered = currentAnnual - engineeredAnnual;
    return { currentAnnual, engineeredAnnual, recovered, currentCostPerCase, engineeredCostPerCase };
  }, [volume, minutes, hourlyCost, errorRate, errorCost, efficiency]);

  const fmt = (n) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div id="cost-calculator" style={{ scrollMarginTop: "56px" }}>
      <Reveal>
        <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.5rem" }}>Tool 01</p>
        <h2 style={{ fontFamily: F.display, color: C.ink, fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
          Workflow Cost Calculator
        </h2>
        <p style={{ fontFamily: F.body, color: C.inkSoft, fontSize: "0.98rem", lineHeight: 1.6, maxWidth: "58ch", marginBottom: "2rem" }}>
          Put real numbers on one workflow. This is the same model used in
          an actual engagement — not a generic estimate.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <Field label="Cases per month" value={volume} onChange={setVolume} suffix="cases" />
            <Field label="Minutes per case" value={minutes} onChange={setMinutes} suffix="min" />
            <Field label="Fully-loaded hourly cost" value={hourlyCost} onChange={setHourlyCost} suffix="$/hr" />
            <Field label="Error rate" value={errorRate} onChange={setErrorRate} suffix="%" />
            <Field label="Cost per error (rework, delay, exposure)" value={errorCost} onChange={setErrorCost} suffix="$" />
            <div>
              <span className="mono-tag" style={{ color: C.steel, display: "block", marginBottom: "0.4rem" }}>
                Assumed engineering efficiency gain
              </span>
              <input
                type="range"
                min={20}
                max={90}
                value={efficiency}
                onChange={(e) => setEfficiency(Number(e.target.value))}
                style={{ width: "100%", accentColor: C.navy }}
              />
              <span style={{ fontFamily: F.mono, fontSize: "0.8rem", color: C.navy, fontWeight: 700 }}>{efficiency}%</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ border: `1.5px solid ${C.ink}`, padding: "1.75rem", background: C.offWhite, height: "100%" }}>
            <p className="mono-tag" style={{ color: C.steel, marginBottom: "1rem" }}>MODELED RESULT</p>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem", borderBottom: `1px dashed ${C.line}`, paddingBottom: "0.6rem" }}>
              <span style={{ fontFamily: F.body, color: C.steel, fontSize: "0.88rem" }}>Current annual cost</span>
              <span style={{ fontFamily: F.display, color: C.riskRed, fontWeight: 800 }}>${fmt(result.currentAnnual)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem", borderBottom: `1px dashed ${C.line}`, paddingBottom: "0.6rem" }}>
              <span style={{ fontFamily: F.body, color: C.steel, fontSize: "0.88rem" }}>Engineered annual cost</span>
              <span style={{ fontFamily: F.display, color: C.ink, fontWeight: 800 }}>${fmt(result.engineeredAnnual)}</span>
            </div>

            <p style={{ fontFamily: F.display, color: C.green, fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em", marginBottom: "0.4rem" }}>
              ${fmt(result.recovered)}
            </p>
            <p style={{ fontFamily: F.body, color: C.ink, fontSize: "0.9rem", fontWeight: 600 }}>
              recovered per year on this one workflow
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
