import { loadUpdatedSongs, loadUpdatedVideos } from '@actions/contentActions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recentVideos: [],
  recentVideosLoading: false,
  recentVideosDataDone: false,
  recentSongs: [],
  recentSongsLoading: false,
  recentSongsDataDone: false,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadUpdatedVideos.pending, (state, action) => {
        state.recentVideosLoading = true;
        state.recentVideosDataDone = false;
      })
      .addCase(loadUpdatedVideos.fulfilled, (state, action) => {
        state.recentVideos = action.payload;
        state.recentVideosLoading = false;
        state.recentVideosDataDone = true;
      })
      .addCase(loadUpdatedVideos.rejected, (state, action) => {
        state.recentVideosLoading = false;
        state.recentVideosDataDone = true;
      })

      .addCase(loadUpdatedSongs.pending, (state, action) => {
        state.recentSongsLoading = true;
        state.recentSongsDataDone = false;
      })
      .addCase(loadUpdatedSongs.fulfilled, (state, action) => {
        state.recentSongs = action.payload;
        state.recentSongsLoading = false;
        state.recentSongsDataDone = true;
      })
      .addCase(loadUpdatedSongs.rejected, (state, action) => {
        state.recentSongsLoading = false;
        state.recentSongsDataDone = true;
      }),
});

export default contentSlice;
