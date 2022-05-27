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
            occupy="14%"
            dataSource={dataSource.slice(0, 15)}
            renderItem={item => (
              <CarouselItem
                key={item.albumId}
                {...item.music}
              />
            )}
          />
        </Col>
      </Row>
    </AlbumSlidesContainer>
  );
};

export default AlbumSlides;
