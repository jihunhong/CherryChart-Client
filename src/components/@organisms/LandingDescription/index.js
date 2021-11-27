import Text from '@atoms/Text';
import Title from '@atoms/Title';
import SamplePlayer from '@molecules/SamplePlayer';
import { Col, Row } from 'antd';
import faker from 'faker';
import { LandingDescriptionContainer } from './style';

const PlayListShare = () => {
  return (
    <LandingDescriptionContainer>
      <Row align="middle" justify="center">
        <Col offset={3} span={6} className="description">
          <Title text={'Check out other playlists and share them!'} />
          <Text text={faker.lorem.paragraph(1)} />
        </Col>
        <Col offset={1} span={8} className="example-player">
          <SamplePlayer />
        </Col>
        <Col span={5}></Col>
      </Row>
    </LandingDescriptionContainer>
  );
};

export default PlayListShare;
