#!/usr/bin/env python3
"""
SEO Page Generator for calebpierre.com
Generates city × service landing pages + article pages optimized for
traditional search (Google) and AI crawlers (GPTBot, ClaudeBot, PerplexityBot).

All copy is written in the Eugene Schwartz direct-psychological style:
  - Frustration-to-relief framing
  - Outcomes instead of feature lists
  - No-bullshit FAQ tone
  - Provocation → proof → call to action

Design tokens match the calebpierre.com brand — the business card's own
white / black / red palette:
  paper: #FAFAFA, ink: #0A0A0A, red: #E8382D, steel: #6B6B6B
  Fonts: Inter (display + body), JetBrains Mono (mono/labels)

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

# ============ SERVICES (Schwartz-style: outcomes, not features) ============
# Order matches the business card: Web Design, AI Programming, Business
# Automation, Content Marketing, Remote Tech Support, Experience/Event
# Design — cybersecurity appended as the blended-in 7th offering.
SERVICES = [
    {
        "slug": "web-design",
        "name": "Web Design",
        "title": "Web Design in {city}, CA",
        "desc": "Your {city} website was built once and forgotten. A site that actually converts — fast, clean, and built to bring in leads while you sleep.",
        "keywords": ["web design {city}", "web designer {city} CA", "website redesign {city}", "Next.js developer {city}"],
        "price": "Starting at $2,500",
        "features": [
            "A site built to convert, not just to look nice — every page has one job and it does that job",
            "Next.js, React, Tailwind — fast load times that don't punish you in Google's rankings",
            "You can update it yourself — no calling a developer every time a price or photo changes",
            "Deployed on AWS/GCP with Docker, CI/CD via GitHub Actions — the same infrastructure enterprises run on",
            "Mobile-first, because most of your {city} customers are finding you on a phone",
            "SEO built in from day one — structured data, sitemaps, and clean markup, not bolted on later",
        ],
        "body_extra": "Caleb Pierre has taken sites from zero to launch and from stale to rebuilt — a full brand-and-store overhaul for Eden's Candy, and an end-to-end greenfield Shopify build for Hummingbyrd Apparel & Print, product architecture through print-on-demand integration. Both live, both built by one person, both handed over with documentation the owner can actually read. A website isn't a brochure. It's the first employee your business hires that never sleeps — it should be built like it.",
    },
    {
        "slug": "ai-programming",
        "name": "AI Programming",
        "title": "AI Programming in {city}, CA",
        "desc": "Your {city} business is hemorrhaging hours on work a machine should be doing. AI agents that take over the grunt work — and give you 40-60% of your team's time back.",
        "keywords": ["AI programming {city}", "ai agent development {city}", "ai engineer {city}", "LLM orchestration {city}", "AI automation {city} CA"],
        "price": "Starting at $3,000",
        "features": [
            "Stop paying humans to copy-paste between systems — agents handle intake, routing, and data entry autonomously",
            "Answers from your data, not the internet — RAG pipelines ground every response in your own documents and CRM",
            "One agent proposes, another validates, a third executes — guardrails built in so nothing goes out the door unchecked",
            "Your systems talk to each other — MCP integration connects AI to your existing tools without ripping anything out",
            "Runs on your cloud, your terms — AWS or GCP with Docker, no vendor lock-in, no black box",
            "Source code and documentation that a human can actually read — you own it, you understand it, you control it",
        ],
        "body_extra": "Most {city} businesses don't have an AI problem. They have a manual-work problem dressed up as a software problem. Caleb Pierre has walked into nonprofit and enterprise environments across LA County and watched the same pattern: people doing the same task 40 times a day, billing for it, and calling it a job. The AI systems he programs don't replace your team — they take the robotic work off their plates so your team can do the work that actually requires a human. Every system ships with documentation you can read and source code you own. No black boxes. No subscription hostage situations.",
    },
    {
        "slug": "business-automation",
        "name": "Business Automation",
        "title": "Business Automation in {city}, CA",
        "desc": "Your {city} team is doing work a machine should be doing. Automation that eliminates the repetitive tasks eating your week — and frees your people for work that matters.",
        "keywords": ["business automation {city}", "Zapier automation {city}", "n8n {city}", "workflow automation {city} CA"],
        "price": "Starting at $2,000",
        "features": [
            "Stop paying humans to move data between systems — automated pipelines sync your CRM, email, and tools without a single copy-paste",
            "Complex workflows handled by Python agents — not just 'if this then that,' but systems that read, decide, and act",
            "Your tools connected into one self-operating system — no more switching between 8 tabs to complete one task",
            "Every process documented and repeatable — when someone asks 'how does this work,' the answer is written down",
            "Scale without adding headcount — the automation handles the volume, your team handles the judgment calls",
            "Workflows you can audit end-to-end — every step logged, every action traceable, nothing happening in the dark",
        ],
        "body_extra": "At Union Rescue Mission in Los Angeles, Caleb deployed automation pipelines that gave staff 40% of their week back. As IT Director for a nonprofit in Gardena, he eliminated manual data entry across the entire organization — not by replacing people, but by removing the robotic work that was burning them out. The result: staff got hours back, every process became auditable, and the organization scaled without adding admin overhead. That's what automation looks like when it's done right.",
    },
    {
        "slug": "content-marketing",
        "name": "Content Marketing",
        "title": "Content Marketing in {city}, CA",
        "desc": "Your {city} business publishes when someone remembers to. Content systems that compound — SEO, social, and email that keep working long after you hit publish.",
        "keywords": ["content marketing {city}", "SEO {city} CA", "content strategy {city}", "programmatic SEO {city}"],
        "price": "Starting at $1,200/mo",
        "features": [
            "Content built to rank, not just to exist — keyword research and structure done before a word is written",
            "Programmatic landing pages that cover every service and every city you actually serve",
            "AI-crawler-friendly llms.txt and structured data — found by ChatGPT and Perplexity, not just Google",
            "A publishing calendar you don't have to remember — content ships on schedule, whether you're busy or not",
            "Email and social repurposed from the same core content — one asset, five distribution channels",
            "Real analytics, not vanity metrics — you see which pieces bring in leads, not just traffic",
        ],
        "body_extra": "This site is the proof. Every one of these city-and-service pages, every article, every piece of structured data — built with the same programmatic content system Caleb Pierre installs for clients. It's not a blog that gets forgotten after month two. It's an asset that compounds: more pages, more coverage, more of your {city} market finding you before they find a competitor.",
    },
    {
        "slug": "remote-tech-support",
        "name": "Remote Tech Support",
        "title": "Remote Tech Support in {city}, CA",
        "desc": "Your {city} business calls a help desk and gets a ticket number. A real engineer on call instead — someone who answers the phone and actually fixes it.",
        "keywords": ["remote tech support {city}", "IT support {city} CA", "managed IT {city}", "on-call engineer {city}"],
        "price": "Starting at $500/mo",
        "features": [
            "A real engineer answers — not a ticket queue, not a script, not a three-day wait for tier 2",
            "Same person every time — no re-explaining your setup to a new rep on every call",
            "Proactive monitoring, not just reactive fixes — problems get caught before they become outages",
            "Remote-first, on-site when it matters — most issues resolved without anyone driving anywhere",
            "Documentation left behind after every fix — your next hire won't be starting from zero",
            "Flat monthly pricing — no surprise invoice for the call you were afraid to make",
        ],
        "body_extra": "As IT Director for a nonprofit in Gardena, Caleb Pierre didn't run a help desk — he owned the entire technical environment, personally, and was reachable when something broke. That's the model: one engineer who knows your systems, answers when you call, and fixes the actual problem instead of closing the ticket. For {city} businesses tired of outsourced support that never remembers who they are, this is the alternative.",
    },
    {
        "slug": "event-design",
        "name": "Experience / Event Design",
        "title": "Experience & Event Design in {city}, CA",
        "desc": "Your {city} launch or activation needs more than decorations — it needs a system. Experiences designed and run end-to-end, not just styled.",
        "keywords": ["event design {city}", "experience design {city} CA", "product launch {city}", "brand activation {city}"],
        "price": "Starting at $2,000",
        "features": [
            "One person owning the whole experience — concept, logistics, run-of-show, and the tech behind it",
            "Digital and physical tied together — RSVP flows, check-in systems, and the room itself designed as one experience",
            "A real run-of-show document — every minute planned, every handoff assigned, nothing improvised on the day",
            "Vendor and timeline coordination handled — you show up to the event, not the spreadsheet",
            "Post-event data captured, not lost — attendee info flows into the same systems your business already runs on",
            "Built for the brand, not off a template — every activation looks like it belongs to your business, not a rental catalog",
        ],
        "body_extra": "Caleb Pierre's background isn't just engineering — it's building the full experience layer for brands that need a moment to land right, from digital identity work like the Eden's Candy relaunch to the live, real-time coordination behind OutsideTonight's nightlife event ingestion in LA. Experience design done well is systems work wearing a nicer outfit: the same rigor that keeps a server running keeps an event from falling apart at 8pm.",
    },
    {
        "slug": "cybersecurity",
        "name": "Cybersecurity",
        "title": "Cybersecurity Services in {city}, CA",
        "desc": "You're one bad day away from a breach and you don't know where the hole is. Enterprise-grade security for {city} businesses — find the gaps, close them, sleep at night.",
        "keywords": ["cybersecurity {city}", "cyber security {city} CA", "HIPAA compliance {city}", "security engineer {city}"],
        "price": "Starting at $1,500",
        "features": [
            "Threats detected and contained automatically — SOAR playbooks respond in seconds, not the three days it takes a human to read the alert",
            "Every access request verified, every time — Zero Trust means no one gets a free pass because they're 'inside the network'",
            "HIPAA audits you actually pass — not a checkbox exercise, real compliance that holds up when an auditor walks in",
            "Every hole in your environment found and prioritized — stop guessing what's vulnerable and start fixing what actually matters",
            "When something hits, you have a plan — incident response that's been rehearsed, not improvised in a panic",
            "External attackers handled before they reach you — bug bounty programs that surface vulnerabilities on your terms, not theirs",
        ],
        "body_extra": "Caleb Pierre spent two years as Security Engineer II at Tinder in West Hollywood. Before that, he ran bug bounty programs at Verizon Media, maintained 100% HIPAA compliance at Children's Hospital Los Angeles, and did vulnerability remediation across 5,000+ assets at UCLA Health. He's seen what happens when security is an afterthought — and when it's built in from day one. The difference is usually one bad day. He makes sure that bad day doesn't happen to you.",
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
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{service_name}",
  "provider": {{
    "@type": "ProfessionalService",
    "name": "Caleb Pierre — Business Automation Engineer",
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
      "name": "Do you actually work with businesses in {city_name}, or is that just SEO?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "No, it's not just SEO. Caleb Pierre is based in LA County and {city_name} is in the primary service area. On-site for audits, remote for deployment. You're not getting a call center — you're getting the engineer who builds the system."
      }}
    }},
    {{
      "@type": "Question",
      "name": "How much does {service_name_lower} cost in {city_name}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "{service_name} {price}. But here's the honest part: not every business needs this. That's why there's a free 30-minute systems audit first. If you don't need it, you'll be told. If you do, you'll know exactly what you're paying for."
      }}
    }},
    {{
      "@type": "Question",
      "name": "What makes Caleb Pierre different from every other agency in {city_name}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Caleb Pierre is not an agency. He's the engineer who builds the system, writes the documentation, and hands you the source code. No account managers, no offshore teams, no black boxes. The person you talk to is the person who builds it."
      }}
    }},
    {{
      "@type": "Question",
      "name": "How fast can you deploy in {city_name}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Audit to deployment in 30 days. AI systems live in week 1. Security assessments done in week 2. Full documentation and source code handover by day 30. If anyone tells you faster, ask them what they're skipping."
      }}
    }}
  ]
}}
</script>
<style>
*,*::before,*::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
:root {{
  --paper: #FAFAFA; --panel: #F0F0F0; --ink: #0A0A0A; --red: #E8382D;
  --steel: #6B6B6B; --line: #D9D9D9; --lineDark: rgba(255,255,255,0.15);
  --display: 'Inter', system-ui, sans-serif;
  --body: 'Inter', system-ui, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, monospace;
}}
html {{ scroll-behavior: smooth; }}
body {{ font-family: var(--body); background: var(--paper); color: var(--ink); line-height: 1.65; }}
a {{ color: inherit; text-decoration: none; }}
.wrap {{ max-width: 760px; margin: 0 auto; padding: 0 24px; }}
.nav {{ position: sticky; top: 0; z-index: 50; background: rgba(250,250,250,0.94); backdrop-filter: blur(6px); border-bottom: 2px solid var(--ink); }}
.nav-inner {{ max-width: 1080px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 12px 1rem; }}
.nav-brand {{ display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }}
.nav-mark {{ font-family: var(--mono); font-weight: 700; font-size: 0.9rem; color: var(--ink); width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 2px solid var(--ink); letter-spacing: -0.05em; background: #fff; }}
.nav-name {{ font-family: var(--body); font-weight: 700; font-size: 0.85rem; color: var(--ink); }}
.nav-sub {{ font-family: var(--mono); font-size: 0.58rem; color: var(--steel); letter-spacing: 0.1em; }}
.nav-desktop {{ display: flex; align-items: center; gap: 20px; }}
.nav-dropdown {{ position: relative; }}
.nav-drop-btn {{ font-family: var(--mono); font-size: 0.75rem; color: var(--steel); background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; padding: 8px 4px; transition: color 0.15s; letter-spacing: 0.04em; }}
.nav-drop-btn:hover {{ color: var(--ink); }}
.nav-drop-btn .chev {{ transition: transform 0.25s; font-size: 10px; }}
.nav-drop-btn.open .chev {{ transform: rotate(180deg); }}
.nav-flyout {{ position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%); background: #fff; border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); z-index: 100; min-width: 240px; padding: 8px 0; display: none; }}
.nav-flyout.open {{ display: block; }}
.nav-flyout-label {{ font-family: var(--mono); font-size: 0.6rem; color: var(--steel); letter-spacing: 0.12em; padding: 6px 16px 8px; margin: 0; }}
.nav-flyout a {{ display: block; padding: 9px 16px; font-family: var(--body); font-size: 0.82rem; font-weight: 600; color: var(--ink); text-decoration: none; border-left: 3px solid transparent; transition: all 0.12s; }}
.nav-flyout a:hover {{ background: #F6D9D6; border-left-color: var(--red); }}
.nav-cta {{ background: var(--red); color: #fff; font-family: var(--body); font-weight: 700; font-size: 0.78rem; padding: 8px 16px; box-shadow: 3px 3px 0 var(--ink); transition: all 0.15s; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }}
.nav-cta:hover {{ background: var(--ink); box-shadow: 4px 4px 0 var(--red); transform: translate(-1px,-1px); }}
.nav-mobile-btn {{ display: none; background: var(--red); border: 3px solid var(--ink); cursor: pointer; padding: 8px; box-shadow: 3px 3px 0 var(--ink); }}
.nav-mobile-btn span {{ color: #fff; font-family: var(--mono); font-size: 0.8rem; }}
.nav-mobile {{ display: none; position: fixed; top: 0; right: 0; bottom: 0; width: 100%; max-width: 420px; background: var(--ink); z-index: 49; overflow-y: auto; }}
.nav-mobile.open {{ display: block; }}
.nav-mobile-overlay {{ display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 48; }}
.nav-mobile-overlay.open {{ display: block; }}
.nav-mobile-header {{ display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 2px solid #1a1a1a; }}
.nav-mobile-header span {{ font-family: var(--mono); font-size: 0.65rem; color: #666; letter-spacing: 0.1em; }}
.nav-mobile-close {{ color: #fff; background: none; border: none; cursor: pointer; padding: 8px; font-size: 1.3rem; }}
.nav-mobile-section {{ border-bottom: 1px solid #1a1a1a; }}
.nav-mobile-section-btn {{ width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 16px 1.5rem; background: none; border: none; cursor: pointer; color: var(--red); font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }}
.nav-mobile-section-content {{ display: none; padding-bottom: 8px; }}
.nav-mobile-section-content.open {{ display: block; }}
.nav-mobile-section-content a {{ display: block; padding: 10px 1.5rem 10px 2rem; font-family: var(--body); font-size: 0.88rem; color: #fff; text-decoration: none; font-weight: 600; }}
.nav-mobile-cta {{ padding: 24px 1.5rem; }}
.nav-mobile-cta .nav-cta {{ width: 100%; justify-content: center; padding: 12px; font-size: 0.85rem; }}
.hero {{ padding: 100px 24px 60px; }}
.eyebrow {{ font-family: var(--mono); color: var(--red); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; font-weight: 600; }}
h1 {{ font-family: var(--display); font-size: clamp(1.8rem, 4.5vw, 3rem); font-weight: 900; line-height: 1.1; color: var(--ink); margin-bottom: 20px; max-width: 18ch; letter-spacing: -0.02em; }}
.lead {{ font-family: var(--body); font-size: 1.05rem; color: var(--steel); line-height: 1.7; max-width: 56ch; margin-bottom: 32px; }}
.price-tag {{ display: inline-block; font-family: var(--mono); font-size: 0.8rem; color: #fff; background: var(--ink); padding: 8px 14px; margin-bottom: 32px; }}
h2 {{ font-family: var(--display); font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; color: var(--ink); margin: 48px 0 16px; }}
.features {{ list-style: none; padding: 0; margin: 0 0 32px; }}
.features li {{ padding: 14px 14px 14px 36px; position: relative; font-size: 0.92rem; color: var(--ink); border-bottom: 1px solid var(--line); line-height: 1.6; }}
.features li::before {{ content: "\25b8"; position: absolute; left: 12px; top: 14px; color: var(--red); font-weight: 700; }}
.body-text {{ font-size: 0.95rem; color: var(--steel); line-height: 1.75; max-width: 64ch; margin-bottom: 24px; }}
.cta-box {{ background: var(--ink); padding: 40px 32px; margin: 48px 0; text-align: center; }}
.cta-box h2 {{ color: #fff; margin: 0 0 12px; }}
.cta-box p {{ color: rgba(255,255,255,0.75); margin-bottom: 20px; font-size: 0.95rem; }}
.cta-btn {{ display: inline-flex; align-items: center; gap: 8px; background: var(--red); color: #fff; font-family: var(--body); font-weight: 700; font-size: 0.9rem; padding: 12px 24px; }}
.faq {{ margin: 48px 0; }}
.faq-item {{ border: 1.5px solid var(--ink); background: #fff; padding: 20px; margin-bottom: 12px; }}
.faq-item h3 {{ font-family: var(--body); font-size: 1rem; font-weight: 700; color: var(--ink); margin-bottom: 8px; }}
.faq-item p {{ font-size: 0.88rem; color: var(--steel); line-height: 1.6; }}
.about-city {{ background: var(--panel); border: 1.5px solid var(--ink); padding: 32px; margin: 32px 0; }}
.about-city p {{ font-size: 0.92rem; color: var(--steel); line-height: 1.7; }}
.site-footer {{ background: var(--ink); border-top: 3px solid var(--red); padding: 48px 24px; }}
.footer-grid {{ max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-bottom: 32px; }}
.footer-col h4 {{ font-family: var(--mono); color: var(--red); font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px; font-weight: 700; }}
.footer-col a {{ display: block; font-family: var(--mono); color: #A8A8A8; font-size: 0.68rem; padding: 3px 0; line-height: 1.6; transition: color 0.15s; }}
.footer-col a:hover {{ color: var(--red); }}
.footer-seo {{ max-width: 960px; margin: 0 auto; border-top: 1px solid var(--lineDark); padding-top: 24px; margin-bottom: 24px; }}
.footer-seo p {{ font-family: var(--body); color: #8A8A8A; font-size: 0.76rem; line-height: 1.8; max-width: 72ch; }}
.footer-bottom {{ max-width: 960px; margin: 0 auto; border-top: 1px solid var(--lineDark); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }}
.footer-bottom p {{ font-family: var(--mono); color: #8A8A8A; font-size: 0.68rem; }}
.footer-bottom a {{ color: var(--red); }}
@media (max-width: 1024px) {{
  .nav-desktop {{ display: none; }}
  .nav-mobile-btn {{ display: flex; align-items: center; justify-content: center; }}
}}
@media (max-width: 640px) {{ .wrap {{ padding: 0 16px; }} .hero {{ padding: 80px 16px 40px; }} }}
</style>
</head>
<body>

<script>
function toggleNavMobile() {{
  document.getElementById('nav-mobile').classList.toggle('open');
  document.getElementById('nav-mobile-overlay').classList.toggle('open');
  document.body.style.overflow = document.getElementById('nav-mobile').classList.contains('open') ? 'hidden' : '';
}}
function closeNavMobile() {{
  document.getElementById('nav-mobile').classList.remove('open');
  document.getElementById('nav-mobile-overlay').classList.remove('open');
  document.body.style.overflow = '';
}}
function toggleDrop(id) {{
  var el = document.getElementById(id);
  var btn = document.getElementById(id + '-btn');
  var isOpen = el.classList.contains('open');
  // Close all
  document.querySelectorAll('.nav-flyout').forEach(f => f.classList.remove('open'));
  document.querySelectorAll('.nav-drop-btn').forEach(b => b.classList.remove('open'));
  if (!isOpen) {{ el.classList.add('open'); btn.classList.add('open'); }}
}}
function toggleMobileSection(id) {{
  document.getElementById(id).classList.toggle('open');
}}
// Close dropdowns on outside click
document.addEventListener('click', function(e) {{
  if (!e.target.closest('.nav-dropdown')) {{
    document.querySelectorAll('.nav-flyout').forEach(f => f.classList.remove('open'));
    document.querySelectorAll('.nav-drop-btn').forEach(b => b.classList.remove('open'));
  }}
}});
</script>

<nav class="nav">
  <div class="nav-inner">
    <a href="{base_url}/" class="nav-brand">
      <span class="nav-mark">CP</span>
      <div>
        <div class="nav-name">Caleb Pierre</div>
        <div class="nav-sub">BUSINESS AUTOMATION ENGINEER</div>
      </div>
    </a>
    <div class="nav-desktop">
      <div class="nav-dropdown">
        <button class="nav-drop-btn" id="drop-services-btn" onclick="toggleDrop('drop-services')">Services <span class="chev">&#9660;</span></button>
        <div class="nav-flyout" id="drop-services">
          <p class="nav-flyout-label">SERVICES</p>
          <a href="{base_url}/los-angeles/web-design.html">Web Design</a>
          <a href="{base_url}/los-angeles/ai-programming.html">AI Programming</a>
          <a href="{base_url}/los-angeles/business-automation.html">Business Automation</a>
          <a href="{base_url}/los-angeles/content-marketing.html">Content Marketing</a>
          <a href="{base_url}/los-angeles/remote-tech-support.html">Remote Tech Support</a>
          <a href="{base_url}/los-angeles/event-design.html">Experience / Event Design</a>
          <a href="{base_url}/los-angeles/cybersecurity.html">Cybersecurity</a>
          <a href="{base_url}/#services" style="font-family:var(--mono);font-size:0.68rem;color:var(--steel);">ALL SERVICES &rarr;</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <button class="nav-drop-btn" id="drop-articles-btn" onclick="toggleDrop('drop-articles')">Articles <span class="chev">&#9660;</span></button>
        <div class="nav-flyout" id="drop-articles">
          <p class="nav-flyout-label">EDITORIALS</p>
          <a href="{base_url}/articles/web-design-los-angeles.html">Web Design in LA</a>
          <a href="{base_url}/articles/ai-programming-los-angeles.html">AI Programming in LA</a>
          <a href="{base_url}/articles/business-automation-los-angeles.html">Automation in LA</a>
          <a href="{base_url}/articles/content-marketing-los-angeles.html">Content Marketing in LA</a>
          <a href="{base_url}/articles/remote-tech-support-los-angeles.html">Remote Tech Support in LA</a>
          <a href="{base_url}/articles/event-design-los-angeles.html">Event Design in LA</a>
          <a href="{base_url}/articles/cybersecurity-los-angeles.html">Cybersecurity for LA</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <button class="nav-drop-btn" id="drop-company-btn" onclick="toggleDrop('drop-company')">Company <span class="chev">&#9660;</span></button>
        <div class="nav-flyout" id="drop-company">
          <p class="nav-flyout-label">SITE</p>
          <a href="{base_url}/#work">Work</a>
          <a href="{base_url}/#proof">Proof</a>
          <a href="{base_url}/#diagnostic">Diagnostic</a>
          <a href="{base_url}/#about">About</a>
          <a href="{base_url}/resume.html">Resume</a>
          <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="nav-cta">Start the Discovery &#8599;</a>
    </div>
    <button class="nav-mobile-btn" onclick="toggleNavMobile()"><span>Menu</span></button>
  </div>
</nav>
<div class="nav-mobile-overlay" id="nav-mobile-overlay" onclick="closeNavMobile()"></div>
<div class="nav-mobile" id="nav-mobile">
  <div class="nav-mobile-header">
    <span>BUSINESS AUTOMATION ENGINEER</span>
    <button class="nav-mobile-close" onclick="closeNavMobile()">&times;</button>
  </div>
  <div class="nav-mobile-section">
    <button class="nav-mobile-section-btn" onclick="toggleMobileSection('m-services')">Services <span>&#9660;</span></button>
    <div class="nav-mobile-section-content" id="m-services">
      <a href="{base_url}/los-angeles/web-design.html">Web Design</a>
      <a href="{base_url}/los-angeles/ai-programming.html">AI Programming</a>
      <a href="{base_url}/los-angeles/business-automation.html">Business Automation</a>
      <a href="{base_url}/los-angeles/content-marketing.html">Content Marketing</a>
      <a href="{base_url}/los-angeles/remote-tech-support.html">Remote Tech Support</a>
      <a href="{base_url}/los-angeles/event-design.html">Experience / Event Design</a>
      <a href="{base_url}/los-angeles/cybersecurity.html">Cybersecurity</a>
    </div>
  </div>
  <div class="nav-mobile-section">
    <button class="nav-mobile-section-btn" onclick="toggleMobileSection('m-articles')">Articles <span>&#9660;</span></button>
    <div class="nav-mobile-section-content" id="m-articles">
      <a href="{base_url}/articles/web-design-los-angeles.html">Web Design in LA</a>
      <a href="{base_url}/articles/ai-programming-los-angeles.html">AI Programming in LA</a>
      <a href="{base_url}/articles/business-automation-los-angeles.html">Automation in LA</a>
      <a href="{base_url}/articles/content-marketing-los-angeles.html">Content Marketing in LA</a>
      <a href="{base_url}/articles/remote-tech-support-los-angeles.html">Remote Tech Support in LA</a>
      <a href="{base_url}/articles/event-design-los-angeles.html">Event Design in LA</a>
      <a href="{base_url}/articles/cybersecurity-los-angeles.html">Cybersecurity for LA</a>
    </div>
  </div>
  <div class="nav-mobile-section">
    <button class="nav-mobile-section-btn" onclick="toggleMobileSection('m-company')">Company <span>&#9660;</span></button>
    <div class="nav-mobile-section-content" id="m-company">
      <a href="{base_url}/#work">Work</a>
      <a href="{base_url}/#proof">Proof</a>
      <a href="{base_url}/#diagnostic">Diagnostic</a>
      <a href="{base_url}/#about">About</a>
      <a href="{base_url}/resume.html">Resume</a>
      <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
  <div class="nav-mobile-cta">
    <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="nav-cta">Start the Discovery &#8599;</a>
  </div>
</div>

<div class="wrap">
  <section class="hero">
    <p class="eyebrow">{service_name} · {city_name}, CA</p>
    <h1>{title}</h1>
    <p class="lead">{desc} Based in Los Angeles County, serving {city_name} and all of LA.</p>
    <span class="price-tag">{price}</span>
  </section>

  <section>
    <h2>What You Walk Away With</h2>
    <ul class="features">
{features_html}
    </ul>
  </section>

  <section>
    <h2>The Difference</h2>
    <p class="body-text">{body_extra}</p>
  </section>

  <div class="about-city">
    <p>{city_name} is {city_desc}, located in {county} with a population of approximately {pop}. Caleb Pierre serves {city_name} and all of Los Angeles County with web design, AI programming, business automation, content marketing, remote tech support, event design, and cybersecurity services.</p>
  </div>

  <div class="cta-box">
    <h2>Stop bleeding hours. Start getting them back.</h2>
    <p>Free 30-minute systems audit. No pitch, no obligation — just a straight answer about what's costing you and what to fix first.</p>
    <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="cta-btn">Start the Discovery &#8599;</a>
  </div>

  <section class="faq">
    <h2>Questions You Should Be Asking</h2>
    <div class="faq-item">
      <h3>Do you actually work with businesses in {city_name}, or is that just SEO?</h3>
      <p>No, it's not just SEO. Caleb Pierre is based in LA County and {city_name} is in the primary service area. On-site for audits, remote for deployment. You're not getting a call center — you're getting the engineer who builds the system.</p>
    </div>
    <div class="faq-item">
      <h3>How much does {service_name_lower} cost in {city_name}?</h3>
      <p>{service_name} {price}. But here's the honest part: not every business needs this. That's why there's a free 30-minute systems audit first. If you don't need it, you'll be told. If you do, you'll know exactly what you're paying for.</p>
    </div>
    <div class="faq-item">
      <h3>What makes Caleb Pierre different from every other agency in {city_name}?</h3>
      <p>Caleb Pierre is not an agency. He's the engineer who builds the system, writes the documentation, and hands you the source code. No account managers, no offshore teams, no black boxes. The person you talk to is the person who builds it.</p>
    </div>
    <div class="faq-item">
      <h3>How fast can you deploy in {city_name}?</h3>
      <p>Audit to deployment in 30 days. AI systems live in week 1. Security assessments done in week 2. Full documentation and source code handover by day 30. If anyone tells you faster, ask them what they're skipping.</p>
    </div>
  </section>
</div>

<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-col">
      <h4>Services</h4>
      <a href="{base_url}/los-angeles/web-design.html">Web Design</a>
      <a href="{base_url}/los-angeles/ai-programming.html">AI Programming</a>
      <a href="{base_url}/los-angeles/business-automation.html">Business Automation</a>
      <a href="{base_url}/los-angeles/content-marketing.html">Content Marketing</a>
      <a href="{base_url}/los-angeles/remote-tech-support.html">Remote Tech Support</a>
      <a href="{base_url}/los-angeles/event-design.html">Experience / Event Design</a>
      <a href="{base_url}/los-angeles/cybersecurity.html">Cybersecurity</a>
    </div>
    <div class="footer-col">
      <h4>Articles</h4>
      <a href="{base_url}/articles/web-design-los-angeles.html">Web Design in LA</a>
      <a href="{base_url}/articles/ai-programming-los-angeles.html">AI Programming in LA</a>
      <a href="{base_url}/articles/business-automation-los-angeles.html">Automation in LA</a>
      <a href="{base_url}/articles/content-marketing-los-angeles.html">Content Marketing in LA</a>
      <a href="{base_url}/articles/remote-tech-support-los-angeles.html">Remote Tech Support in LA</a>
      <a href="{base_url}/articles/event-design-los-angeles.html">Event Design in LA</a>
      <a href="{base_url}/articles/cybersecurity-los-angeles.html">Cybersecurity for LA</a>
    </div>
    <div class="footer-col">
      <h4>Cities Served</h4>
      <a href="{base_url}/los-angeles/business-automation.html">Los Angeles, CA</a>
      <a href="{base_url}/long-beach/business-automation.html">Long Beach, CA</a>
      <a href="{base_url}/torrance/business-automation.html">Torrance, CA</a>
      <a href="{base_url}/carson/business-automation.html">Carson, CA</a>
      <a href="{base_url}/compton/business-automation.html">Compton, CA</a>
      <a href="{base_url}/hawthorne/business-automation.html">Hawthorne, CA</a>
      <a href="{base_url}/inglewood/business-automation.html">Inglewood, CA</a>
      <a href="{base_url}/gardena/business-automation.html">Gardena, CA</a>
      <a href="{base_url}/santa-monica/business-automation.html">Santa Monica, CA</a>
      <a href="{base_url}/pasadena/business-automation.html">Pasadena, CA</a>
      <a href="{base_url}/glendale/business-automation.html">Glendale, CA</a>
      <a href="{base_url}/burbank/business-automation.html">Burbank, CA</a>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <a href="{base_url}/">Home</a>
      <a href="{base_url}/resume.html">Resume</a>
      <a href="{base_url}/#diagnostic">Systems Diagnostic</a>
      <a href="{base_url}/#work">Work</a>
      <a href="{base_url}/#proof">Proof of Work</a>
      <a href="{base_url}/#about">About</a>
      <a href="{base_url}/#contact">Contact</a>
      <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener">Start the Discovery</a>
      <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener">LinkedIn</a>
      <a href="{base_url}/sitemap.xml">Sitemap</a>
      <a href="{base_url}/llms.txt">llms.txt</a>
      <a href="{base_url}/robots.txt">robots.txt</a>
    </div>
  </div>
  <div class="footer-seo">
    <p>Caleb Pierre is a Business Automation Engineer based in Los Angeles, CA. He builds the web, AI, automation, marketing, and support systems that let a business run itself — for organizations across LA County, from nonprofits in Gardena to healthcare practices in Torrance to tech companies in Santa Monica. 10 years of experience across Tinder (Security Engineer II), Verizon Media, Children's Hospital Los Angeles, Glass Financial (CTO), and Caleb Pierre Ventures. Serving Los Angeles, Long Beach, Torrance, Carson, Compton, Hawthorne, Inglewood, Gardena, Santa Monica, Pasadena, Glendale, and Burbank. HIPAA compliant. Remote-first. Start the Discovery.</p>
  </div>
  <div class="footer-bottom">
    <p>&copy; {year} Caleb Pierre Ventures LLC &middot; Los Angeles, CA &middot; Remote-First &middot; <a href="{base_url}/llms.txt">llms.txt</a> &middot; <a href="{base_url}/sitemap.xml">sitemap.xml</a> &middot; <a href="{base_url}/robots.txt">robots.txt</a></p>
    <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener" style="font-family: var(--mono); color: #A8A8A8; font-size: 0.7rem; text-decoration: none;">linkedin.com/in/calebpierre</a>
  </div>
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
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
  --paper: #FAFAFA; --panel: #F0F0F0; --ink: #0A0A0A; --red: #E8382D;
  --steel: #6B6B6B; --line: #D9D9D9; --lineDark: rgba(255,255,255,0.15);
  --display: 'Inter', system-ui, sans-serif;
  --body: 'Inter', system-ui, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, monospace;
}}
html {{ scroll-behavior: smooth; }}
body {{ font-family: var(--body); background: var(--paper); color: var(--ink); line-height: 1.75; }}
a {{ color: var(--red); text-decoration: none; }}
.wrap {{ max-width: 720px; margin: 0 auto; padding: 0 24px; }}
.nav {{ position: sticky; top: 0; z-index: 50; background: rgba(250,250,250,0.94); backdrop-filter: blur(6px); border-bottom: 2px solid var(--ink); }}
.nav-inner {{ max-width: 960px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 12px 24px; }}
.nav-brand {{ display: flex; align-items: center; gap: 10px; text-decoration: none; }}
.nav-mark {{ font-family: var(--mono); font-weight: 700; font-size: 0.9rem; color: var(--ink); width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 2px solid var(--ink); letter-spacing: -0.05em; background: #fff; }}
.nav-name {{ font-family: var(--body); font-weight: 700; font-size: 0.85rem; color: var(--ink); }}
.nav-sub {{ font-family: var(--mono); font-size: 0.58rem; color: var(--steel); letter-spacing: 0.1em; }}
.nav-cta {{ background: var(--red); color: #fff; font-family: var(--body); font-weight: 700; font-size: 0.78rem; padding: 8px 16px; box-shadow: 3px 3px 0 var(--ink); transition: all 0.15s; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }}
.nav-cta:hover {{ background: var(--ink); box-shadow: 4px 4px 0 var(--red); transform: translate(-1px,-1px); }}
.nav-desktop {{ display: flex; align-items: center; gap: 20px; }}
.nav-dropdown {{ position: relative; }}
.nav-drop-btn {{ font-family: var(--mono); font-size: 0.75rem; color: var(--steel); background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; padding: 8px 4px; transition: color 0.15s; letter-spacing: 0.04em; }}
.nav-drop-btn:hover {{ color: var(--ink); }}
.nav-drop-btn .chev {{ transition: transform 0.25s; font-size: 10px; }}
.nav-drop-btn.open .chev {{ transform: rotate(180deg); }}
.nav-flyout {{ position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%); background: #fff; border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); z-index: 100; min-width: 240px; padding: 8px 0; display: none; }}
.nav-flyout.open {{ display: block; }}
.nav-flyout-label {{ font-family: var(--mono); font-size: 0.6rem; color: var(--steel); letter-spacing: 0.12em; padding: 6px 16px 8px; margin: 0; }}
.nav-flyout a {{ display: block; padding: 9px 16px; font-family: var(--body); font-size: 0.82rem; font-weight: 600; color: var(--ink); text-decoration: none; border-left: 3px solid transparent; transition: all 0.12s; }}
.nav-flyout a:hover {{ background: #F6D9D6; border-left-color: var(--red); }}
.nav-mobile-btn {{ display: none; background: var(--red); border: 3px solid var(--ink); cursor: pointer; padding: 8px; box-shadow: 3px 3px 0 var(--ink); }}
.nav-mobile-btn span {{ color: #fff; font-family: var(--mono); font-size: 0.8rem; }}
.nav-mobile {{ display: none; position: fixed; top: 0; right: 0; bottom: 0; width: 100%; max-width: 420px; background: var(--ink); z-index: 49; overflow-y: auto; }}
.nav-mobile.open {{ display: block; }}
.nav-mobile-overlay {{ display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 48; }}
.nav-mobile-overlay.open {{ display: block; }}
.nav-mobile-header {{ display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 2px solid #1a1a1a; }}
.nav-mobile-header span {{ font-family: var(--mono); font-size: 0.65rem; color: #666; letter-spacing: 0.1em; }}
.nav-mobile-close {{ color: #fff; background: none; border: none; cursor: pointer; padding: 8px; font-size: 1.3rem; }}
.nav-mobile-section {{ border-bottom: 1px solid #1a1a1a; }}
.nav-mobile-section-btn {{ width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 16px 1.5rem; background: none; border: none; cursor: pointer; color: var(--red); font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }}
.nav-mobile-section-content {{ display: none; padding-bottom: 8px; }}
.nav-mobile-section-content.open {{ display: block; }}
.nav-mobile-section-content a {{ display: block; padding: 10px 1.5rem 10px 2rem; font-family: var(--body); font-size: 0.88rem; color: #fff; text-decoration: none; font-weight: 600; }}
.nav-mobile-cta {{ padding: 24px 1.5rem; }}
.nav-mobile-cta .nav-cta {{ width: 100%; justify-content: center; padding: 12px; font-size: 0.85rem; }}
.hero {{ padding: 100px 24px 40px; }}
.eyebrow {{ font-family: var(--mono); color: var(--red); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; font-weight: 600; }}
h1 {{ font-family: var(--display); font-size: clamp(1.6rem, 4vw, 2.6rem); font-weight: 900; line-height: 1.15; color: var(--ink); margin-bottom: 16px; letter-spacing: -0.02em; }}
.meta {{ font-family: var(--mono); font-size: 0.72rem; color: var(--steel); margin-bottom: 32px; }}
h2 {{ font-family: var(--display); font-size: 1.5rem; font-weight: 800; color: var(--ink); margin: 40px 0 12px; }}
h3 {{ font-family: var(--display); font-size: 1.15rem; font-weight: 700; color: var(--ink); margin: 28px 0 10px; }}
p {{ font-size: 1rem; color: var(--steel); line-height: 1.8; margin-bottom: 16px; }}
ul, ol {{ padding-left: 24px; margin-bottom: 20px; }}
li {{ font-size: 0.95rem; color: var(--steel); line-height: 1.7; margin-bottom: 8px; }}
strong {{ color: var(--ink); font-weight: 700; }}
blockquote {{ border-left: 3px solid var(--red); padding-left: 20px; margin: 24px 0; font-style: italic; color: var(--ink); }}
.cta-box {{ background: var(--ink); padding: 40px 32px; margin: 48px 0; text-align: center; }}
.cta-box h2 {{ color: #fff; margin: 0 0 12px; }}
.cta-box p {{ color: rgba(255,255,255,0.75); margin-bottom: 20px; font-size: 0.95rem; }}
.cta-btn {{ display: inline-flex; align-items: center; gap: 8px; background: var(--red); color: #fff; font-family: var(--body); font-weight: 700; font-size: 0.9rem; padding: 12px 24px; }}
.site-footer {{ background: var(--ink); border-top: 3px solid var(--red); padding: 48px 24px; }}
.footer-grid {{ max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-bottom: 32px; }}
.footer-col h4 {{ font-family: var(--mono); color: var(--red); font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px; font-weight: 700; }}
.footer-col a {{ display: block; font-family: var(--mono); color: #A8A8A8; font-size: 0.68rem; padding: 3px 0; line-height: 1.6; transition: color 0.15s; }}
.footer-col a:hover {{ color: var(--red); }}
.footer-seo {{ max-width: 960px; margin: 0 auto; border-top: 1px solid var(--lineDark); padding-top: 24px; margin-bottom: 24px; }}
.footer-seo p {{ font-family: var(--body); color: #8A8A8A; font-size: 0.76rem; line-height: 1.8; max-width: 72ch; }}
.footer-bottom {{ max-width: 960px; margin: 0 auto; border-top: 1px solid var(--lineDark); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }}
.footer-bottom p {{ font-family: var(--mono); color: #8A8A8A; font-size: 0.68rem; }}
.footer-bottom a {{ color: var(--red); }}
@media (max-width: 1024px) {{
  .nav-desktop {{ display: none; }}
  .nav-mobile-btn {{ display: flex; align-items: center; justify-content: center; }}
}}
@media (max-width: 640px) {{ .wrap {{ padding: 0 16px; }} .hero {{ padding: 80px 16px 32px; }} }}
</style>
</head>
<body>

<script>
function toggleNavMobile() {{
  document.getElementById('nav-mobile').classList.toggle('open');
  document.getElementById('nav-mobile-overlay').classList.toggle('open');
  document.body.style.overflow = document.getElementById('nav-mobile').classList.contains('open') ? 'hidden' : '';
}}
function closeNavMobile() {{
  document.getElementById('nav-mobile').classList.remove('open');
  document.getElementById('nav-mobile-overlay').classList.remove('open');
  document.body.style.overflow = '';
}}
function toggleDrop(id) {{
  var el = document.getElementById(id);
  var btn = document.getElementById(id + '-btn');
  var isOpen = el.classList.contains('open');
  document.querySelectorAll('.nav-flyout').forEach(f => f.classList.remove('open'));
  document.querySelectorAll('.nav-drop-btn').forEach(b => b.classList.remove('open'));
  if (!isOpen) {{ el.classList.add('open'); btn.classList.add('open'); }}
}}
function toggleMobileSection(id) {{
  document.getElementById(id).classList.toggle('open');
}}
document.addEventListener('click', function(e) {{
  if (!e.target.closest('.nav-dropdown')) {{
    document.querySelectorAll('.nav-flyout').forEach(f => f.classList.remove('open'));
    document.querySelectorAll('.nav-drop-btn').forEach(b => b.classList.remove('open'));
  }}
}});
</script>

<nav class="nav">
  <div class="nav-inner">
    <a href="{base_url}/" class="nav-brand">
      <span class="nav-mark">CP</span>
      <div>
        <div class="nav-name">Caleb Pierre</div>
        <div class="nav-sub">BUSINESS AUTOMATION ENGINEER</div>
      </div>
    </a>
    <div class="nav-desktop">
      <div class="nav-dropdown">
        <button class="nav-drop-btn" id="drop-services-btn" onclick="toggleDrop('drop-services')">Services <span class="chev">&#9660;</span></button>
        <div class="nav-flyout" id="drop-services">
          <p class="nav-flyout-label">SERVICES</p>
          <a href="{base_url}/los-angeles/web-design.html">Web Design</a>
          <a href="{base_url}/los-angeles/ai-programming.html">AI Programming</a>
          <a href="{base_url}/los-angeles/business-automation.html">Business Automation</a>
          <a href="{base_url}/los-angeles/content-marketing.html">Content Marketing</a>
          <a href="{base_url}/los-angeles/remote-tech-support.html">Remote Tech Support</a>
          <a href="{base_url}/los-angeles/event-design.html">Experience / Event Design</a>
          <a href="{base_url}/los-angeles/cybersecurity.html">Cybersecurity</a>
          <a href="{base_url}/#services" style="font-family:var(--mono);font-size:0.68rem;color:var(--steel);">ALL SERVICES &rarr;</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <button class="nav-drop-btn" id="drop-articles-btn" onclick="toggleDrop('drop-articles')">Articles <span class="chev">&#9660;</span></button>
        <div class="nav-flyout" id="drop-articles">
          <p class="nav-flyout-label">EDITORIALS</p>
          <a href="{base_url}/articles/web-design-los-angeles.html">Web Design in LA</a>
          <a href="{base_url}/articles/ai-programming-los-angeles.html">AI Programming in LA</a>
          <a href="{base_url}/articles/business-automation-los-angeles.html">Automation in LA</a>
          <a href="{base_url}/articles/content-marketing-los-angeles.html">Content Marketing in LA</a>
          <a href="{base_url}/articles/remote-tech-support-los-angeles.html">Remote Tech Support in LA</a>
          <a href="{base_url}/articles/event-design-los-angeles.html">Event Design in LA</a>
          <a href="{base_url}/articles/cybersecurity-los-angeles.html">Cybersecurity for LA</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <button class="nav-drop-btn" id="drop-company-btn" onclick="toggleDrop('drop-company')">Company <span class="chev">&#9660;</span></button>
        <div class="nav-flyout" id="drop-company">
          <p class="nav-flyout-label">SITE</p>
          <a href="{base_url}/#work">Work</a>
          <a href="{base_url}/#proof">Proof</a>
          <a href="{base_url}/#diagnostic">Diagnostic</a>
          <a href="{base_url}/#about">About</a>
          <a href="{base_url}/resume.html">Resume</a>
          <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="nav-cta">Start the Discovery &#8599;</a>
    </div>
    <button class="nav-mobile-btn" onclick="toggleNavMobile()"><span>Menu</span></button>
  </div>
</nav>
<div class="nav-mobile-overlay" id="nav-mobile-overlay" onclick="closeNavMobile()"></div>
<div class="nav-mobile" id="nav-mobile">
  <div class="nav-mobile-header">
    <span>BUSINESS AUTOMATION ENGINEER</span>
    <button class="nav-mobile-close" onclick="closeNavMobile()">&times;</button>
  </div>
  <div class="nav-mobile-section">
    <button class="nav-mobile-section-btn" onclick="toggleMobileSection('m-services')">Services <span>&#9660;</span></button>
    <div class="nav-mobile-section-content" id="m-services">
      <a href="{base_url}/los-angeles/web-design.html">Web Design</a>
      <a href="{base_url}/los-angeles/ai-programming.html">AI Programming</a>
      <a href="{base_url}/los-angeles/business-automation.html">Business Automation</a>
      <a href="{base_url}/los-angeles/content-marketing.html">Content Marketing</a>
      <a href="{base_url}/los-angeles/remote-tech-support.html">Remote Tech Support</a>
      <a href="{base_url}/los-angeles/event-design.html">Experience / Event Design</a>
      <a href="{base_url}/los-angeles/cybersecurity.html">Cybersecurity</a>
    </div>
  </div>
  <div class="nav-mobile-section">
    <button class="nav-mobile-section-btn" onclick="toggleMobileSection('m-articles')">Articles <span>&#9660;</span></button>
    <div class="nav-mobile-section-content" id="m-articles">
      <a href="{base_url}/articles/web-design-los-angeles.html">Web Design in LA</a>
      <a href="{base_url}/articles/ai-programming-los-angeles.html">AI Programming in LA</a>
      <a href="{base_url}/articles/business-automation-los-angeles.html">Automation in LA</a>
      <a href="{base_url}/articles/content-marketing-los-angeles.html">Content Marketing in LA</a>
      <a href="{base_url}/articles/remote-tech-support-los-angeles.html">Remote Tech Support in LA</a>
      <a href="{base_url}/articles/event-design-los-angeles.html">Event Design in LA</a>
      <a href="{base_url}/articles/cybersecurity-los-angeles.html">Cybersecurity for LA</a>
    </div>
  </div>
  <div class="nav-mobile-section">
    <button class="nav-mobile-section-btn" onclick="toggleMobileSection('m-company')">Company <span>&#9660;</span></button>
    <div class="nav-mobile-section-content" id="m-company">
      <a href="{base_url}/#work">Work</a>
      <a href="{base_url}/#proof">Proof</a>
      <a href="{base_url}/#diagnostic">Diagnostic</a>
      <a href="{base_url}/#about">About</a>
      <a href="{base_url}/resume.html">Resume</a>
      <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
  <div class="nav-mobile-cta">
    <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="nav-cta">Start the Discovery &#8599;</a>
  </div>
</div>

<div class="wrap">
  <article class="hero">
    <p class="eyebrow">{article_category}</p>
    <h1>{article_title}</h1>
    <p class="meta">By Caleb Pierre · {date_published} · Los Angeles, CA</p>
  </article>

  {article_body}

  <div class="cta-box">
    <h2>Want this for your business?</h2>
    <p>Book a free 30-minute systems audit. I'll take real notes and hand you a written game plan — no pitch, no pressure.</p>
    <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener" class="cta-btn">Start the Discovery &#8599;</a>
  </div>
</div>

<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-col">
      <h4>Services</h4>
      <a href="{base_url}/los-angeles/web-design.html">Web Design</a>
      <a href="{base_url}/los-angeles/ai-programming.html">AI Programming</a>
      <a href="{base_url}/los-angeles/business-automation.html">Business Automation</a>
      <a href="{base_url}/los-angeles/content-marketing.html">Content Marketing</a>
      <a href="{base_url}/los-angeles/remote-tech-support.html">Remote Tech Support</a>
      <a href="{base_url}/los-angeles/event-design.html">Experience / Event Design</a>
      <a href="{base_url}/los-angeles/cybersecurity.html">Cybersecurity</a>
    </div>
    <div class="footer-col">
      <h4>Articles</h4>
      <a href="{base_url}/articles/web-design-los-angeles.html">Web Design in LA</a>
      <a href="{base_url}/articles/ai-programming-los-angeles.html">AI Programming in LA</a>
      <a href="{base_url}/articles/business-automation-los-angeles.html">Automation in LA</a>
      <a href="{base_url}/articles/content-marketing-los-angeles.html">Content Marketing in LA</a>
      <a href="{base_url}/articles/remote-tech-support-los-angeles.html">Remote Tech Support in LA</a>
      <a href="{base_url}/articles/event-design-los-angeles.html">Event Design in LA</a>
      <a href="{base_url}/articles/cybersecurity-los-angeles.html">Cybersecurity for LA</a>
    </div>
    <div class="footer-col">
      <h4>Cities Served</h4>
      <a href="{base_url}/los-angeles/business-automation.html">Los Angeles, CA</a>
      <a href="{base_url}/long-beach/business-automation.html">Long Beach, CA</a>
      <a href="{base_url}/torrance/business-automation.html">Torrance, CA</a>
      <a href="{base_url}/carson/business-automation.html">Carson, CA</a>
      <a href="{base_url}/compton/business-automation.html">Compton, CA</a>
      <a href="{base_url}/hawthorne/business-automation.html">Hawthorne, CA</a>
      <a href="{base_url}/inglewood/business-automation.html">Inglewood, CA</a>
      <a href="{base_url}/gardena/business-automation.html">Gardena, CA</a>
      <a href="{base_url}/santa-monica/business-automation.html">Santa Monica, CA</a>
      <a href="{base_url}/pasadena/business-automation.html">Pasadena, CA</a>
      <a href="{base_url}/glendale/business-automation.html">Glendale, CA</a>
      <a href="{base_url}/burbank/business-automation.html">Burbank, CA</a>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <a href="{base_url}/">Home</a>
      <a href="{base_url}/resume.html">Resume</a>
      <a href="{base_url}/#diagnostic">Systems Diagnostic</a>
      <a href="{base_url}/#work">Work</a>
      <a href="{base_url}/#proof">Proof of Work</a>
      <a href="{base_url}/#about">About</a>
      <a href="{base_url}/#contact">Contact</a>
      <a href="https://calendly.com/calebpierre" target="_blank" rel="noopener">Start the Discovery</a>
      <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener">LinkedIn</a>
      <a href="{base_url}/sitemap.xml">Sitemap</a>
      <a href="{base_url}/llms.txt">llms.txt</a>
      <a href="{base_url}/robots.txt">robots.txt</a>
    </div>
  </div>
  <div class="footer-seo">
    <p>Caleb Pierre is a Business Automation Engineer based in Los Angeles, CA. He builds the web, AI, automation, marketing, and support systems that let a business run itself — for organizations across LA County, from nonprofits in Gardena to healthcare practices in Torrance to tech companies in Santa Monica. 10 years of experience across Tinder (Security Engineer II), Verizon Media, Children's Hospital Los Angeles, Glass Financial (CTO), and Caleb Pierre Ventures. Serving Los Angeles, Long Beach, Torrance, Carson, Compton, Hawthorne, Inglewood, Gardena, Santa Monica, Pasadena, Glendale, and Burbank. HIPAA compliant. Remote-first. Start the Discovery.</p>
  </div>
  <div class="footer-bottom">
    <p>&copy; {year} Caleb Pierre Ventures LLC &middot; Los Angeles, CA &middot; Remote-First &middot; <a href="{base_url}/llms.txt">llms.txt</a> &middot; <a href="{base_url}/sitemap.xml">sitemap.xml</a> &middot; <a href="{base_url}/robots.txt">robots.txt</a></p>
    <a href="https://linkedin.com/in/calebpierre" target="_blank" rel="noopener" style="font-family: var(--mono); color: #A8A8A8; font-size: 0.7rem; text-decoration: none;">linkedin.com/in/calebpierre</a>
  </div>
</footer>

</body>
</html>"""

# ============ ARTICLES (Schwartz-style: frustration → proof → relief) ============
ARTICLES = [
    {
        "slug": "web-design-los-angeles.html",
        "title": "Web Design for Los Angeles Businesses: Why Most Sites Are Losing You Money",
        "desc": "Your LA business's website was built once and forgotten. Here's what a site that actually converts looks like — from an engineer who builds them.",
        "keywords": "web design Los Angeles, website redesign LA, Next.js developer Los Angeles, small business website LA",
        "category": "Web Design",
        "date": "2026-07-20",
        "body": """
<h2>Your website is either an asset or a liability. There's no neutral.</h2>
<p>Most Los Angeles businesses treat their website like a business card: built once, hung on the wall, never looked at again. Meanwhile it's either quietly bringing in leads every day, or quietly losing them — slow load times, no clear call to action, copy nobody proofread since 2019. There's no such thing as a website that just sits there doing nothing. It's always doing <em>something</em> to your pipeline. The question is which direction.</p>

<h2>What a site that converts actually has</h2>
<p>Forget "modern design." Here's what actually moves the needle for an LA business:</p>
<ul>
  <li><strong>One job per page</strong> — a homepage that tries to say everything says nothing. Every page should get one visitor to do one thing.</li>
  <li><strong>Speed</strong> — Google penalizes slow sites in search rankings, and visitors bounce within seconds. Next.js and proper image optimization aren't nice-to-haves, they're the difference between showing up on page one and page three.</li>
  <li><strong>Editability</strong> — if updating a price or a photo requires a developer and an invoice, the site will go stale again in six months. It should be built so you can touch it yourself.</li>
  <li><strong>Structured data</strong> — the schema markup that tells Google (and now ChatGPT and Perplexity) exactly what your business is and does, built in from day one, not bolted on as an afterthought.</li>
</ul>

<h2>What this looks like when it's done right</h2>
<p>Eden's Candy needed more than a fresh coat of paint — a full digital identity and store experience redesign for a women's wellness brand. Hummingbyrd Apparel & Print needed the opposite: a greenfield build, zero to launch, full Shopify architecture with print-on-demand integration baked in from the first commit. Different starting points, same standard: fast, clean, and built by one person who owns the whole stack, not a project manager relaying requests to an offshore team.</p>
<blockquote>A website isn't a brochure. It's the first employee your business hires that never sleeps — it should be built like it.</blockquote>

<h2>Why LA businesses specifically get this wrong</h2>
<p>Los Angeles has more agencies per capita than almost anywhere in the country, and most of them are selling templates with your logo pasted on top. The businesses that win online aren't the ones who spent the most — they're the ones whose site was built around an actual conversion goal instead of "looking nice for the portfolio."</p>

<h2>What to do next</h2>
<p>If your site hasn't been touched since it launched, it's costing you leads right now, today, while you read this. I offer a free 30-minute audit for LA businesses — I'll look at your actual site and tell you exactly what's costing you conversions and what to fix first. No pitch, just a straight answer.</p>
""",
    },
    {
        "slug": "ai-programming-los-angeles.html",
        "title": "How AI Programming Is Transforming Los Angeles Businesses",
        "desc": "Most LA businesses are playing with ChatGPT and calling it AI integration. Here's what actually works — from an LA engineer who deploys it.",
        "keywords": "AI programming Los Angeles, AI agents Los Angeles, AI automation LA, LLM orchestration, AI engineer Los Angeles",
        "category": "AI & Automation",
        "date": "2026-07-10",
        "body": """
<h2>Most LA businesses are doing AI wrong</h2>
<p>Everyone in Los Angeles is talking about AI. Very few are actually deploying it. Most businesses are either playing with ChatGPT and calling it "AI integration," or they're paralyzed by the complexity and doing nothing.</p>
<p>Here's the frustration nobody talks about: you don't have an AI problem. You have a manual-work problem. Your team is spending hours every day on tasks a machine should be handling — and you're paying for that time. The businesses winning right now aren't the ones with the most advanced AI. They're the ones who deployed <strong>simple, targeted AI systems</strong> that eliminated specific manual workflows and gave their people time back.</p>

<h2>What AI programming actually means (and what it isn't)</h2>
<p>An AI agent is not a chatbot. A chatbot answers questions. An AI agent <strong>does work</strong>. It reads your CRM, makes decisions, takes actions, and logs what it did. It connects to your business systems through APIs and operates autonomously on a schedule or in response to triggers.</p>
<p>The stack I program for Los Angeles businesses does three things:</p>
<ul>
  <li><strong>Grounds every answer in your data</strong> — RAG pipelines connect your documents, CRM, and knowledge base to the LLM so it answers from your context, not generic internet data. No more AI that hallucinates about your own business.</li>
  <li><strong>Makes your systems talk to each other</strong> — MCP integration lets the agent read from and write to your existing tools without ripping anything out. No migration project required.</li>
  <li><strong>Checks its own work</strong> — one agent proposes, another validates, a third executes. Guardrails built in so nothing goes out the door unchecked. You get the speed of AI with the safety of human oversight.</li>
</ul>

<h2>What this looks like when it's running</h2>
<p>For a nonprofit serving justice-impacted individuals in Gardena, CA, I programmed an AI system that eliminated 40-60% of manual overhead. Intake automation. Case management data entry. Knowledge base queries. All documented, all auditable, all owned by the organization.</p>
<blockquote>The question isn't "can AI help your business?" It's "which manual workflow is costing you the most, and can an agent do it for a fraction of what you're paying a human to do it?"</blockquote>

<h2>Why Los Angeles is the right place to do this now</h2>
<p>LA has three things that make it ground zero for AI adoption:</p>
<ol>
  <li><strong>Dense business networks</strong> — from Santa Monica tech to DTLA finance to South Bay manufacturing, there's a concentration of businesses that can benefit from AI automation</li>
  <li><strong>Talent proximity</strong> — but you don't need to hire an AI team. You need one engineer who can program and hand over the system</li>
  <li><strong>Competitive pressure</strong> — your competitors are already looking at AI. The window to be early is closing</li>
</ol>

<h2>What to do next</h2>
<p>If you're a Los Angeles business owner wondering whether AI programming makes sense for you, the answer is almost always yes — but the right first step isn't buying a tool. It's getting a systems audit that identifies which workflows are actually worth automating.</p>
<p>I offer a free 30-minute audit for LA businesses. I take real notes, look at your actual systems, and hand you a written game plan. No pitch, no black box — just a straight answer about where AI fits in your business.</p>
""",
    },
    {
        "slug": "business-automation-los-angeles.html",
        "title": "Business Automation in Los Angeles: Stop Paying Humans to Do a Machine's Job",
        "desc": "Every LA business has at least one workflow eating hours every week that could be automated for $200/month. Here's how to find it and fix it.",
        "keywords": "business automation Los Angeles, Zapier automation LA, n8n Los Angeles, workflow automation LA, Python automation",
        "category": "Business Automation",
        "date": "2026-07-10",
        "body": """
<h2>Your team is doing work a machine should be doing</h2>
<p>Every Los Angeles business has at least one workflow that's eating hours of human time every week — and could be automated for $200/month. Data entry. Copy-pasting between systems. Manually sending the same emails. Updating spreadsheets that nobody reads. Triaging the same support tickets over and over.</p>
<p>This isn't about replacing people. It's about <strong>freeing your team to do the work that actually requires a human</strong> — while the machines handle the repetitive stuff. The frustration isn't that the work is hard. It's that it's mindless, and you're paying human wages for it.</p>

<h2>The tools I use (and when to use each one)</h2>

<h3>Zapier — the fastest way to stop bleeding hours</h3>
<p>If you're in Los Angeles and you're not using Zapier to connect your CRM, email, and calendar, you're losing hours every week. At Union Rescue Mission, I deployed Zapier-driven pipelines connecting CRM, email, and social channels via REST API orchestration — <strong>reducing manual workload by 40%</strong>. That's 40% of someone's week, given back.</p>

<h3>n8n — when Zapier gets too expensive</h3>
<p>Zapier pricing scales with usage, and successful automation generates a lot of usage. n8n is open-source and self-hostable. When Zapier gets too expensive or you need complex branching logic, n8n is the answer. I deploy n8n on Docker for LA businesses that have outgrown Zapier's pricing model.</p>

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

<h2>What this looks like when it's done</h2>
<p>As IT Director for a nonprofit in Gardena, CA, I automated administrative and case management workflows that eliminated manual data entry across the organization. The result: staff got hours back every week, every process became auditable and repeatable, and the organization could scale without hiring more admin staff.</p>
<blockquote>The best automation isn't the most complex one — it's the one that saves the most hours for the least cost and never breaks.</blockquote>

<h2>What to do next</h2>
<p>If you're running a Los Angeles business and you suspect you're paying humans to do a machine's job, you're probably right. I offer a free 30-minute systems audit where I'll look at your workflows and tell you exactly which ones are worth automating first. No pitch — just a straight answer and a written game plan.</p>
""",
    },
    {
        "slug": "content-marketing-los-angeles.html",
        "title": "Content Marketing for Los Angeles Businesses: Why Your Blog Isn't Working",
        "desc": "Most LA businesses publish when someone remembers to, then wonder why nothing ranks. Here's what a content system that compounds actually looks like.",
        "keywords": "content marketing Los Angeles, SEO Los Angeles, content strategy LA, programmatic SEO",
        "category": "Content Marketing",
        "date": "2026-07-20",
        "body": """
<h2>Your blog isn't a marketing strategy. It's a graveyard.</h2>
<p>Walk into almost any LA small business's website and you'll find the same thing: a blog with three posts from 2022, the last one titled "We're excited to announce..." That's not content marketing. That's a New Year's resolution that died in February.</p>
<p>The businesses actually winning organic search and AI-crawler visibility right now aren't publishing more often out of willpower. They've built a <strong>system</strong> — one that produces content on a schedule, targets real keywords, and compounds instead of evaporating.</p>

<h2>What "compounds" actually means</h2>
<p>A single blog post is a lottery ticket. A hundred structured, keyword-targeted pages covering every service and every location you serve is an asset — each page is a door someone can walk through from Google, and the doors keep multiplying instead of getting forgotten.</p>
<ul>
  <li><strong>Programmatic landing pages</strong> — one page per service, per city, per use case. Not duplicate content — genuinely useful, specific pages that answer a specific search.</li>
  <li><strong>Keyword research before a word is written</strong> — content built to rank for what people actually search, not what sounds good in a meeting.</li>
  <li><strong>AI-crawler visibility</strong> — an llms.txt file and clean structured data so ChatGPT, Perplexity, and Claude can find and cite your business, not just Google.</li>
  <li><strong>Repurposing, not rewriting</strong> — one core piece of content becomes an email, a social post, and a landing page instead of starting from a blank page every time.</li>
</ul>

<h2>The proof is this page</h2>
<p>Every city-and-service page on this site, every article you're reading right now — built with the exact programmatic content system I install for clients. It's not guesswork. It's the same system, running in public, right now.</p>
<blockquote>Content marketing isn't about publishing more. It's about publishing in a way that keeps working after you stop thinking about it.</blockquote>

<h2>Why this matters more in Los Angeles specifically</h2>
<p>LA is saturated with competition in almost every service category. The businesses that show up in the first three results aren't necessarily the best — they're the ones with the most complete, well-structured content footprint. Being good at your job and being invisible online is the same as being bad at your job, from a customer's perspective.</p>

<h2>What to do next</h2>
<p>If your content strategy is "post when we remember," it's not a strategy — it's a hope. I offer a free 30-minute audit where I'll look at your current content and tell you exactly what's missing and what to build first. No pitch, just a straight answer.</p>
""",
    },
    {
        "slug": "remote-tech-support-los-angeles.html",
        "title": "Remote Tech Support in Los Angeles: Why Your Help Desk Ticket Never Gets Fixed",
        "desc": "Your LA business calls IT support and gets a ticket number. Here's what it looks like when a real engineer actually answers the phone.",
        "keywords": "remote tech support Los Angeles, IT support LA, managed IT Los Angeles, on-call engineer LA",
        "category": "Remote Tech Support",
        "date": "2026-07-20",
        "body": """
<h2>You don't have a technology problem. You have a "nobody answers the phone" problem.</h2>
<p>Most Los Angeles small and mid-size businesses don't actually have complicated technical problems. They have simple problems that never get fixed because the support model is broken: submit a ticket, wait, get a rep who's never seen your setup before, re-explain everything, wait again.</p>
<p>The frustration isn't the bug. It's the system built around the bug — one designed to minimize the support company's cost, not to minimize your downtime.</p>

<h2>What good remote tech support actually looks like</h2>
<ul>
  <li><strong>One person, every time</strong> — someone who already knows your systems answers the phone. No re-explaining.</li>
  <li><strong>Proactive, not just reactive</strong> — monitoring that catches a failing drive or a maxed-out server before it becomes an outage, not after.</li>
  <li><strong>Real fixes, not workarounds</strong> — the difference between "restart it and see if that helps" and actually finding the root cause.</li>
  <li><strong>Documentation left behind</strong> — every fix comes with a written explanation, so the next person (or the next hire) isn't starting from zero.</li>
  <li><strong>Flat pricing</strong> — no surprise invoice that makes you hesitate before calling about the thing that's actually bothering you.</li>
</ul>

<h2>What this looks like in practice</h2>
<p>As IT Director for a nonprofit serving justice-impacted individuals in Gardena, CA, I didn't run a ticket queue — I owned the entire technical environment personally, implemented Google Workspace with HIPAA-aligned controls, and was the person who answered when something broke. That's the model: not a help desk, an engineer who's actually accountable for your systems working.</p>
<blockquote>A ticket number isn't support. It's a queue. Support is a person who picks up the phone and actually fixes it.</blockquote>

<h2>Why LA businesses especially get burned here</h2>
<p>Outsourced IT support companies serving Los Angeles often route calls to offshore teams with high turnover — you're rarely talking to the same person twice, and institutional knowledge about your specific setup evaporates every time someone quits. For a business that depends on its systems working every single day, that's an expensive way to save a little money on support contracts.</p>

<h2>What to do next</h2>
<p>If you're tired of submitting tickets into a void, I offer a free 30-minute audit of your current setup and support situation. I'll tell you honestly whether remote support makes sense for your business and what it should actually cost.</p>
""",
    },
    {
        "slug": "event-design-los-angeles.html",
        "title": "Experience & Event Design for Los Angeles Businesses: Why Launches Fall Apart",
        "desc": "Your LA product launch or activation needs more than decorations — it needs a system. Here's what experience design actually means.",
        "keywords": "event design Los Angeles, experience design LA, product launch Los Angeles, brand activation LA",
        "category": "Experience Design",
        "date": "2026-07-20",
        "body": """
<h2>Most event failures aren't creative failures. They're systems failures.</h2>
<p>Nobody's launch falls apart because the decor was ugly. It falls apart because the RSVP list didn't sync with check-in, the run-of-show existed only in someone's head, and three different vendors showed up at three different times because nobody owned the timeline. Los Angeles has no shortage of talented event stylists. It has a shortage of people who treat an event like the systems problem it actually is.</p>

<h2>What experience design actually requires</h2>
<ul>
  <li><strong>One owner for the whole thing</strong> — concept, logistics, tech, and run-of-show under one person, not five vendors each responsible for their own slice and nobody responsible for the seams between them.</li>
  <li><strong>Digital and physical as one system</strong> — the RSVP flow, the check-in process, and the physical space designed together, not bolted together at the last minute.</li>
  <li><strong>A real run-of-show</strong> — every minute planned, every handoff assigned to a specific person, so the day runs on a document instead of improvisation.</li>
  <li><strong>Data that goes somewhere</strong> — attendee information captured and flowing into the same CRM and marketing systems your business already runs on, not trapped in a check-in app nobody exports.</li>
</ul>

<h2>Why this is an engineering problem wearing a nicer outfit</h2>
<p>The skills that keep a production system running — anticipating failure points, building in redundancy, documenting every handoff — are the exact skills that keep an event from falling apart at 8pm. I've built the full digital identity and experience layer for brands like Eden's Candy, and coordinated the real-time, high-stakes logistics behind OutsideTonight's live nightlife event ingestion across Los Angeles. Different context, same discipline.</p>
<blockquote>An event isn't a party you plan. It's a system you run, once, in public, with no chance to patch it after it ships.</blockquote>

<h2>What LA businesses get wrong</h2>
<p>The instinct is to hire a decorator and a caterer and hope the pieces fit together on the day. The businesses that pull off activations that actually convert — that turn a launch into pipeline, not just photos — are the ones who had one person accountable for the whole experience from the first RSVP to the follow-up email.</p>

<h2>What to do next</h2>
<p>If you're planning a launch, activation, or event in Los Angeles and the plan currently lives across four group chats and a shared spreadsheet, I offer a free 30-minute consult to map out what a real run-of-show and systems plan would look like for your event.</p>
""",
    },
    {
        "slug": "cybersecurity-los-angeles.html",
        "title": "Cybersecurity for Los Angeles Businesses: What Actually Matters",
        "desc": "You're one bad day away from a breach and you don't know where the hole is. A former Tinder Security Engineer breaks down what to fix first.",
        "keywords": "cybersecurity Los Angeles, HIPAA compliance LA, security engineer Los Angeles, SIEM SOAR, zero trust architecture LA",
        "category": "Security Engineering",
        "date": "2026-07-10",
        "body": """
<h2>You're probably one bad day away from a breach</h2>
<p>I spent two years as Security Engineer II at Tinder in West Hollywood. Before that, I managed bug bounty programs at Verizon Media, ran HIPAA compliance at Children's Hospital Los Angeles, and did vulnerability remediation across 5,000+ assets at UCLA Health. I've seen what happens when security is an afterthought — and when it's built in from day one.</p>
<p>Here's the truth most Los Angeles businesses don't want to hear: <strong>you're probably one bad day away from a breach, and you don't know where the hole is.</strong> The gap between "we have a privacy policy" and "we actually pass a security audit" is enormous. And most businesses don't find out until it's too late.</p>

<h2>The 5 things that actually matter</h2>
<p>Forget the jargon. Here's what I check first when I audit a Los Angeles business:</p>

<h3>1. Who has access to what?</h3>
<p>Most businesses have no idea. Former employees still have access. Shared passwords. Admin rights handed out like candy. <strong>Zero Trust Architecture</strong> means verifying every access request, every time — not trusting someone because they're "inside the network." The fix is simple. Most businesses just haven't done it.</p>

<h3>2. Can you see a threat before it's too late?</h3>
<p>If you're not logging and monitoring, you can't detect a breach until it's already in the news. I deploy Splunk SIEM with custom detection rules so you see threats in real time, not three months later when a reporter calls.</p>

<h3>3. Can you respond in seconds, not days?</h3>
<p>At Tinder, I built SOAR playbooks that automated threat detection and incident response end-to-end. When a threat is detected, the system responds automatically — isolating the asset, blocking the IP, alerting the team. <strong>Increased SOC efficiency by 50%.</strong> A human reading an alert and deciding what to do takes three days. The playbook takes three seconds.</p>

<h3>4. Can you pass a real HIPAA audit?</h3>
<p>If you're a healthcare business in Los Angeles — a dental office, a clinic, a therapy practice — HIPAA compliance isn't optional. I've maintained 100% HIPAA audit compliance at Children's Hospital Los Angeles through precision SIEM tuning. The fines for non-compliance can destroy a practice. "We have a privacy policy" is not the same as "we pass an audit."</p>

<h3>5. Do you know where your holes are?</h3>
<p>You can't fix what you don't know about. I use Rapid7 and Tenable to find every hole in your environment, then prioritize remediation by risk level. At UCLA Health, I executed vulnerability remediation across 5,000+ assets ensuring HIPAA compliance across critical healthcare infrastructure.</p>

<h2>The LA healthcare problem</h2>
<p>Los Angeles has one of the highest concentrations of healthcare businesses in the country. From small dental practices in Torrance to therapy offices in Santa Monica — most are not HIPAA compliant and don't know it. The gap between "we have a privacy policy" and "we actually pass a HIPAA audit" is enormous.</p>
<blockquote>A system you can't audit isn't a system you can trust. That's the whole reason I do security the way I do — documented, verifiable, and built for the real world.</blockquote>

<h2>What to do before you get breached</h2>
<p>Don't wait for a breach to take security seriously. I offer a free 30-minute security assessment for Los Angeles businesses. I'll look at your environment, identify the biggest holes, and give you a written remediation plan. No scare tactics — just a straight answer about what's exposed and what to fix first.</p>
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
            price_clean = price.replace("Starting at $", "").replace("/mo", "").replace(",", "").strip()

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
                body_extra=svc["body_extra"].format(city=city["name"]),
                price=price,
                price_clean=price_clean,
                year=datetime.now().year,
                base_url=BASE_URL,
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
            base_url=BASE_URL,
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
