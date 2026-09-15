import { useState } from "react";
import { ArrowUpRight, MapPin, CheckCircle2, Heart } from "lucide-react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { Reveal } from "../hooks/useReveal.jsx";
import {
  CAMPAIGN,
  ZONES,
  SERVICES,
  PARTNERSHIPS,
  PROGRAM_PILLARS,
  CAPITAL_STACK,
  MILESTONES,
  CHARTER_RIGHTS,
} from "../data/project357.js";

function formatUSD(cents) {
  return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function Project357Page() {
  const [activeZone, setActiveZone] = useState(ZONES[0].id);
  const zone = ZONES.find((z) => z.id === activeZone);
  const pct = Math.min(100, Math.round((CAMPAIGN.raisedCents / CAMPAIGN.goalCents) * 100));

  return (
    <div className="site-shell p357-page">
      <Nav />

      <header className="portfolio-intro p357-hero">
        <Reveal className="site-container">
          <span className="kicker"><MapPin size={13} /> 357 W. COMPTON BLVD, COMPTON, CA 90220 — HUB CITY</span>
          <div className="p357-wordmark" aria-label="Ghettoeinstein by calebpierre.com">
            <img src="/project357-assets/ghettoeinstein-logo.png" alt="Ghettoeinstein logo — by calebpierre.com" width="96" height="81" />
          </div>
          <h1>A physical operating system for technology in Hub City.</h1>
          <p>
            Ghettoeinstein is the technology incubator, workforce lab, and digital media production hub going into
            357 W. Compton Blvd, operated by Caleb Pierre Technologies. <strong>Project 357</strong> is the campaign
            funding it — the raise that pays for lease activation, safe equipment, network, and the first paid
            reentry cohort.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#campaign">Fund Project 357 <Heart size={16} /></a>
            <a className="button button-light" href="#zones">Explore the Hub <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>

        <Reveal className="site-container p357-hero-visual" delay={0.15}>
          <img
            src="/project357-assets/hub-rendering.jpg"
            alt="Concept rendering of the Ghettoeinstein hub at 357 W. Compton Blvd, Compton, CA 90220"
            width="1400"
            height="788"
          />
          <span className="p357-hero-caption">Concept rendering — 357 W. Compton Blvd, Compton, CA 90220</span>
        </Reveal>
      </header>

      <section id="campaign" className="p357-campaign">
        <Reveal className="site-container p357-campaign-grid">
          <div>
            <span className="kicker" style={{ color: "var(--white)", opacity: 0.75 }}>PROJECT 357 — THE CAMPAIGN</span>
            <h2>Fund the first 90 days of Ghettoeinstein.</h2>
            <p>
              Every dollar is scoped against the 90-day activation roadmap: legal and insurance groundwork, minimum
              viable lab and studio equipment, and paid work-based learning for the first cohort. Nothing gets spent
              speculatively — see the <a href="#roadmap">phase gates</a> and <a href="#capital">capital stack</a> below.
            </p>
          </div>
          <div className="p357-campaign-card">
            <div className="p357-progress-track">
              <div className="p357-progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="p357-progress-stats">
              <div><strong>{formatUSD(CAMPAIGN.raisedCents)}</strong><span>raised</span></div>
              <div><strong>{formatUSD(CAMPAIGN.goalCents)}</strong><span>goal</span></div>
              <div><strong>{pct}%</strong><span>funded</span></div>
            </div>
            {CAMPAIGN.stripePaymentLink ? (
              <a className="button button-primary p357-campaign-cta" href={CAMPAIGN.stripePaymentLink} target="_blank" rel="noreferrer">
                Contribute via Stripe <ArrowUpRight size={16} />
              </a>
            ) : (
              <a className="button button-primary p357-campaign-cta" href="mailto:hello@calebpierre.com?subject=Fund%20Project%20357">
                Contribute — email to fund <ArrowUpRight size={16} />
              </a>
            )}
            <span className="p357-campaign-note">{CAMPAIGN.deadline}</span>
          </div>
        </Reveal>
      </section>

      <main>
        <section id="zones" className="section">
          <Reveal className="site-container">
            <div className="section-heading">
              <div>
                <span className="kicker">FACILITY BLUEPRINT</span>
                <h2>Five zones. One reset-and-run building.</h2>
              </div>
              <p>
                Each zone is modular and resets fast for its next revenue or program use — a lab in the morning,
                a client shoot in the afternoon, a reentry cohort session in the evening.
              </p>
            </div>

            <div className="p357-zone-tabs" role="tablist" aria-label="Facility zones">
              {ZONES.map((z) => (
                <button
                  key={z.id}
                  role="tab"
                  aria-selected={z.id === activeZone}
                  className={`p357-zone-tab ${z.id === activeZone ? "is-active" : ""}`}
                  onClick={() => setActiveZone(z.id)}
                >
                  <span>{z.short}</span>
                  <em>{z.status}</em>
                </button>
              ))}
            </div>

            <div className="p357-zone-detail">
              <div>
                <span className="kicker">{zone.label}</span>
                <p>{zone.description}</p>
              </div>
              <ul>
                {zone.capabilities.map((c) => (
                  <li key={c}><CheckCircle2 size={15} />{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section id="services" className="section judgment-section">
          <Reveal className="site-container">
            <div className="section-heading">
              <div>
                <span className="kicker">COMMERCIAL SERVICES</span>
                <h2>Two capability tracks, one facility.</h2>
              </div>
              <p>Client engagements fund hub operations and share the same rooms as the workforce program.</p>
            </div>
            <div className="judgment-grid">
              {SERVICES.map((service) => (
                <article key={service.name}>
                  <span className="kicker">{service.name}</span>
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
              <article className="p357-booking-card">
                <span className="kicker" style={{ color: "var(--white)", opacity: 0.7 }}>DIRECT BOOKING</span>
                <h3>Scope a project or reserve studio time.</h3>
                <p>
                  Tell us the engagement — deployment, security review, podcast session, product shoot — and a
                  target date. We'll follow up with scope and a retainer.
                </p>
                <a className="button button-light" href="mailto:hello@calebpierre.com?subject=Ghettoeinstein%20Inquiry">
                  Start an inquiry <ArrowUpRight size={16} />
                </a>
              </article>
            </div>
          </Reveal>
        </section>

        <section id="workforce" className="section">
          <Reveal className="site-container">
            <div className="section-heading">
              <div>
                <span className="kicker">WORKFORCE ECOSYSTEM</span>
                <h2>Access on one side, evidence on the other.</h2>
              </div>
              <p>
                Commercial revenue sustains the hub; public and philanthropic funding expands access. Neither side
                obscures the other.
              </p>
            </div>

            <div className="p357-partner-grid">
              {PARTNERSHIPS.map((p) => (
                <div key={p.role} className="p357-partner-row">
                  <strong>{p.role}</strong>
                  <span>{p.detail}</span>
                </div>
              ))}
            </div>

            <div className="process-grid p357-pillars">
              {PROGRAM_PILLARS.map((pillar, i) => (
                <article key={pillar.title}>
                  <span>0{i + 1}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="capital" className="section leakage-section">
          <Reveal className="site-container">
            <div className="section-heading">
              <div>
                <span className="kicker">CAPITAL STACK & TRANSPARENCY</span>
                <h2>No single source controls hub survival.</h2>
              </div>
              <p>Five channels, deliberately diversified, each restricted to its approved purpose.</p>
            </div>

            <div className="proof-ledger p357-capital-ledger">
              {CAPITAL_STACK.map((c) => (
                <div key={c.source}>
                  <strong>{c.source}</strong>
                  <span>{c.note}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="roadmap" className="section">
          <Reveal className="site-container">
            <div className="section-heading">
              <div>
                <span className="kicker">90-DAY ACTIVATION</span>
                <h2>Revenue before buildout.</h2>
              </div>
              <p>Each phase has a gate. The hub does not advance on hope — it advances on evidence.</p>
            </div>

            <div className="p357-milestones">
              {MILESTONES.map((m) => (
                <article key={m.phase} className="p357-milestone">
                  <span className="kicker">{m.phase} — {m.window}</span>
                  <h3>{m.title}</h3>
                  <p>{m.detail}</p>
                </article>
              ))}
            </div>

            <div className="p357-downloads">
              <a className="text-link" href="mailto:hello@calebpierre.com?subject=Ghettoeinstein%20Capability%20Statement">
                Request the Capability Statement <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="mailto:hello@calebpierre.com?subject=Ghettoeinstein%20Executive%20Pilot%20Brief">
                Request the Executive Pilot Brief <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="mailto:hello@calebpierre.com?subject=Ghettoeinstein%20Institutional%20MOU">
                Request an Institutional MOU template <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </section>

        <section id="charter" className="section derisk-section">
          <Reveal className="site-container">
            <div className="section-heading">
              <div>
                <span className="kicker">GOVERNANCE & PARTICIPANT RIGHTS</span>
                <h2>What every participant is owed.</h2>
              </div>
              <p>
                No participant is used as unpaid production labor. Claims of impact require evidence. Safety,
                consent, privacy, and legal requirements outrank speed — every venture inside Ghettoeinstein operates under
                this Charter.
              </p>
            </div>
            <div className="derisk-list">
              {CHARTER_RIGHTS.map((right) => <p key={right}>{right}</p>)}
            </div>
          </Reveal>
        </section>

        <section className="closing-section">
          <div className="closing-orb" />
          <Reveal className="closing-copy">
            <span className="kicker">357 W. COMPTON BLVD, COMPTON, CA 90220</span>
            <h2>Book the hub, or fund the next cohort.</h2>
            <p>Commercial clients and capital allocators start the same way — a direct conversation.</p>
            <a className="button button-primary" href="mailto:hello@calebpierre.com?subject=Ghettoeinstein">
              Reach the Ghettoeinstein team <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
