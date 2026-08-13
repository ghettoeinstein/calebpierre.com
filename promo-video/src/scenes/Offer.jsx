import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLOR, DISPLAY_FONT, MONO_FONT } from "../theme.js";
import { FONT_FAMILY } from "../fonts.js";
import { GridNoise } from "../components/GridNoise.jsx";
import { Kicker } from "../components/Kicker.jsx";

export const Offer = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const priceScale = spring({ frame: frame - 14, fps, config: { damping: 11, stiffness: 130, mass: 0.9 } });
  const priceOpacity = interpolate(frame, [14, 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const subOpacity = interpolate(frame, [34, 48], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subY = interpolate(frame, [34, 48], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const badgeOpacity = interpolate(frame, [50, 62], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLOR.night, alignItems: "center", justifyContent: "center" }}>
      <GridNoise opacity={0.2} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
        <Kicker delay={0} color={COLOR.orange}>Limited offer &middot; New clients only</Kicker>

        <div
          style={{
            opacity: priceOpacity,
            transform: `scale(${priceScale})`,
            display: "flex",
            alignItems: "flex-start",
            fontFamily: FONT_FAMILY.display || DISPLAY_FONT,
            fontWeight: 600,
            color: COLOR.acid,
            lineHeight: 0.85,
          }}
        >
          <span style={{ fontSize: 110, marginTop: 34 }}>$</span>
          <span style={{ fontSize: 300, letterSpacing: "-0.05em" }}>299</span>
        </div>

        <div
          style={{
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            fontFamily: FONT_FAMILY.mono || MONO_FONT,
            fontSize: 26,
            letterSpacing: "0.08em",
            color: COLOR.ink,
            textAlign: "center",
          }}
        >
          A FULL 5-PAGE WEBSITE. DESIGNED. BUILT. DEPLOYED.
        </div>

        <div
          style={{
            opacity: badgeOpacity,
            marginTop: 14,
            padding: "10px 20px",
            border: `1px solid ${COLOR.line}`,
            fontFamily: FONT_FAMILY.mono || MONO_FONT,
            fontSize: 18,
            letterSpacing: "0.1em",
            color: COLOR.muted,
          }}
        >
          calebpierre.com
        </div>
      </div>
    </AbsoluteFill>
  );
};
