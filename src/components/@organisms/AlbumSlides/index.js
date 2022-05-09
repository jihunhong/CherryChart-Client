import CarouselItem from '@molecules/CarouselItem';
import { Col, Row } from 'antd';
import Slider from '../../@atoms/Slider';
import { AlbumSlidesContainer } from './style';

const AlbumSlides = ({ dataSource = [] }) => {
  return (
    <AlbumSlidesContainer>
      <Row align="middle" justify="center">
        <Col md={22}>
          <Slider
            occupy={0.14}
            dataSource={dataSource}
            renderItem={item => <CarouselItem key={item.albumId} {...item} />}
          />
        </Col>
      </Row>
    </AlbumSlidesContainer>
  );
};

export default AlbumSlides;
