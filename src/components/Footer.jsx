import { Linkedin, ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";

const SERVICES = [
  { label: "AI Agent Development", href: "./los-angeles/ai-agents.html" },
  { label: "Cybersecurity", href: "./los-angeles/cybersecurity.html" },
  { label: "Business Automation", href: "./los-angeles/business-automation.html" },
];

const ARTICLES = [
  { label: "AI Agents in Los Angeles", href: "./articles/ai-agents-los-angeles.html" },
  { label: "Cybersecurity for LA Businesses", href: "./articles/cybersecurity-los-angeles.html" },
  { label: "Business Automation in LA", href: "./articles/business-automation-los-angeles.html" },
];

const CITIES = [
  { label: "Los Angeles", href: "./los-angeles/ai-agents.html" },
  { label: "Long Beach", href: "./long-beach/ai-agents.html" },
  { label: "Torrance", href: "./torrance/ai-agents.html" },
  { label: "Carson", href: "./carson/ai-agents.html" },
  { label: "Compton", href: "./compton/ai-agents.html" },
  { label: "Hawthorne", href: "./hawthorne/ai-agents.html" },
  { label: "Inglewood", href: "./inglewood/ai-agents.html" },
  { label: "Gardena", href: "./gardena/ai-agents.html" },
  { label: "Santa Monica", href: "./santa-monica/ai-agents.html" },
  { label: "Pasadena", href: "./pasadena/ai-agents.html" },
  { label: "Glendale", href: "./glendale/ai-agents.html" },
  { label: "Burbank", href: "./burbank/ai-agents.html" },
];

const PAGES = [
  { label: "Home", href: "./index.html" },
  { label: "Resume", href: "./resume.html" },
  { label: "Systems Diagnostic", href: "./index.html#diagnostic" },
  { label: "Process", href: "./index.html#process" },
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
  color: "#8A8A8A",
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
      style={{ backgroundColor: C.ink, borderTop: `2px solid ${C.red}` }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ---- Top: link columns ---- */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ marginBottom: "2rem" }}
        >
          {/* Services */}
          <div>
            <p style={headingStyle}>Services</p>
            {SERVICES.map((s) => (
              <a key={s.href} href={s.href} style={linkStyle} className="footer-link">
                {s.label}
              </a>
            ))}
            <a href="./index.html#services" style={linkStyle} className="footer-link">
              All Services →
            </a>
          </div>

          {/* Articles */}
          <div>
            <p style={headingStyle}>Articles</p>
            {ARTICLES.map((a) => (
              <a key={a.href} href={a.href} style={linkStyle} className="footer-link">
                {a.label}
              </a>
            ))}
          </div>

          {/* Cities Served */}
          <div>
            <p style={headingStyle}>Cities Served</p>
            {CITIES.map((c) => (
              <a key={c.href} href={c.href} style={linkStyle} className="footer-link">
                {c.label}, CA
              </a>
            ))}
          </div>

          {/* Pages / Quick Links */}
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

        {/* ---- Middle: SEO description block ---- */}
        <div
          style={{
            borderTop: `1px solid rgba(255,255,255,0.08)`,
            paddingTop: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: F.body,
              color: "#6A6A6A",
              fontSize: "0.78rem",
              lineHeight: 1.8,
              maxWidth: "72ch",
            }}
          >
            Caleb Pierre is a forward-deployed AI engineer and security engineer based in
            Los Angeles, CA. He builds AI agent systems, cybersecurity infrastructure, and
            business automation pipelines for organizations across LA County — from
            nonprofits in Gardena to healthcare practices in Torrance to tech companies in
            Santa Monica. 10 years of experience across Tinder (Security Engineer II),
            Verizon Media, Children's Hospital Los Angeles, Glass Financial (CTO), and
            Caleb Pierre Ventures. Serving Los Angeles, Long Beach, Torrance, Carson,
            Compton, Hawthorne, Inglewood, Gardena, Santa Monica, Pasadena, Glendale,
            and Burbank. HIPAA compliant. Remote-first. Book a free systems audit.
          </p>
        </div>

        {/* ---- Bottom: legal + social ---- */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: `1px solid rgba(255,255,255,0.08)`,
            paddingTop: "1.5rem",
          }}
        >
          <p style={{ fontFamily: F.mono, color: "#6A6A6A", fontSize: "0.7rem" }}>
            © {new Date().getFullYear()} Caleb Pierre Ventures LLC · Los Angeles, CA ·
            Remote-First · <a href="./llms.txt" style={{ color: "#8A8A8A" }}>llms.txt</a> ·{" "}
            <a href="./sitemap.xml" style={{ color: "#8A8A8A" }}>sitemap.xml</a> ·{" "}
            <a href="./robots.txt" style={{ color: "#8A8A8A" }}>robots.txt</a>
          </p>
          <a
            href="https://linkedin.com/in/calebpierre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: F.mono,
              color: "#8A8A8A",
              fontSize: "0.72rem",
              textDecoration: "none",
            }}
          >
            <Linkedin size={14} />
            linkedin.com/in/calebpierre
            <ArrowUpRight size={12} color="#6A6A6A" />
          </a>
        </div>
      </div>
    </footer>
  );
}
