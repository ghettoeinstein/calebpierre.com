// Design tokens — calebpierre.com
// Business-card-matched design: white / black / red
// Bold, clean, high-contrast. One type system: Inter + JetBrains Mono.

export const C = {
  // Color palette — stark, business-card primaries
  black: "#0A0A0A",
  white: "#FFFFFF",
  red: "#E8382D",
  redDark: "#B8241C",
  yellow: "#FFD93D",
  blue: "#0EA5E9",
  green: "#22C55E",
  purple: "#8B5CF6",

  // Surfaces
  paper: "#FAFAFA",
  bg: "#FFFFFF",
  bgSoft: "#F5F5F5",
  panel: "#FFFFFF",
  panelRaised: "#F5F5F5",

  // Dark accent surface — reserved for the interlude section + footer only
  dark: "#0A0A0A",
  darkPanel: "#141414",

  // Text — true black/white, not softened slate
  ink: "#0A0A0A",
  inkSoft: "#3A3A3A",
  steel: "#6B6B6B",
  steelDark: "#8A8A8A",

  // Borders / lines
  line: "#D9D9D9",
  lineStrong: "#0A0A0A",
  glassBorder: "#D9D9D9",

  // Accent glows (soft) — red only, no pastel system
  redGlow: "rgba(232, 56, 45, 0.12)",
  yellowGlow: "rgba(255, 217, 61, 0.12)",
  blueGlow: "rgba(14, 165, 233, 0.10)",
  glass: "rgba(0, 0, 0, 0.02)",
  glassHover: "rgba(0, 0, 0, 0.04)",

  // Deep accents
  redDeep: "#990400",
  redDim: "#F6D9D6",

  // CTA
  ctaDark: "#0A0A0A",
  focusRing: "#E8382D",
};

export const F = {
  // Display: Inter 800-900 for bold, business-card-energy headlines
  display: "'Inter', 'Helvetica Neue', sans-serif",
  // Body: Inter — the workhorse
  body: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  // Mono: JetBrains Mono — ONLY for tiny labels/tags, never body copy
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

// Easing — kept identical
export const EASE = {
  smooth: "cubic-bezier(0.32, 0.72, 0, 1)",
  swift: "cubic-bezier(0.16, 1, 0.3, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  pop: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
};

// Breakpoints — kept identical
export const BP = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
};
