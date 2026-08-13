import { interpolate, useCurrentFrame } from "remotion";

export const RevealWords = ({ text, delay = 0, stagger = 3, style, highlightWords = [], highlightColor }) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 0.32em", ...style }}>
      {words.map((word, i) => {
        const t = frame - delay - i * stagger;
        const opacity = interpolate(t, [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const y = interpolate(t, [0, 14], [26, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const isHighlight = highlightWords.includes(word.replace(/[.,]/g, ""));
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity,
              transform: `translateY(${y}px)`,
              color: isHighlight ? highlightColor : undefined,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
