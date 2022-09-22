import { createPlaylist } from '@actions/playlistActions';
import {
  loadMyYoutubePlaylist,
  loadMyProfile,
  loadFavoriteArtist,
  signUp,
  logIn,
  logOut,
  loadOtherUser,
} from '@actions/userActions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  otherUser: null,
  my_youtube_playlist: [],
  google_api_loading: false,
  google_oauth_loading: false,
  accessToken: null,
  favorite_artists: [],
  create_playlist_loading: false,
  create_playlist_done: false,
  create_playlist_error: null,
  signup_loading: false,
  signup_done: false,
  signup_error: null,
  logIn_loading: false,
  logIn_done: false,
  logIn_error: null,
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
      .addCase(loadMyProfile.pending, (state, action) => {
        if (action.payload) {
          state.accessToken = action.payload;
        }
        state.google_oauth_loading = true;
      })
      .addCase(loadMyProfile.fulfilled, (state, action) => {
        state.google_oauth_loading = false;
        state.me = action.payload;
      })
      .addCase(loadMyProfile.rejected, (state, action) => {
        state.google_oauth_loading = false;
      })
      .addCase(loadOtherUser.fulfilled, (state, action) => {
        state.otherUser = action.payload;
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
      })
      .addCase(signUp.pending, (state, action) => {
        state.signup_loading = true;
        state.signup_done = false;
        state.signup_error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signup_loading = false;
        state.signup_done = true;
        state.signup_error = null;
        state.me = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signup_loading = false;
        state.signup_done = true;
        state.signup_error = action.payload;
      })
      .addCase(logIn.pending, (state, action) => {
        state.logIn_loading = true;
        state.logIn_done = false;
        state.logIn_error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.logIn_loading = false;
        state.logIn_done = true;
        state.logIn_error = null;
        state.me = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.logIn_loading = false;
        state.logIn_done = true;
        state.logIn_error = action.payload;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.me = null;
      }),
});

export default userSlice;
