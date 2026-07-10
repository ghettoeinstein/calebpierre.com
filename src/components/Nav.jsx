import { useState, useRef, useEffect } from "react";
import { Menu, X, Linkedin, ChevronDown, ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import GlitchMark from "./GlitchMark.jsx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const serviceLinks = [
    { label: "AI Agents", href: "./los-angeles/ai-agents.html" },
    { label: "Cybersecurity", href: "./los-angeles/cybersecurity.html" },
    { label: "Business Automation", href: "./los-angeles/business-automation.html" },
  ];

  const articleLinks = [
    { label: "AI Agents in LA", href: "./articles/ai-agents-los-angeles.html" },
    { label: "Cybersecurity in LA", href: "./articles/cybersecurity-los-angeles.html" },
    { label: "Automation in LA", href: "./articles/business-automation-los-angeles.html" },
  ];

  const pageLinks = [
    { label: "Diagnostic", href: "#diagnostic" },
    { label: "Process", href: "#process" },
    { label: "Proof", href: "#proof" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

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
        {/* Brand */}
        <a href="./index.html" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Services Dropdown */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="inline-flex items-center gap-1"
              style={{
                fontFamily: F.mono,
                fontSize: "0.78rem",
                color: servicesOpen ? C.ink : C.steel,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Services
              <ChevronDown size={12} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "none" }} />
            </button>
            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: "8px",
                  backgroundColor: C.paper,
                  border: `1px solid ${C.line}`,
                  minWidth: "220px",
                  zIndex: 100,
                }}
              >
                <div style={{ padding: "8px 0" }}>
                  <p style={{ fontFamily: F.mono, fontSize: "0.6rem", color: C.red, letterSpacing: "0.12em", padding: "4px 16px", textTransform: "uppercase" }}>
                    Los Angeles Services
                  </p>
                  {serviceLinks.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      style={{
                        display: "block",
                        fontFamily: F.body,
                        fontSize: "0.82rem",
                        color: C.ink,
                        padding: "8px 16px",
                        textDecoration: "none",
                      }}
                      className="dropdown-item"
                    >
                      {s.label}
                    </a>
                  ))}
                  <div style={{ height: 1, backgroundColor: C.line, margin: "4px 0" }} />
                  <p style={{ fontFamily: F.mono, fontSize: "0.6rem", color: C.red, letterSpacing: "0.12em", padding: "4px 16px", textTransform: "uppercase" }}>
                    Articles
                  </p>
                  {articleLinks.map((a) => (
                    <a
                      key={a.href}
                      href={a.href}
                      style={{
                        display: "block",
                        fontFamily: F.body,
                        fontSize: "0.82rem",
                        color: C.ink,
                        padding: "8px 16px",
                        textDecoration: "none",
                      }}
                      className="dropdown-item"
                    >
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Page Links */}
          {pageLinks.map((l) => (
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

          {/* Resume */}
          <a
            href="./resume.html"
            style={{
              fontFamily: F.mono,
              fontSize: "0.78rem",
              color: C.steel,
              textDecoration: "none",
            }}
          >
            Resume
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/calebpierre"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: C.steel, display: "inline-flex", alignItems: "center" }}
          >
            <Linkedin size={16} />
          </a>

          {/* CTA */}
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

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: C.ink }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden" style={{ backgroundColor: C.paper, borderTop: `1px solid ${C.line}` }}>
          <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Services section */}
            <p style={{ fontFamily: F.mono, fontSize: "0.6rem", color: C.red, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Services in Los Angeles
            </p>
            {serviceLinks.map((s) => (
              <a key={s.href} href={s.href} style={{ fontFamily: F.body, color: C.ink, fontSize: "0.88rem", textDecoration: "none" }}>
                {s.label}
              </a>
            ))}
            <div style={{ height: 1, backgroundColor: C.line, margin: "4px 0" }} />
            {/* Articles */}
            <p style={{ fontFamily: F.mono, fontSize: "0.6rem", color: C.red, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Articles
            </p>
            {articleLinks.map((a) => (
              <a key={a.href} href={a.href} style={{ fontFamily: F.body, color: C.ink, fontSize: "0.88rem", textDecoration: "none" }}>
                {a.label}
              </a>
            ))}
            <div style={{ height: 1, backgroundColor: C.line, margin: "4px 0" }} />
            {/* Page links */}
            {pageLinks.map((l) => (
              <a key={l.label} href={l.href} style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.85rem", textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
            <a href="./resume.html" style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.85rem", textDecoration: "none" }}>
              Resume
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
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
