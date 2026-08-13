import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLOR, DISPLAY_FONT } from "../theme.js";
import { FONT_FAMILY } from "../fonts.js";

export const Turn = () => {
  const frame = useCurrentFrame();
  const wipe = interpolate(frame, [0, 10], [0, 100], { extrapolateRight: "clamp" });
  const textOpacity = interpolate(frame, [6, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scale = interpolate(frame, [6, 20], [0.9, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLOR.night, alignItems: "center", justifyContent: "center" }}>
      <AbsoluteFill
        style={{
          background: COLOR.orange,
          clipPath: `inset(0 ${100 - wipe}% 0 0)`,
        }}
      />
      <div
        style={{
          position: "relative",
          opacity: textOpacity,
          transform: `scale(${scale})`,
          fontFamily: FONT_FAMILY.display || DISPLAY_FONT,
          fontWeight: 600,
          fontSize: 130,
          letterSpacing: "-0.05em",
          color: COLOR.inkDark,
        }}
      >
        Not anymore.
      </div>
    </AbsoluteFill>
  );
};
