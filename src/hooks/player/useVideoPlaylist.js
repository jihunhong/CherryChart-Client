import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const useVideoPlaylist = () => {
  const selectFilterItem = createSelector([state => state.player.playList], playList =>
    playList.filter(item => item?.videoId && item?.id),
  );
  const playList = useSelector(selectFilterItem);
  return [playList];
};

export default useVideoPlaylist;
