import MultiCarousel from 'react-slick';
import { useSelector } from 'react-redux';
import CarouselItem from '../CarouselItem';
import { CarouselContainer, CarouselGlobalStyle, Title, Text } from './style';
import useCarousel from '../../hooks/swr/useCarousel';
import aggregateAlbum from '../../lib/aggregateAlbum';
import Spinner from '../Spinner';
import SiteSelector from '../SiteSelector';

const settings = {
  className: 'slider variable-width',
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: 1,
  variableWidth: true,
};

const Carousel = () => {
  const { site } = useSelector(state => state.config);
  const { data, error, loading } = useCarousel(site);
  if (error) {
    return <div>Error...</div>;
  }

  const albums = aggregateAlbum(data);

  return (
    <>
      <CarouselContainer>
        <Title level={4}>
          <SiteSelector />
        </Title>
        <Text>{albums?.length || 0} Albums</Text>
        <CarouselGlobalStyle />
        <MultiCarousel {...settings}>{loading ? <Spinner /> : albums.map((v, i) => <CarouselItem key={i} {...v} />)}</MultiCarousel>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
