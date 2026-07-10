import { Linkedin } from "lucide-react";
import { C, F } from "../constants.js";

export default function Footer() {
  return (
    <footer className="px-6 py-10" style={{ backgroundColor: C.ink }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p style={{ fontFamily: F.mono, color: "#8A8A8A", fontSize: "0.75rem" }}>
          CALEB PIERRE · LOS ANGELES · REMOTE-FIRST · © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          {["Diagnostic", "Services", "Process", "About"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: F.mono,
                color: "#8A8A8A",
                fontSize: "0.75rem",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
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
  );
}
