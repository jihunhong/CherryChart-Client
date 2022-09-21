import { API_URL } from '@config/';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

export const loadGoogleProfile = createAsyncThunk(
  'user/google-profile',
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/oauth/google/user');
      return response?.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.reponse.data);
    }
  },
);

export const loadMyYoutubePlaylist = createAsyncThunk(
  'user/users-playlist',
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/youtube/playlist/list');
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.reponse.data);
    }
  },
);

export const loadFavoriteArtist = createAsyncThunk(
  'artist/favorite',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/artist/favorite', {
        params: {
          userId,
        },
      });
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.reponse.data);
    }
  },
);

export const signUp = createAsyncThunk(
  'user/sign-up',
  async ({ email, password, nickname }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/user/signup', {
        email,
        password,
        nickname,
      });
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/user/login', {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
