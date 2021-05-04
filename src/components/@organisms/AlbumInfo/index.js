import AlbumCover from '@atoms/AlbumCover';
import Title from '@components/@atoms/Title';
import { Row, Col } from 'antd';
import Text from '@atoms/Text';

const AlbumInfo = ({ album, artist, releaseDate }) => {
  return (
    <Row>
      <Col>
        <AlbumCover size={300} album={album} />
      </Col>
      <Col>
        <Title text={album} level={2} />
        <Title text={artist} level={3} />
        <Text text={releaseDate} />
      </Col>
    </Row>
  );
};

export default AlbumInfo;
