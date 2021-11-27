import { FlexColumn } from '@atoms/FlexColumn/style';
import MusicWave from '@atoms/MusicWave';
import Title from '@atoms/Title';
import ArtistActions from '@molecules/ArtistActions';
import { Col, Row } from 'antd';
import { SamplePlayerContainer } from './style';

const SamplePlayer = () => {
  return (
    <SamplePlayerContainer>
      <Row gutter={48}>
        <Col span={8} className="artist-thumb">
          <img src={'https://data.whicdn.com/images/334148664/original.jpg'} />
        </Col>
        <Col span={16} className="player">
          <FlexColumn className="container">
            <FlexColumn>
              <Title text={'billie eilish'} level={5} />
              <Title text={'bad guy'} level={3} />
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
