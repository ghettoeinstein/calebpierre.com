// Design tokens — calebpierre.com
// Keith Haring inspired: bold black lines, primary colors, street-art energy
// Same Schwartz copy, completely new visual skin

export const C = {
  // Keith Haring palette — bold, primary, unapologetic
  black: "#0A0A0A",       // primary text, bold outlines, ticker bg
  white: "#FFFFFF",       // page background
  red: "#E8382D",         // primary CTA, energy accent
  yellow: "#FFD93D",      // Haring yellow — highlights, hover states, accents
  blue: "#0EA5E9",        // Haring blue — secondary accents, links
  green: "#22C55E",       // Haring green — success states, active items
  paper: "#FAFAF8",       // warm off-white secondary surface
  line: "#0A0A0A",        // bold black lines (Haring's signature)
  redDim: "#F6D9D6",
  
  // Legacy aliases
  bg: "#FFFFFF",
  bgSoft: "#FAFAF8",
  panel: "#FAFAF8",
  panelRaised: "#F0F0EE",
  ink: "#0A0A0A",
  inkSoft: "#444444",
  steel: "#777777",
  steelDark: "#AAAAAA",
  redGlow: "rgba(232, 56, 45, 0.12)",
  redDeep: "#990400",
  glass: "rgba(0, 0, 0, 0.03)",
  glassHover: "rgba(0, 0, 0, 0.06)",
  glassBorder: "#0A0A0A",
  yellowGlow: "rgba(255, 217, 61, 0.15)",
  blueGlow: "rgba(14, 165, 233, 0.12)",
};

export const F = {
  // Display: bold, heavy, condensed — Haring's lettering energy
  display: "'Archivo Black', 'Inter', 'Helvetica Neue', sans-serif",
  // Body: clean workhorse
  body: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  // Mono: terminal energy
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

// Easing — playful but controlled
export const EASE = {
  smooth: "cubic-bezier(0.32, 0.72, 0, 1)",
  swift: "cubic-bezier(0.16, 1, 0.3, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  // Haring energy — quick, springy, alive
  pop: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
};

export const BP = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
};
