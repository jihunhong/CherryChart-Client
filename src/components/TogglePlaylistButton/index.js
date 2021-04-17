import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlaylist } from '@actions/';
import { ExpandBtn, ShrinkBtn } from './style';

const TogglePlaylistButton = () => {
  const dispatch = useDispatch();
  const { isExpand } = useSelector(state => state.player);

  const handleExpand = useCallback(() => {
    dispatch(togglePlaylist());
  }, [dispatch]);

  return <>{isExpand ? <ExpandBtn onClick={handleExpand} /> : <ShrinkBtn onClick={handleExpand} />}</>;
};

export default TogglePlaylistButton;