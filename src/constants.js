// Design tokens — calebpierre.com Responsive Design System
// Strict spec: white/red/black retro-futuristic identity
// Token names follow the spec exactly

export const C = {
  // Color tokens (spec-exact)
  black: "#0A0A0A",       // primary text, ticker background
  white: "#FFFFFF",       // page background
  red: "#E8382D",         // primary CTA, accents, eyebrow labels
  paper: "#F5F4F2",       // secondary surface (cards, input fields)
  line: "#D8D6D2",        // hairline borders/dividers
  redDim: "#F6D9D6",      // hover/disabled tint of red (never a solid substitute)

  // Legacy aliases (for backward compat with existing components)
  bg: "#FFFFFF",
  bgSoft: "#F5F4F2",
  panel: "#F5F4F2",
  panelRaised: "#ECEAE8",
  ink: "#0A0A0A",
  inkSoft: "#444444",
  steel: "#777777",
  steelDark: "#AAAAAA",
  redGlow: "rgba(232, 56, 45, 0.08)",
  redDeep: "#990400",
  glass: "rgba(0, 0, 0, 0.02)",
  glassHover: "rgba(0, 0, 0, 0.04)",
  glassBorder: "#D8D6D2",
  // Keep old red alias pointing to new token
  red: "#E8382D",
  line: "#D8D6D2",
  lineBright: "#C0BEBA",
};

export const F = {
  // Display: condensed grotesk for H1/H2 only (tight tracking)
  display: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  // Body: workhorse humanist sans for paragraphs, nav, buttons
  body: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  // Utility/mono: the signature monospace for eyebrows and ticker
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

// Easing curves — Apple-caliber, no linear, no bounce/elastic defaults
export const EASE = {
  smooth: "cubic-bezier(0.32, 0.72, 0, 1)",  // Apple feel
  swift: "cubic-bezier(0.16, 1, 0.3, 1)",     // Fast out
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Used sparingly
};

// Breakpoint constants (for JS conditional rendering if needed)
export const BP = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
};
