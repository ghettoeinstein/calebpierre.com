import { loadFont as loadSpaceGrotesk } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadIBMPlexMono } from "@remotion/google-fonts/IBMPlexMono";
import { loadFont as loadIBMPlexSans } from "@remotion/google-fonts/IBMPlexSans";

const { fontFamily: spaceGroteskFamily } = loadSpaceGrotesk("normal", {
  weights: ["500", "600", "700"],
});
const { fontFamily: monoFamily } = loadIBMPlexMono("normal", {
  weights: ["400", "500", "600"],
});
const { fontFamily: sansFamily } = loadIBMPlexSans("normal", {
  weights: ["400", "500", "600"],
});

export const FONT_FAMILY = {
  display: spaceGroteskFamily,
  mono: monoFamily,
  body: sansFamily,
};
