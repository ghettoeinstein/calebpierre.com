import { ArrowUpRight } from "lucide-react";

const columns = [
  ["VENTURES", [["Ghettoeinstein", "/project357.html"], ["Portfolio", "/portfolio.html"]]],
  ["CONNECT", [["Email", "mailto:hello@calebpierre.com"], ["LinkedIn", "https://linkedin.com/in/calebpierre"]]],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-top">
        <div className="footer-brand"><span className="nav-mark">CP</span><h2>Caleb Pierre Technologies</h2></div>
        <a className="footer-call" href="mailto:hello@calebpierre.com">Start a conversation <ArrowUpRight size={18} /></a>
      </div>
      <div className="site-container footer-grid">
        {columns.map(([heading, links]) => (
          <div key={heading}><span>{heading}</span>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        ))}
      </div>
      <div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Caleb Pierre Ventures LLC</span><span>LOS ANGELES</span></div>
    </footer>
  );
}
