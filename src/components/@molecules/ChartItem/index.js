import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import useAddItem from '@hooks/useAddItem';
import useCheckBox from '@hooks/useCheckBox';
import { Avatar } from 'antd';
import { BiHeart } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa';
import { AlbumName, CoverImageContainer, HeartIcon, MusicListItemContainer, Rank, YoutubeIcon } from './style';

const ChartItem = ({ id, rank, title, artistName, albumName, video, albumId, middleCoverImage, smallCoverImage }) => {
  const [handleMusic] = useAddItem({
    title,
    artistName,
    albumName,
    smallCoverImage,
    videoId: video?.videoId,
  });

  return (
    <MusicListItemContainer>
      <div className="flex-container">
        <Rank>{`0${rank}`?.slice(-2)}</Rank>
      </div>

      <CoverImageContainer>
        <LinkHOC className="flex-container" href={`/album/${albumId}`}>
          <Avatar shape="square" size={64} src={smallCoverImage} />
        </LinkHOC>
      </CoverImageContainer>

      <LinkHOC className="flex-container" href={`/album/${albumId}`}>
        <Text text={title} className="title" ellipsis />
      </LinkHOC>

      <LinkHOC className="flex-container" href={`/album/${albumId}`}>
        <Text text={artistName} className="artist-name" ellipsis />
      </LinkHOC>

      <LinkHOC className="flex-container" href={`/album/${albumId}`}>
        <AlbumName>{albumName}</AlbumName>
      </LinkHOC>

      <div className="divider" />
      <div className="flex-container action-container" onClick={handleMusic}>
        {video?.videoId && (
          <YoutubeIcon>
            <FaYoutube />
          </YoutubeIcon>
        )}
      </div>

      <div className="flex-container action-container">
        <HeartIcon>
          <BiHeart />
        </HeartIcon>
      </div>
    </MusicListItemContainer>
  );
};

export default ChartItem;
