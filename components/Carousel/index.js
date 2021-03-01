import MultiCarousel from 'react-slick';
import CarouselItem from '../CarouselItem';
import { CarouselContainer, CarouselGlobalStyle, Title, Text } from './style';
import useCarousel from '../../hooks/swr/useCarousel';
import {Spin} from 'antd';
import aggregateAlbum from '../../lib/aggregateAlbum';
import Spinner from '../Spinner';

const settings = {
  className: "slider variable-width",
  infinite: false, 
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide : 1,
  variableWidth: true
};

const Carousel = () => {

    const { data, error, loading } = useCarousel('melon');
    if(error){
      return <div>Error...</div>;
    }

    const albums = aggregateAlbum(data);

    return (
      <>
        <CarouselContainer>
        <Title level={4}>
          Melon Topchart
        </Title>
        <Text>
          { albums?.length || 0 } Albums
        </Text>
          <CarouselGlobalStyle />
          <MultiCarousel
            {...settings}
          >
              {
                loading
                ? <Spinner />
                :  albums.map((v, i) => (
                      <CarouselItem key={i} {...v} />
                  ))
              }
          </MultiCarousel>
        </CarouselContainer>
      </>
    )
}

export default Carousel;