import { Linkedin, ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import FooterParticles from "./FooterParticles.jsx";

const SERVICES = [
  { label: "Web Design", href: "./los-angeles/web-design.html" },
  { label: "AI Programming", href: "./los-angeles/ai-programming.html" },
  { label: "Business Automation", href: "./los-angeles/business-automation.html" },
  { label: "Content Marketing", href: "./los-angeles/content-marketing.html" },
  { label: "Remote Tech Support", href: "./los-angeles/remote-tech-support.html" },
  { label: "Experience / Event Design", href: "./los-angeles/event-design.html" },
  { label: "Cybersecurity", href: "./los-angeles/cybersecurity.html" },
];

const ARTICLES = [
  { label: "Web Design in Los Angeles", href: "./articles/web-design-los-angeles.html" },
  { label: "AI Programming in Los Angeles", href: "./articles/ai-programming-los-angeles.html" },
  { label: "Business Automation in LA", href: "./articles/business-automation-los-angeles.html" },
  { label: "Content Marketing in LA", href: "./articles/content-marketing-los-angeles.html" },
  { label: "Remote Tech Support in LA", href: "./articles/remote-tech-support-los-angeles.html" },
  { label: "Event Design in LA", href: "./articles/event-design-los-angeles.html" },
  { label: "Cybersecurity for LA Businesses", href: "./articles/cybersecurity-los-angeles.html" },
];

const CITIES = [
  { label: "Los Angeles", href: "./los-angeles/ai-programming.html" },
  { label: "Long Beach", href: "./long-beach/ai-programming.html" },
  { label: "Torrance", href: "./torrance/ai-programming.html" },
  { label: "Carson", href: "./carson/ai-programming.html" },
  { label: "Compton", href: "./compton/ai-programming.html" },
  { label: "Hawthorne", href: "./hawthorne/ai-programming.html" },
  { label: "Inglewood", href: "./inglewood/ai-programming.html" },
  { label: "Gardena", href: "./gardena/ai-programming.html" },
  { label: "Santa Monica", href: "./santa-monica/ai-programming.html" },
  { label: "Pasadena", href: "./pasadena/ai-programming.html" },
  { label: "Glendale", href: "./glendale/ai-programming.html" },
  { label: "Burbank", href: "./burbank/ai-programming.html" },
];

const PAGES = [
  { label: "Home", href: "./index.html" },
  { label: "Resume", href: "./resume.html" },
  { label: "Systems Diagnostic", href: "./index.html#diagnostic" },
  { label: "Work", href: "./index.html#work" },
  { label: "Process", href: "./index.html#services" },
  { label: "Proof of Work", href: "./index.html#proof" },
  { label: "About", href: "./index.html#about" },
  { label: "Contact", href: "./index.html#contact" },
  { label: "Book a Call", href: "https://calendly.com/calebpierre" },
  { label: "LinkedIn", href: "https://linkedin.com/in/calebpierre" },
  { label: "Sitemap", href: "./sitemap.xml" },
  { label: "llms.txt", href: "./llms.txt" },
];

const linkStyle = {
  fontFamily: F.mono,
  color: "#B0B0B0",
  fontSize: "0.72rem",
  textDecoration: "none",
  display: "block",
  padding: "3px 0",
  lineHeight: 1.6,
};

const headingStyle = {
  fontFamily: F.mono,
  color: C.red,
  fontSize: "0.62rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "8px",
  fontWeight: 700,
};

export default function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{
        position: "relative",
        background: C.dark,
        borderTop: `3px solid ${C.dark}`,
        overflow: "hidden",
      }}
    >
      {/* Particle layer — red network on black */}
      <FooterParticles />

      {/* Content */}
      <div className="max-w-5xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        {/* Link columns */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ marginBottom: "2rem" }}
        >
          <div>
            <p style={headingStyle}>Services</p>
            {SERVICES.map((s) => (
              <a key={s.href} href={s.href} style={linkStyle} className="footer-link">{s.label}</a>
            ))}
            <a href="./index.html#services" style={linkStyle} className="footer-link">All Services →</a>          </div>

          <div>
            <p style={headingStyle}>Articles</p>
            {ARTICLES.map((a) => (
              <a key={a.href} href={a.href} style={linkStyle} className="footer-link">{a.label}</a>
            ))}
          </div>

          <div>
            <p style={headingStyle}>Cities Served</p>
            {CITIES.map((c) => (
              <a key={c.href} href={c.href} style={linkStyle} className="footer-link">{c.label}, CA</a>
            ))}
          </div>

          <div>
            <p style={headingStyle}>Quick Links</p>
            {PAGES.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={linkStyle}
                className="footer-link"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>

        {/* SEO description */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: F.body,
              color: "#A8A8A8",
              fontSize: "0.78rem",
              lineHeight: 1.8,
              maxWidth: "72ch",
            }}
          >
            Caleb Pierre is a Business Automation Engineer based in Los Angeles, CA —
            web design, AI programming, business automation, content marketing, remote
            tech support, experience/event design, and cybersecurity, all built by one
            operator for organizations across LA County — from nonprofits in Gardena to
            healthcare practices in Torrance to tech companies in Santa Monica. 10 years
            of experience across Tinder (Security Engineer II), Verizon Media, Children's
            Hospital Los Angeles, Glass Financial (CTO), and Caleb Pierre Ventures. Serving
            Los Angeles, Long Beach, Torrance, Carson, Compton, Hawthorne, Inglewood,
            Gardena, Santa Monica, Pasadena, Glendale, and Burbank. HIPAA compliant.
            Remote-first. Book a free systems audit.
          </p>
        </div>

        {/* Legal + social */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "1.5rem",
          }}
        >
          <p style={{ fontFamily: F.mono, color: "#A8A8A8", fontSize: "0.7rem" }}>
            © {new Date().getFullYear()} Caleb Pierre Ventures LLC · Los Angeles, CA ·
            Remote-First · <a href="./llms.txt" style={{ color: C.red }}>llms.txt</a> ·{" "}
            <a href="./sitemap.xml" style={{ color: C.red }}>sitemap.xml</a> ·{" "}
            <a href="./robots.txt" style={{ color: C.red }}>robots.txt</a>
          </p>
          <a
            href="https://linkedin.com/in/calebpierre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{ fontFamily: F.mono, color: C.red, fontSize: "0.72rem", textDecoration: "none" }}
          >
            <Linkedin size={14} />
            linkedin.com/in/calebpierre
            <ArrowUpRight size={12} color={C.red} />
          </a>
        </div>
      </div>
    </footer>
  );
}
