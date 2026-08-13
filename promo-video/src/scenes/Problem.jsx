import { AbsoluteFill } from "remotion";
import { COLOR, DISPLAY_FONT } from "../theme.js";
import { FONT_FAMILY } from "../fonts.js";
import { GridNoise } from "../components/GridNoise.jsx";
import { Kicker } from "../components/Kicker.jsx";
import { RevealWords } from "../components/RevealWords.jsx";

export const Problem = () => {
  return (
    <AbsoluteFill style={{ background: COLOR.night, alignItems: "center", justifyContent: "center", padding: 120 }}>
      <GridNoise opacity={0.18} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
        <Kicker delay={0}>Most small business sites</Kicker>
        <RevealWords
          text="Your website is costing you clients."
          delay={10}
          stagger={4}
          highlightWords={["costing"]}
          highlightColor={COLOR.orange}
          style={{
            fontFamily: FONT_FAMILY.display || DISPLAY_FONT,
            fontWeight: 600,
            fontSize: 96,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: COLOR.ink,
            maxWidth: 1400,
            textAlign: "center",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
