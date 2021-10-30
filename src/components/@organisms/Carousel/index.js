import SiteSelector from '@atoms/SiteSelector';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import aggregateAlbum from '@lib/aggregateAlbum';
import CarouselItem from '@molecules/CarouselItem';
import { useSelector } from 'react-redux';
import MultiCarousel from 'react-slick';
import { CarouselGlobalStyle, MainIntroContainer } from './style';

const settings = {
  className: 'slider variable-width',
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: 1,
  variableWidth: true,
};

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
        <MultiCarousel {...settings}>
          {albums.map((v, i) => (
            <CarouselItem key={i} {...v.Music} />
          ))}
        </MultiCarousel>
      </MainIntroContainer>
    </>
  );
};

export default Carousel;
