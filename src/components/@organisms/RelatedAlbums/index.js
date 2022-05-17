import Slider from '@atoms/Slider';
import CarouselItem from '@molecules/CarouselItem';
import { Col, Row } from 'antd';
import React from 'react';
import { RelatedAlbumsContainer } from './style';

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
