import Text from '@atoms/Text';
import { cdnURL } from '@config';
import useAddItem from '@hooks/useAddItem';
import { Avatar } from 'antd';
import { useRouter } from 'next/dist/client/router';
import { BiHeart } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa';
import {
  AlbumName,
  CoverImageContainer,
  HeartIcon,
  MusicListItemContainer,
  Rank,
  YoutubeIcon,
} from './style';

const ChartItem = ({ rank, title, artistName, albumName, Video, albumId }) => {
  const [handleMusic] = useAddItem({
    title,
    artistName,
    albumName,
    videoId: Video?.videoId,
  });
  const router = useRouter();

  const gotoAlbumDetail = () => {
    router.push(`/album/${albumId}`);
  };

  return (
    <MusicListItemContainer>
      <Rank>{`0${rank}`?.slice(-2)}</Rank>

      <CoverImageContainer onClick={handleMusic}>
        <Avatar
          shape="square"
          size={64}
          src={`${cdnURL}/${albumName.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
        />
      </CoverImageContainer>

      <Text text={title} className="title" onClick={handleMusic} ellipsis />

      <Text text={artistName} className="artist-name" ellipsis />

      <AlbumName onClick={gotoAlbumDetail}>{albumName}</AlbumName>

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
