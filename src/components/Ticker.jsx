import { C, F } from "../constants.js";

export default function Ticker() {
  // 7 phrases — rotating set keeps it alive
  const items = [
    "NO BABYSITTING",
    "ZERO MANUAL ENTRY",
    "SYSTEMS THAT NEVER SLEEP",
    "CERTAINTY OVER CHAOS",
    "DATA WITHOUT FRICTION",
    "SECURITY WITHOUT WORRY",
    "OPERATIONS ON AUTOPILOT",
    "CONTROL BY DESIGN",
    "YOUR BUSINESS ON AUTOPILOT",
    "HUMANS DO STRATEGY",
  ];
  // Duplicate for seamless loop
  const loop = [...items, ...items];

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {loop.map((t, i) => {
          // Alternate: every 3rd item in red, others in gray
          const isRed = (i % items.length) % 3 === 0;
          return (
            <span
              key={i}
              style={{
                fontFamily: F.mono,
                fontSize: "0.75rem",
                color: isRed ? C.red : "#888888",
                padding: "0.9rem 2rem",
                whiteSpace: "nowrap",
                letterSpacing: "0.1em",
                flexShrink: 0,
                fontWeight: 600,
              }}
            >
              {t} <span style={{ color: C.red, margin: "0 1.5rem" }}>·</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
