import { FlexColumn } from '@atoms/FlexColumn/style';
import { Col, Row } from 'antd';
import { FeatureContainer } from './style';

const Features = () => {
  return (
    <FeatureContainer>
      <Row gutter={32}>
        <Col md={5} className="chart-column">
          <FlexColumn gutter={[16, 22]}>
            <img src="./img/feature_chart.png" />
            <img src="./img/feature_albums.png" className="albums" />
          </FlexColumn>
        </Col>
        <Col md={4}>
          <FlexColumn gutter={[16, 32]} className="play-column">
            <img src="./img/feature_player.png" />
            <img src="./img/feature_album.png" />
          </FlexColumn>
        </Col>
      </Row>
    </FeatureContainer>
  );
};

export default Features;
