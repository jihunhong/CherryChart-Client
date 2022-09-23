import { API_URL } from '@config/';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

export const loadMyProfile = createAsyncThunk('user/profile', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/user/profile');
    return response?.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.reponse.data);
  }
});

export const loadOtherUser = createAsyncThunk(
  'user/other-user',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/user/${id}`);
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
  async (_, { rejectWithValue }) => {
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

export const userFollow = createAsyncThunk(
  'user/follow',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/api/user/follow', {
        userId,
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

export const userUnFollow = createAsyncThunk(
  'user/unfollow',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete('/api/user/unfollow', {
        data: {
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

export const logOut = createAsyncThunk('user/logOut', async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/user/logout');
    return response?.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.reponse.data);
  }
});
