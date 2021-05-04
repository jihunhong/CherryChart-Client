import { Avatar } from 'antd';
import { BiHeart } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa';
import { MusicListItemContainer, Rank, CoverImageContainer, Title, Artist, Artist as AlbumName, YoutubeIcon, HeartIcon } from './style';
import { cdnURL } from '@config';
import { useDispatch } from 'react-redux';
import playerSlice from '@reducers/player';
import { useRouter } from 'next/dist/client/router';

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
    <MusicListItemContainer onClick={gotoAlbumDetail}>
      <Rank>{`0${rank}`.slice(-2)}</Rank>

      <CoverImageContainer>
        <Avatar shape="square" size={64} src={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`} />
      </CoverImageContainer>

      <Title>{title}</Title>

      <Artist>{artist}</Artist>

      <AlbumName>{album}</AlbumName>

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
