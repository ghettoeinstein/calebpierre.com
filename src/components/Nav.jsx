import { useState } from "react";
import { Menu, X } from "lucide-react";
import { C, F } from "../constants.js";
import GlitchMark from "./GlitchMark.jsx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Diagnostic", "Services", "Process", "About", "Contact"];
  return (
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
        </div>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: F.mono,
                fontSize: "0.78rem",
                color: C.steel,
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
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
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: F.mono,
                color: C.steel,
                fontSize: "0.85rem",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
