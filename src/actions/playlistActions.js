import { API_URL } from '@config/';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const createPlaylist = createAsyncThunk('playlist/create', async ({ title, description, items }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/api/youtube/playlist`, {
      title,
      description,
      items,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.reponse.data);
  }
});
