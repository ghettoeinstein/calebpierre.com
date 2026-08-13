import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLOR, MONO_FONT } from "../theme.js";
import { FONT_FAMILY } from "../fonts.js";
import { GridNoise } from "../components/GridNoise.jsx";

export const ColdOpen = () => {
  const frame = useCurrentFrame();

  const markOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const markScale = interpolate(frame, [0, 18], [0.86, 1], { extrapolateRight: "clamp" });
  const sweepX = interpolate(frame, [0, 26], [-120, 220], { extrapolateRight: "clamp" });
  const taglineOpacity = interpolate(frame, [18, 32], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const taglineY = interpolate(frame, [18, 32], [8, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLOR.night, alignItems: "center", justifyContent: "center" }}>
      <GridNoise opacity={0.22} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
        <div
          style={{
            position: "relative",
            width: 128,
            height: 128,
            display: "grid",
            placeItems: "center",
            border: `1px solid rgba(244,241,232,0.55)`,
            opacity: markOpacity,
            transform: `scale(${markScale})`,
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontFamily: FONT_FAMILY.mono || MONO_FONT,
              fontWeight: 600,
              fontSize: 44,
              letterSpacing: "-0.06em",
              color: COLOR.ink,
            }}
          >
            CP
          </span>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 40,
              left: `${sweepX}%`,
              background: `linear-gradient(90deg, transparent, ${COLOR.acid}55, transparent)`,
            }}
          />
        </div>
        <div
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
            fontFamily: FONT_FAMILY.mono || MONO_FONT,
            color: COLOR.muted,
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Caleb Pierre &middot; calebpierre.com
        </div>
      </div>
    </AbsoluteFill>
  );
};
