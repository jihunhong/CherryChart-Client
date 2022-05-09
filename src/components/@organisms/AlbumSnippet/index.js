import AlbumCover from '@atoms/AlbumCover';
import Text from '@atoms/Text';
import Title from '@components/@atoms/Title';
import useAddAlbum from '@hooks/useAddAlbum';
import { BsFillPlayFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import * as S from './style';

const AlbumSnippet = () => {
  const { albumName, tracks, artistName, releaseDate } = useSelector(state => state.album);
  const [handleAlbum] = useAddAlbum({ album: albumName, tracks, artistName });
  return (
    <section>
      <S.AlbumInfoHeader align="middle" justify="center">
        <AlbumCover size={270} radius={5} album={albumName} />
        <section className="info">
          <Title text={albumName} level={2} />
          <Title text={artistName} level={3} className="artist" />
          <Text text={`${releaseDate?.slice(0, 4)}`} />
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
