import AlbumSlides from '@organisms/AlbumSlides';
import Artists from '@organisms/Artists';
import Features from '@organisms/Features';
import IntroVideoSection from '@organisms/IntroVideoSection';
import PlayListShare from '@organisms/LandingDescription';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const { recentSongs } = useSelector(state => state.content);
  return (
    <>
      <IntroVideoSection />
      <Features />
      <Artists dataSource={recentSongs} />
      <PlayListShare />
      <AlbumSlides dataSource={recentSongs} />
    </>
  );
};

export default LandingPage;
