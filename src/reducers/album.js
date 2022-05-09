import { loadAlbumInfo, loadArtistsAlbum } from '@actions/albumActions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  albumInfoLoading: false,
  albumInfoError: null,
  artistName: null,
  albumName: null,
  releaseDate: null,
  description: null,
  tracks: [],
  albums: [],
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadAlbumInfo.pending, state => {
        state.albumInfoLoading = true;
      })
      .addCase(loadAlbumInfo.fulfilled, (state, action) => {
        state.albumInfoLoading = false;
        state.artistName = action.payload.artistName;
        state.albumName = action.payload.albumName;
        state.releaseDate = action.payload.releaseDate;
        state.description = action.payload.description;
        state.tracks = action.payload.music;
      })
      .addCase(loadAlbumInfo.rejected, (state, action) => {
        state.albumInfoLoading = false;
        state.albumInfoError = action.payload;
      })
      .addCase(loadArtistsAlbum.pending, (state, action) => {
        state.albums = [];
      })
      .addCase(loadArtistsAlbum.fulfilled, (state, action) => {
        state.albums = action.payload;
      })
      .addCase(loadArtistsAlbum.rejected, (state, action) => {
        state.albumInfoError = action.payload;
      }),
});

export default albumSlice;
