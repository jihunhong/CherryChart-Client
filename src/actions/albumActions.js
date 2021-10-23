import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadArtistsAlbum = createAsyncThunk(
  'album/artists',
  async ({ artistName = '' }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/album/artist/${encodeURIComponent(artistName)}`);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.reponse?.data);
    }
  },
);
