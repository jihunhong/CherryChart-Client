import MultiCarousel from 'react-slick';
import CarouselItem from '../CarouselItem';
import { CarouselContainer, CarouselGlobalStyle, Title, Text } from './style';
import useCarousel from '../../hooks/swr/useCarousel';
import {Spin} from 'antd';

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

    if(loading){
      return <Spin />
    }

    console.log(data);

    return (
      <>
        <CarouselContainer>
        <Title level={4}>
          Melon Topchart
        </Title>
        <Text>
          { data.length } Albums
        </Text>
          <CarouselGlobalStyle />
          <MultiCarousel
            {...settings}
          >
              { data.map((v, i) => (
                  <CarouselItem key={i} {...v} />
              ))}
          </MultiCarousel>
        </CarouselContainer>
      </>
    )
}

export default Carousel;