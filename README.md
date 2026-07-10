# calebpierre.com

Personal agency website for Caleb Pierre — Remote Systems Agency.

Built with Vite + React + Tailwind CSS. Deploys to GitHub Pages automatically on push to `main`.

## Stack

- **Vite** — build tool & dev server
- **React 19** — UI framework
- **Tailwind CSS 3** — utility classes (used for layout/responsive)
- **lucide-react** — icons
- Inline styles + design tokens — the site's visual identity (paper/black/red, Space Grotesk / IBM Plex) lives in `src/constants.js`

## Project structure

```
src/
  constants.js          # Design tokens (colors C, fonts F)
  App.jsx               # Root component — assembles all sections
  main.jsx              # Entry point
  index.css             # Tailwind directives + custom CSS animations
  hooks/
    useReveal.jsx       # Scroll reveal hook + Reveal wrapper component
  components/
    GlitchMark.jsx      # "CP" circuit mark
    BootSequence.jsx    # Terminal boot animation
    Ticker.jsx          # Scrolling service ticker
    Nav.jsx             # Fixed navigation bar
    Hero.jsx            # Hero section with boot sequence + headline
    Agitation.jsx       # Error/warning log entries
    Diagnostic.jsx      # Interactive 3-question diagnostic quiz
    Services.jsx        # 6 service cards with scan sweep
    Process.jsx         # 4-step process timeline
    About.jsx           # About / trust section
    FinalCTA.jsx        # Red CTA section
    Footer.jsx         # Footer
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.
