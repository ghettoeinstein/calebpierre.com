import { ArrowUpRight, Check } from "lucide-react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { PROJECTS } from "./data/portfolio.js";

const TICKER_ITEMS = ["GHETTOEINSTEIN", "FREECREDITBOT", "LAST PEG LOSE", "LATRADERRRS", "CALEBPIERRE.COM"];

const CAPABILITIES = [
  {
    num: "01",
    tag: "BUILD",
    name: "Software & AI Engineering",
    description: "Cloud architecture, product builds, automation pipelines, and security work — shipped, not slideware.",
  },
  {
    num: "02",
    tag: "PRODUCE",
    name: "Media & Production",
    description: "Video, podcast, and product-photography capability built into Ghettoeinstein, our first physical venture.",
  },
  {
    num: "03",
    tag: "OPERATE",
    name: "Workforce & Community",
    description: "Paid, work-based learning that turns local talent into deployed engineers, creators, and operators.",
  },
];

const BIO_FACTS = [
  "20+ years across software, security, and AI systems",
  "Built and operated ventures across gaming, commerce, and media",
  "Los Angeles-based, remote-first",
];

export default function App() {
  return (
    <div className="site-shell">
      <Nav />

      <main>
        <section className="hero-section hero-section--centered" id="top">
          <div className="site-container hero-centered">
            <div className="hero-mark" aria-hidden="true">CP</div>
            <span className="kicker hero-kicker">A VENTURE STUDIO FOR SOFTWARE, MEDIA &amp; COMMUNITY</span>
            <h1>
              Read the market.<br />
              Build the system.<br />
              <em>Repeat the venture.</em>
            </h1>
            <p className="hero-lede hero-lede--centered">
              Caleb Pierre Technologies designs, builds, and operates a small portfolio of software, media, and
              community ventures — each one live, each one accountable to real users and real revenue.
            </p>
            <div className="hero-actions hero-actions--centered">
              <a className="button button-primary" href="#ventures">
                View the Ventures <ArrowUpRight size={18} />
              </a>
              <a className="button button-light" href="mailto:hello@calebpierre.com">
                Start a Conversation <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="ticker-strip" aria-label="Ventures in the portfolio">
            {TICKER_ITEMS.map((item, i) => (
              <span key={item}>
                {i > 0 && <i aria-hidden="true" />}
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="ventures">
          <div className="site-container">
            <div className="section-kicker-row">
              <span className="dash" aria-hidden="true" />
              <span className="kicker">THE PORTFOLIO</span>
            </div>
            <h2 className="section-display">Five ventures, <em>live right now</em>.</h2>
            <p className="section-lede">Not concepts, not case studies with the names filed off — real products with real users.</p>

            <div className="venture-list">
              <a href="/project357.html" className="venture-row venture-row--feature">
                <span className="venture-row-tag">FLAGSHIP</span>
                <div className="venture-row-body">
                  <strong>Ghettoeinstein</strong>
                  <p>A technology incubator, workforce lab, and media studio at 357 W. Compton Blvd. Project 357 is the campaign funding it.</p>
                </div>
                <ArrowUpRight size={20} className="venture-row-arrow" />
              </a>

              {PROJECTS.map((p) => (
                <a key={p.slug} href={`/portfolio.html#/${p.slug}`} className="venture-row">
                  <span className="venture-row-tag">{p.category.split("·")[0].trim().toUpperCase()}</span>
                  <div className="venture-row-body">
                    <strong>{p.name}</strong>
                    <p>{p.tagline}</p>
                  </div>
                  <ArrowUpRight size={20} className="venture-row-arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="what-we-do" style={{ background: "var(--paper)" }}>
          <div className="site-container">
            <div className="section-kicker-row">
              <span className="dash" aria-hidden="true" />
              <span className="kicker">HOW WE OPERATE</span>
            </div>
            <h2 className="section-display">One studio, <em>three capabilities</em>.</h2>

            <div className="capability-list">
              {CAPABILITIES.map((c) => (
                <div className="capability-row" key={c.num}>
                  <span className="capability-row-num">{c.num}</span>
                  <span className="capability-row-tag">{c.tag}</span>
                  <div>
                    <strong>{c.name}</strong>
                    <p>{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="site-container about-layout about-layout--simple">
            <div>
              <span className="kicker">ABOUT</span>
              <h2>Built by an operator, not a studio of one idea.</h2>
              <p>
                Caleb Pierre Technologies is the venture-building practice of Caleb Pierre — a systems strategist and
                engineer who builds, ships, and operates each venture in this portfolio personally before it earns
                outside investment or a bigger team.
              </p>
              <ul>
                {BIO_FACTS.map((fact) => <li key={fact}><Check size={16} /> {fact}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="closing-section closing-section--centered" id="contact">
          <div className="site-container closing-copy closing-copy--centered">
            <span className="kicker">LET'S BUILD SOMETHING</span>
            <h2>Have a venture, a project, or a partnership in mind?</h2>
            <p>Tell us what you're working on. We'll follow up with next steps.</p>
            <div className="hero-actions hero-actions--centered">
              <a className="button button-primary" href="mailto:hello@calebpierre.com">
                Get in Touch <ArrowUpRight size={18} />
              </a>
              <a className="button button-light" href="/portfolio.html">
                See the Full Portfolio <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
