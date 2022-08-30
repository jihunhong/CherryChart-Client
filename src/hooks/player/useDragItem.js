import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import { arrayMove } from 'react-sortable-hoc';

const useDragItem = () => {
  const playList = useSelector(state => state.player.playList);
  const dispatch = useDispatch();
  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(playerSlice.actions.dragSortPlaylist(arrayMove(playList, oldIndex, newIndex)));
  };

  return { onSortEnd };
};

export default useDragItem;
