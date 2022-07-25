import { loadArtists } from '@actions/artistActions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  artistList: [],
  artistLoading: false,
  artistError: null,
  artistDataDone: false,
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadArtists.pending, (state, action) => {
        state.artistLoading = true;
        state.artistDataDone = false;
      })
      .addCase(loadArtists.fulfilled, (state, action) => {
        state.artistList = action.payload;
        state.artistLoading = false;
        state.artistDataDone = true;
      })
      .addCase(loadArtists.rejected, (state, action) => {
        state.artistLoading = false;
        state.artistDataDone = true;
        state.artistError = action.payload;
      }),
});

export default artistSlice;
