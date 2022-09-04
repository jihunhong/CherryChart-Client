import { createPlaylist } from '@actions/playlistActions';
import { loadMyYoutubePlaylist, loadGoogleProfile, loadFavoriteArtist } from '@actions/userActions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  my_youtube_playlist: [],
  google_api_loading: false,
  google_oauth_loading: false,
  accessToken: null,
  favorite_artists: [],
  create_playlist_loading: false,
  create_playlist_done: false,
  create_playlist_error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    assignAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadFavoriteArtist.fulfilled, (state, action) => {
        state.favorite_artists = action.payload;
      })
      .addCase(loadGoogleProfile.pending, (state, action) => {
        if (action.payload) {
          state.accessToken = action.payload;
        }
        state.google_oauth_loading = true;
      })
      .addCase(loadGoogleProfile.fulfilled, (state, action) => {
        state.google_oauth_loading = false;
        state.me = action.payload;
      })
      .addCase(loadGoogleProfile.rejected, (state, action) => {
        state.google_oauth_loading = false;
      })
      .addCase(loadMyYoutubePlaylist.fulfilled, (state, action) => {
        state.my_youtube_playlist = action.payload;
      })
      .addCase(createPlaylist.pending, (state, action) => {
        state.create_playlist_loading = true;
        state.create_playlist_done = false;
        state.create_playlist_error = null;
      })
      .addCase(createPlaylist.fulfilled, (state, action) => {
        state.create_playlist_loading = false;
        state.create_playlist_done = true;
        state.create_playlist_error = null;
      })
      .addCase(createPlaylist.rejected, (state, action) => {
        state.create_playlist_loading = false;
        state.create_playlist_done = true;
        state.create_playlist_error = action.payload;
      }),
});

export default userSlice;