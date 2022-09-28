import AlbumCover from '@atoms/AlbumCover';
import Text from '@atoms/Text';
import Title from '@components/@atoms/Title';
import useAddAlbum from '@hooks/useAddAlbum';
import dayjs from 'dayjs';
import { BsFillPlayFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import * as S from './style';

const AlbumSnippet = () => {
  const { albumName, tracks, artistName, releaseDate, middleCoverImage, smallCoverImage, albumId } =
    useSelector(state => state.album);
  const [handleAlbum] = useAddAlbum({ albumName, tracks, artistName, smallCoverImage, albumId });
  return (
    <section>
      <S.AlbumInfoHeader align="middle" justify="center">
        <AlbumCover size={270} src={middleCoverImage} />
        <div className="sight">
          <section className="info">
            <Title text={albumName} level={2} className="album-name" />
            <Title text={artistName} level={3} className="artist-name" />
            <Text
              className="description"
              text={`"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."`}
            />
            <Text className="release-date" text={dayjs(releaseDate).format('MMMM DD, YYYY')} />
            <S.PlayButton
              type="primary"
              onClick={handleAlbum}
              icon={<BsFillPlayFill color="#fff" fill="#fff" />}
            >
              PLAY
            </S.PlayButton>
          </section>
        </div>
      </S.AlbumInfoHeader>
    </section>
  );
};

export default AlbumSnippet;
