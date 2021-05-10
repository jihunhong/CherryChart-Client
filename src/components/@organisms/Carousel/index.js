import SiteSelector from '@atoms/SiteSelector';
import Spinner from '@atoms/Spinner';
import useCarousel from '@hooks/swr/useCarousel';
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
        <MultiCarousel {...settings}>
          {loading ? (
            <Spinner />
          ) : (
            albums.map((v, i) => <CarouselItem key={i} rank={v.rank} {...v.Music} />)
          )}
        </MultiCarousel>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
