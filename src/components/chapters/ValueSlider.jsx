import { useState } from "react";
import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

const CURRENT = { volume: 1800, minutes: 17, error: 3.8, cost: 31.4 };
const ENGINEERED = { volume: 1800, minutes: 4, error: 0.7, cost: 9.2 };

function lerp(a, b, t) { return a + (b - a) * t; }

export default function ValueSlider() {
  const [t, setT] = useState(0); // 0 = current, 1 = engineered

  const minutes = lerp(CURRENT.minutes, ENGINEERED.minutes, t);
  const error = lerp(CURRENT.error, ENGINEERED.error, t);
  const cost = lerp(CURRENT.cost, ENGINEERED.cost, t);
  const annualRecovered = Math.round((CURRENT.cost - cost) * CURRENT.volume * 12);

  return (
    <section className="chapter section-pad" style={{ background: C.offWhite }}>
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.75rem" }}>
            Chapter 09 — What it's worth
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.9rem, 4.2vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "2.5rem",
              maxWidth: "22ch",
            }}
          >
            One workflow can change the economics of an entire department.
          </h2>
        </Reveal>

        <Reveal>
          <div style={{ marginBottom: "2rem" }}>
            <input
              type="range"
              min={0}
              max={100}
              value={Math.round(t * 100)}
              onChange={(e) => setT(Number(e.target.value) / 100)}
              style={{ width: "100%", accentColor: C.navy }}
              aria-label="Slide from current operation to engineered operation"
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.4rem" }}>
              <span className="mono-tag" style={{ color: C.steel }}>CURRENT OPERATION</span>
              <span className="mono-tag" style={{ color: C.navy }}>ENGINEERED OPERATION</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: "2.5rem" }}>
            <div style={{ border: `1.5px solid ${C.ink}`, padding: "1.25rem" }}>
              <p style={{ fontFamily: F.display, fontWeight: 800, fontSize: "1.6rem", color: C.ink }}>
                {minutes.toFixed(1)} min
              </p>
              <p className="mono-tag" style={{ color: C.steel }}>per case</p>
            </div>
            <div style={{ border: `1.5px solid ${C.ink}`, padding: "1.25rem" }}>
              <p style={{ fontFamily: F.display, fontWeight: 800, fontSize: "1.6rem", color: C.ink }}>
                {error.toFixed(1)}%
              </p>
              <p className="mono-tag" style={{ color: C.steel }}>error rate</p>
            </div>
            <div style={{ border: `1.5px solid ${C.ink}`, padding: "1.25rem" }}>
              <p style={{ fontFamily: F.display, fontWeight: 800, fontSize: "1.6rem", color: C.ink }}>
                ${cost.toFixed(2)}
              </p>
              <p className="mono-tag" style={{ color: C.steel }}>cost per case</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ borderTop: `2px solid ${C.ink}`, paddingTop: "1.5rem" }}>
            <p
              style={{
                fontFamily: F.display,
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: C.green,
                letterSpacing: "-0.03em",
                marginBottom: "0.5rem",
              }}
            >
              ${annualRecovered.toLocaleString("en-US")}
            </p>
            <p style={{ fontFamily: F.body, fontWeight: 600, color: C.ink, marginBottom: "0.5rem" }}>
              annual operating capacity recovered
            </p>
            <p style={{ fontFamily: F.body, color: C.inkSoft, fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "56ch" }}>
              And that's before measuring faster customer response, reduced
              error exposure, or the downstream value of the reclaimed
              employee time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
