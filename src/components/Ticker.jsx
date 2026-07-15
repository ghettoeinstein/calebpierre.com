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
  const loop = [...items, ...items];
  return (
    <div
      style={{
        backgroundColor: C.ink,
        overflow: "hidden",
        borderTop: "2px solid #E10600",
        borderBottom: "1px solid #E10600",
      }}
    >
      <div className="ticker-track" style={{ display: "flex", width: "max-content" }}>
        {loop.map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: F.mono,
              fontSize: "0.75rem",
              color: i % items.length === 0 ? "#E10600" : "#888888",
              padding: "0.9rem 2rem",
              whiteSpace: "nowrap",
              letterSpacing: "0.1em",
            }}
          >
            {t} <span style={{ color: "#E10600", margin: "0 1.5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
