// White / black / red only — red is the single system-marker color.
// Legacy keys (yellow/blue/green/paper/bg/panel...) are kept so existing
// component code didn't need a rewrite; they all resolve to the same
// disciplined palette now instead of a multi-color dark theme.
export const C = {
  black: "#0A0A0A", white: "#FFFFFF", red: "#E8382D", yellow: "#E8382D", blue: "#E8382D", green: "#E8382D",
  paper: "#F4F2EE", offWhite: "#F4F2EE", bg: "#FFFFFF", bgSoft: "#F4F2EE", panel: "#FFFFFF", panelRaised: "#F4F2EE",
  ink: "#0A0A0A", inkSoft: "#5C5C5C", steel: "#5C5C5C", steelDark: "#3A3A3A",
  line: "rgba(10,10,10,0.12)", glassBorder: "rgba(10,10,10,0.14)",
  redGlow: "rgba(232,56,45,0.12)", yellowGlow: "rgba(232,56,45,0.12)", blueGlow: "rgba(232,56,45,0.12)",
  glass: "rgba(10,10,10,0.03)", glassHover: "rgba(10,10,10,0.05)", redDeep: "#A52211", redDim: "rgba(232,56,45,0.08)",
  ctaDark: "#0A0A0A", focusRing: "#E8382D",
  // dark CTA-band + link tokens — repurposed onto the disciplined red/black/white system
  navy: "#0A0A0A", navyText: "#FFFFFF", navyPanel: "#161616", navyLine: "rgba(255,255,255,0.14)",
  wire: "#E8382D", riskRed: "#E8382D", greenDim: "rgba(232,56,45,0.08)",
};

export const F = {
  display: "'General Sans', 'Inter', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

export const EASE = {
  smooth: "cubic-bezier(0.32, 0.72, 0, 1)", swift: "cubic-bezier(0.16, 1, 0.3, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)", pop: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
};

export const BP = { xs: 0, sm: 480, md: 768, lg: 1024 };
