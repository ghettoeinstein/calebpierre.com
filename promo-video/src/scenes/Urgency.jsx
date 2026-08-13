import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLOR, DISPLAY_FONT, MONO_FONT } from "../theme.js";
import { FONT_FAMILY } from "../fonts.js";
import { OrbitRings } from "../components/OrbitRings.jsx";
import { Kicker } from "../components/Kicker.jsx";

export const Urgency = () => {
  const frame = useCurrentFrame();
  const pulse = 0.9 + Math.sin(frame / 8) * 0.08;

  const headOpacity = interpolate(frame, [8, 22], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const headY = interpolate(frame, [8, 22], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subOpacity = interpolate(frame, [24, 36], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLOR.night, alignItems: "center", justifyContent: "center" }}>
      <OrbitRings size={860} color={COLOR.orange} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
        <Kicker delay={0}>Only a few slots each month</Kicker>
        <div
          style={{
            opacity: headOpacity,
            transform: `translateY(${headY}px) scale(${pulse})`,
            fontFamily: FONT_FAMILY.display || DISPLAY_FONT,
            fontWeight: 600,
            fontSize: 84,
            letterSpacing: "-0.04em",
            color: COLOR.ink,
            textAlign: "center",
          }}
        >
          Available for select builds.
        </div>
        <div
          style={{
            opacity: subOpacity,
            fontFamily: FONT_FAMILY.mono || MONO_FONT,
            fontSize: 22,
            letterSpacing: "0.08em",
            color: COLOR.muted,
          }}
        >
          NEW CLIENTS ONLY &middot; FIRST COME, FIRST BUILT
        </div>
      </div>
    </AbsoluteFill>
  );
};
