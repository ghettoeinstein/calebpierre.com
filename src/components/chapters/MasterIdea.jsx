import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";

export default function MasterIdea() {
  return (
    <div style={{ background: C.ink, padding: "clamp(1.5rem, 4vw, 2.5rem) 0" }}>
      <div className="cp-container">
        <Reveal>
          <p
            style={{
              fontFamily: F.display,
              color: C.white,
              fontSize: "clamp(1.1rem, 2.6vw, 1.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            Find the constraint.{" "}
            <span style={{ color: C.wire }}>Engineer the leverage.</span>{" "}
            <span style={{ color: C.green }}>Prove the result.</span>
          </p>
        </Reveal>
      </div>
    </div>
  );
}
