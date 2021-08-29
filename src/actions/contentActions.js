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
