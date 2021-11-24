import SiteSelector from '@atoms/SiteSelector';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { chartCarouselSetting } from '@config/carousel';
import aggregateAlbum from '@lib/aggregateAlbum';
import CarouselItem from '@molecules/CarouselItem';
import { useSelector } from 'react-redux';
import MultiCarousel from 'react-slick';
import { CarouselGlobalStyle, MainIntroContainer } from './style';

const Carousel = ({ title, subtext }) => {
  const { chartData } = useSelector(state => state.chart);

  const albums = aggregateAlbum(chartData);

  return (
    <>
      <MainIntroContainer>
        <Title level={4}>
          <SiteSelector />
        </Title>
        <Text text={`${albums?.length || 0} Albums`} />
        <CarouselGlobalStyle />
        <MultiCarousel {...chartCarouselSetting}>
          {albums.map((v, i) => (
            <CarouselItem key={i} {...v.Music} />
          ))}
        </MultiCarousel>
      </MainIntroContainer>
    </>
  );
};

export default Carousel;
