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
import {
  AlbumName,
  StyledCoverDiv,
  MusicListItemContainer,
  Rank,
  StyledRankDiv,
  YoutubeIcon,
  StyledTextDiv,
  StyledActionDiv,
} from './style';

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
      <StyledRankDiv className="flex-container rank">
        <Rank>{`0${rank}`?.slice(-2)}</Rank>
      </StyledRankDiv>

      <StyledCoverDiv className="flex-container">
        <LinkHOC href={`/album/${albumId}`}>
          <Avatar shape="square" size={64} src={smallCoverImage} />
        </LinkHOC>
      </StyledCoverDiv>

      <StyledTextDiv className="flex-container title">
        <LinkHOC href={`/album/${albumId}`}>
          <Text text={title} className="title" ellipsis />
        </LinkHOC>
      </StyledTextDiv>

      <StyledTextDiv className="flex-container artist-name">
        <LinkHOC href={`/album/${albumId}`}>
          <Text text={artistName} className="artist-name" ellipsis />
        </LinkHOC>
      </StyledTextDiv>

      <StyledTextDiv className="flex-container album-name">
        <LinkHOC className="flex-container" href={`/album/${albumId}`}>
          <AlbumName>{albumName}</AlbumName>
        </LinkHOC>
      </StyledTextDiv>
      <StyledActionDiv className="flex-container action-container youtube" onClick={handleMusic}>
        {video?.videoId && (
          <YoutubeIcon>
            <FaYoutube size={18} />
          </YoutubeIcon>
        )}
      </StyledActionDiv>

      <StyledActionDiv className="flex-container action-container" onClick={handleLike}>
        <Like liked={liked} size={18} />
      </StyledActionDiv>
    </MusicListItemContainer>
  );
};

export default memo(ChartItem, likerPropsAreEqual);
