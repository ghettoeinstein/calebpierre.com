#!/usr/bin/env python3
"""
SEO Page Generator for calebpierre.com
Generates city × service landing pages + article pages optimized for
traditional search (Google) and AI crawlers (GPTBot, ClaudeBot, PerplexityBot).

Design tokens match the calebpierre.com brand:
  paper: #FAFAF8, ink: #0B0B0B, red: #E10600, steel: #5C5C5C
  Fonts: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (mono)

Usage:
    cd ~/calebpierre.com && python3 generate_seo_pages.py
"""

import os
from datetime import datetime
from pathlib import Path

BASE_URL = "https://calebpierre.com"
NOW = datetime.now().strftime("%Y-%m-%d")

# ============ CITIES ============
CITIES = [
    {"slug": "los-angeles", "name": "Los Angeles", "zip": "90001", "county": "Los Angeles County", "pop": "3.9M",
     "desc": "the second-largest city in the US"},
    {"slug": "long-beach", "name": "Long Beach", "zip": "90802", "county": "Los Angeles County", "pop": "466k",
     "desc": "a major port city in South Bay LA"},
    {"slug": "torrance", "name": "Torrance", "zip": "90501", "county": "Los Angeles County", "pop": "143k",
     "desc": "a key business hub in the South Bay"},
    {"slug": "carson", "name": "Carson", "zip": "90745", "county": "Los Angeles County", "pop": "95k",
     "desc": "a growing industrial city in South Bay"},
    {"slug": "compton", "name": "Compton", "zip": "90220", "county": "Los Angeles County", "pop": "95k",
     "desc": "a historic city in South LA"},
    {"slug": "hawthorne", "name": "Hawthorne", "zip": "90250", "county": "Los Angeles County", "pop": "88k",
     "desc": "home to SpaceX and aerospace tech"},
    {"slug": "inglewood", "name": "Inglewood", "zip": "90301", "county": "Los Angeles County", "pop": "108k",
     "desc": "home to SoFi Stadium and a booming business district"},
    {"slug": "gardena", "name": "Gardena", "zip": "90247", "county": "Los Angeles County", "pop": "58k",
     "desc": "a diverse business community in South Bay"},
    {"slug": "santa-monica", "name": "Santa Monica", "zip": "90401", "county": "Los Angeles County", "pop": "93k",
     "desc": "a tech-forward coastal city"},
    {"slug": "pasadena", "name": "Pasadena", "zip": "91101", "county": "Los Angeles County", "pop": "138k",
     "desc": "a cultural and tech hub in the San Gabriel Valley"},
    {"slug": "glendale", "name": "Glendale", "zip": "91201", "county": "Los Angeles County", "pop": "196k",
     "desc": "a major business center in the Verdugos"},
    {"slug": "burbank", "name": "Burbank", "zip": "91501", "county": "Los Angeles County", "pop": "105k",
     "desc": "the media and entertainment capital of LA"},
]

# ============ SERVICES ============
SERVICES = [
    {
        "slug": "ai-agents",
        "name": "AI Agent Development",
        "title": "AI Agent Development in {city}, CA",
        "desc": "Custom AI agents for {city} businesses — LLM orchestration, MCP integration, RAG pipelines, and multi-agent workflows that eliminate 40-60% of manual overhead.",
        "keywords": ["ai agent development {city}", "ai engineer {city}", "LLM orchestration {city}", "AI automation {city} CA"],
        "price": "Starting at $3,000",
        "features": [
            "Custom AI agents built on GPT-4, Claude, and local LLMs",
            "MCP (Model Context Protocol) server integration",
            "RAG pipelines connecting your business data to AI",
            "Multi-agent orchestration — propose, validate, execute, log",
            "Deployment on AWS/GCP with Docker + CI/CD",
            "Full documentation and source code handover",
        ],
        "body_extra": "Caleb Pierre has deployed AI agent systems for nonprofit and enterprise clients across Los Angeles County — from NLP-powered intake automation to intelligent knowledge bases. Every system ships with documentation you can actually read.",
    },
    {
        "slug": "cybersecurity",
        "name": "Cybersecurity",
        "title": "Cybersecurity Services in {city}, CA",
        "desc": "Enterprise-grade cybersecurity for {city} businesses — SOAR/SIEM, Zero Trust Architecture, HIPAA compliance, vulnerability assessment, and incident response.",
        "keywords": ["cybersecurity {city}", "cyber security {city} CA", "HIPAA compliance {city}", "security engineer {city}"],
        "price": "Starting at $1,500",
        "features": [
            "SOAR playbook design + Splunk SIEM integration",
            "Zero Trust Architecture implementation",
            "HIPAA / HiTECH compliance audits for healthcare",
            "Vulnerability assessment with Rapid7 and Tenable",
            "Incident response planning + tabletop exercises",
            "Bug bounty program management (HackerOne)",
        ],
        "body_extra": "Caleb Pierre served as Security Engineer II at Tinder, where he designed SOAR playbooks integrated with Splunk SIEM that increased SOC efficiency by 50%. He managed HackerOne bug bounty programs at Verizon Media and maintained 100% HIPAA compliance at Children's Hospital Los Angeles.",
    },
    {
        "slug": "business-automation",
        "name": "Business Automation",
        "title": "Business Automation in {city}, CA",
        "desc": "Automate your {city} business — Zapier, n8n, Make, and custom Python agents connecting your tools into unified, self-operating infrastructure.",
        "keywords": ["business automation {city}", "Zapier automation {city}", "n8n {city}", "workflow automation {city} CA"],
        "price": "Starting at $2,000",
        "features": [
            "Zapier, n8n, and Make.com pipeline design",
            "Custom Python agents for complex workflows",
            "REST/GraphQL API integration across your toolchain",
            "CRM, email, and social channel orchestration",
            "Automated case management and data entry",
            "Auditable, repeatable operational processes",
        ],
        "body_extra": "At Union Rescue Mission in Los Angeles, Caleb deployed Zapier-driven automation pipelines that reduced manual workload by 40%. As IT Director for Social Service Advocacy in Gardena, he automated administrative workflows that eliminated manual data entry across the organization.",
    },
]

# ============ PAGE TEMPLATE ============
PAGE_TEMPLATE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Caleb Pierre</title>
<meta name="description" content="{desc}">
<meta name="keywords" content="{keywords_str}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{canonical_url}">
<meta property="og:type" content="website">
<meta property="og:title" content="{title} | Caleb Pierre">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{canonical_url}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title} | Caleb Pierre">
<meta name="twitter:description" content="{desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{service_name}",
  "provider": {{
    "@type": "ProfessionalService",
    "name": "Caleb Pierre — Remote Systems Agency",
    "url": "https://calebpierre.com/",
    "telephone": "+1-310-555-0100",
    "priceRange": "$$",
    "address": {{
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90247",
      "addressCountry": "US"
    }},
    "areaServed": {{
      "@type": "City",
      "name": "{city_name}, CA"
    }}
  }},
  "areaServed": {{
    "@type": "City",
    "name": "{city_name}, CA"
  }},
  "offers": {{
    "@type": "Offer",
    "price": "{price_clean}",
    "priceCurrency": "USD",
    "description": "{service_name} for businesses in {city_name}, CA"
  }}
}}
</script>
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {{
      "@type": "Question",
      "name": "Do you work with businesses in {city_name} specifically?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Yes. Caleb Pierre is based in Los Angeles County and {city_name} is within our primary service area. We offer on-site visits for initial audits and can deploy systems remotely."
      }}
    }},
    {{
      "@type": "Question",
      "name": "How much does {service_name_lower} cost in {city_name}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Our {service_name} {price}. We offer a free 30-minute systems audit first to determine if our services are the right fit for your business."
      }}
    }},
    {{
      "@type": "Question",
      "name": "What makes Caleb Pierre different from other agencies in {city_name}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Caleb Pierre is not an agency — he's a forward-deployed engineer with 10 years of enterprise security and AI experience. He builds the systems himself, ships documentation, and hands you the source code. No black boxes."
      }}
    }},
    {{
      "@type": "Question",
      "name": "How fast can you deploy in {city_name}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "From audit to deployment in 30 days. AI agents go live in week 1. Security assessments complete in week 2. Full system documentation and handover by day 30."
      }}
    }}
  ]
}}
</script>
<style>
*,*::before,*::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
:root {{
  --paper: #FAFAF8; --panel: #F1F0EA; --ink: #0B0B0B; --red: #E10600;
  --steel: #5C5C5C; --line: rgba(11,11,11,0.14); --lineDark: rgba(255,255,255,0.16);
  --display: 'Space Grotesk', system-ui, sans-serif;
  --body: 'IBM Plex Sans', system-ui, sans-serif;
  --mono: 'IBM Plex Mono', ui-monospace, monospace;
}}
html {{ scroll-behavior: smooth; }}
body {{ font-family: var(--body); background: var(--paper); color: var(--ink); line-height: 1.65; }}
a {{ color: inherit; text-decoration: none; }}
.wrap {{ max-width: 760px; margin: 0 auto; padding: 0 24px; }}
.nav {{ position: sticky; top: 0; z-index: 50; background: rgba(250,250,248,0.92); backdrop-filter: blur(6px); border-bottom: 1px solid var(--line); }}
.nav-inner {{ max-width: 960px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 12px 24px; }}
.nav-brand {{ display: flex; align-items: center; gap: 10px; }}
.nav-mark {{ font-family: var(--mono); font-weight: 700; font-size: 0.9rem; color: var(--ink); width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1.5px solid var(--ink); letter-spacing: -0.05em; }}
.nav-name {{ font-family: var(--body); font-weight: 600; font-size: 0.85rem; color: var(--ink); }}
.nav-sub {{ font-family: var(--mono); font-size: 0.58rem; color: var(--steel); letter-spacing: 0.1em; }}
.nav-cta {{ background: var(--red); color: #fff; font-family: var(--body); font-weight: 600; font-size: 0.78rem; padding: 8px 16px; }}
.hero {{ padding: 100px 24px 60px; }}
.eyebrow {{ font-family: var(--mono); color: var(--red); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; }}
h1 {{ font-family: var(--display); font-size: clamp(1.8rem, 4.5vw, 3rem); font-weight: 700; line-height: 1.1; color: var(--ink); margin-bottom: 20px; max-width: 18ch; }}
.lead {{ font-family: var(--body); font-size: 1.05rem; color: var(--steel); line-height: 1.7; max-width: 56ch; margin-bottom: 32px; }}
.price-tag {{ display: inline-block; font-family: var(--mono); font-size: 0.8rem; color: var(--red); border: 1px solid var(--line); padding: 8px 14px; margin-bottom: 32px; }}
h2 {{ font-family: var(--display); font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 700; color: var(--ink); margin: 48px 0 16px; }}
.features {{ list-style: none; padding: 0; margin: 0 0 32px; }}
.features li {{ padding: 14px 14px 14px 36px; position: relative; font-size: 0.92rem; color: var(--ink); border-bottom: 1px solid var(--line); line-height: 1.6; }}
.features li::before {{ content: "▸"; position: absolute; left: 12px; top: 14px; color: var(--red); font-weight: 700; }}
.body-text {{ font-size: 0.95rem; color: var(--steel); line-height: 1.75; max-width: 64ch; margin-bottom: 24px; }}
.cta-box {{ background: var(--ink); padding: 40px 32px; margin: 48px 0; text-align: center; }}
.cta-box h2 {{ color: #fff; margin: 0 0 12px; }}
.cta-box p {{ color: rgba(255,255,255,0.8); margin-bottom: 20px; font-size: 0.95rem; }}
.cta-btn {{ display: inline-flex; align-items: center; gap: 8px; background: var(--red); color: #fff; font-family: var(--body); font-weight: 600; font-size: 0.9rem; padding: 12px 24px; }}
.faq {{ margin: 48px 0; }}
.faq-item {{ border: 1px solid var(--line); background: var(--panel); padding: 20px; margin-bottom: 12px; }}
.faq-item h3 {{ font-family: var(--body); font-size: 1rem; font-weight: 600; color: var(--ink); margin-bottom: 8px; }}
.faq-item p {{ font-size: 0.88rem; color: var(--steel); line-height: 1.6; }}
.faq-schema {{ display: none; }}
.about-city {{ background: var(--panel); padding: 32px; margin: 32px 0; }}
.about-city p {{ font-size: 0.92rem; color: var(--steel); line-height: 1.7; }}
footer {{ background: var(--ink); padding: 32px 24px; text-align: center; }}
footer p {{ font-family: var(--mono); color: #8A8A8A; font-size: 0.72rem; }}
footer a {{ color: #8A8A8A; }}
.links {{ display: flex; gap: 20px; justify-content: center; margin-bottom: 12px; }}
.links a {{ font-family: var(--mono); color: #8A8A8A; font-size: 0.72rem; }}
@media (max-width: 640px) {{ .wrap {{ padding: 0 16px; }} .hero {{ padding: 80px 16px 40px; }} }}
</style>
</head>
<body>

<nav class="nav">
  <div class="nav-inner">
    <a href="https://calebpierre.com/" class="nav-brand">
      <span class="nav-mark">CP</span>
      <div>
        <div class="nav-name">Caleb Pierre</div>
        <div class="nav-sub">REMOTE SYSTEMS AGENCY</div>
      </div>
    </a>
    <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="nav-cta">Book a Call</a>
  </div>
</nav>

<div class="wrap">
  <section class="hero">
    <p class="eyebrow">{service_name} · {city_name}, CA</p>
    <h1>{title}</h1>
    <p class="lead">{desc} Based in Los Angeles County, serving {city_name} and all of LA.</p>
    <span class="price-tag">{price}</span>
  </section>

  <section>
    <h2>What's Included</h2>
    <ul class="features">
{features_html}
    </ul>
  </section>

  <section>
    <h2>The Difference</h2>
    <p class="body-text">{body_extra}</p>
  </section>

  <div class="about-city">
    <p>{city_name} is {city_desc}, located in {county} with a population of approximately {pop}. Caleb Pierre serves {city_name} and all of Los Angeles County with AI agent development, cybersecurity, and business automation services.</p>
  </div>

  <div class="cta-box">
    <h2>Ready to deploy in {city_name}?</h2>
    <p>Get a free 30-minute systems audit. No obligation, no pitch — just a straight answer.</p>
    <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="cta-btn">Book Your Free Audit →</a>
  </div>

  <section class="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-item">
      <h3>Do you work with businesses in {city_name} specifically?</h3>
      <p>Yes. Caleb Pierre is based in Los Angeles County and {city_name} is within our primary service area. We offer on-site visits for initial audits and can deploy systems remotely.</p>
    </div>
    <div class="faq-item">
      <h3>How much does {service_name_lower} cost in {city_name}?</h3>
      <p>Our {service_name} {price}. We offer a free 30-minute systems audit first to determine if our services are the right fit for your business.</p>
    </div>
    <div class="faq-item">
      <h3>What makes Caleb Pierre different from other agencies in {city_name}?</h3>
      <p>Caleb Pierre is not an agency — he's a forward-deployed engineer with 10 years of enterprise security and AI experience. He builds the systems himself, ships documentation, and hands you the source code. No black boxes.</p>
    </div>
    <div class="faq-item">
      <h3>How fast can you deploy in {city_name}?</h3>
      <p>From audit to deployment in 30 days. AI agents go live in week 1. Security assessments complete in week 2. Full system documentation and handover by day 30.</p>
    </div>
  </section>
</div>

<footer>
  <div class="links">
    <a href="https://calebpierre.com/">Home</a>
    <a href="https://calebpierre.com/resume.html">Resume</a>
    <a href="https://calebpierre.com/llms.txt">llms.txt</a>
    <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener">LinkedIn</a>
  </div>
  <p>CALEB PIERRE · LOS ANGELES · REMOTE-FIRST · © {year}</p>
</footer>

</body>
</html>"""

# ============ ARTICLE TEMPLATE ============
ARTICLE_TEMPLATE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{article_title} | Caleb Pierre</title>
<meta name="description" content="{article_desc}">
<meta name="keywords" content="{article_keywords}">
<meta name="author" content="Caleb Pierre">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{canonical_url}">
<meta property="og:type" content="article">
<meta property="og:title" content="{article_title} | Caleb Pierre">
<meta property="og:description" content="{article_desc}">
<meta property="og:url" content="{canonical_url}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{article_title} | Caleb Pierre">
<meta name="twitter:description" content="{article_desc}">
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{article_title}",
  "description": "{article_desc}",
  "author": {{ "@type": "Person", "name": "Caleb Pierre", "sameAs": "https://linkedin.com/in/calebpierre" }},
  "publisher": {{ "@type": "Organization", "name": "Caleb Pierre Ventures" }},
  "datePublished": "{date_published}",
  "dateModified": "{date_published}"
}}
</script>
<style>
*,*::before,*::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
:root {{
  --paper: #FAFAF8; --panel: #F1F0EA; --ink: #0B0B0B; --red: #E10600;
  --steel: #5C5C5C; --line: rgba(11,11,11,0.14);
  --display: 'Space Grotesk', system-ui, sans-serif;
  --body: 'IBM Plex Sans', system-ui, sans-serif;
  --mono: 'IBM Plex Mono', ui-monospace, monospace;
}}
html {{ scroll-behavior: smooth; }}
body {{ font-family: var(--body); background: var(--paper); color: var(--ink); line-height: 1.75; }}
a {{ color: inherit; text-decoration: none; }}
.wrap {{ max-width: 720px; margin: 0 auto; padding: 0 24px; }}
.nav {{ position: sticky; top: 0; z-index: 50; background: rgba(250,250,248,0.92); backdrop-filter: blur(6px); border-bottom: 1px solid var(--line); }}
.nav-inner {{ max-width: 960px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 12px 24px; }}
.nav-brand {{ display: flex; align-items: center; gap: 10px; }}
.nav-mark {{ font-family: var(--mono); font-weight: 700; font-size: 0.9rem; color: var(--ink); width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1.5px solid var(--ink); letter-spacing: -0.05em; }}
.nav-name {{ font-family: var(--body); font-weight: 600; font-size: 0.85rem; color: var(--ink); }}
.nav-sub {{ font-family: var(--mono); font-size: 0.58rem; color: var(--steel); letter-spacing: 0.1em; }}
.nav-cta {{ background: var(--red); color: #fff; font-family: var(--body); font-weight: 600; font-size: 0.78rem; padding: 8px 16px; }}
.hero {{ padding: 100px 24px 40px; }}
.eyebrow {{ font-family: var(--mono); color: var(--red); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; }}
h1 {{ font-family: var(--display); font-size: clamp(1.6rem, 4vw, 2.6rem); font-weight: 700; line-height: 1.15; color: var(--ink); margin-bottom: 16px; }}
.meta {{ font-family: var(--mono); font-size: 0.72rem; color: var(--steel); margin-bottom: 32px; }}
h2 {{ font-family: var(--display); font-size: 1.5rem; font-weight: 700; color: var(--ink); margin: 40px 0 12px; }}
h3 {{ font-family: var(--display); font-size: 1.15rem; font-weight: 600; color: var(--ink); margin: 28px 0 10px; }}
p {{ font-size: 1rem; color: var(--steel); line-height: 1.8; margin-bottom: 16px; }}
ul, ol {{ padding-left: 24px; margin-bottom: 20px; }}
li {{ font-size: 0.95rem; color: var(--steel); line-height: 1.7; margin-bottom: 8px; }}
strong {{ color: var(--ink); font-weight: 600; }}
blockquote {{ border-left: 3px solid var(--red); padding-left: 20px; margin: 24px 0; font-style: italic; color: var(--steel); }}
.cta-box {{ background: var(--ink); padding: 40px 32px; margin: 48px 0; text-align: center; }}
.cta-box h2 {{ color: #fff; margin: 0 0 12px; }}
.cta-box p {{ color: rgba(255,255,255,0.8); margin-bottom: 20px; font-size: 0.95rem; }}
.cta-btn {{ display: inline-flex; align-items: center; gap: 8px; background: var(--red); color: #fff; font-family: var(--body); font-weight: 600; font-size: 0.9rem; padding: 12px 24px; }}
footer {{ background: var(--ink); padding: 32px 24px; text-align: center; }}
footer p {{ font-family: var(--mono); color: #8A8A8A; font-size: 0.72rem; }}
.links {{ display: flex; gap: 20px; justify-content: center; margin-bottom: 12px; }}
.links a {{ font-family: var(--mono); color: #8A8A8A; font-size: 0.72rem; }}
@media (max-width: 640px) {{ .wrap {{ padding: 0 16px; }} .hero {{ padding: 80px 16px 32px; }} }}
</style>
</head>
<body>

<nav class="nav">
  <div class="nav-inner">
    <a href="https://calebpierre.com/" class="nav-brand">
      <span class="nav-mark">CP</span>
      <div>
        <div class="nav-name">Caleb Pierre</div>
        <div class="nav-sub">REMOTE SYSTEMS AGENCY</div>
      </div>
    </a>
    <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="nav-cta">Book a Call</a>
  </div>
</nav>

<div class="wrap">
  <article class="hero">
    <p class="eyebrow">{article_category}</p>
    <h1>{article_title}</h1>
    <p class="meta">By Caleb Pierre · {date_published} · Los Angeles, CA</p>
  </article>

  {article_body}

  <div class="cta-box">
    <h2>Want this for your business?</h2>
    <p>Book a free 30-minute systems audit. I'll take real notes and hand you a written game plan.</p>
    <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="cta-btn">Book Your Free Audit →</a>
  </div>
</div>

<footer>
  <div class="links">
    <a href="https://calebpierre.com/">Home</a>
    <a href="https://calebpierre.com/resume.html">Resume</a>
    <a href="https://calebpierre.com/llms.txt">llms.txt</a>
    <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener">LinkedIn</a>
  </div>
  <p>CALEB PIERRE · LOS ANGELES · REMOTE-FIRST · © {year}</p>
</footer>

</body>
</html>"""

# ============ ARTICLES ============
ARTICLES = [
    {
        "slug": "ai-agents-los-angeles.html",
        "title": "How AI Agents Are Transforming Los Angeles Businesses",
        "desc": "A practical guide to deploying AI agents for LA businesses — from LLM orchestration to RAG pipelines to MCP integration. Built by a Los Angeles AI engineer.",
        "keywords": "AI agents Los Angeles, AI automation LA, LLM orchestration, AI engineer Los Angeles, business automation AI",
        "category": "AI & Automation",
        "date": "2026-07-10",
        "body": """
<h2>Most LA businesses are doing AI wrong</h2>
<p>Everyone in Los Angeles is talking about AI. Very few are actually deploying it. Most businesses are either playing with ChatGPT and calling it "AI integration," or they're paralyzed by the complexity and doing nothing.</p>
<p>The businesses winning right now aren't the ones with the most advanced AI — they're the ones who deployed <strong>simple, targeted AI agents</strong> that eliminated specific manual workflows. An AI agent that handles after-hours calls. An agent that qualifies leads and books appointments. An agent that monitors your systems and alerts you before something breaks.</p>

<h2>What an AI agent actually is (and isn't)</h2>
<p>An AI agent is not a chatbot. A chatbot answers questions. An AI agent <strong>does work</strong>. It reads your CRM, makes decisions, takes actions, and logs what it did. It connects to your business systems through APIs and operates autonomously on a schedule or in response to triggers.</p>
<p>The stack I deploy for Los Angeles businesses typically includes:</p>
<ul>
  <li><strong>LLM Orchestration</strong> — routing between GPT-4, Claude, and local models based on cost and capability</li>
  <li><strong>RAG Pipelines</strong> — connecting your business data (documents, CRM, knowledge base) to the LLM so it answers from your context, not generic internet data</li>
  <li><strong>MCP Integration</strong> — Model Context Protocol servers that let the agent read from and write to your business systems</li>
  <li><strong>Multi-Agent Workflows</strong> — specialized agents that propose, validate, execute, and log — with guardrails</li>
  <li><strong>Deployment</strong> — Docker on AWS/GCP with CI/CD, full documentation, source code handover</li>
</ul>

<h2>Real deployment: Los Angeles nonprofit</h2>
<p>For a nonprofit serving justice-impacted individuals in Gardena, CA, I deployed an AI system that eliminated 40-60% of manual overhead. The system handles intake automation, case management data entry, and knowledge base queries — all documented, all auditable.</p>
<blockquote>The question isn't "can AI help your business?" It's "which manual workflow is costing you the most, and can an agent do it for $200/month instead of a $60k/year hire?"</blockquote>

<h2>The Los Angeles advantage</h2>
<p>LA is uniquely positioned for AI adoption. You have:</p>
<ol>
  <li><strong>Dense business networks</strong> — from Santa Monica tech to DTLA finance to South Bay manufacturing, there's a concentration of businesses that can benefit from AI automation</li>
  <li><strong>Talent proximity</strong> — but you don't need to hire an AI team. You need one engineer who can deploy and hand over the system</li>
  <li><strong>Competitive pressure</strong> — your competitors are already looking at AI. The window to be early is closing</li>
</ol>

<h2>What to do next</h2>
<p>If you're a Los Angeles business owner wondering whether AI agents make sense for you, the answer is almost always yes — but the right first step isn't buying a tool. It's getting a systems audit that identifies which workflows are actually worth automating.</p>
<p>I offer a free 30-minute audit for LA businesses. I take real notes, look at your actual systems, and hand you a written game plan. No pitch, no black box — just a straight answer about where AI fits in your business.</p>
""",
    },
    {
        "slug": "cybersecurity-los-angeles.html",
        "title": "Cybersecurity for Los Angeles Businesses: What Actually Matters",
        "desc": "A practical cybersecurity guide for LA businesses from a former Tinder Security Engineer. SOAR, SIEM, HIPAA compliance, Zero Trust, and what to do before you get breached.",
        "keywords": "cybersecurity Los Angeles, HIPAA compliance LA, security engineer Los Angeles, SIEM SOAR, zero trust architecture LA",
        "category": "Security Engineering",
        "date": "2026-07-10",
        "body": """
<h2>Most LA businesses have a security hole they don't know about</h2>
<p>I spent two years as Security Engineer II at Tinder in West Hollywood. Before that, I managed bug bounty programs at Verizon Media, ran HIPAA compliance at Children's Hospital Los Angeles, and did vulnerability remediation across 5,000+ assets at UCLA Health. I've seen what happens when security is an afterthought — and when it's built in from day one.</p>
<p>Here's the truth most Los Angeles businesses don't want to hear: <strong>you're probably one bad day away from a breach, and you don't know where the hole is.</strong></p>

<h2>The 5 things that actually matter</h2>
<p>Forget the jargon. Here's what I check first when I audit a Los Angeles business:</p>

<h3>1. Access control</h3>
<p>Who has access to what? Most businesses have no idea. Former employees still have access. Shared passwords. Admin rights handed out like candy. <strong>Zero Trust Architecture</strong> means verifying every access request, every time — not trusting someone because they're "inside the network."</p>

<h3>2. Visibility (SIEM)</h3>
<p>If you're not logging and monitoring, you can't detect a breach until it's too late. I deploy Splunk SIEM with custom detection rules so you see threats in real time, not three months later in a news article.</p>

<h3>3. Automated response (SOAR)</h3>
<p>At Tinder, I built SOAR playbooks that automated threat detection and incident response end-to-end. When a threat is detected, the system responds automatically — isolating the asset, blocking the IP, alerting the team. <strong>Increased SOC efficiency by 50%.</strong></p>

<h3>4. Compliance (HIPAA)</h3>
<p>If you're a healthcare business in Los Angeles — a dental office, a clinic, a therapy practice — HIPAA compliance isn't optional. I've maintained 100% HIPAA audit compliance at Children's Hospital Los Angeles through precision SIEM tuning. The fines for non-compliance can destroy a practice.</p>

<h3>5. Vulnerability management</h3>
<p>You can't fix what you don't know about. I use Rapid7 and Tenable to find every hole in your environment, then prioritize remediation by risk level. At UCLA Health, I executed vulnerability remediation across 5,000+ assets ensuring HIPAA compliance across critical healthcare infrastructure.</p>

<h2>The LA healthcare problem</h2>
<p>Los Angeles has one of the highest concentrations of healthcare businesses in the country. From small dental practices in Torrance to therapy offices in Santa Monica — most are not HIPAA compliant and don't know it. The gap between "we have a privacy policy" and "we actually pass a HIPAA audit" is enormous.</p>
<blockquote>A system you can't audit isn't a system you can trust. That's the whole reason I do security the way I do — documented, verifiable, and built for the real world.</blockquote>

<h2>What to do before you get breached</h2>
<p>Don't wait for a breach to take security seriously. I offer a free 30-minute security assessment for Los Angeles businesses. I'll look at your environment, identify the biggest holes, and give you a written remediation plan. No scare tactics — just a straight answer about what's exposed and what to fix first.</p>
""",
    },
    {
        "slug": "business-automation-los-angeles.html",
        "title": "Business Automation in Los Angeles: Stop Paying Humans to Do a Machine's Job",
        "desc": "A practical guide to business automation for LA companies — Zapier, n8n, Python agents, and how to identify which workflows to automate first.",
        "keywords": "business automation Los Angeles, Zapier automation LA, n8n Los Angeles, workflow automation LA, Python automation",
        "category": "Business Automation",
        "date": "2026-07-10",
        "body": """
<h2>Your team is doing work that a machine should be doing</h2>
<p>Every Los Angeles business has at least one workflow that's eating hours of human time every week — and could be automated for $200/month. Data entry. Copy-pasting between systems. Manually sending the same emails. Updating spreadsheets that nobody reads. Triaging the same support tickets over and over.</p>
<p>This isn't about replacing people. It's about <strong>freeing your team to do the work that actually requires a human</strong> — while the machines handle the repetitive stuff.</p>

<h2>The automation stack I deploy in LA</h2>
<p>Every business is different, but the tools are the same. Here's what I use:</p>

<h3>Zapier — the gateway drug</h3>
<p>Zapier is the fastest way to connect your tools. If you're in Los Angeles and you're not using Zapier to connect your CRM, email, and calendar, you're losing hours every week. At Union Rescue Mission, I deployed Zapier-driven pipelines connecting CRM, email, and social channels via REST API orchestration — <strong>reducing manual workload by 40%</strong>.</p>

<h3>n8n — when you need more control</h3>
<p>n8n is open-source and self-hostable. When Zapier gets too expensive or you need complex branching logic, n8n is the answer. I deploy n8n on Docker for LA businesses that have outgrown Zapier's pricing model.</p>

<h3>Python agents — when you need real intelligence</h3>
<p>Sometimes you need more than "if this then that." You need a system that reads a document, understands it, makes a decision, and takes action. That's where Python agents come in — combined with LLMs, they can handle complex workflows that no-code tools can't touch.</p>

<h3>Make.com — the visual middle ground</h3>
<p>Make (formerly Integromat) sits between Zapier and n8n. Visual, powerful, and good for businesses that want more than Zapier but don't need self-hosting.</p>

<h2>How to identify what to automate first</h2>
<p>Don't automate everything at once. Start with the workflow that:</p>
<ol>
  <li><strong>Happens every day</strong> — frequency × time = impact</li>
  <li><strong>Follows a predictable pattern</strong> — if a human has to make a judgment call every time, it's harder to automate</li>
  <li><strong>Touches multiple systems</strong> — the more tools involved, the more time automation saves</li>
  <li><strong>Has clear inputs and outputs</strong> — you know what goes in and what should come out</li>
</ol>
<p>The best candidates are usually: intake forms, lead qualification, appointment scheduling, data sync between CRM and accounting, report generation, and notification routing.</p>

<h2>Real deployment: Gardena nonprofit</h2>
<p>As IT Director for a nonprofit in Gardena, CA, I automated administrative and case management workflows that eliminated manual data entry across the organization. The result: staff got hours back every week, every process became auditable and repeatable, and the organization could scale without hiring more admin staff.</p>
<blockquote>The best automation isn't the most complex one — it's the one that saves the most hours for the least cost and never breaks.</blockquote>

<h2>What to do next</h2>
<p>If you're running a Los Angeles business and you suspect you're paying humans to do a machine's job, you're probably right. I offer a free 30-minute systems audit where I'll look at your workflows and tell you exactly which ones are worth automating first. No pitch — just a straight answer and a written game plan.</p>
""",
    },
]


def generate_service_pages(output_dir: str = "public"):
    """Generate city × service landing pages."""
    out = Path(output_dir)
    out.mkdir(exist_ok=True)
    pages = []

    for city in CITIES:
        city_dir = out / city["slug"]
        city_dir.mkdir(exist_ok=True)

        for svc in SERVICES:
            title = svc["title"].format(city=city["name"])
            desc = svc["desc"].format(city=city["name"])
            keywords_str = ", ".join([k.format(city=city["name"]) for k in svc["keywords"]])
            features_html = "\n".join(f"      <li>{f}</li>" for f in svc["features"])
            canonical = f"{BASE_URL}/{city['slug']}/{svc['slug']}"

            price = svc["price"]
            price_clean = price.replace("Starting at $", "").replace(",", "").strip()

            html = PAGE_TEMPLATE.format(
                title=title,
                desc=desc,
                keywords_str=keywords_str,
                canonical_url=canonical,
                city_slug=city["slug"],
                service_slug=svc["slug"],
                city_name=city["name"],
                city_desc=city["desc"],
                zip=city["zip"],
                county=city["county"],
                pop=city["pop"],
                service_name=svc["name"],
                service_name_lower=svc["name"].lower(),
                features_html=features_html,
                body_extra=svc["body_extra"],
                price=price,
                price_clean=price_clean,
                year=datetime.now().year,
            )

            file_path = city_dir / f"{svc['slug']}.html"
            file_path.write_text(html, encoding="utf-8")

            pages.append({"url": canonical, "city": city["name"], "service": svc["name"], "file": str(file_path)})

    return pages


def generate_articles(output_dir: str = "public/articles"):
    """Generate long-form article pages."""
    out = Path(output_dir)
    out.mkdir(exist_ok=True)
    pages = []

    for art in ARTICLES:
        canonical = f"{BASE_URL}/articles/{art['slug']}"
        html = ARTICLE_TEMPLATE.format(
            article_title=art["title"],
            article_desc=art["desc"],
            article_keywords=art["keywords"],
            article_category=art["category"],
            article_body=art["body"],
            canonical_url=canonical,
            date_published=art["date"],
            year=datetime.now().year,
        )

        file_path = out / art["slug"]
        file_path.write_text(html, encoding="utf-8")

        pages.append({"url": canonical, "title": art["title"], "file": str(file_path)})

    return pages


def generate_sitemap(service_pages, article_pages, output_file="public/sitemap.xml"):
    """Generate XML sitemap from all pages."""
    urls = []
    urls.append(f"""  <url>
    <loc>{BASE_URL}/</loc>
    <lastmod>{NOW}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>""")
    urls.append(f"""  <url>
    <loc>{BASE_URL}/resume.html</loc>
    <lastmod>{NOW}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>""")

    for p in service_pages:
        urls.append(f"""  <url>
    <loc>{p['url']}</loc>
    <lastmod>{NOW}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>""")

    for p in article_pages:
        urls.append(f"""  <url>
    <loc>{p['url']}</loc>
    <lastmod>{NOW}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>""")

    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>"""

    Path(output_file).write_text(xml, encoding="utf-8")


if __name__ == "__main__":
    service_pages = generate_service_pages()
    print(f"✓ Generated {len(service_pages)} city × service pages")

    article_pages = generate_articles()
    print(f"✓ Generated {len(article_pages)} article pages")

    generate_sitemap(service_pages, article_pages)
    total = len(service_pages) + len(article_pages) + 2
    print(f"✓ Generated sitemap.xml ({total} URLs)")

    print(f"\nSample service pages:")
    for p in service_pages[:5]:
        print(f"  {p['url']}")
    print(f"  ... and {len(service_pages) - 5} more")

    print(f"\nArticles:")
    for p in article_pages:
        print(f"  {p['url']}")
