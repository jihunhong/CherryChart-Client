import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: true,
  isExpand: false,
  playList: [],
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
        state.selectedIndex = parseInt(action.payload, 10);
      }
    },
    addMultiMusic(state, action) {
      state.selectedIndex = state.playList?.length > 0 ? state.selectedIndex : 0;
      state.playList = [...state.playList, ...action.payload];
    },
    addMusicToPlayList(state, action) {
      state.selectedIndex = state.playList?.length > 0 ? state.selectedIndex : 0;
      state.playList.push(action.payload);
    },
    addAlbumToPlayList(state, action) {
      if (action.payload.tracks) {
        const valids = action.payload.tracks
          .filter(v => v.video?.videoId)
          .map(v => {
            return {
              title: v.title,
              artistName: v.artistName,
              albumName: action.payload.albumName,
              smallCoverImage: action.payload.smallCoverImage,
              videoId: v.video.videoId,
            };
          });
        state.playList = [...state.playList, ...valids];
      } else {
        state.playList = [...state.playList, ...action.payload];
      }
    },
    playSelectedItem(state, action) {
      state.selectedIndex = action.payload;
    },
    removeItem(state, action) {
      state.playList = state.playList.filter((v, i) => {
        return i !== parseInt(action.payload, 10);
      });
    },
  },
});

export default playerSlice;
