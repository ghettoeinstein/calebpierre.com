---
format: 1080x1080
duration: 40s
message: "Caleb Pierre just relaunched as your Business Automation Engineer — one operator, seven systems, live now."
arc: Hook (pain+tease) → Product Reveal → Feature Flash → Proof → Offer → CTA → Brand Outro (PAS blended with a direct-response offer close)
audience: LA small business owners who need a website or help running their business, seeing this on Instagram/LinkedIn
mode: collaborative
music: confident, punchy, upbeat launch energy — driving but not aggressive
---

## Video direction

- **Palette system** (from `frame.md`, remixed brand): canvas is white/off-white (`#FFFFFF` / `#FAFAFA`), ink is true black (`#0A0A0A`), and red (`#E8382D`) is the single loud accent — used surgically, once per frame, only on the beat's payoff (a headline's punchline, the price, the CTA button, the URL). Frame 7 inverts to a black canvas with white/red ink as the closing note. Never decorate with red; it only ever marks the one thing that matters in that frame. No off-brand gradients, no floating bokeh, no stock "AI" purple-blue glow.
- **Motion grammar**: smooth long-tail settles only — `power3` default (→ `spring-pop-entrance` in its smooth mode), never `back.out` / `bounce.out` / `elastic.out`. Every frame reveals **sequentially, timed to its own voiceover cues** — nothing dumps at t=0 beyond what the VO is saying that instant; each further line/card/number arrives on its spoken cue. Internal seams (a card swap, a line change) are velocity-matched cuts per `cut-catalog.md` — zoom-through / inverse-zoom-through for an arrival or state change, cut-the-curve for a same-direction handoff — never a hard slideshow cut.
- **Rhythm / held-frame allocation**: Frames 2 (the thesis: "Your Business Automation Engineer") and 5 (the offer: "$250") are the video's two deliberate breather holds — once their payoff lands, the frame goes fully still (subtle jitter at most) and lets it read, no continuing motion. Frames 1, 3, 4, and 6 carry the build-energy — sequential reveals with real forward motion. Frame 7 is the calm final hold — the whole video decelerates into it.
- **Negative list**: no bouncy/overshoot entrances; no lazy breathing (no circular scale-pulse "aliveness"); no slow pan/push in any frame's back half; no front-load-then-freeze (nothing may dump the whole frame in the first 25%); no browser chrome, nav bars, or generic decorative shapes; no confetti or cheap stock-transition packs.

## Frame 1 — Not anymore

- scene: Bold black type punches in on a white field, the pain named and undone in one breath
- voiceover: "Is your website doing nothing for you? Not anymore."
- duration: 4.075s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Pain validation
- beat: anxiety → relief tease
- blueprint: kinetic-type-beats (Adapt)
- asset_candidates:
- sfx: impact-soft (on the payoff arrival)

narrativeRole: Names the shared pain — a website that just sits there — and resolves it in the same breath, so the promise lands before anything else does.
keyMessage: Your website should be working for you, not doing nothing.

Adapt: keep kinetic-type-beats' word-driven build; the "swap" becomes a two-line escalation rather than a token cycle — the question settles, then the payoff arrives on top of it as an arrival beat, not a replacement.

Scene 1 (0.0–2.4s): off-white canvas; the question ("Is your website doing nothing for you?") enters via **per-word staggered reveal** (`dynamic-content-sequencing`), upper-third, black ink, smooth long-tail settle (`power3`). Nothing else on screen yet.
Scene 2 (2.4–5.0s): as the VO lands "Not anymore," the red payoff line arrives via **inverse zoom-through** (`cut-catalog.md` — arrives oversized, retracts into its resting position beneath the question) — the frame's one accent hit. Question line stays settled above it, unchanged. Holds to the cut; at most **subtle jitter** (`sine-wave-loop`, low amplitude).

## Frame 2 — Meet your engineer

- scene: The CP mark and headline build in bold red/black type — the message stated plainly
- voiceover: "Meet Caleb Pierre. Your Business Automation Engineer."
- duration: 4.493s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/02-product-intro.html
- type: product_intro
- persuasion: Authority by association
- beat: curiosity → confidence
- blueprint: kinetic-type-beats (Adapt)
- asset_candidates:
- sfx: chime (soft, on the title's arrival)

narrativeRole: Introduces the person and the promise together — the video's thesis, stated once, plainly.
keyMessage: One person. One title. Business Automation Engineer.

Adapt: the "Introducing…" name-drop pattern, cast as three sequential arrivals (mark → name → title) instead of one hard cut to a logo — this is the video's thesis beat, so it earns the extra second of build.

Scene 1 (0.0–1.0s): white canvas; the CP mark **self-draws** (`svg-path-draw`), centered upper area, smooth settle.
Scene 2 (1.0–3.0s): as the VO says "Meet Caleb Pierre," the name enters via **per-word staggered reveal**, black ink, centered beneath the mark, `power3` settle. Mark holds steady above it.
Scene 3 (3.0–6.0s): as the VO reaches "Your Business Automation Engineer," the title line arrives via **inverse zoom-through** — oversized entry, retracts to rest beneath the name, red, the frame's one accent. This is a **designated breather hold**: once it lands, everything settles fully still — no continuing motion, at most subtle jitter on the mark.

## Frame 3 — Everything, one person

- scene: Seven service tiles (Web Design, AI, Automation, Marketing, Support, Events, Security) self-assemble in a fast cascade into one grid
- voiceover: "Web design. AI. Automation. Marketing. Support. Events. Security. All from one person."
- duration: 8.882s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/03-services.html
- type: feature_showcase
- persuasion: Value stacking
- beat: awe
- blueprint: grid-card-assemble (Reproduce)
- asset_candidates:
- sfx: soft tick per tile; impact-soft on the payoff line

narrativeRole: Proves range in one fast breath — seven jobs, one operator, no handoffs — as a single beat, not seven.
keyMessage: Seven services. One person does it all.

Scene 1 (0.0–0.6s): off-white canvas; the grid surface seats (a subtly lifted panel — 2 depth layers: background + grid surface); the first tile ("Web Design") pops into its cell via **cluster→outward expansion** (`center-outward-expansion`), `power3` settle.
Scene 2 (0.6–4.4s): the remaining six tiles reveal **one per spoken word** — AI, Automation, Marketing, Support, Events, Security — each landing via the same cluster→outward expansion into its grid cell, left-to-right/top-to-bottom, timed to its own VO cue (never dumped together). Grid density ≥40% of canvas by the last tile.
Scene 3 (4.4–6.0s): as the VO lands "All from one person," the red payoff line arrives beneath the grid via **per-word staggered reveal**, `power3` settle. Full grid + payoff hold still; subtle jitter at most.

## Frame 4 — Already live

- scene: Three near-still project cards hard-cut in sequence — Eden's Candy, Hummingbyrd, OutsideTonight
- voiceover: "Real sites. Real results. Eden's Candy. Hummingbyrd. OutsideTonight. Already live."
- duration: 9.456s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-proof.html
- type: social_proof
- persuasion: Show-don't-tell proof
- beat: trust
- blueprint: titlecard-reveal (Adapt)
- asset_candidates:
- sfx: soft whoosh per card

narrativeRole: Grounds the claim in real, working sites — not mockups, not promises.
keyMessage: These are real sites, already live, right now.

Adapt: keep titlecard-reveal's calm, near-still card language, but stage the three cards as a vertical stack that fills in one at a time (matching the confirmed sketch) rather than a hard-cut chain — each card's entrance timed to its own name being spoken.

Scene 1 (0.0–1.4s): off-white canvas; red label ("Real sites. Real results.") enters via **per-word staggered reveal**, upper area, `power3` settle.
Scene 2 (1.4–3.4s): as the VO says "Eden's Candy," its card slides into the top stack slot via **cut-the-curve** (`cut-catalog.md`, rightward entry decelerating to rest), black ink on off-white, `power3`.
Scene 3 (3.4–5.4s): as the VO says "Hummingbyrd," its card enters the middle slot the same way — same direction, matched velocity to the prior card's settle (a consistent, repeatable rhythm across the stack).
Scene 4 (5.4–7.0s): as the VO says "OutsideTonight" then lands "Already live," the third card enters the bottom slot; all three cards + label hold fully still together — the proof reads as one settled, confident stack. Subtle jitter at most.

## Frame 5 — The offer

- scene: "$250" lands as the one hero number on screen, with "new clients only" and "no hidden fees" framing it
- voiceover: "Right now, new clients get a full website for just $250. No hidden fees."
- duration: 7.602s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/05-offer.html
- type: benefit_highlight
- persuasion: Scarcity/urgency + Value stacking
- beat: FOMO → excitement
- blueprint: dataviz-countup (Adapt)
- asset_candidates:
- sfx: riser building into the count-up; impact on "$250" landing

narrativeRole: Delivers the one irresistible, limited offer — the whole reason to act today, not just admire the relaunch.
keyMessage: New clients: a full website for $250. Right now.

Adapt: dataviz-countup's "the numbers are the hero" signature move carried through as a value-scaled counter on the price itself — no chart, no ring, just the number counting up into its own dominant scale.

Scene 1 (0.0–1.6s): off-white canvas; "New clients only" enters via **per-word staggered reveal**, small, upper area, black ink, `power3` settle.
Scene 2 (1.6–4.0s): as the VO says "for just $250," the price counts up via **value-scaled counter** (`counting-dynamic-scale` — the number climbs and its scale grows with it), landing dead-center, huge, red — the frame's one loud accent and its whole reason for being.
Scene 3 (4.0–6.0s): as the VO lands "No hidden fees," the fine-print line arrives via **per-word staggered reveal** beneath the price, black, `power3` settle. This is the video's **second designated breather hold** — once the fine print lands, everything stops; no motion after. Subtle jitter at most.

## Frame 6 — Book it

- scene: The brand mark condenses into a single bold CTA button, a cursor arrives and clicks it
- voiceover: "Spots are limited. Book your free call today."
- duration: 3.866s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-cta.html
- type: cta
- persuasion: Scarcity/urgency + Risk reversal
- beat: urgency-to-act
- blueprint: cta-morph-press (Reproduce)
- asset_candidates:
- sfx: click (on the button press)

narrativeRole: Turns the offer into one clear, low-risk action — a free call, not a purchase.
keyMessage: Book a free call. Do it today.

Scene 1 (0.0–1.6s): off-white canvas; "Spots are limited." enters via **per-word staggered reveal**, upper area, black ink, `power3` settle.
Scene 2 (1.6–3.4s): as the VO says "Book your free call today," the red CTA button arrives via **scale-swap** (`scale-swap-transition` — condenses in from a smaller mark-like state to its full button size), centered, `power3` settle — the frame's one accent.
Scene 3 (3.4–5.0s): a cursor moves to the button and **presses** it (`press-release-spring` — compression then spring recovery, the one sanctioned tactile exception to the smooth-only rule, since it's a deliberate physical click, not a bouncy entrance). Holds on the pressed state; subtle jitter at most after.

## Frame 7 — calebpierre.com

- scene: The CP mark draws itself in and the wordmark "calebpierre.com" completes, held to close
- voiceover: "calebpierre.com"
- duration: 1.776s
- transition_in: crossfade
- status: animated
- src: compositions/frames/07-outro.html
- type: branding
- persuasion: Authority by association
- beat: inevitability
- blueprint: logo-assemble-lockup (Adapt)
- asset_candidates:
- sfx: soft chime (on the mark completing)

narrativeRole: Leaves the viewer with the one thing to remember and act on: the URL.
keyMessage: calebpierre.com — go there now.

Adapt: logo-assemble-lockup's "mark comes to exist" signature, cast on a black canvas as the video's final decelerating beat — the whole film settles into this hold.

Scene 1 (0.0–1.6s): black canvas; the CP mark **self-draws** (`svg-path-draw`), white stroke, centered upper area, `power3` settle.
Scene 2 (1.6–4.0s): as the mark completes, "calebpierre.com" arrives via **inverse zoom-through** — oversized entry, retracts to rest beneath the mark, red, the video's final accent. This is the true final frame: it earns a real settle-and-hold exit — fully still once landed, at most subtle jitter, nothing else moves.
