import Features from '@organisms/Features';
import IntroVideoSection from '@organisms/IntroVideoSection';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

const LandingPage = () => {
  const { recentSongs } = useSelector(state => state.content);
  const Artists = dynamic(() => import('@organisms/Artists'));
  const PlayListShare = dynamic(() => import('@organisms/LandingDescription'));
  const AlbumSlides = dynamic(() => import('@organisms/AlbumSlides'));

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
