import { C, F } from "../constants.js";

export default function Footer() {
  return (
    <footer className="px-6 py-10" style={{ backgroundColor: C.ink }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p style={{ fontFamily: F.mono, color: "#8A8A8A", fontSize: "0.75rem" }}>
          CALEB PIERRE · LOS ANGELES · REMOTE-FIRST · © {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
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
        </div>
      </div>
    </footer>
  );
}
