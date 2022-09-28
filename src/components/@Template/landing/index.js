import AlbumSlides from '@organisms/AlbumSlides';
import Artists from '@organisms/Artists';
import Features from '@organisms/Features';
import IntroVideoSection from '@organisms/IntroVideoSection';
import PlayListShare from '@organisms/LandingDescription';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const { chartData } = useSelector(state => state.chart);
  const { artistList } = useSelector(state => state.artist);

  return (
    <>
      <IntroVideoSection />
      <Features />
      <Artists dataSource={artistList} />
      <PlayListShare />
      <AlbumSlides dataSource={chartData} />
    </>
  );
};

export default LandingPage;
