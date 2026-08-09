import { useEffect } from "react";

// Fresh page loads with a #hash try to scroll before React has rendered
// the target element, so the browser's built-in fragment jump silently
// fails. Re-run it once the page has actually painted.
export function useHashScroll() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
    };

    // one pass after paint, one after fonts/images have had a beat to settle
    requestAnimationFrame(scroll);
    const t = setTimeout(scroll, 300);
    return () => clearTimeout(t);
  }, []);
}
