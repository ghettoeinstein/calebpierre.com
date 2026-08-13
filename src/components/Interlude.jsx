import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";
import FractalField from "./FractalField.jsx";

export default function Interlude() {
  return (
    <section
      style={{
        position: "relative",
        background: C.dark,
        overflow: "hidden",
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
      }}
    >
      <FractalField />
      <div
        className="cp-container"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Reveal>
          <p
            className="eyebrow"
            style={{ color: C.red, marginBottom: "1rem", justifyContent: "center", display: "flex" }}
          >
            One Operator. Every System.
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.white,
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              maxWidth: "20ch",
              margin: "0 auto 1rem",
            }}
          >
            Web. AI. Automation. Marketing. Support. Events. Security.
          </h2>
          <p
            style={{
              fontFamily: F.body,
              color: "#B0B0B0",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: "48ch",
              margin: "0 auto",
            }}
          >
            Seven disciplines, one engineer, zero handoffs lost in translation.
            That's how you actually 10x a business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
