import { loadArtists } from '@actions/artistActions';
import { postGoogleOauth } from '@actions/userActions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    me: null,
    google_oauth_loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(postGoogleOauth.pending, (state) => {
        state.google_oauth_loading = true;
      })
      .addCase(postGoogleOauth.fulfilled, (state, action) => {
        state.google_oauth_loading = false;
        state.me = action.payload
      })
      .addCase(postGoogleOauth.rejected, (state, action) => {
        state.google_oauth_loading = false;
      }),
});

export default userSlice;
