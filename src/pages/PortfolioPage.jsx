import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { PROJECTS } from "../data/portfolio.js";

const ACCENT_VAR = {
  acid: "var(--acid)",
  blue: "var(--blue)",
  orange: "var(--orange)",
  purple: "var(--purple)",
};

function slugFromHash() {
  const match = window.location.hash.match(/^#\/(.+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function ProjectCard({ project }) {
  return (
    <a
      href={`#/${project.slug}`}
      className="portfolio-card"
      style={{ "--card-accent": ACCENT_VAR[project.accent] }}
    >
      <div className="portfolio-card-top">
        <span>{project.category}</span>
        <ArrowUpRight size={20} color="#8a9099" />
      </div>
      <div>
        <h3>{project.name}</h3>
        <p>{project.tagline}</p>
      </div>
      <div className="tag-row">
        {project.stack.slice(0, 4).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {project.platforms && (
        <div className="platform-badges platform-badges--compact">
          {project.platforms.map((p) => (
            <span key={p.label} className={`platform-badge platform-badge--${p.status}`}>{p.label}</span>
          ))}
        </div>
      )}
    </a>
  );
}

function ProjectDetail({ project }) {
  const accent = ACCENT_VAR[project.accent];
  return (
    <>
      <header className="portfolio-detail-intro" style={{ "--card-accent": accent }}>
        <div className="site-container">
          <a href="#/" className="portfolio-back">
            <ArrowLeft size={14} /> All projects
          </a>
          <span className="kicker" style={{ color: accent }}>{project.category}</span>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
          <a className="portfolio-detail-link" href={project.href} target="_blank" rel="noreferrer">
            {project.url} <ArrowUpRight size={16} />
          </a>
          {project.platforms && (
            <div className="platform-badges">
              {project.platforms.map((p) => (
                p.href ? (
                  <a key={p.label} href={p.href} target="_blank" rel="noreferrer" className={`platform-badge platform-badge--${p.status}`}>
                    {p.label} <span>{p.status === "live" ? "Live" : "Pending Review"}</span>
                  </a>
                ) : (
                  <span key={p.label} className={`platform-badge platform-badge--${p.status}`}>
                    {p.label} <span>{p.status === "live" ? "Live" : "Pending Review"}</span>
                  </span>
                )
              ))}
            </div>
          )}
          {project.seoPage && (
            <a className="text-link" style={{ marginTop: 16 }} href={project.seoPage}>
              View the dedicated page <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </header>

      <main className="portfolio-detail-body" style={{ "--card-accent": accent }}>
        <div className="site-container">
          <div className="portfolio-case-grid">
            <article>
              <span>The challenge</span>
              <p>{project.caseStudy.challenge}</p>
            </article>
            <article>
              <span>The approach</span>
              <p>{project.caseStudy.approach}</p>
            </article>
            <article>
              <span>The result</span>
              <p>{project.caseStudy.result}</p>
            </article>
          </div>
          <div className="portfolio-detail-stack">
            {project.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default function PortfolioPage() {
  const [slug, setSlug] = useState(() => slugFromHash());

  useEffect(() => {
    const onHashChange = () => {
      setSlug(slugFromHash());
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const project = PROJECTS.find((p) => p.slug === slug);

  return (
    <div className="site-shell">
      <Nav />

      {project ? (
        <ProjectDetail project={project} />
      ) : (
        <>
          <header className="portfolio-intro portfolio-intro--centered">
            <div className="site-container">
              <div className="hero-mark" aria-hidden="true">CP</div>
              <span className="kicker">THE VENTURE PORTFOLIO</span>
              <h1>Live ventures, not case studies.</h1>
              <p>
                Every product here has real users, real constraints, and real money moving through it. Click into
                any one for the full build.
              </p>
            </div>
          </header>

          <main>
            <div className="site-container">
              <a href="/project357.html" className="venture-row venture-row--feature venture-row--wide">
                <span className="venture-row-tag">FLAGSHIP — PHYSICAL VENTURE</span>
                <div className="venture-row-body">
                  <strong>Ghettoeinstein</strong>
                  <p>A technology incubator, workforce lab, and media studio at 357 W. Compton Blvd. Project 357 is the campaign funding it.</p>
                </div>
                <ArrowUpRight size={20} className="venture-row-arrow" />
              </a>

              {PROJECTS.length === 0 ? (
                <div className="portfolio-empty">More projects coming soon.</div>
              ) : (
                <div className="portfolio-grid">
                  {PROJECTS.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                  ))}
                </div>
              )}
            </div>
          </main>
        </>
      )}

      <Footer />
    </div>
  );
}
