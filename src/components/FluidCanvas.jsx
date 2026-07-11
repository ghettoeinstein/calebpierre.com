import { useEffect, useRef } from "react";
import p5 from "p5";

/**
 * FluidCanvas — p5.js flow field particle system.
 * Dark OLED background with red accent particles that follow
 * a Perlin noise flow field. Responds to mouse movement.
 * Fixed position, GPU-safe (transform/opacity only).
 */
export default function FluidCanvas() {
  const containerRef = useRef(null);
  const sketchRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check reduced motion
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const Sketch = (p) => {
      let particles = [];
      let flowField = [];
      let cols, rows;
      const scale = 20;
      let zoff = 0;
      let mouseInfluence = { x: -9999, y: -9999, active: false };
      let canvasEl;

      class Particle {
        constructor() {
          this.pos = p.createVector(
            p.random(p.width),
            p.random(p.height)
          );
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.maxSpeed = p.random(1.5, 3);
          this.maxForce = 0.4;
          this.prev = this.pos.copy();
          this.life = p.random(100, 300);
          this.maxLife = this.life;
          this.size = p.random(0.8, 2.2);
          this.hueShift = p.random(-0.3, 0.3);
        }

        follow(flow) {
          const x = p.floor(this.pos.x / scale);
          const y = p.floor(this.pos.y / scale);
          const idx = x + y * cols;
          if (idx >= 0 && idx < flow.length) {
            const force = flow[idx];
            if (force) {
              this.applyForce(force);
            }
          }
        }

        applyForce(force) {
          this.acc.add(force);
        }

        update() {
          // Mouse attraction
          if (mouseInfluence.active) {
            const dx = mouseInfluence.x - this.pos.x;
            const dy = mouseInfluence.y - this.pos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 40000 && distSq > 100) {
              const dist = p.sqrt(distSq);
              const mouseForce = p.createVector(dx / dist, dy / dist);
              mouseForce.mult(0.15);
              this.applyForce(mouseForce);
            }
          }

          this.vel.add(this.acc);
          this.vel.limit(this.maxSpeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
          this.life--;

          // Wrap edges
          if (this.pos.x > p.width) {
            this.pos.x = 0;
            this.prev = this.pos.copy();
          }
          if (this.pos.x < 0) {
            this.pos.x = p.width;
            this.prev = this.pos.copy();
          }
          if (this.pos.y > p.height) {
            this.pos.y = 0;
            this.prev = this.pos.copy();
          }
          if (this.pos.y < 0) {
            this.pos.y = p.height;
            this.prev = this.pos.copy();
          }
        }

        show() {
          const lifeRatio = this.life / this.maxLife;
          const alpha = p.constrain(lifeRatio * 120, 0, 120);

          // Red particles with subtle variation
          const r = 225;
          const g = p.constrain(6 + this.hueShift * 30, 0, 60);
          const b = p.constrain(this.hueShift * 20, 0, 30);

          p.stroke(r, g, b, alpha);
          p.strokeWeight(this.size);
          p.line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
          this.prev = this.pos.copy();
        }

        isDead() {
          return this.life <= 0;
        }

        reset() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.prev = this.pos.copy();
          this.life = p.random(100, 300);
          this.maxLife = this.life;
        }
      }

      function generateFlowField() {
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            const angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 2;
            const v = p5.Vector.fromAngle(angle);
            v.setMag(0.5);
            flowField[x + y * cols] = v;
            xoff += 0.1;
          }
          yoff += 0.1;
        }
        zoff += 0.003;
      }

      p.setup = () => {
        canvasEl = p.createCanvas(window.innerWidth, window.innerHeight);
        canvasEl.parent("fluid-canvas");
        canvasEl.style("display", "block");

        cols = p.ceil(p.width / scale) + 1;
        rows = p.ceil(p.height / scale) + 1;
        flowField = new Array(cols * rows);

        const particleCount = reduceMotion ? 0 : p.constrain(
          p.floor((p.width * p.height) / 8000),
          80,
          250
        );

        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }

        p.background(5, 5, 5);
      };

      p.draw = () => {
        if (reduceMotion) return;

        // Fade trail — creates the fluid look
        p.noStroke();
        p.fill(5, 5, 5, 18);
        p.rect(0, 0, p.width, p.height);

        generateFlowField();

        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].follow(flowField);
          particles[i].update();
          particles[i].show();

          if (particles[i].isDead()) {
            particles[i].reset();
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        cols = p.ceil(p.width / scale) + 1;
        rows = p.ceil(p.height / scale) + 1;
        flowField = new Array(cols * rows);
        p.background(5, 5, 5);
      };

      p.mouseMoved = () => {
        mouseInfluence.x = p.mouseX;
        mouseInfluence.y = p.mouseY;
        mouseInfluence.active = true;
      };

      p.mouseOut = () => {
        mouseInfluence.active = false;
      };
    };

    // Only create if not already there
    const existing = document.getElementById("fluid-canvas");
    if (existing && existing.children.length > 0) {
      return; // Already mounted
    }

    const div = document.createElement("div");
    div.id = "fluid-canvas";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.zIndex = "0";
    div.style.pointerEvents = "none";
    document.body.appendChild(div);

    sketchRef.current = new p5(Sketch, div);

    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove();
      }
      if (div && div.parentNode) {
        div.parentNode.removeChild(div);
      }
    };
  }, []);

  return null;
}
