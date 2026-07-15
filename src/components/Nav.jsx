import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { C, F, EASE } from "../constants.js";
import GlitchMark from "./GlitchMark.jsx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <>
      {/* Fixed Swiss nav bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <div
          className="max-w-6xl mx-auto"
          style={{
            padding: "0.75rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <a href="./index.html" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
            <GlitchMark size={36} />
            <div style={{ fontFamily: F.body, fontSize: "0.88rem", color: C.ink, fontWeight: 600 }}>
              Caleb Pierre
              <div style={{ fontFamily: F.mono, fontSize: "0.58rem", color: C.steel, letterSpacing: "0.1em" }}>
                SYSTEMS · AUTOMATION · SECURITY
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
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
                    border: "1px solid #E5E5E5",
                    minWidth: "220px",
                    zIndex: 100,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: "8px 0" }}>
                    <p className="eyebrow" style={{ padding: "4px 16px" }}>Los Angeles Services</p>
                    {serviceLinks.map((s) => (
                      <a key={s.href} href={s.href} className="dropdown-item"
                        style={{ display: "block", fontFamily: F.body, fontSize: "0.82rem", color: C.inkSoft, padding: "8px 16px", textDecoration: "none" }}>
                        {s.label}
                      </a>
                    ))}
                    <div style={{ height: 1, background: C.line, margin: "4px 0" }} />
                    <p className="eyebrow" style={{ padding: "4px 16px" }}>Articles</p>
                    {articleLinks.map((a) => (
                      <a key={a.href} href={a.href} className="dropdown-item"
                        style={{ display: "block", fontFamily: F.body, fontSize: "0.82rem", color: C.inkSoft, padding: "8px 16px", textDecoration: "none" }}>
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

            {/* CTA */}
            <a
              href="https://calendly.com/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill cta-pill-primary"
              style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
            >
              Start the Discovery
              <span className="cta-icon-circle" style={{ width: 22, height: 22 }}>
                <ArrowUpRight size={13} />
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: C.ink, background: "none", border: "none", cursor: "pointer" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden" style={{ background: "#FFFFFF", borderTop: "1px solid #E5E5E5" }}>
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p className="eyebrow">Services in Los Angeles</p>
              {serviceLinks.map((s) => (
                <a key={s.href} href={s.href} style={{ fontFamily: F.body, color: C.inkSoft, fontSize: "0.88rem", textDecoration: "none" }}>
                  {s.label}
                </a>
              ))}
              <div style={{ height: 1, background: C.line, margin: "4px 0" }} />
              <p className="eyebrow">Articles</p>
              {articleLinks.map((a) => (
                <a key={a.href} href={a.href} style={{ fontFamily: F.body, color: C.inkSoft, fontSize: "0.88rem", textDecoration: "none" }}>
                  {a.label}
                </a>
              ))}
              <div style={{ height: 1, background: C.line, margin: "4px 0" }} />
              {pageLinks.map((l) => (
                <a key={l.label} href={l.href} style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.85rem", textDecoration: "none" }}>
                  {l.label}
                </a>
              ))}
              <a href="./resume.html" style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.85rem", textDecoration: "none" }}>
                Resume
              </a>
              <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener noreferrer"
                className="cta-pill cta-pill-primary" style={{ marginTop: "8px", justifyContent: "center" }}>
                Start the Discovery
                <span className="cta-icon-circle"><ArrowUpRight size={14} /></span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
