# CalebPierre.com — Content Claim Registry

Created as part of the Enterprise of One / CalebOS messaging revamp (see the source PRD in `~/Downloads/calebpierre-com-enterprise-of-one-messaging-prd.md`). This is a human validation checklist, not a runtime data file — the site is a static Vite build with no content data layer, so approved values are hardcoded directly into `src/App.jsx`, `index.html`, `resume.html`, and related components.

| Claim ID | Claim | Status | Publication behavior used |
| --- | --- | --- | --- |
| `venture_count` | Caleb runs a specific number of ventures | Pending | Safe fallback published: "CalebOS is the operating method for a portfolio of ventures" — no number stated. |
| `solo_operation` | Caleb runs ventures alone | Pending | No "solo" language published. Homepage does not claim he works without collaborators, contractors, or vendors. |
| `experience_years` | 20+ years in IT and systems, since 2004 | Carried forward (pre-existing public claim) | Published as-is in the hero authority bar, resume metadata, and resume intro — this was already live on the site before this revamp; treated as an established claim, not a new one. |
| `tinder_role`, `verizon_role`, `chla_role` | Production work at Tinder/Match Group, Verizon Media, Children's Hospital LA | Carried forward (pre-existing public claim); percentage outcomes removed | Employer names and role scope kept per existing site copy. All invented performance metrics (e.g. "50% SOC efficiency increase," "100% audit compliance," "5,000+ assets") were removed from the Career Evidence section and replaced with a plain domain label (Consumer technology / Media / Healthcare). |
| `urm_role`, `hubble_role` | Work associated with Union Rescue Mission / Hubble Studio | Removed from homepage | These appeared only in the old "Selected outcomes" case-study cards, which were cut when the Personal Origin section replaced the case-study grid. Not carried into new copy since role/scope could not be reverified in this pass. |
| `calebos_practice` | CalebOS is used across Caleb's venture portfolio | Approved-qualitative | Published only in qualitative form ("the method I built by practicing it across my own ventures first"). No performance or scale claim attached. |
| `book_status` | *Enterprise of One* (the book) is in development | Omitted this pass | Per explicit direction, all "author" and book-in-development language, and the homepage Field Notes section, were left out of this pass entirely. |
| Evidence-section stats | "96.4% validated runs," "$0.06 median execution cost," etc. | Removed | These were fabricated-looking performance stats with no available source. The entire interactive evidence table was removed from the homepage. |
| Cost calculator | "What is manual work actually costing you?" ROI tool | Removed | Tied to the labor-savings/automation-implementation sales frame the PRD explicitly moves away from. Removed along with its section. |

## Unresolved decisions carried as safe fallbacks

These match the PRD's Section 15 confirmation sheet. Nothing below blocks publication — each already has safe copy live — but stronger claims should only replace the fallback once Caleb confirms:

1. Exact venture count/entities — currently unstated.
2. Whether "solo" is accurate, or whether to name collaborators/contractors — currently unstated either way.
3. Whether *Enterprise of One* the book is real and may be referenced publicly — currently omitted.
4. Which prior organizations may be named and with what exact scope — currently limited to employer name + one-line scope, no outcome metrics.
5. Workshop formats Caleb can reliably deliver — currently uses the PRD's proposed formats verbatim (half-day/full-day/multi-session); not independently verified.
6. Whether advisory means strategy-only vs. fractional technical leadership — currently described broadly per PRD 6.7 wording.

## Last reviewed

2026-08-25, as part of the initial Enterprise of One homepage revamp.
