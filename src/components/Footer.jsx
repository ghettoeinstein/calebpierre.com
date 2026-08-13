import { ArrowUpRight } from "lucide-react";

const columns = [
  ["SYSTEMS", [["AI agents", "/los-angeles/ai-agents.html"], ["Automation", "/los-angeles/business-automation.html"], ["Cybersecurity", "/los-angeles/cybersecurity.html"]]],
  ["FIELD NOTES", [["AI agents in LA", "/articles/ai-agents-los-angeles.html"], ["Security in LA", "/articles/cybersecurity-los-angeles.html"], ["Automation in LA", "/articles/business-automation-los-angeles.html"]]],
  ["EXPLORE", [["Selected work", "/#work"], ["Diagnostic", "/#diagnostic"], ["Process", "/#process"], ["Resume", "/resume.html"]]],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-top">
        <div className="footer-brand"><span className="nav-mark">CP</span><h2>Systems that return attention to people.</h2></div>
        <a className="footer-call" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">Book a diagnostic <ArrowUpRight size={18} /></a>
      </div>
      <div className="site-container footer-grid">
        {columns.map(([heading, links]) => (
          <div key={heading}><span>{heading}</span>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        ))}
        <div><span>CONNECT</span><a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:hello@calebpierre.com">Email</a><a href="/sitemap.xml">Sitemap</a></div>
      </div>
      <div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Caleb Pierre Ventures LLC</span><span>LOS ANGELES · REMOTE-FIRST · BUILT WITH INTENT</span></div>
    </footer>
  );
}
