import { useCurrentFrame } from "remotion";
import { COLOR } from "../theme.js";

export const OrbitRings = ({ size = 900, color = COLOR.acid }) => {
  const frame = useCurrentFrame();
  const rotation = (frame / 30) * 12;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "8%",
          borderRadius: "50%",
          border: `1px solid ${COLOR.line}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "1px dashed rgba(244,241,232,0.14)",
          transform: `rotate(${rotation}deg)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "22%",
          borderRadius: "50%",
          boxShadow: `0 0 140px 20px ${color}18`,
        }}
      />
    </div>
  );
};
