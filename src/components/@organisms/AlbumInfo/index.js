import AlbumCover from '@atoms/AlbumCover';
import Text from '@atoms/Text';
import Title from '@components/@atoms/Title';
import useAddAlbum from '@hooks/useAddAlbum';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import * as S from './style';

const AlbumInfo = () => {
  const { albumName, tracks, artist, releaseDate } = useSelector(state => state.content);
  const [handleAlbum] = useAddAlbum({ album: albumName, tracks, artist });
  return (
    <section>
      <Row>
        <Col>
          <AlbumCover size={270} radius={5} album={albumName} />
        </Col>
        <S.InfoContainer align="middle" justify="center">
          <Col>
            <Title text={albumName} level={2} />
            <Title text={artist} level={3} />
            <Text text={releaseDate} />

            <p>The unit’s fourth EP embraces a shimmering electronic-pop sheen.</p>
          </Col>
          <S.ActionColumn>
            <S.PlayButton type="primary" onClick={handleAlbum}>
              PLAY
            </S.PlayButton>
          </S.ActionColumn>
        </S.InfoContainer>
      </Row>
    </section>
  );
};

export default AlbumInfo;
