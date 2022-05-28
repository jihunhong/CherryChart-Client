import AlbumSlides from '@organisms/AlbumSlides';
import Features from '@organisms/Features';
import IntroVideoSection from '@organisms/IntroVideoSection';
import PlayListShare from '@organisms/LandingDescription';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const Artists = dynamic(() => import('@organisms/Artists'), { ssr: false, loading: () => null });

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
