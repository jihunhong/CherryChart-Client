import StarsBackground from '@atoms/StarsBackground';
import AlbumSlides from '@organisms/AlbumSlides';
import Artists from '@organisms/Artists';
import Features from '@organisms/Features';
import IntroVideoSection from '@organisms/IntroVideoSection';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const { recentSongs } = useSelector(state => state.content);
  return (
    <>
      <StarsBackground />
      <IntroVideoSection />
      <Features />
      <Artists dataSource={recentSongs} />
      <AlbumSlides dataSource={recentSongs} />
    </>
  );
};

export default LandingPage;
