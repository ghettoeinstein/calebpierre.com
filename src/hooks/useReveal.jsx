import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ── helpers ────────────────────────────────────────────── */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Default fade-up tween — shared by the hook and the component
 * so visuals stay consistent everywhere.
 */
const animateIn = (target, delay = 0) =>
  gsap.fromTo(
    target,
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        once: true,
      },
    }
  );

/* ── 3D tilt ────────────────────────────────────────────── */

const attachTilt = (el) => {
  const rotMax = 8; // degrees
  const persp = 600;

  gsap.set(el, {
    transformPerspective: persp,
    transformStyle: "preserve-3d",
  });

  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const xRel = (e.clientX - rect.left) / rect.width;
    const yRel = (e.clientY - rect.top) / rect.height;
    const rotY = (xRel - 0.5) * rotMax * 2;
    const rotX = (0.5 - yRel) * rotMax * 2;
    gsap.to(el, {
      rotationX: rotX,
      rotationY: rotY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    gsap.to(el, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);

  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
    gsap.set(el, { rotationX: 0, rotationY: 0 });
  };
};

/* ── useGsapReveal hook ─────────────────────────────────── */

/**
 * Advanced hook for custom GSAP reveal animations.
 *
 * @param {object}   opts
 * @param {number}   opts.delay       – seconds to delay the reveal
 * @param {number}   opts.stagger     – seconds between staggered children
 * @param {boolean}  opts.tilt        – attach 3D tilt on hover
 * @param {number}   opts.y           – initial translateY (px), default 28
 * @param {string}   opts.start       – ScrollTrigger start position
 * @returns {function} ref callback to attach to the container element
 */
export function useGsapReveal({
  delay = 0,
  stagger = 0,
  tilt = false,
  y = 28,
  start = "top 85%",
} = {}) {
  const scopeRef = useRef(null);
  const cleanupTilt = useRef(null);

  useGSAP(
    () => {
      const el = scopeRef.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      if (stagger > 0 && el.children.length > 0) {
        gsap.fromTo(
          el.children,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            stagger,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start, once: true },
          }
        );
      } else {
        animateIn(el, delay);
      }

      if (tilt) {
        cleanupTilt.current = attachTilt(el);
      }
    },
    { scope: scopeRef }
  );

  const setRef = useCallback((node) => {
    scopeRef.current = node;
  }, []);

  // Clean up tilt listeners on unmount
  useGSAP(
    () => {
      return () => {
        if (cleanupTilt.current) cleanupTilt.current();
      };
    },
    { scope: scopeRef }
  );

  return setRef;
}

/* ── Reveal component (same interface as before) ────────── */

/**
 * Drop-in replacement for the old IntersectionObserver Reveal.
 *
 * Props:
 *  - children
 *  - delay   (seconds, default 0)
 *  - className
 *
 * Additional props for the new GSAP features:
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
