import { C, F } from "../../constants.js";
import { Reveal } from "../../hooks/useReveal.jsx";
import CountUp from "./CountUp.jsx";

const ROWS = [
  { scenario: "Normal", data: "✓", decision: "✓", policy: "✓", safe: "✓" },
  { scenario: "Ambiguous", data: "✓", decision: "✕", policy: "—", safe: "Human" },
  { scenario: "Missing data", data: "✕", decision: "—", policy: "—", safe: "Human" },
  { scenario: "High risk", data: "✓", decision: "✓", policy: "✓", safe: "Human" },
  { scenario: "Edge case", data: "✓", decision: "✓", policy: "✕", safe: "Stop" },
];

const STATS = [
  { to: 96.4, decimals: 1, suffix: "%", label: "validated runs" },
  { to: 0, label: "high-risk autonomous actions" },
  { to: 0.06, decimals: 2, prefix: "$", label: "median execution cost" },
  { to: 3.2, decimals: 1, suffix: " sec", label: "median system latency" },
  { to: 12.8, decimals: 1, suffix: "%", label: "human escalation rate" },
];

export default function Evidence() {
  return (
    <section id="evidence" className="chapter section-pad" style={{ background: C.white }}>
      <div className="cp-container">
        <Reveal>
          <p className="chapter-eyebrow" style={{ color: C.steel, marginBottom: "0.75rem" }}>
            Chapter 06 — Evidence, not demos
          </p>
          <h2
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.9rem, 4.2vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "0.25rem",
              maxWidth: "20ch",
            }}
          >
            A demo shows that something can work.
          </h2>
          <h2
            style={{
              fontFamily: F.display,
              color: C.steel,
              fontSize: "clamp(1.9rem, 4.2vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "3rem",
              maxWidth: "22ch",
            }}
          >
            Evidence shows whether it should be trusted.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ marginBottom: "2rem" }}>
          <Reveal>
            <p className="mono-tag" style={{ color: C.steel, marginBottom: "0.75rem" }}>
              EVALUATION SET
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: F.mono, fontSize: "0.8rem" }}>
                <thead>
                  <tr>
                    {["Scenario", "Data", "Decision", "Policy", "Safe"].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: h === "Scenario" ? "left" : "right",
                          padding: "0.5rem",
                          borderBottom: `2px solid ${C.ink}`,
                          color: C.steel,
                          fontWeight: 600,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.scenario}>
                      <td style={{ padding: "0.55rem 0.5rem", borderBottom: `1px solid ${C.line}`, color: C.ink, fontWeight: 600 }}>
                        {r.scenario}
                      </td>
                      <td style={{ padding: "0.55rem 0.5rem", borderBottom: `1px solid ${C.line}`, textAlign: "right" }}>{r.data}</td>
                      <td style={{ padding: "0.55rem 0.5rem", borderBottom: `1px solid ${C.line}`, textAlign: "right" }}>{r.decision}</td>
                      <td style={{ padding: "0.55rem 0.5rem", borderBottom: `1px solid ${C.line}`, textAlign: "right" }}>{r.policy}</td>
                      <td
                        style={{
                          padding: "0.55rem 0.5rem",
                          borderBottom: `1px solid ${C.line}`,
                          textAlign: "right",
                          color: r.safe === "Human" ? C.riskRed : r.safe === "Stop" ? C.riskRed : C.green,
                          fontWeight: 700,
                        }}
                      >
                        {r.safe}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mono-tag" style={{ color: C.steel, marginBottom: "0.75rem" }}>
              DEPLOYMENT EVIDENCE
            </p>
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} style={{ border: `1.5px solid ${C.ink}`, padding: "1rem" }}>
                  <p style={{ fontFamily: F.display, fontWeight: 800, fontSize: "1.5rem", color: C.navy, marginBottom: "0.25rem" }}>
                    {s.prefix}
                    <CountUp to={s.to} decimals={s.decimals || 0} />
                    {s.suffix}
                  </p>
                  <p className="mono-tag" style={{ color: C.steel }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(1.1rem, 2.4vw, 1.4rem)",
              fontWeight: 700,
            }}
          >
            Intelligence earns autonomy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
