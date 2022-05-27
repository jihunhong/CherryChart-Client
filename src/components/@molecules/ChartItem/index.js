import Text from '@atoms/Text';
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

const ChartItem = ({
  rank,
  title,
  artistName,
  albumName,
  video,
  albumId,
  middleCoverImage,
  smallCoverImage,
}) => {
  const [handleMusic] = useAddItem({
    title,
    artistName,
    albumName,
    smallCoverImage,
    videoId: video?.videoId,
  });
  const router = useRouter();

  const gotoAlbumDetail = () => {
    router.push(`/album/${albumId}`);
  };

  return (
    <MusicListItemContainer>
      <Rank>{`0${rank}`?.slice(-2)}</Rank>

      <CoverImageContainer onClick={handleMusic}>
        <Avatar shape="square" size={64} src={smallCoverImage} />
      </CoverImageContainer>

      <Text text={title} className="title" onClick={handleMusic} ellipsis />

      <Text text={artistName} className="artist-name" ellipsis />

      <AlbumName onClick={gotoAlbumDetail}>{albumName}</AlbumName>

      {video?.videoId && (
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
