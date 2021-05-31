import { cdnURL } from '@config';
import playerSlice from '@reducers/player';
import { Avatar } from 'antd';
import { useRouter } from 'next/dist/client/router';
import { BiHeart } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  Artist as AlbumName,
  Artist,
  CoverImageContainer,
  HeartIcon,
  MusicListItemContainer,
  Rank,
  Title,
  YoutubeIcon,
} from './style';

const MusicListItem = ({ rank, title, artist, album, Video, AlbumId }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const gotoAlbumDetail = () => {
    router.push(`/album/${AlbumId}`);
  };

  const handleMusic = () => {
    dispatch(
      playerSlice.actions.addMusicToPlayList({
        title,
        artist,
        album,
        videoId: Video?.videoId,
      }),
    );
  };

  return (
    <MusicListItemContainer>
      <Rank>{`0${rank}`.slice(-2)}</Rank>

      <CoverImageContainer>
        <Avatar
          shape="square"
          size={64}
          src={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
        />
      </CoverImageContainer>

      <Title>{title}</Title>

      <Artist>{artist}</Artist>

      <AlbumName onClick={gotoAlbumDetail}>{album}</AlbumName>

      {Video?.videoId && (
        <YoutubeIcon onClick={handleMusic}>
          <FaYoutube />
        </YoutubeIcon>
      )}

      <HeartIcon>
        <BiHeart />
      </HeartIcon>
    </MusicListItemContainer>
  );
};

export default MusicListItem;