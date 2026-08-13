import { AbsoluteFill } from "remotion";
import { COLOR } from "../theme.js";

export const GridNoise = ({ opacity = 0.28 }) => (
  <AbsoluteFill
    style={{
      opacity,
      pointerEvents: "none",
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      backgroundSize: "56px 56px",
      maskImage: "radial-gradient(circle at 50% 45%, black, transparent 78%)",
      WebkitMaskImage: "radial-gradient(circle at 50% 45%, black, transparent 78%)",
    }}
  />
);

export const Vignette = () => (
  <AbsoluteFill
    style={{
      pointerEvents: "none",
      background: `radial-gradient(circle at 50% 50%, transparent 45%, ${COLOR.night} 100%)`,
    }}
  />
);
