import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadArtists = createAsyncThunk(
  'artist/list',
  async ({ site = 'melon' }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/artist/${site}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);