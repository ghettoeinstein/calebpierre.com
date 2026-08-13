import { useEffect, useRef } from "react";

/**
 * FractalField — a self-similar branching network on <canvas>.
 * Red particles on black, connected into an emergent web of lines
 * when they drift close together — a generative, fractal-feeling
 * texture for the one dark interlude section on an otherwise
 * white/black/red site. Mouse-repulsion, drifting orbs.
 * Honors prefers-reduced-motion (renders one static frame, no rAF loop).
 */
export default function FractalField({ density = 0.00014, className = "", style = {} }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let particles = [];
    let w = 0, h = 0, dpr = 1;

    const REDS = ["#E8382D", "#FF6B5C", "#B8241C", "#FF8A7A"];
    const WHITE = "#F5F5F5";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const count = Math.max(50, Math.floor(w * h * density));
      particles = Array.from({ length: count }, () => {
        const white = Math.random() < 0.12;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.8 + Math.random() * 2,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          c: white ? WHITE : REDS[(Math.random() * REDS.length) | 0],
          a: 0.4 + Math.random() * 0.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.004 + Math.random() * 0.014,
        };
      });
    }

    function step() {
      ctx.clearRect(0, 0, w, h);

      // branching connections — the "fractal" web
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            const alpha = (1 - Math.sqrt(d2) / 120) * 0.16;
            ctx.strokeStyle = `rgba(232, 56, 45, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const mdx = p.x - mouse.current.x;
        const mdy = p.y - mouse.current.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < 90 * 90 && md2 > 0.01) {
          const d = Math.sqrt(md2);
          const f = ((90 - d) / 90) * 0.6;
          p.vx += (mdx / d) * f;
          p.vy += (mdy / d) * f;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.pulse += p.pulseSpeed;

        if (Math.abs(p.vx) < 0.05) p.vx += (Math.random() - 0.5) * 0.02;
        if (Math.abs(p.vy) < 0.05) p.vy += (Math.random() - 0.5) * 0.02;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const twinkle = 0.7 + Math.sin(p.pulse) * 0.3;
        ctx.globalAlpha = p.a * twinkle;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(step);
    }

    function drawStatic() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(step);
      canvas.parentElement.addEventListener("mousemove", onMove);
      canvas.parentElement.addEventListener("mouseleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener("mousemove", onMove);
        canvas.parentElement.removeEventListener("mouseleave", onLeave);
      }
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
