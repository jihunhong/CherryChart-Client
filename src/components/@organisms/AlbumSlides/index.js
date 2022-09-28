import useIntersecting from '@hooks/useIntersecting';
import CarouselItem from '@molecules/CarouselItem';
import { Col, Row } from 'antd';
import { useRef } from 'react';
import Slider from '../../@atoms/Slider';
import { AlbumSlidesContainer } from './style';

const AlbumSlides = ({ dataSource = [] }) => {
  const containerRef = useRef();
  const [flag] = useIntersecting(containerRef);
  return (
    <AlbumSlidesContainer ref={containerRef} $intersecting={flag}>
      <Row align="middle" justify="center">
        <Col md={22}>
          <Slider
            occupy="14%"
            dataSource={dataSource.slice(0, 15)}
            renderItem={item => <CarouselItem key={item.albumId} {...item.music} />}
          />
        </Col>
      </Row>
    </AlbumSlidesContainer>
  );
};

export default AlbumSlides;
