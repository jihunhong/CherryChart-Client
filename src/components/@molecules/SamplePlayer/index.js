import { FlexColumn } from '@atoms/FlexColumn/style';
import Title from '@atoms/Title';
import { imgCdn } from '@config/';
import ArtistActions from '@molecules/ArtistActions';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import { SamplePlayerContainer } from './style';

const MusicWave = dynamic(() => import('@atoms/MusicWave'), { ssr: false, loading: () => null });

const SamplePlayer = () => {
  return (
    <SamplePlayerContainer>
      <Row gutter={48}>
        <Col span={8} className="artist-thumb">
          <img
            src={`${imgCdn}/static/artist-thumb.jpeg?w=226&ar=305:450&fit=clip&auto=format`}
            alt="sample artist"
          />
        </Col>
        <Col span={16} className="player">
          <FlexColumn className="container">
            <FlexColumn>
              <Title text="billie eilish" level={5} />
              <Title text="bad guy" level={3} />
            </FlexColumn>
            <MusicWave count={24} />
            <ArtistActions />
          </FlexColumn>
        </Col>
      </Row>
    </SamplePlayerContainer>
  );
};

export default SamplePlayer;
