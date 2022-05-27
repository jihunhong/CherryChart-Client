import AlbumSlides from '@organisms/AlbumSlides';
import Artists from '@organisms/Artists';
import Features from '@organisms/Features';
import IntroVideoSection from '@organisms/IntroVideoSection';
import PlayListShare from '@organisms/LandingDescription';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const { chartData } = useSelector(state => state.chart);

  return (
    <>
      <IntroVideoSection />
      <Features />
      <Artists dataSource={chartData} />
      <PlayListShare />
      <AlbumSlides dataSource={chartData} />
    </>
  );
};

export default LandingPage;
