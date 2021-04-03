import { PlayListItemsContainer, PlayListItem, PlayListItemCover, PlayListItemTitle, PlayListItemArtist, PlayListDivision } from './style';
import { useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import AlbumCover from '@components/AlbumCover';

const CurrentPlayList = () => {
  const { playList } = useSelector(state => state.player);

  return (
    <>
      <PlayListItemsContainer>
        {playList.map(music => (
          <PlayListItem>
            <PlayListItemCover>
              <AlbumCover size={53} album={music.album} />
            </PlayListItemCover>
            <PlayListDivision>
              <PlayListItemTitle>{music.title}</PlayListItemTitle>
              <PlayListItemArtist>{music.artist}</PlayListItemArtist>
            </PlayListDivision>
          </PlayListItem>
        ))}
      </PlayListItemsContainer>
    </>
  );
};

export default CurrentPlayList;
