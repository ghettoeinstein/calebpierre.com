import { useState, useEffect } from "react";
import { C, F } from "../constants.js";

const BOOT_LINES = [
  "> establishing secure connection...",
  "> verifying client credentials...",
  "> access granted",
  "> welcome — caleb pierre / remote systems agency",
];

export default function BootSequence({ onDone }) {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setLines(BOOT_LINES.slice(0, i));
      if (i >= BOOT_LINES.length) {
        clearInterval(iv);
        setTimeout(onDone, 500);
      }
    }, 420);
    return () => clearInterval(iv);
  }, [onDone]);
  return (
    <div
      style={{
        fontFamily: F.mono,
        fontSize: "0.85rem",
        color: C.red,
        lineHeight: 1.9,
        minHeight: "7.6rem",
      }}
    >
      {lines.map((l, i) => (
        <div
          key={i}
          style={{
            color:
              i === lines.length - 1 && l.includes("welcome")
                ? C.ink
                : undefined,
          }}
        >
          {l}
          {i === lines.length - 1 && <span className="cursor-blink">▌</span>}
        </div>
      ))}
    </div>
  );
}
