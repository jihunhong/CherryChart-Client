import AlbumCover from '@atoms/AlbumCover';
import Text from '@atoms/Text';
import Title from '@components/@atoms/Title';
import useAddAlbum from '@hooks/useAddAlbum';
import { useSelector } from 'react-redux';
import * as S from './style';
import { BsPlay, BsFillPlayFill } from 'react-icons/bs';

const AlbumSnippet = () => {
  const { albumName, tracks, artist, releaseDate, description } = useSelector(
    state => state.content,
  );
  const [handleAlbum] = useAddAlbum({ album: albumName, tracks, artist });
  return (
    <section>
      <S.AlbumInfoHeader align="middle" justify="center">
        <AlbumCover size={270} radius={5} album={albumName} />
        <section className="info">
          <Title text={albumName} level={2} />
          <Title text={artist} level={3} className="artist" />
          <Text text={`KPOP · ${releaseDate?.slice(0, 4)}`} />

          <p>{description || ''}</p>
          <S.PlayButton type="primary" onClick={handleAlbum}>
            {
              <div>
                <BsFillPlayFill color={'#fff'} fill={'#fff'} />
                <span>PLAY</span>
              </div>
            }
          </S.PlayButton>
        </section>
      </S.AlbumInfoHeader>
    </section>
  );
};

export default AlbumSnippet;
