import { ArrowUpRight } from "lucide-react";

const columns = [
  ["ENTERPRISE OF ONE", [["Method", "/#method"], ["Workshops", "/#workshops"], ["Advisory", "/#advisory"]]],
  ["EXPLORE", [["Signature ideas", "/#ideas"], ["Ventures and systems", "/portfolio.html"], ["Experience", "/resume.html"]]],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-top">
        <div className="footer-brand"><span className="nav-mark">CP</span><h2>Systems that turn capable people into accountable operators.</h2></div>
        <a className="footer-call" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">Inquire to work together <ArrowUpRight size={18} /></a>
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
