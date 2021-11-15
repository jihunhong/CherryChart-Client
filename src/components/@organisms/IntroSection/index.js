import { LANDING_BACKGROUND_VIDEO_ID } from '@config/settings';
import YouTube from 'react-youtube';
import { IntroSectionContainer, VideoWrapper } from './style';

const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <VideoWrapper>
        <YouTube
          width="50%"
          videoId={LANDING_BACKGROUND_VIDEO_ID}
          opts={{ playerVars: { autoplay: 1, mute: 1, controls: 0, loop: 1, showinfo: 0 } }}
        />
      </VideoWrapper>
    </IntroSectionContainer>
  );
};

export default IntroSection;
