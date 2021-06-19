import AlbumCover from '@atoms/AlbumCover';
import Text from '@atoms/Text';
import Title from '@components/@atoms/Title';
import useAddAlbum from '@hooks/useAddAlbum';
import { useSelector } from 'react-redux';
import * as S from './style';

const AlbumInfo = () => {
  const { albumName, tracks, artist, releaseDate } = useSelector(state => state.content);
  const [handleAlbum] = useAddAlbum({ album: albumName, tracks, artist });
  return (
    <section>
      <S.AlbumInfoHeader align="middle" justify="center">
        <AlbumCover size={270} radius={5} album={albumName} />
        <section className="info">
          <Title text={albumName} level={2} />
          <Title text={artist} level={3} />
          <Text text={`KPOP · ${releaseDate?.slice(0, 4)}`} />

          <p>The unit’s fourth EP embraces a shimmering electronic-pop sheen.</p>
          <S.PlayButton type="primary" onClick={handleAlbum}>
            PLAY
          </S.PlayButton>
        </section>
      </S.AlbumInfoHeader>
    </section>
  );
};

export default AlbumInfo;
