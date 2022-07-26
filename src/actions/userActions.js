import { API_URL, baseURL } from '@config/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = API_URL;

export const postGoogleOauth = createAsyncThunk(
  'user/post-google-oauth',
  async ({ accessToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/oauth', {
          accessToken
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.reponse?.data);
    }
  },
);
