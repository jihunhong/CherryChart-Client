import { createSlice } from '@reduxjs/toolkit';
import { loadAlbumInfo } from '@actions/contentActions';

const initialState = {
  artist: null,
  albumName: null,
  releaseDate: null,
  description: null,
  tracks: [],
  loadError: null,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    albumDataRequest(state) {},
    albumDataSuccess(state, action) {
      state.artist = action.payload.artist;
      state.albumName = action.payload.album;
      state.releaseDate = action.payload.releaseDate;
      state.description = action.payload.description;
      state.tracks = action.payload.Music;
    },
    albumDataError(state, action) {
      state.loadError = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadAlbumInfo.pending, state => {})
      .addCase(loadAlbumInfo.fulfilled, (state, action) => {
        state.artist = action.payload.artist;
        state.albumName = action.payload.album;
        state.releaseDate = action.payload.releaseDate;
        state.description = action.payload.description;
        state.tracks = action.payload.Music;
      }),
});

export default contentSlice;
