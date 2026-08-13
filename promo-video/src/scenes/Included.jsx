import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLOR, DISPLAY_FONT, MONO_FONT } from "../theme.js";
import { FONT_FAMILY } from "../fonts.js";
import { GridNoise } from "../components/GridNoise.jsx";
import { Kicker } from "../components/Kicker.jsx";

const ITEMS = [
  "Custom design — not a template",
  "Mobile-first, fast-loading",
  "SEO-ready from day one",
  "Live on your own domain",
  "Source code — yours, forever",
];

const Row = ({ text, delay }) => {
  const frame = useCurrentFrame();
  const t = frame - delay;
  const opacity = interpolate(t, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const x = interpolate(t, [0, 14], [-24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ opacity, transform: `translateX(${x}px)`, display: "flex", alignItems: "center", gap: 20 }}>
      <div
        style={{
          width: 34,
          height: 34,
          flexShrink: 0,
          display: "grid",
          placeItems: "center",
          border: `1px solid ${COLOR.acid}`,
          color: COLOR.acid,
          fontFamily: FONT_FAMILY.mono || MONO_FONT,
          fontSize: 18,
        }}
      >
        ✓
      </div>
      <span
        style={{
          fontFamily: FONT_FAMILY.display || DISPLAY_FONT,
          fontWeight: 600,
          fontSize: 44,
          letterSpacing: "-0.015em",
          color: COLOR.ink,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export const Included = () => {
  return (
    <AbsoluteFill style={{ background: COLOR.night, alignItems: "center", justifyContent: "center" }}>
      <GridNoise opacity={0.16} />
      <div style={{ display: "flex", flexDirection: "column", gap: 34, alignItems: "flex-start" }}>
        <div style={{ marginBottom: 6 }}>
          <Kicker delay={0} align="left" color={COLOR.blue}>What's included</Kicker>
        </div>
        {ITEMS.map((item, i) => (
          <Row key={item} text={item} delay={8 + i * 10} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
