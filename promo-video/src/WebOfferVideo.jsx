import { AbsoluteFill, Sequence } from "remotion";
import { ColdOpen } from "./scenes/ColdOpen.jsx";
import { Problem } from "./scenes/Problem.jsx";
import { Turn } from "./scenes/Turn.jsx";
import { Offer } from "./scenes/Offer.jsx";
import { Included } from "./scenes/Included.jsx";
import { Urgency } from "./scenes/Urgency.jsx";
import { CTA } from "./scenes/CTA.jsx";

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

const SCENES = [
  { Comp: ColdOpen, duration: 70 },
  { Comp: Problem, duration: 130 },
  { Comp: Turn, duration: 50 },
  { Comp: Offer, duration: 200 },
  { Comp: Included, duration: 170 },
  { Comp: Urgency, duration: 100 },
  { Comp: CTA, duration: 140 },
];

export const TOTAL_FRAMES = SCENES.reduce((sum, s) => sum + s.duration, 0);

export const WebOfferVideo = () => {
  let cursor = 0;

  return (
    <AbsoluteFill style={{ background: "#080a0e" }}>
      {SCENES.map(({ Comp, duration }, i) => {
        const from = cursor;
        cursor += duration;
        return (
          <Sequence key={i} from={from} durationInFrames={duration}>
            <Comp />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
