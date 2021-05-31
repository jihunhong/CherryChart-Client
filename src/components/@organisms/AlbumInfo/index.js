import AlbumCover from '@atoms/AlbumCover';
import Text from '@atoms/Text';
import Title from '@components/@atoms/Title';
import { Col, Row } from 'antd';
import * as S from './style';

const AlbumInfo = ({ album, artist, releaseDate }) => {
  return (
    <section>
      <Row>
        <Col>
          <AlbumCover size={270} radius={5} album={album} />
        </Col>
        <S.InfoContainer align="middle" justify="center">
          <Col>
            <Title text={album} level={2} />
            <Title text={artist} level={3} />
            <Text text={releaseDate} />

            <p>The unit’s fourth EP embraces a shimmering electronic-pop sheen.</p>
          </Col>
          <S.ActionColumn>
            <S.PlayButton type="primary">PLAY</S.PlayButton>
          </S.ActionColumn>
        </S.InfoContainer>
      </Row>
    </section>
  );
};

export default AlbumInfo;
