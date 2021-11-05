import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadAlbumInfo = createAsyncThunk(
  'content/album',
  async ({ albumId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/album/tracks/${albumId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.reponse?.data);
    }
  },
);

export const loadUpdatedVideos = createAsyncThunk(
  'content/loadUpdatedVideos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/video/updated`);
      return response.data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.reponse?.data);
    }
  },
);

export const loadUpdatedSongs = createAsyncThunk(
  'content/loadUpdatedSongs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/song/updated`);
      return response.data;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.reponse?.data);
    }
  },
);
