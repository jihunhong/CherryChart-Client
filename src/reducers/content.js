import { loadUpdatedVideos } from '@actions/contentActions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recentUpdated: [],
  recentUpdatedLoading: false,
  recentUpdatedDataDone: false,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadUpdatedVideos.pending, (state, action) => {
        state.recentUpdatedLoading = true;
        state.recentUpdatedDataDone = false;
      })
      .addCase(loadUpdatedVideos.fulfilled, (state, action) => {
        state.recentUpdated = action.payload;
        state.recentUpdatedLoading = false;
        state.recentUpdatedDataDone = true;
      })
      .addCase(loadUpdatedVideos.rejected, (state, action) => {
        state.recentUpdatedLoading = false;
        state.recentUpdatedDataDone = true;
      }),
});

export default contentSlice;
