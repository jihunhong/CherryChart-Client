import { API_URL } from '@config/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

export const loadChart = createAsyncThunk('chart/list', async ({ site = 'melon', date = null }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/api/chart/${site}${date ? `/${date}` : ''}`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.reponse?.data);
  }
});
