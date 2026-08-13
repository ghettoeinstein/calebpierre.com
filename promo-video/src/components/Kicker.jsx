import { interpolate, useCurrentFrame } from "remotion";
import { COLOR, MONO_FONT } from "../theme.js";
import { FONT_FAMILY } from "../fonts.js";

export const Kicker = ({ children, delay = 0, color = COLOR.orange, align = "center" }) => {
  const frame = useCurrentFrame();
  const t = frame - delay;
  const opacity = interpolate(t, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(t, [0, 14], [10, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: align === "center" ? "center" : "flex-start",
        color,
        fontFamily: FONT_FAMILY.mono || MONO_FONT,
        fontWeight: 600,
        fontSize: 22,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, boxShadow: `0 0 0 6px ${color}22` }} />
      {children}
    </div>
  );
};
