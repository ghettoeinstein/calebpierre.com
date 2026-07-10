import { C, F } from "../constants.js";

export default function Ticker() {
  const items = [
    "WEB DESIGN",
    "AI PROGRAMMING",
    "BUSINESS AUTOMATION",
    "CONTENT MARKETING",
    "REMOTE TECH SUPPORT",
    "EXPERIENCE / EVENT DESIGN",
  ];
  const loop = [...items, ...items];
  return (
    <div
      style={{
        backgroundColor: C.ink,
        overflow: "hidden",
        borderTop: `1px solid ${C.red}`,
        borderBottom: `1px solid ${C.red}`,
      }}
    >
      <div className="ticker-track" style={{ display: "flex", width: "max-content" }}>
        {loop.map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: F.mono,
              fontSize: "0.78rem",
              color: i % items.length === 0 ? C.red : "#EDEDED",
              padding: "0.9rem 2rem",
              whiteSpace: "nowrap",
              letterSpacing: "0.08em",
            }}
          >
            {t} <span style={{ color: C.red, margin: "0 1.5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
