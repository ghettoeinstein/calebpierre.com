import { useState, useRef, useEffect } from "react";
import { Menu, X, Linkedin, ChevronDown, ArrowUpRight, ArrowLeft } from "lucide-react";
import { C, F } from "../constants.js";
import GlitchMark from "../components/GlitchMark.jsx";
import Resume from "../components/Resume.jsx";

export default function ResumePage() {
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
    { label: "Home", href: "./index.html" },
    { label: "Services", href: "./index.html#services" },
    { label: "Process", href: "./index.html#process" },
    { label: "Proof", href: "./index.html#proof" },
    { label: "About", href: "./index.html#about" },
    { label: "Contact", href: "./index.html#contact" },
  ];

  const footerCities = [
    "Los Angeles", "Long Beach", "Torrance", "Carson", "Compton",
    "Hawthorne", "Inglewood", "Gardena", "Santa Monica", "Pasadena", "Glendale", "Burbank",
  ];

  const footerServices = [
    { label: "AI Agent Development", href: "./los-angeles/ai-agents.html" },
    { label: "Cybersecurity", href: "./los-angeles/cybersecurity.html" },
    { label: "Business Automation", href: "./los-angeles/business-automation.html" },
  ];

  const footerArticles = [
    { label: "AI Agents in LA", href: "./articles/ai-agents-los-angeles.html" },
    { label: "Cybersecurity for LA", href: "./articles/cybersecurity-los-angeles.html" },
    { label: "Automation in LA", href: "./articles/business-automation-los-angeles.html" },
  ];

  const footerQuick = [
    { label: "Home", href: "./index.html" },
    { label: "Resume", href: "./resume.html" },
    { label: "Book a Call", href: "https://calendly.com/calebpierre" },
    { label: "LinkedIn", href: "https://linkedin.com/in/calebpierre" },
    { label: "Sitemap", href: "./sitemap.xml" },
    { label: "llms.txt", href: "./llms.txt" },
  ];

  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* ---- Nav ---- */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="./index.html" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
            <GlitchMark size={38} />
            <div style={{ fontFamily: F.body, fontSize: "0.9rem", color: C.ink, fontWeight: 600 }}>
              Caleb Pierre
              <div style={{ fontFamily: F.mono, fontSize: "0.62rem", color: C.steel, letterSpacing: "0.1em" }}>
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
                className="inline-flex items-center gap-1 nav-link"
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
                    backgroundColor: C.bg,
                    border: `1px solid ${C.line}`,
                    minWidth: "220px",
                    zIndex: 100,
                  }}
                >
                  <div style={{ padding: "8px 0" }}>
                    <p className="eyebrow" style={{ padding: "4px 16px" }}>
                      Los Angeles Services
                    </p>
                    {serviceLinks.map((s) => (
                      <a key={s.href} href={s.href} className="dropdown-item" style={{ display: "block", fontFamily: F.body, fontSize: "0.82rem", color: C.ink, padding: "8px 16px", textDecoration: "none" }}>
                        {s.label}
                      </a>
                    ))}
                    <div style={{ height: 1, backgroundColor: C.line, margin: "4px 0" }} />
                    <p className="eyebrow" style={{ padding: "4px 16px" }}>
                      Articles
                    </p>
                    {articleLinks.map((a) => (
                      <a key={a.href} href={a.href} className="dropdown-item" style={{ display: "block", fontFamily: F.body, fontSize: "0.82rem", color: C.ink, padding: "8px 16px", textDecoration: "none" }}>
                        {a.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {pageLinks.map((l) => (
              <a key={l.label} href={l.href} className="nav-link" style={{ fontFamily: F.mono, fontSize: "0.78rem", color: C.steel, textDecoration: "none" }}>
                {l.label}
              </a>
            ))}

            <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: C.steel, display: "inline-flex", alignItems: "center" }}>
              <Linkedin size={16} />
            </a>
            <a
              href="https://calendly.com/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill cta-pill-primary"
              style={{ fontSize: "0.82rem" }}
            >
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: C.ink, background: "none", border: "none", cursor: "pointer" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden" style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.line}` }}>
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="./index.html" className="inline-flex items-center gap-1" style={{ fontFamily: F.mono, color: C.red, fontSize: "0.85rem", textDecoration: "none" }}>
                <ArrowLeft size={14} /> Home
              </a>
              <p className="eyebrow">
                Services in Los Angeles
              </p>
              {serviceLinks.map((s) => (
                <a key={s.href} href={s.href} style={{ fontFamily: F.body, color: C.ink, fontSize: "0.88rem", textDecoration: "none" }}>
                  {s.label}
                </a>
              ))}
              <div style={{ height: 1, backgroundColor: C.line, margin: "4px 0" }} />
              <p className="eyebrow">
                Articles
              </p>
              {articleLinks.map((a) => (
                <a key={a.href} href={a.href} style={{ fontFamily: F.body, color: C.ink, fontSize: "0.88rem", textDecoration: "none" }}>
                  {a.label}
                </a>
              ))}
              <div style={{ height: 1, backgroundColor: C.line, margin: "4px 0" }} />
              {pageLinks.slice(1).map((l) => (
                <a key={l.label} href={l.href} style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.85rem", textDecoration: "none" }}>
                  {l.label}
                </a>
              ))}
              <a
                href="https://calendly.com/calebpierre"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pill cta-pill-primary"
                style={{ justifyContent: "center", marginTop: "8px" }}
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ---- Resume content ---- */}
      <div style={{ paddingTop: "70px" }}>
        <Resume />
      </div>

      {/* ---- Footer ---- */}
      <footer className="px-6 py-12" style={{ backgroundColor: C.bg, borderTop: "1px solid #E5E5E5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ marginBottom: "2rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "8px" }}>Services</p>
              {footerServices.map((s) => (
                <a key={s.href} href={s.href} className="footer-link" style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.72rem", textDecoration: "none", display: "block", padding: "3px 0", lineHeight: 1.6 }}>
                  {s.label}
                </a>
              ))}
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "8px" }}>Articles</p>
              {footerArticles.map((a) => (
                <a key={a.href} href={a.href} className="footer-link" style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.72rem", textDecoration: "none", display: "block", padding: "3px 0", lineHeight: 1.6 }}>
                  {a.label}
                </a>
              ))}
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "8px" }}>Cities Served</p>
              {footerCities.map((c) => (
                <a key={c} href={`./${c.toLowerCase().replace(" ", "-")}/ai-agents.html`} className="footer-link" style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.72rem", textDecoration: "none", display: "block", padding: "3px 0", lineHeight: 1.6 }}>
                  {c}, CA
                </a>
              ))}
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "8px" }}>Quick Links</p>
              {footerQuick.map((q) => (
                <a
                  key={q.label}
                  href={q.href}
                  target={q.href.startsWith("http") ? "_blank" : undefined}
                  rel={q.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="footer-link"
                  style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.72rem", textDecoration: "none", display: "block", padding: "3px 0", lineHeight: 1.6 }}
                >
                  {q.label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
            <p style={{ fontFamily: F.body, color: C.steel, fontSize: "0.78rem", lineHeight: 1.8, maxWidth: "72ch" }}>
              Caleb Pierre is a forward-deployed AI engineer and security engineer based in
              Los Angeles, CA. He builds AI agent systems, cybersecurity infrastructure, and
              business automation pipelines for organizations across LA County. 10 years of
              experience across Tinder, Verizon Media, Children's Hospital Los Angeles, Glass
              Financial, and Caleb Pierre Ventures. Serving Los Angeles, Long Beach, Torrance,
              Carson, Compton, Hawthorne, Inglewood, Gardena, Santa Monica, Pasadena,
              Glendale, and Burbank. HIPAA compliant. Remote-first. Book a free systems audit.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: `1px solid ${C.line}`, paddingTop: "1.5rem" }}>
            <p style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.7rem" }}>
              © {new Date().getFullYear()} Caleb Pierre Ventures LLC · Los Angeles, CA ·
              <a href="./llms.txt" style={{ color: C.steel }}> llms.txt</a> ·
              <a href="./sitemap.xml" style={{ color: C.steel }}> sitemap.xml</a> ·
              <a href="./robots.txt" style={{ color: C.steel }}> robots.txt</a>
            </p>
            <a
              href="https://linkedin.com/in/calebpierre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{ fontFamily: F.mono, color: C.steel, fontSize: "0.72rem", textDecoration: "none" }}
            >
              <Linkedin size={14} />
              linkedin.com/in/calebpierre
              <ArrowUpRight size={12} color={C.steel} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
