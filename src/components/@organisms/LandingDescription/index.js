import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useIntersecting from '@hooks/useIntersecting';
import SamplePlayer from '@molecules/SamplePlayer';
import { Col, Row } from 'antd';
import { useRef } from 'react';
import { LandingDescriptionContainer } from './style';

const PlayListShare = () => {
  const containerRef = useRef();
  const [flag] = useIntersecting(containerRef);
  return (
    <LandingDescriptionContainer ref={containerRef} $intersecting={flag}>
      <Row align="middle" justify="center">
        <Col offset={3} span={6} className="description">
          <Title text="Check out other playlists and share them!" />
          <Text
            text={
              "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
            }
          />
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
