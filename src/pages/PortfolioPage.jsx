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
          <header className="portfolio-intro">
            <div className="site-container">
              <span className="kicker">SELECTED PROJECTS / LIVE</span>
              <h1>Systems I've built, running right now.</h1>
              <p>
                Not mockups. Not case studies with the names filed off — live
                products, across game infrastructure, commerce platforms, and
                open-source fintech content. Click into any one for the full
                build.
              </p>
            </div>
          </header>

          <main>
            <div className="site-container">
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
