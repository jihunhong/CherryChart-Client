import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { LANDING_BACKGROUND_VIDEO_ID } from '@config/settings';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaGithub, FaGlobeAsia } from 'react-icons/fa';
import { IntroSectionContainer, LetterBox, VideoWrapper } from './style';

const YouTube = dynamic(() => import('react-youtube'), {
  ssr: false,
  loading: () => <div>...</div>,
});
const IntroVideoSection = () => {
  const [currentPlayed] = useState(Math.floor(Math.random() * 10) % 2);

  return (
    <IntroSectionContainer>
      <div className="container">
        <LetterBox>
          <Title className="site-title" level={1} text="Cherry Chart" />
          <Text
            className="site-describe"
            text="Enjoy your music life and Kpop charts on YouTube."
          />
          <a className="owner-link" href="https://github.com/jihunhong">
            <>
              2021 · jihunhong
              <FaGithub fill="#fff" />
            </>
          </a>
        </LetterBox>
        <VideoWrapper>
          <YouTube
            videoId={LANDING_BACKGROUND_VIDEO_ID[currentPlayed]}
            opts={{
              playerVars: {
                autoplay: 1,
                mute: 1,
                controls: 0,
                loop: 1,
                showinfo: 0,
                disablekb: 1,
                rel: 0,
                playlist: LANDING_BACKGROUND_VIDEO_ID[currentPlayed],
              },
            }}
          />
        </VideoWrapper>
      </div>
    </IntroSectionContainer>
  );
};

export default IntroVideoSection;
