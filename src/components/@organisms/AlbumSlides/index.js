import { albumSlidesSetting } from '@config/carousel';
import CarouselItem from '@molecules/CarouselItem';
import { Col, Row } from 'antd';
import MultiCarousel from 'react-slick';
import { AlbumSlidesContainer } from './style';

const AlbumSlides = ({ dataSource }) => {
  return (
    <AlbumSlidesContainer>
      <Row align="middle" justify="center">
        <Col md={22}>
          <MultiCarousel slidesToScroll={dataSource?.length} {...albumSlidesSetting}>
            {dataSource.map((item, i) => (
              <CarouselItem key={i} {...item} />
            ))}
          </MultiCarousel>
        </Col>
      </Row>
    </AlbumSlidesContainer>
  );
};

export default AlbumSlides;
