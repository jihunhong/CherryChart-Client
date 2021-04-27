import { setLocalStorage, getLocalStorage } from '@lib/localStorage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isExpand: false,
  playList: getLocalStorage('playList') || [],
  selectedIndex: 0,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    togglePlayList(state) {
      state.isExpand = !state.isExpand;
    },
    updatePlayingIndex(state, action) {
      if (state.playList.length - 1 >= action.payload) {
        // playlist의 인덱스 범위만 참조하도록
        state.selectedIndex = action.payload;
      }
    },
    addMusicToPlayList(state, action) {
      state.playList.push(action.payload);
      setLocalStorage('playList', state.playList);
    },
    playSelectedItem(state, action) {
      state.selectedIndex = action.payload;
    },
  },
});

export default playerSlice;
