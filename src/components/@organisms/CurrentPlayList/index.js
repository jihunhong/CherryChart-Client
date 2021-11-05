import AlbumCover from '@atoms/AlbumCover';
import playerSlice from '@reducers/player';
import { Empty } from 'antd';
import { FiDelete } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  PlayListDivision,
  PlayListItem,
  PlayListItemArtist,
  PlayListItemCover,
  PlayListItemsContainer,
  PlayListItemTitle,
} from './style';

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
              <FiDelete onClick={handleRemove} data-index={index} className="delete-action" />
            </PlayListItem>
          ))
        )}
      </PlayListItemsContainer>
    </>
  );
};

export default CurrentPlayList;
