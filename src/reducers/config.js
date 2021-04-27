import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  site: 'melon',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    switchSiteName(state, action) {
      state.site = action.payload;
    },
  },
});

export default configSlice;
