import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  ["Method", "/#method"],
  ["Workshops", "/#workshops"],
  ["Advisory", "/#advisory"],
  ["Ideas", "/#ideas"],
  ["Proof", "/#proof"],
  ["About", "/#about"],
  ["Ventures", "/portfolio.html"],
  ["Ghettoeinstein", "/project357.html"],
  ["Experience", "/resume.html"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-nav">
      <a href="/" className="nav-brand" aria-label="Caleb Pierre home">
        <span className="nav-mark">CP</span>
        <span className="nav-identity"><strong>Caleb Pierre Technologies</strong><small>R&amp;D LAB · ENTERPRISE OF ONE · CALEBOS</small></span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="nav-cta" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">
        Inquire to Work Together <ArrowUpRight size={15} />
      </a>
      <button className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className={`nav-drawer ${open ? "is-open" : ""}`}>
        <div className="nav-drawer-meta"><span>CP / ENTERPRISE OF ONE</span><span>LOS ANGELES</span></div>
        {LINKS.map(([label, href], index) => (
          <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight size={18} /></a>
        ))}
        <a className="drawer-cta" href="https://calendly.com/calebpierre" target="_blank" rel="noreferrer">Inquire to Work Together <ArrowUpRight size={18} /></a>
      </div>
    </header>
  );
}
