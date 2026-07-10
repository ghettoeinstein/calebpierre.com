import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function FinalCTA() {
  return (
    <section id="contact" className="px-6 py-24" style={{ backgroundColor: C.red }}>
      <Reveal className="max-w-2xl mx-auto text-center">
        <h2
          style={{
            fontFamily: F.display,
            color: "#fff",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            marginBottom: "1.25rem",
          }}
        >
          Get on the call. We'll take notes on everything and hand you a real game plan.
        </h2>
        <p
          style={{
            fontFamily: F.body,
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.02rem",
            marginBottom: "0.75rem",
          }}
        >
          No guesswork, no vague recommendations — a written plan covering exactly
          what's broken and exactly what fixes it.
        </p>
        <p
          style={{
            fontFamily: F.body,
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.02rem",
            marginBottom: "2rem",
          }}
        >
          Free systems audit. No obligation. Just a straight answer.
        </p>
        <a
          href="https://calendly.com/calebpierre"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5"
          style={{
            backgroundColor: "#fff",
            color: C.red,
            fontFamily: F.body,
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
        >
          Book Your Free Audit <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}
