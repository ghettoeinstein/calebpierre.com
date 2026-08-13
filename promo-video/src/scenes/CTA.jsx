import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLOR, DISPLAY_FONT, MONO_FONT } from "../theme.js";
import { FONT_FAMILY } from "../fonts.js";
import { OrbitRings } from "../components/OrbitRings.jsx";
import { GridNoise } from "../components/GridNoise.jsx";

export const CTA = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const urlOpacity = interpolate(frame, [6, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const urlY = interpolate(frame, [6, 20], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const buttonOpacity = interpolate(frame, [24, 36], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const buttonScale = interpolate(frame, [24, 36], [0.92, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const markOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 18, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ background: COLOR.night, alignItems: "center", justifyContent: "center", opacity: fadeOut }}>
      <GridNoise opacity={0.2} />
      <OrbitRings size={760} color={COLOR.acid} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <div
          style={{
            opacity: markOpacity,
            width: 76,
            height: 76,
            display: "grid",
            placeItems: "center",
            border: "1px solid rgba(244,241,232,0.55)",
            fontFamily: FONT_FAMILY.mono || MONO_FONT,
            fontWeight: 600,
            fontSize: 26,
            color: COLOR.ink,
          }}
        >
          CP
        </div>

        <div
          style={{
            opacity: urlOpacity,
            transform: `translateY(${urlY}px)`,
            fontFamily: FONT_FAMILY.display || DISPLAY_FONT,
            fontWeight: 600,
            fontSize: 108,
            letterSpacing: "-0.045em",
            color: COLOR.ink,
          }}
        >
          calebpierre.com
        </div>

        <div
          style={{
            opacity: buttonOpacity,
            transform: `scale(${buttonScale})`,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "18px 30px",
            background: COLOR.acid,
            color: COLOR.inkDark,
            fontFamily: FONT_FAMILY.mono || MONO_FONT,
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: "0.04em",
          }}
        >
          Start your build for $299 &nbsp;→
        </div>
      </div>
    </AbsoluteFill>
  );
};
