import { cdnURL } from '@config';
import useAddItem from '@hooks/useAddItem';
import { Avatar } from 'antd';
import { useRouter } from 'next/dist/client/router';
import { BiHeart } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa';
import {
  AlbumName,
  Artist,
  CoverImageContainer,
  HeartIcon,
  MusicListItemContainer,
  Rank,
  Title,
  YoutubeIcon,
} from './style';

const ChartItem = ({ rank, title, artist, album, Video, AlbumId }) => {
  const [handleMusic] = useAddItem({ title, artist, album, videoId: Video?.videoId });
  const router = useRouter();

  const gotoAlbumDetail = () => {
    router.push(`/album/${AlbumId}`);
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

export default ChartItem;
