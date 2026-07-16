import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { C, F, EASE } from "../constants.js";
import GlitchMark from "./GlitchMark.jsx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
    { label: "Autonomous Systems", href: "./los-angeles/ai-agents.html" },
    { label: "Cybersecurity", href: "./los-angeles/cybersecurity.html" },
    { label: "Business Automation", href: "./los-angeles/business-automation.html" },
  ];

  const articleLinks = [
    { label: "Autonomous Systems in LA", href: "./articles/ai-agents-los-angeles.html" },
    { label: "Cybersecurity in LA", href: "./articles/cybersecurity-los-angeles.html" },
    { label: "Automation in LA", href: "./articles/business-automation-los-angeles.html" },
  ];

  const pageLinks = [
    { label: "Discovery", href: "#diagnostic" },
    { label: "Process", href: "#process" },
    { label: "Proof", href: "#proof" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const allLinks = [
    ...serviceLinks,
    ...articleLinks,
    ...pageLinks,
    { label: "Resume", href: "./resume.html" },
  ];

  return (
    <>
      {/* Nav bar — inline (not floating), scrolls with page */}
      <nav
        style={{
          background: "#FFFFFF",
          borderBottom: "3px solid #0A0A0A",
          position: "relative",
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand — persists at all widths */}
          <a href="./index.html" className="flex items-center gap-3" style={{ textDecoration: "none", flexShrink: 0 }}>
            <GlitchMark size={36} />
            <div style={{ fontFamily: F.body, fontSize: "0.88rem", color: C.ink, fontWeight: 700 }}>
              Caleb Pierre
              <div style={{ fontFamily: F.mono, fontSize: "0.58rem", color: C.steel, letterSpacing: "0.1em" }}>
                SYSTEMS · AUTOMATION · SECURITY
              </div>
            </div>
          </a>

          {/* Desktop nav — lg:1024px+ ONLY */}
          <div className="hidden lg:flex items-center gap-5" style={{ flexShrink: 0 }}>
            {/* Services dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="inline-flex items-center gap-1 nav-link"
                style={{
                  fontFamily: F.mono,
                  fontSize: "0.75rem",
                  color: servicesOpen ? C.ink : C.steel,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Services
                <ChevronDown
                  size={12}
                  style={{ transition: "transform 0.3s ease", transform: servicesOpen ? "rotate(180deg)" : "none" }}
                />
              </button>
              {servicesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: "8px",
                    background: "#FFFFFF",
                    border: "3px solid #0A0A0A",
                    minWidth: "220px",
                    zIndex: 100,
                    overflow: "hidden",
                    boxShadow: "6px 6px 0 #0A0A0A",
                  }}
                >
                  <div style={{ padding: "8px 0" }}>
                    <p className="eyebrow" style={{ padding: "4px 16px" }}>Los Angeles Services</p>
                    {serviceLinks.map((s) => (
                      <a key={s.href} href={s.href} className="dropdown-item"
                        style={{ display: "block", fontFamily: F.body, fontSize: "0.82rem", color: C.ink, padding: "10px 16px", textDecoration: "none", fontWeight: 600 }}>
                        {s.label}
                      </a>
                    ))}
                    <div style={{ height: 2, background: C.ink, margin: "4px 0" }} />
                    <p className="eyebrow" style={{ padding: "4px 16px" }}>Articles</p>
                    {articleLinks.map((a) => (
                      <a key={a.href} href={a.href} className="dropdown-item"
                        style={{ display: "block", fontFamily: F.body, fontSize: "0.82rem", color: C.ink, padding: "10px 16px", textDecoration: "none", fontWeight: 600 }}>
                        {a.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Page links */}
            {pageLinks.map((l) => (
              <a key={l.label} href={l.href} className="nav-link"
                style={{ fontFamily: F.mono, fontSize: "0.75rem", color: C.steel, textDecoration: "none" }}>
                {l.label}
              </a>
            ))}

            {/* Resume */}
            <a href="./resume.html" className="nav-link"
              style={{ fontFamily: F.mono, fontSize: "0.75rem", color: C.steel, textDecoration: "none" }}>
              Resume
            </a>

            {/* CTA — persists at all widths */}
            <a
              href="https://calendly.com/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill cta-pill-primary"
              style={{ fontSize: "0.8rem", padding: "0.5rem 1rem", flexShrink: 0 }}
            >
              Start the Discovery
              <span className="cta-icon-circle" style={{ width: 22, height: 22 }}>
                <ArrowUpRight size={13} />
              </span>
            </a>
          </div>

          {/* Below lg: only hamburger + CTA persist */}
          <div className="flex lg:hidden items-center gap-3" style={{ flexShrink: 0 }}>
            {/* CTA persists — red square with arrow */}
            <a
              href="https://calendly.com/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill cta-pill-primary"
              style={{ fontSize: "0.75rem", padding: "0.5rem 0.75rem", flexShrink: 0 }}
            >
              <span className="cta-icon-circle" style={{ width: 20, height: 20 }}>
                <ArrowUpRight size={12} />
              </span>
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                color: C.ink,
                background: "#FFD93D",
                border: "3px solid #0A0A0A",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "3px 3px 0 #0A0A0A",
              }}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in menu — black bg, white mono list, red active */}
      {open && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="lg:hidden"
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 48,
            }}
          />
          {/* Menu panel */}
          <div
            className="lg:hidden"
            style={{
              position: "fixed",
              top: 0, right: 0, bottom: 0,
              width: "100%",
              maxWidth: "400px",
              background: "#0A0A0A",
              zIndex: 49,
              overflowY: "auto",
              animation: "slideInRight 0.3s cubic-bezier(0.32, 0.72, 0, 1) forwards",
            }}
          >
            {/* Close bar */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 1.5rem",
              borderBottom: "2px solid #1a1a1a",
            }}>
              <span style={{ fontFamily: F.mono, fontSize: "0.65rem", color: "#666", letterSpacing: "0.1em" }}>
                SYSTEMS · AUTOMATION · SECURITY
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links — one per row, 56px tap targets */}
            <div style={{ padding: "16px 0" }}>
              {allLinks.map((l, i) => (
                <a
                  key={l.href + i}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: "56px",
                    padding: "0 1.5rem",
                    fontFamily: F.mono,
                    fontSize: "0.9rem",
                    color: i < 3 ? "#E8382D" : "#fff",
                    textDecoration: "none",
                    borderBottom: "1px solid #1a1a1a",
                    fontWeight: 600,
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => { e.target.style.background = "#111"; }}
                  onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
                >
                  {l.label}
                </a>
              ))}

              {/* CTA at bottom */}
              <div style={{ padding: "24px 1.5rem" }}>
                <a
                  href="https://calendly.com/calebpierre"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="cta-pill cta-pill-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Start the Discovery
                  <span className="cta-icon-circle"><ArrowUpRight size={14} /></span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
