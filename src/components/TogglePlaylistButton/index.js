import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpandBtn, ShrinkBtn } from './style';
import playerSlice from '@reducers/player';

const TogglePlaylistButton = () => {
  const dispatch = useDispatch();
  const { isExpand } = useSelector(state => state.player);

  const handleExpand = useCallback(() => {
    dispatch(playerSlice.actions.togglePlayList());
  }, [dispatch]);

  return <>{isExpand ? <ExpandBtn onClick={handleExpand} /> : <ShrinkBtn onClick={handleExpand} />}</>;
};

export default TogglePlaylistButton;
