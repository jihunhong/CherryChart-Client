import { createSelector } from '@reduxjs/toolkit';
import { useDebugValue } from 'react';
import { useSelector } from 'react-redux';

const useCurrent = () => {
  const filtering = createSelector(
    [state => state.player.playList, state => state.player.selectedIndex],
    (playList, index) => {
      if (playList.length && index >= 0) {
        const filtered = playList.filter(item => item.videoId);
        return [filtered[index]];
      }
      return [null];
    },
  );
  const playList = useSelector(filtering);
  useDebugValue(playList);
  return playList;
};

export default useCurrent;
