import { useState } from "react";
import { Menu, X, Linkedin, ArrowUpRight, ArrowLeft } from "lucide-react";
import { C, F } from "../constants.js";
import GlitchMark from "../components/GlitchMark.jsx";
import Resume from "../components/Resume.jsx";

export default function ResumePage() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "./index.html" },
    { label: "Services", href: "./index.html#services" },
    { label: "Proof", href: "./index.html#proof" },
    { label: "Contact", href: "./index.html#contact" },
  ];
  return (
    <div style={{ backgroundColor: C.paper, minHeight: "100vh" }}>
      {/* ---- Nav ---- */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(250,250,248,0.92)",
          backdropFilter: "blur(6px)",
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <a
              href="./index.html"
              className="flex items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              <GlitchMark size={38} />
              <div
                style={{
                  fontFamily: F.body,
                  fontSize: "0.9rem",
                  color: C.ink,
                  fontWeight: 600,
                }}
              >
                Caleb Pierre
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: "0.62rem",
                    color: C.steel,
                    letterSpacing: "0.1em",
                  }}
                >
                  REMOTE SYSTEMS AGENCY
                </div>
              </div>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-7">
            <a
              href="./index.html"
              className="inline-flex items-center gap-1"
              style={{
                fontFamily: F.mono,
                fontSize: "0.78rem",
                color: C.steel,
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={14} />
              Home
            </a>
            {links.slice(1).map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: F.mono,
                  fontSize: "0.78rem",
                  color: C.steel,
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: C.steel,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://calendly.com/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: C.red,
                color: "#fff",
                fontFamily: F.body,
                fontWeight: 600,
                fontSize: "0.82rem",
                padding: "0.55rem 1.1rem",
                textDecoration: "none",
              }}
            >
              Book a Call
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ color: C.ink }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden flex flex-col px-6 pb-4 gap-3">
            <a
              href="./index.html"
              style={{
                fontFamily: F.mono,
                color: C.steel,
                fontSize: "0.85rem",
              }}
            >
              ← Home
            </a>
            {links.slice(1).map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: F.mono,
                  color: C.steel,
                  fontSize: "0.85rem",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ---- Resume content ---- */}
      <div style={{ paddingTop: "70px" }}>
        <Resume />
      </div>

      {/* ---- Footer ---- */}
      <footer className="px-6 py-10" style={{ backgroundColor: C.ink }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <a
            href="./index.html"
            style={{
              fontFamily: F.mono,
              color: "#8A8A8A",
              fontSize: "0.75rem",
              textDecoration: "none",
            }}
          >
            CALEB PIERRE · LOS ANGELES · REMOTE-FIRST · © {new Date().getFullYear()}
          </a>
          <div className="flex items-center gap-6">
            <a
              href="./index.html"
              style={{
                fontFamily: F.mono,
                color: "#8A8A8A",
                fontSize: "0.75rem",
                textDecoration: "none",
              }}
            >
              ← Back to Home
            </a>
            <a
              href="https://linkedin.com/in/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#8A8A8A",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
