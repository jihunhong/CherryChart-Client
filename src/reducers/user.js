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
      .addCase(createPlaylist.pending, (state, action) => {})
      .addCase(createPlaylist.fulfilled, (state, action) => {})
      .addCase(createPlaylist.rejected, (state, action) => {}),
});

export default userSlice;
