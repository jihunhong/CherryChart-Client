import Slider from '@atoms/Slider';
import CarouselItem from '@molecules/CarouselItem';
import { Col, Row } from 'antd';
import { RelatedAlbumsContainer } from './style';

const settings = {
  className: 'slider variable-width',
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: 1,
  variableWidth: true,
};

const RelatedAlbums = ({ dataSource = [], artist = '' }) => {
  return (
    <RelatedAlbumsContainer>
      <h2>{`More by ${artist}`}</h2>
      <Row>
        <Col span={24}>
          <Slider
            occupy="12.5%"
            dataSource={dataSource}
            renderItem={item => <CarouselItem albumId={item.id} {...item} />}
          />
        </Col>
      </Row>
    </RelatedAlbumsContainer>
  );
};

export default RelatedAlbums;
