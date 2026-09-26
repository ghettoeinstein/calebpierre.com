import { ArrowUpRight } from "lucide-react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { PROJECTS } from "./data/portfolio.js";

const VENTURES = [
  { name: "Ghettoeinstein", href: "/project357.html" },
  ...PROJECTS.map((p) => ({ name: p.name, href: `/portfolio.html#/${p.slug}` })),
];

export default function App() {
  return (
    <div className="site-shell">
      <Nav />

      <main>
        <section className="hero-section hero-section--centered" id="top">
          <div className="site-container hero-centered">
            <div className="hero-mark" aria-hidden="true">CP</div>
            <h1>A venture studio.</h1>
            <p className="hero-lede hero-lede--centered">Software, media, and community. Built and run, not pitched.</p>
            <div className="hero-actions hero-actions--centered">
              <a className="button button-primary" href="mailto:hello@calebpierre.com">
                Start a Conversation <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="ventures">
          <div className="site-container">
            <span className="kicker">VENTURES</span>
            <div className="venture-list venture-list--plain">
              {VENTURES.map((v) => (
                <a key={v.name} href={v.href} className="venture-row venture-row--plain">
                  <strong>{v.name}</strong>
                  <ArrowUpRight size={18} className="venture-row-arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
