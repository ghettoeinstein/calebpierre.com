import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react";
import { C, F, EASE } from "../constants.js";
import GlitchMark from "./GlitchMark.jsx";

/* ────────────────────────────────────────────────────────────
   Hierarchical menu model
   Services  →  AI Agents / Cybersecurity / Automation
                └─ 12 cities each (sub-level flyout)
   Articles  →  3 editorials
   Company   →  Work / Proof / About / Resume
   ──────────────────────────────────────────────────────────── */

const CITIES = [
  { slug: "los-angeles",  label: "Los Angeles" },
  { slug: "long-beach",   label: "Long Beach" },
  { slug: "torrance",     label: "Torrance" },
  { slug: "carson",       label: "Carson" },
  { slug: "compton",      label: "Compton" },
  { slug: "hawthorne",    label: "Hawthorne" },
  { slug: "inglewood",    label: "Inglewood" },
  { slug: "gardena",      label: "Gardena" },
  { slug: "santa-monica", label: "Santa Monica" },
  { slug: "pasadena",     label: "Pasadena" },
  { slug: "glendale",     label: "Glendale" },
  { slug: "burbank",      label: "Burbank" },
];

const SERVICES = [
  { slug: "web-design",           label: "Web Design",               short: "Web Design" },
  { slug: "ai-programming",       label: "AI Programming",           short: "AI" },
  { slug: "business-automation",  label: "Business Automation",      short: "Automation" },
  { slug: "content-marketing",    label: "Content Marketing",        short: "Marketing" },
  { slug: "remote-tech-support",  label: "Remote Tech Support",      short: "Support" },
  { slug: "event-design",         label: "Experience / Event Design", short: "Events" },
  { slug: "cybersecurity",        label: "Cybersecurity",            short: "Security" },
];

const ARTICLES = [
  { label: "Web Design in LA",         href: "./articles/web-design-los-angeles.html" },
  { label: "AI Programming in LA",     href: "./articles/ai-programming-los-angeles.html" },
  { label: "Automation in LA",         href: "./articles/business-automation-los-angeles.html" },
  { label: "Content Marketing in LA",  href: "./articles/content-marketing-los-angeles.html" },
  { label: "Remote Tech Support in LA", href: "./articles/remote-tech-support-los-angeles.html" },
  { label: "Event Design in LA",       href: "./articles/event-design-los-angeles.html" },
  { label: "Cybersecurity in LA",      href: "./articles/cybersecurity-los-angeles.html" },
];

const COMPANY = [
  { label: "Work",       href: "#work" },
  { label: "Proof",      href: "#proof" },
  { label: "Diagnostic", href: "#diagnostic" },
  { label: "About",      href: "#about" },
  { label: "Resume",     href: "./resume.html" },
];

/* ─────────── Desktop flyout ─────────── */

function ServicesFlyout({ onNavigate }) {
  // which service row is hovered -> drives the city sub-panel
  const [activeService, setActiveService] = useState(SERVICES[0].slug);

  return (
    <div
      className="nav-flyout"
      style={{
        position: "absolute",
        top: "calc(100% + 6px)",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        background: C.white,
        border: `3px solid ${C.black}`,
        boxShadow: `8px 8px 0 ${C.black}`,
        zIndex: 100,
        minWidth: 560,
      }}
    >
      {/* Level 1 — services */}
      <div style={{ borderRight: `2px solid ${C.black}`, minWidth: 220, padding: "8px 0" }}>
        <p className="eyebrow" style={{ padding: "6px 16px 8px", color: C.steel, fontFamily: F.mono, fontSize: "0.6rem", letterSpacing: "0.12em", margin: 0 }}>
          SERVICES
        </p>
        {SERVICES.map((s) => {
          const active = s.slug === activeService;
          return (
            <button
              key={s.slug}
              onMouseEnter={() => setActiveService(s.slug)}
              onFocus={() => setActiveService(s.slug)}
              onClick={() => onNavigate(`./los-angeles/${s.slug}.html`)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px 16px",
                background: active ? C.redDim : "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: F.body,
                fontSize: "0.85rem",
                fontWeight: 700,
                color: C.ink,
                textAlign: "left",
                transition: "background 0.12s ease",
              }}
            >
              {s.label}
              <ChevronRight size={14} strokeWidth={2.5} />
            </button>
          );
        })}
        <div style={{ height: 2, background: C.black, margin: "6px 12px" }} />
        <button
          onClick={() => onNavigate("#services")}
          style={{
            display: "block",
            width: "100%",
            padding: "8px 16px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: F.mono,
            fontSize: "0.68rem",
            color: C.steel,
            textAlign: "left",
            letterSpacing: "0.06em",
          }}
        >
          ALL SERVICES →
        </button>
      </div>

      {/* Level 2 — cities for the hovered service */}
      <div style={{ minWidth: 340, padding: "8px 0", background: C.paper }}>
        <p className="eyebrow" style={{ padding: "6px 16px 8px", color: C.steel, fontFamily: F.mono, fontSize: "0.6rem", letterSpacing: "0.12em", margin: 0 }}>
          {SERVICES.find(s => s.slug === activeService).short.toUpperCase()} BY CITY
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "0 8px",
          }}
        >
          {CITIES.map((city) => (
            <a
              key={city.slug}
              href={`./${city.slug}/${activeService}.html`}
              className="nav-city-link"
              style={{
                display: "block",
                padding: "8px 12px",
                fontFamily: F.body,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: C.ink,
                textDecoration: "none",
                borderLeft: "3px solid transparent",
                transition: "all 0.12s ease",
              }}
            >
              {city.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimpleFlyout({ items, label }) {
  return (
    <div
      className="nav-flyout"
      style={{
        position: "absolute",
        top: "calc(100% + 6px)",
        left: "50%",
        transform: "translateX(-50%)",
        background: C.white,
        border: `3px solid ${C.black}`,
        boxShadow: `6px 6px 0 ${C.black}`,
        zIndex: 100,
        minWidth: 240,
        padding: "8px 0",
      }}
    >
      <p className="eyebrow" style={{ padding: "6px 16px 8px", color: C.steel, fontFamily: F.mono, fontSize: "0.6rem", letterSpacing: "0.12em", margin: 0 }}>
        {label}
      </p>
      {items.map((it) => (
        <a
          key={it.href + it.label}
          href={it.href}
          className="nav-city-link"
          style={{
            display: "block",
            padding: "9px 16px",
            fontFamily: F.body,
            fontSize: "0.82rem",
            fontWeight: 600,
            color: C.ink,
            textDecoration: "none",
            borderLeft: "3px solid transparent",
            transition: "all 0.12s ease",
          }}
        >
          {it.label}
        </a>
      ))}
    </div>
  );
}

/* A top-level desktop nav item with a hover-driven flyout */
function NavItem({ label, children, accent }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const enter = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true); };
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{ position: "relative" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="nav-link"
        aria-expanded={open}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          fontFamily: F.mono,
          fontSize: "0.75rem",
          color: open ? C.ink : C.steel,
          background: "none",
          border: "none",
          cursor: "pointer",
          letterSpacing: "0.04em",
          padding: "8px 4px",
        }}
      >
        {label}
        <ChevronDown
          size={12}
          style={{ transition: `transform 0.25s ${EASE.smooth}`, transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      {open && children}
    </div>
  );
}

/* ─────────── Mobile accordion ─────────── */

function MobileSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid #1a1a1a" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 1.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: C.red,
          fontFamily: F.mono,
          fontSize: "0.78rem",
          letterSpacing: "0.14em",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {title}
        <ChevronDown size={14} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }} />
      </button>
      {open && <div style={{ paddingBottom: 8 }}>{children}</div>}
    </div>
  );
}

function MobileSubSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 1.5rem 12px 2rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          fontFamily: F.body,
          fontSize: "0.92rem",
          fontWeight: 700,
          textAlign: "left",
        }}
      >
        {title}
        <ChevronRight size={14} style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform 0.25s ease", color: "#E8382D" }} />
      </button>
      {open && (
        <div style={{ paddingBottom: 6 }}>
          {children}
        </div>
      )}
    </div>
  );
}

/* ─────────── Main Nav ─────────── */

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navigate = (href) => { window.location.href = href; };

  return (
    <>
      <nav
        style={{
          background: C.white,
          borderBottom: `3px solid ${C.black}`,
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
          {/* Brand */}
          <a href="./index.html" className="flex items-center gap-3" style={{ textDecoration: "none", flexShrink: 0 }}>
            <GlitchMark size={36} />
            <div style={{ fontFamily: F.body, fontSize: "0.88rem", color: C.ink, fontWeight: 700 }}>
              Caleb Pierre
              <div style={{ fontFamily: F.mono, fontSize: "0.58rem", color: C.steel, letterSpacing: "0.1em" }}>
                BUSINESS AUTOMATION ENGINEER
              </div>
            </div>
          </a>

          {/* Desktop hierarchy */}
          <div className="hidden lg:flex items-center gap-5" style={{ flexShrink: 0 }}>
            <NavItem label="Services">
              <ServicesFlyout onNavigate={navigate} />
            </NavItem>

            <NavItem label="Articles">
              <SimpleFlyout items={ARTICLES} label="EDITORIALS" />
            </NavItem>

            <NavItem label="Company">
              <SimpleFlyout items={COMPANY} label="SITE" />
            </NavItem>

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

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-3" style={{ flexShrink: 0 }}>
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
            <button
              onClick={() => setOpen(!open)}
              style={{
                color: C.white,
                background: C.red,
                border: `3px solid ${C.black}`,
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `3px 3px 0 ${C.black}`,
              }}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in — accordion hierarchy */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="lg:hidden"
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 48 }}
          />
          <div
            className="lg:hidden"
            style={{
              position: "fixed",
              top: 0, right: 0, bottom: 0,
              width: "100%",
              maxWidth: "420px",
              background: "#0A0A0A",
              zIndex: 49,
              overflowY: "auto",
              animation: `slideInRight 0.3s ${EASE.smooth} forwards`,
            }}
          >
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "1rem 1.5rem", borderBottom: "2px solid #1a1a1a",
            }}>
              <span style={{ fontFamily: F.mono, fontSize: "0.65rem", color: "#666", letterSpacing: "0.1em" }}>
                BUSINESS AUTOMATION ENGINEER
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Level 1: Services → Level 2: service → Level 3: cities */}
            <MobileSection title="Services" defaultOpen>
              {SERVICES.map((s) => (
                <MobileSubSection key={s.slug} title={s.label}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "0 1rem 0 2.25rem" }}>
                    {CITIES.map((city) => (
                      <a
                        key={city.slug}
                        href={`./${city.slug}/${s.slug}.html`}
                        onClick={() => setOpen(false)}
                        style={{
                          display: "block",
                          padding: "8px 4px",
                          fontFamily: F.mono,
                          fontSize: "0.72rem",
                          color: "#bbb",
                          textDecoration: "none",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {city.label}
                      </a>
                    ))}
                  </div>
                </MobileSubSection>
              ))}
            </MobileSection>

            <MobileSection title="Articles">
              {ARTICLES.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 1.5rem 12px 2rem",
                    fontFamily: F.body,
                    fontSize: "0.88rem",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {a.label}
                </a>
              ))}
            </MobileSection>

            <MobileSection title="Company">
              {COMPANY.map((p) => (
                <a
                  key={p.href + p.label}
                  href={p.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 1.5rem 12px 2rem",
                    fontFamily: F.body,
                    fontSize: "0.88rem",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {p.label}
                </a>
              ))}
            </MobileSection>

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
        </>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .nav-flyout { animation: flyoutIn 0.18s ${EASE.swift}; }
        @keyframes flyoutIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-4px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .nav-city-link:hover {
          background: ${C.redDim};
          border-left-color: ${C.red} !important;
          padding-left: 16px !important;
        }
        .nav-link:hover { color: ${C.ink} !important; }
        @media (prefers-reduced-motion: reduce) {
          .nav-flyout, @keyframes slideInRight { animation: none !important; }
        }
      `}</style>
    </>
  );
}
