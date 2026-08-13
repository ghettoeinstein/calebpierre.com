import { Composition } from "remotion";
import { WebOfferVideo, TOTAL_FRAMES, FPS, WIDTH, HEIGHT } from "./WebOfferVideo.jsx";

export const RemotionRoot = () => {
  return (
    <Composition
      id="WebOffer"
      component={WebOfferVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
