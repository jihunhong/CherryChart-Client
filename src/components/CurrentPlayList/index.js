import { PlayListItemsContainer, PlayListItem, PlayListItemCover, PlayListItemTitle, PlayListItemArtist, PlayListDivision } from './style';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import AlbumCover from '@components/AlbumCover';
import { selectItemInPlayList } from '@actions/';

const CurrentPlayList = () => {
  const dispatch = useDispatch();
  const { playList } = useSelector(state => state.player);

  const handleOnClick = index => {
    dispatch(
      selectItemInPlayList({
        index,
      }),
    );
  };

  return (
    <>
      <PlayListItemsContainer>
        {playList.map((music, index) => (
          <PlayListItem onClick={handleOnClick.bind(null, index)}>
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
