import { loadAlbumInfo, loadArtistsAlbum } from '@actions/albumActions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  albumInfoLoading: false,
  albumInfoError: null,
  artistName: null,
  albumId: null,
  albumName: null,
  releaseDate: null,
  description: null,
  middleCoverImage: null,
  smallCoverImage: null,
  tracks: [],
  albums: [],
  artist: null,
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
        state.smallCoverImage = action.payload.smallCoverImage;
        state.middleCoverImage = action.payload.middleCoverImage;
        state.tracks = action.payload.music;
        state.albumId = action.payload.id;
        state.artist = action.payload.artist;
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
