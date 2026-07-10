import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import BootSequence from "./BootSequence.jsx";
import Ticker from "./Ticker.jsx";

export default function Hero() {
  const [booted, setBooted] = useState(false);
  return (
    <section className="px-6 pt-28 pb-0">
      <div className="max-w-4xl mx-auto">
        <div
          style={{
            border: `1px solid ${C.line}`,
            backgroundColor: C.panel,
            padding: "1.5rem 1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <BootSequence onDone={() => setBooted(true)} />
        </div>

        <div
          style={{
            opacity: booted ? 1 : 0,
            transform: booted ? "translateY(0)" : "translateY(10px)",
            transition: "opacity .6s ease, transform .6s ease",
          }}
        >
          <p
            style={{
              fontFamily: F.mono,
              color: C.red,
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Los Angeles · Remote-First
          </p>
          <h1
            className="glitch-headline"
            data-text="Most businesses are one bad system away from losing everything."
            style={{
              fontFamily: F.display,
              color: C.ink,
              fontSize: "clamp(2.1rem, 5.5vw, 3.6rem)",
              lineHeight: 1.08,
              fontWeight: 700,
              marginBottom: "1.75rem",
              maxWidth: "18ch",
            }}
          >
            Most businesses are one bad system away from losing everything.
          </h1>
          <p
            style={{
              fontFamily: F.body,
              color: C.steel,
              fontSize: "1.08rem",
              lineHeight: 1.7,
              maxWidth: "56ch",
              marginBottom: "2.25rem",
            }}
          >
            I build the web, AI, and security infrastructure that keeps yours
            running — while your competitors are still doing it by hand. Get on a
            call, I take real notes, you get a written game plan. No guesswork, no
            black boxes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#diagnostic"
              className="inline-flex items-center gap-2 px-6 py-3"
              style={{
                backgroundColor: C.red,
                color: "#fff",
                fontFamily: F.body,
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Run My Systems Diagnostic <ArrowUpRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3"
              style={{
                border: `1px solid ${C.ink}`,
                color: C.ink,
                fontFamily: F.body,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              See the Work
            </a>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <Ticker />
      </div>
    </section>
  );
}
