// Design tokens — trillion-dollar dark palette
// OLED black base, fluid accent reds, glass surfaces

export const C = {
  // Backgrounds
  bg: "#050505",
  bgSoft: "#0A0A0A",
  panel: "#0E0E0E",
  panelRaised: "#131313",
  // Text
  ink: "#F5F5F5",
  inkSoft: "#C4C4C4",
  steel: "#6A6A6A",
  steelDark: "#3A3A3A",
  // Accents
  red: "#E10600",
  redGlow: "rgba(225, 6, 0, 0.4)",
  redDeep: "#7A0000",
  // Lines / glass
  line: "rgba(255, 255, 255, 0.06)",
  lineBright: "rgba(255, 255, 255, 0.12)",
  glass: "rgba(255, 255, 255, 0.03)",
  glassHover: "rgba(255, 255, 255, 0.06)",
  glassBorder: "rgba(255, 255, 255, 0.08)",
};

export const F = {
  display: "'Space Grotesk', system-ui, sans-serif",
  body: "'IBM Plex Sans', system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

// Easing curves — spring physics, not browser defaults
export const EASE = {
  smooth: "cubic-bezier(0.32, 0.72, 0, 1)",
  swift: "cubic-bezier(0.16, 1, 0.3, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};
