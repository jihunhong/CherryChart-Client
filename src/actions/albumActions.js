import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadArtistsAlbum = createAsyncThunk('album/artists', async ({ artistName = '', site = 'melon' }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/api/album/artist/${encodeURIComponent(artistName)}`, {
      params: {
        site: 'melon',
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.reponse?.data);
  }
});

export const loadAlbumInfo = createAsyncThunk('content/album', async ({ albumId }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/api/album/tracks/${albumId}`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.reponse?.data);
  }
});
