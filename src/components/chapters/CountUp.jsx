import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function CountUp({ to, prefix = "", suffix = "", duration = 1400, decimals = 0 }) {
  const [display, setDisplay] = useState(prefersReducedMotion() ? to : 0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;

    if (prefersReducedMotion()) {
      setDisplay(to);
      done.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            const obj = { val: 0 };
            anime({
              targets: obj,
              val: to,
              duration,
              easing: "easeOutExpo",
              update: () => setDisplay(obj.val),
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  const formatted = decimals > 0
    ? display.toFixed(decimals)
    : Math.round(display).toLocaleString("en-US");

  return (
    <span ref={ref} className="count-up">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
