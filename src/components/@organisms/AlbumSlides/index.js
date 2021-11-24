import { albumSlidesSetting } from '@config/carousel';
import CarouselItem from '@molecules/CarouselItem';
import { Row } from 'antd';
import MultiCarousel from 'react-slick';
import { AlbumSlidesContainer } from './style';

const AlbumSlides = ({ dataSource }) => {
  return (
    <AlbumSlidesContainer>
      <Row align="middle">
        <MultiCarousel slidesToScroll={dataSource?.length} {...albumSlidesSetting}>
          {dataSource.map((item, i) => (
            <CarouselItem key={i} {...item} />
          ))}
        </MultiCarousel>
      </Row>
    </AlbumSlidesContainer>
  );
};

export default AlbumSlides;
