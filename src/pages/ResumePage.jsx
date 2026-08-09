import { Linkedin, ArrowUpRight } from "lucide-react";
import { C, F } from "../constants.js";
import Nav from "../components/Nav.jsx";
import Resume from "../components/Resume.jsx";

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
  "Los Angeles", "Long Beach", "Torrance", "Carson", "Compton",
  "Hawthorne", "Inglewood", "Gardena", "Santa Monica", "Pasadena", "Glendale", "Burbank",
];

const QUICK_LINKS = [
  { label: "Home", href: "./index.html" },
  { label: "Resume", href: "./resume.html" },
  { label: "Start the Discovery", href: "https://calendly.com/calebpierre" },
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

export default function ResumePage() {
  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Global Nav — single source of truth */}
      <Nav />

      {/* ---- Resume content ---- */}
      <div style={{ paddingTop: "1rem" }}>
        <Resume />
      </div>

      {/* ---- Footer ---- */}
      <footer className="px-6 py-12" style={{ backgroundColor: C.dark, borderTop: `3px solid ${C.dark}`, overflow: "hidden", position: "relative" }}>
        <div className="max-w-5xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ marginBottom: "2rem" }}>
            <div>
              <p style={headingStyle}>Services</p>
              {SERVICES.map((s) => (
                <a key={s.href} href={s.href} style={linkStyle} className="footer-link">{s.label}</a>
              ))}
              <a href="./index.html#start" style={linkStyle} className="footer-link">All Services →</a>
            </div>
            <div>
              <p style={headingStyle}>Articles</p>
              {ARTICLES.map((a) => (
                <a key={a.href} href={a.href} style={linkStyle} className="footer-link">{a.label}</a>
              ))}
            </div>
            <div>
              <p style={headingStyle}>Cities Served</p>
              {CITIES.map((c) => (
                <a key={c} href={`./${c.toLowerCase().replace(/ /g, "-")}/ai-programming.html`} style={linkStyle} className="footer-link">{c}, CA</a>
              ))}
            </div>
            <div>
              <p style={headingStyle}>Quick Links</p>
              {QUICK_LINKS.map((q) => (
                <a
                  key={q.label}
                  href={q.href}
                  target={q.href.startsWith("http") ? "_blank" : undefined}
                  rel={q.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={linkStyle}
                  className="footer-link"
                >
                  {q.label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
            <p style={{ fontFamily: F.body, color: "#A8A8A8", fontSize: "0.78rem", lineHeight: 1.8, maxWidth: "72ch" }}>
              Caleb Pierre is a Business Automation Engineer based in Los Angeles, CA — web
              design, AI programming, business automation, content marketing, remote tech
              support, experience/event design, and cybersecurity, all built by one operator
              for organizations across LA County. 10 years of experience across Tinder,
              Verizon Media, Children's Hospital Los Angeles, Glass Financial, and Caleb
              Pierre Ventures. Serving Los Angeles, Long Beach, Torrance, Carson, Compton,
              Hawthorne, Inglewood, Gardena, Santa Monica, Pasadena, Glendale, and Burbank.
              HIPAA compliant. Remote-first. Start the Discovery.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1.5rem" }}>
            <p style={{ fontFamily: F.mono, color: "#A8A8A8", fontSize: "0.7rem" }}>
              © {new Date().getFullYear()} Caleb Pierre Ventures LLC · Los Angeles, CA ·
              <a href="./llms.txt" style={{ color: C.red }}> llms.txt</a> ·
              <a href="./sitemap.xml" style={{ color: C.red }}> sitemap.xml</a> ·
              <a href="./robots.txt" style={{ color: C.red }}> robots.txt</a>
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
    </div>
  );
}
