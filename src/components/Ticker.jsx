import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Ticker() {
  const items = [
    "WEB DESIGN",
    "AI AGENTS",
    "BUSINESS AUTOMATION",
    "SECURITY AUDITS",
    "CONTENT SYSTEMS",
    "TECH SUPPORT",
  ];
  const loop = [...items, ...items];
  return (
    <div
      style={{
        backgroundColor: C.bg,
        overflow: "hidden",
        borderTop: `1px solid ${C.red}`,
        borderBottom: `1px solid rgba(225, 6, 0, 0.2)`,
      }}
    >
      <div className="ticker-track" style={{ display: "flex", width: "max-content" }}>
        {loop.map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: F.mono,
              fontSize: "0.75rem",
              color: i % items.length === 0 ? C.red : C.steel,
              padding: "0.9rem 2rem",
              whiteSpace: "nowrap",
              letterSpacing: "0.1em",
            }}
          >
            {t} <span style={{ color: C.red, margin: "0 1.5rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
