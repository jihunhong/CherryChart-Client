import { PlayListItemsContainer, PlayListItem, PlayListItemCover, PlayListItemTitle, PlayListItemArtist, PlayListDivision } from './style';
import { useSelector, useDispatch } from 'react-redux';
import AlbumCover from '@components/AlbumCover';
import { Empty } from 'antd';
import playerSlice from '@reducers/player';

const CurrentPlayList = () => {
  const dispatch = useDispatch();
  const { playList } = useSelector(state => state.player);

  const handleOnClick = index => {
    dispatch(playerSlice.actions.playSelectedItem(index));
  };

  return (
    <>
      <PlayListItemsContainer>
        {playList.length === 0 ? (
          <Empty />
        ) : (
          playList.map((music, index) => (
            <PlayListItem onClick={handleOnClick.bind(null, index)}>
              <PlayListItemCover>
                <AlbumCover size={53} album={music.album} />
              </PlayListItemCover>
              <PlayListDivision>
                <PlayListItemTitle>{music.title}</PlayListItemTitle>
                <PlayListItemArtist>{music.artist}</PlayListItemArtist>
              </PlayListDivision>
            </PlayListItem>
          ))
        )}
      </PlayListItemsContainer>
    </>
  );
};

export default CurrentPlayList;
