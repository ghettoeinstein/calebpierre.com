import { C, F } from "../constants.js";

export default function GlitchMark({ size = 40 }) {
  return (
    <div
      className="glass-mark"
      style={{
        fontFamily: F.mono,
        fontWeight: 700,
        fontSize: size * 0.45,
        color: C.ink,
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1.5px solid ${C.ink}`,
        borderRadius: "8px",
        position: "relative",
        letterSpacing: "-0.05em",
        background: "rgba(255, 255, 255, 0.02)",
      }}
      data-text="CP"
    >
      CP
    </div>
  );
}
