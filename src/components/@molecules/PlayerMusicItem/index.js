import AlbumCover from '@atoms/AlbumCover';
import { FlexColumn } from '@atoms/FlexColumn/style';
import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { PlayerMusicItemContainer } from './style';

const PlayerMusicItem = ({
  smallCoverImage,
  title,
  albumId,
  artistName,
  albumName,
  children,
  ...props
}) => {
  return (
    <PlayerMusicItemContainer {...props}>
      <AlbumCover src={smallCoverImage} size={46} />
      <FlexColumn className="meta">
        <LinkHOC href={`/album/${albumId}`}>
          <Title level={5} text={title} />
        </LinkHOC>
        <LinkHOC href={`/album/${albumId}`}>
          <Text ellipsis text={`${artistName} • ${albumName}`} />
        </LinkHOC>
      </FlexColumn>
      {children}
    </PlayerMusicItemContainer>
  );
};

export default PlayerMusicItem;
