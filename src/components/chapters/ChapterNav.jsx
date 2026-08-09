import { useEffect, useRef, useState } from "react";
import { C, F } from "../../constants.js";

const CHAPTERS = [
  { id: "reality", label: "Reality" },
  { id: "leverage", label: "Leverage" },
  { id: "systems", label: "Systems" },
  { id: "evidence", label: "Evidence" },
  { id: "work", label: "Work" },
  { id: "start", label: "Start" },
];

export default function ChapterNav() {
  const [active, setActive] = useState("reality");
  const ticking = useRef(false);

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean);

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY + window.innerHeight * 0.35;
        let current = sections[0]?.id;
        for (const s of sections) {
          if (s.offsetTop <= y) current = s.id;
        }
        if (current) setActive(current);
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${C.line}`,
      }}
    >
      <div
        className="cp-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(0.75rem, 3vw, 2.25rem)",
          padding: "10px 0",
        }}
      >
        {CHAPTERS.map((c) => {
          const isActive = c.id === active;
          return (
            <a
              key={c.id}
              href={`#${c.id}`}
              style={{
                fontFamily: F.mono,
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isActive ? C.navy : C.steel,
                fontWeight: isActive ? 700 : 500,
                paddingBottom: 6,
                borderBottom: isActive ? `2px solid ${C.wire}` : "2px solid transparent",
                transition: "color 0.2s ease, border-color 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {c.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
