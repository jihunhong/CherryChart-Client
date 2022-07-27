import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadGoogleProfile = createAsyncThunk('user/google-profile', async (accessToken, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/gapi/oauth/user', {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.reponse.data);
  }
});

export const loadMyYoutubePlaylist = createAsyncThunk('user/users-playlist', async (accessToken, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/gapi/youtube/playlist/list', {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data?.items;
  } catch (err) {
    return rejectWithValue(err.reponse.data);
  }
});
