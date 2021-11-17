import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { LANDING_BACKGROUND_VIDEO_ID } from '@config/settings';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import YouTube from 'react-youtube';
import { IntroSectionContainer, LetterBox, VideoWrapper } from './style';

const IntroVideoSection = () => {
  const [currentPlayed, setCurrentPlayed] = useState(
    Math.floor(Math.floor(Math.random() * 10) % 3),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.floor(Math.random() * 10) % 3);
      setCurrentPlayed(randomNumber);
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <IntroSectionContainer>
      <LetterBox>
        <Title className="site-title" level={1} text={'Cherry Chart'} />
        <Text
          className="site-describe"
          text={"Enjoy your music life and Kpop charts on YouTube. It's free!"}
        />
        <a className="owner-link" href="https://github.com/jihunhong">
          {
            <>
              2021 · jihunhong
              <FaGithub fill="#fff" />
            </>
          }
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
            },
          }}
        />
      </VideoWrapper>
    </IntroSectionContainer>
  );
};

export default IntroVideoSection;
