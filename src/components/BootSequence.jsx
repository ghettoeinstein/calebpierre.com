import { useEffect, useState } from "react";

const BOOT_KEY = "calebos-boot-seen";

const BOOT_LINES = [
  "> initializing CALEBOS...",
  "> loading operator method: enterprise of one...",
  "> mapping operating reality...",
  "> decision rights: defined",
  "> evidence loop: online",
  "> access granted. welcome, operator.",
];

export function hasSeenBoot() {
  try {
    return window.localStorage.getItem(BOOT_KEY) === "1";
  } catch {
    return true;
  }
}

function markBootSeen() {
  try {
    window.localStorage.setItem(BOOT_KEY, "1");
  } catch {
    /* private mode or storage disabled — safe to ignore */
  }
}

export default function BootSequence({ onDone }) {
  const [lines, setLines] = useState([]);
  const [closing, setClosing] = useState(false);

  const finish = () => {
    markBootSeen();
    setClosing(true);
    setTimeout(onDone, 320);
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finish();
      return;
    }
    let i = 0;
    const iv = setInterval(() => {
      i += 1;
      setLines(BOOT_LINES.slice(0, i));
      if (i >= BOOT_LINES.length) {
        clearInterval(iv);
        setTimeout(finish, 550);
      }
    }, 340);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Enter") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`boot-overlay ${closing ? "is-closing" : ""}`} role="presentation">
      <div className="boot-lines" aria-hidden="true">
        {lines.map((l, i) => (
          <div key={i} className="boot-line">
            {l}
            {i === lines.length - 1 && <span className="cursor-blink">▌</span>}
          </div>
        ))}
      </div>
      <button type="button" className="boot-skip" onClick={finish} autoFocus>
        Skip intro
      </button>
    </div>
  );
}
