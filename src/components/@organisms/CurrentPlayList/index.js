import {
  PlayListItemsContainer,
  PlayListItem,
  PlayListItemCover,
  PlayListItemTitle,
  PlayListItemArtist,
  PlayListDivision,
} from './style';
import { useSelector, useDispatch } from 'react-redux';
import AlbumCover from '@atoms/AlbumCover';
import { Empty } from 'antd';
import playerSlice from '@reducers/player';
import { FiDelete } from 'react-icons/fi';

const CurrentPlayList = () => {
  const dispatch = useDispatch();
  const { playList } = useSelector(state => state.player);

  const handleOnClick = index => {
    dispatch(playerSlice.actions.playSelectedItem(index));
  };

  const handleRemove = e => {
    dispatch(playerSlice.actions.removeItem(e.target.dataset.index));
  };

  return (
    <>
      <PlayListItemsContainer>
        {playList.length === 0 ? (
          <Empty />
        ) : (
          playList.map((music, index) => (
            <PlayListItem>
              <PlayListItemCover onClick={handleOnClick.bind(null, index)}>
                <AlbumCover size={53} album={music.album} />
              </PlayListItemCover>
              <PlayListDivision onClick={handleOnClick.bind(null, index)}>
                <PlayListItemTitle>{music.title}</PlayListItemTitle>
                <PlayListItemArtist>{music.artist}</PlayListItemArtist>
              </PlayListDivision>
              <FiDelete onClick={handleRemove} data-index={index} />
            </PlayListItem>
          ))
        )}
      </PlayListItemsContainer>
    </>
  );
};

export default CurrentPlayList;
