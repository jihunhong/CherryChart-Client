import AlbumCover from '@atoms/AlbumCover';
import Title from '@components/@atoms/Title';
import { Row, Col, Button } from 'antd';
import Text from '@atoms/Text';
import { PlayButton } from './style';

const AlbumInfo = ({ album, artist, releaseDate }) => {
  return (
    <section>
      <Row>
        <Col>
          <AlbumCover size={270} radius={5} album={album} />
        </Col>
        <Row align="middle" justify="center" style={{ paddingLeft: 34, flexDirection: 'column' }}>
          <Col style={{ margin: 'auto auto' }}>
            <Title text={album} level={2} style={{ marginBottom: 0, color: '#262f57' }} />
            <Title text={artist} level={3} style={{ margin: 0 }} />
            <Text text={releaseDate} />

            <p style={{ marginTop: 23 }}>The unit’s fourth EP embraces a shimmering electronic-pop sheen.</p>
          </Col>
          <Col style={{ margin: 'auto auto 0px 0px' }}>
            <PlayButton type="primary">PLAY</PlayButton>
          </Col>
        </Row>
      </Row>
    </section>
  );
};

export default AlbumInfo;
