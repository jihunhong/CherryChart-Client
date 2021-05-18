import SiteSelector from '@atoms/SiteSelector';
import aggregateAlbum from '@lib/aggregateAlbum';
import CarouselItem from '@molecules/CarouselItem';
import { useSelector } from 'react-redux';
import MultiCarousel from 'react-slick';
import { CarouselContainer, CarouselGlobalStyle, Text, Title } from './style';

const settings = {
  className: 'slider variable-width',
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: 1,
  variableWidth: true,
};

const Carousel = () => {
  const { chartData } = useSelector(state => state.chart);

  const albums = aggregateAlbum(chartData);

  return (
    <>
      <CarouselContainer>
        <Title level={4}>
          <SiteSelector />
        </Title>
        <Text>{albums?.length || 0} Albums</Text>
        <CarouselGlobalStyle />
        <MultiCarousel {...settings}>
          {albums.map((v, i) => (
            <CarouselItem key={i} rank={v.rank} {...v.Music} />
          ))}
        </MultiCarousel>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
