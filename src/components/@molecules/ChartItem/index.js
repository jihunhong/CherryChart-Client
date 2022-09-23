import Like from '@atoms/Like';
import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import useAddItem from '@hooks/useAddItem';
import useIntersecting from '@hooks/useIntersecting';
import useLike from '@hooks/useLike';
import { Avatar } from 'antd';
import { memo, useDebugValue, useRef } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { likerPropsAreEqual } from 'src/memo/likerPropsAreEqual';
import { AlbumName, CoverImageContainer, MusicListItemContainer, Rank, YoutubeIcon } from './style';

const ChartItem = ({
  id,
  rank,
  title,
  artistName,
  albumName,
  video,
  albumId,
  smallCoverImage,
  liker,
}) => {
  const [handleMusic] = useAddItem({
    id,
    title,
    artistName,
    albumName,
    smallCoverImage,
    videoId: video?.videoId,
    albumId,
  });
  const [liked, handleLike] = useLike(id, liker);
  const itemRef = useRef();
  const [flag] = useIntersecting(itemRef);

  return (
    <MusicListItemContainer ref={itemRef} $intersecting={flag}>
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
            <FaYoutube size={18} />
          </YoutubeIcon>
        )}
      </div>

      <div className="flex-container action-container" onClick={handleLike}>
        <Like liked={liked} size={18} />
      </div>
    </MusicListItemContainer>
  );
};

export default memo(ChartItem, likerPropsAreEqual);
