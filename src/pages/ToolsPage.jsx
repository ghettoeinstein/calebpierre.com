import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";
import { useHashScroll } from "../hooks/useHashScroll.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CostCalculator from "../components/tools/CostCalculator.jsx";
import ReadinessDiagnostic from "../components/tools/ReadinessDiagnostic.jsx";
import JudgmentClassifier from "../components/tools/JudgmentClassifier.jsx";

const TOOLS_NAV = [
  { id: "cost-calculator", label: "Cost Calculator" },
  { id: "readiness", label: "Readiness Diagnostic" },
  { id: "classifier", label: "Judgment Classifier" },
];

export default function ToolsPage() {
  useHashScroll();
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Nav />

      <section style={{ background: C.white, padding: "clamp(2.5rem, 6vw, 4.5rem) 0 clamp(2rem, 5vw, 3rem)" }}>
        <div className="cp-container page-intro">
          <Reveal>
            <p className="chapter-eyebrow" style={{ color: C.riskRed, marginBottom: "0.75rem" }}>
              Free, no email required
            </p>
            <h1
              style={{
                fontFamily: F.display,
                color: C.ink,
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "1rem",
                maxWidth: "18ch",
              }}
            >
              Tools that do real work before you ever book a call.
            </h1>
            <p
              style={{
                fontFamily: F.body,
                color: C.inkSoft,
                fontSize: "1.1rem",
                lineHeight: 1.65,
                maxWidth: "58ch",
              }}
            >
              These are the same instruments used inside a real
              engagement — a cost model, a readiness check, a judgment
              framework — built so you can run them on your own operation
              first.
            </p>
          </Reveal>
        </div>
      </section>

      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderTop: `1px solid ${C.line}`,
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div className="cp-container" style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", padding: "0.75rem 1rem" }}>
          {TOOLS_NAV.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              style={{
                fontFamily: F.mono,
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.steel,
                textDecoration: "none",
              }}
            >
              {t.label}
            </a>
          ))}
        </div>
      </div>

      <section style={{ background: C.white, padding: "clamp(2.5rem, 5vw, 3.5rem) 0" }}>
        <div className="cp-container">
          <CostCalculator />
        </div>
      </section>

      <section style={{ background: C.offWhite, padding: "clamp(2.5rem, 5vw, 3.5rem) 0" }}>
        <div className="cp-container">
          <ReadinessDiagnostic />
        </div>
      </section>

      <section style={{ background: C.white, padding: "clamp(2.5rem, 5vw, 3.5rem) 0" }}>
        <div className="cp-container">
          <JudgmentClassifier />
        </div>
      </section>

      <section style={{ background: C.navy, padding: "clamp(2.5rem, 6vw, 4rem) 0" }}>
        <div className="cp-container" style={{ textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: F.display, color: C.navyText, fontSize: "clamp(1.2rem, 2.6vw, 1.6rem)", fontWeight: 700, marginBottom: "1.25rem", maxWidth: "44ch", margin: "0 auto 1.25rem" }}>
              These tools give you a model. A Systems Intelligence Sprint gives you a plan built on your real data.
            </p>
            <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener noreferrer" className="cta-pill cta-pill-primary">
              Map my operation
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
