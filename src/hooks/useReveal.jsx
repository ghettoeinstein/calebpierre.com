import { useRef, useEffect, useCallback } from "react";
import anime from "animejs";

/* ── helpers ────────────────────────────────────────────── */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── 3D tilt ────────────────────────────────────────────── */

const attachTilt = (el) => {
  const rotMax = 8; // degrees
  el.style.transformPerspective = "600px";
  el.style.transformStyle = "preserve-3d";

  let current = null;

  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const xRel = (e.clientX - rect.left) / rect.width;
    const yRel = (e.clientY - rect.top) / rect.height;
    const rotY = (xRel - 0.5) * rotMax * 2;
    const rotX = (0.5 - yRel) * rotMax * 2;

    if (current) current.pause();
    current = anime({
      targets: el,
      rotateX: rotX,
      rotateY: rotY,
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const onLeave = () => {
    if (current) current.pause();
    current = anime({
      targets: el,
      rotateX: 0,
      rotateY: 0,
      duration: 500,
      easing: "easeOutCubic",
    });
  };

  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);

  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
    if (current) current.pause();
    el.style.transform = "";
  };
};

/* ── useGsapReveal hook (kept the same name — external API is unchanged) ─
   Runs scroll-triggered fade-up reveals via IntersectionObserver + anime.js,
   with optional staggered children and optional 3D tilt-on-hover.

   @param {object}   opts
   @param {number}   opts.delay       – seconds to delay the reveal
   @param {number}   opts.stagger     – seconds between staggered children
   @param {boolean}  opts.tilt        – attach 3D tilt on hover
   @param {number}   opts.y           – initial translateY (px), default 28
   @param {string}   opts.start       – IntersectionObserver rootMargin bottom offset (unused directly, kept for API compat)
   @returns {function} ref callback to attach to the container element
   ─────────────────────────────────────────────────────────── */
export function useGsapReveal({
  delay = 0,
  stagger = 0,
  tilt = false,
  y = 28,
} = {}) {
  const elRef = useRef(null);
  const cleanupTilt = useRef(null);
  const observerRef = useRef(null);

  const showFinalState = (el) => {
    el.style.opacity = 1;
    el.style.transform = "none";
    Array.from(el.children).forEach((c) => {
      c.style.opacity = 1;
      c.style.transform = "none";
    });
  };

  const runReveal = useCallback(
    (el) => {
      // rAF-driven tweens never advance in a hidden/backgrounded tab —
      // rather than leave content stuck at its "from" state, skip the
      // animation and jump straight to the final visible state.
      if (prefersReducedMotion() || document.hidden) {
        showFinalState(el);
        return;
      }

      if (stagger > 0 && el.children.length > 0) {
        anime.set(el, { opacity: 1 });
        anime({
          targets: el.children,
          opacity: [0, 1],
          translateY: [y, 0],
          duration: 700,
          delay: anime.stagger(stagger * 1000, { start: delay * 1000 }),
          easing: "easeOutCubic",
        });
      } else {
        anime({
          targets: el,
          opacity: [0, 1],
          translateY: [y, 0],
          duration: 800,
          delay: delay * 1000,
          easing: "easeOutCubic",
        });
      }
    },
    [delay, stagger, y]
  );

  const setRef = useCallback(
    (node) => {
      if (elRef.current && observerRef.current) {
        observerRef.current.disconnect();
      }
      if (cleanupTilt.current) {
        cleanupTilt.current();
        cleanupTilt.current = null;
      }

      elRef.current = node;
      if (!node) return;

      if (tilt) {
        cleanupTilt.current = attachTilt(node);
      }

      // Pre-hide staggered children synchronously so there's no flash
      // before the IntersectionObserver fires and anime.js takes over.
      if (stagger > 0 && node.children.length > 0 && !prefersReducedMotion()) {
        node.style.opacity = 1;
        Array.from(node.children).forEach((c) => {
          c.style.opacity = 0;
          c.style.transform = `translateY(${y}px)`;
        });
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runReveal(node);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.01, rootMargin: "0px 0px -15% 0px" }
      );
      observer.observe(node);
      observerRef.current = observer;
    },
    [tilt, runReveal]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (cleanupTilt.current) cleanupTilt.current();
    };
  }, []);

  return setRef;
}

/* ── Reveal component (same interface as before) ────────── */

/**
 * Drop-in scroll reveal wrapper.
 *
 * Props:
 *  - children
 *  - delay   (seconds, default 0)
 *  - className
 *  - stagger  (seconds, default 0)  – animate direct children with stagger
 *  - tilt     (boolean, default false) – 3D tilt on hover
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  stagger = 0,
  tilt = false,
}) {
  const setRef = useGsapReveal({ delay, stagger, tilt });

  return (
    <div ref={setRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
