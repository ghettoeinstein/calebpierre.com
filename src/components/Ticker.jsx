import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Ticker() {
  const items = [
    "NO BABYSITTING",
    "ZERO MANUAL ENTRY",
    "SYSTEMS THAT NEVER SLEEP",
    "CERTAINTY OVER CHAOS",
    "DATA WITHOUT FRICTION",
    "SECURITY WITHOUT WORRY",
    "OPERATIONS ON AUTOPILOT",
    "CONTROL BY DESIGN",
  ];
  // Double the items for seamless loop
  const loop = [...items, ...items];

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {loop.map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: F.mono,
              fontSize: "0.75rem",
              color: i % items.length === 0 ? C.red : "#888888",
              padding: "0.9rem 2rem",
              whiteSpace: "nowrap",
              letterSpacing: "0.1em",
              flexShrink: 0,
            }}
          >
            {t} <span style={{ color: C.red, margin: "0 1.5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
