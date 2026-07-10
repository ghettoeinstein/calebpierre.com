import { C, F } from "../constants.js";
import { Reveal } from "../hooks/useReveal.jsx";

export default function Agitation() {
  const logs = [
    {
      tag: "[ERROR]",
      text: "Your website was built once, three years ago, and forgotten.",
    },
    {
      tag: "[WARNING]",
      text: "Your \u201cautomation\u201d is three people copy-pasting into a spreadsheet.",
    },
    {
      tag: "[ALERT]",
      text: "Nobody has actually checked your systems for a hole big enough to walk a hacker through.",
    },
  ];
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          {logs.map((l, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem 0",
                borderBottom:
                  i < logs.length - 1 ? `1px solid ${C.line}` : "none",
              }}
            >
              <span
                style={{
                  fontFamily: F.mono,
                  color: C.red,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  minWidth: "6.5ch",
                }}
              >
                {l.tag}
              </span>
              <span
                style={{
                  fontFamily: F.body,
                  color: C.ink,
                  fontSize: "1.02rem",
                  lineHeight: 1.6,
                }}
              >
                {l.text}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
