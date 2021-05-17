import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chartLoading: false,
  chartData: [],
  chartDataDone: false,
  chartError: null,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    chartDataRequest(state) {
      state.chartLoading = true;
      state.chartDataDone = false;
    },
    chartDataSuccess(state, action) {
      state.chartData = action.payload;
      state.chartLoading = false;
      state.chartDataDone = true;
    },
    chartDataError(state, action) {
      state.chartLoading = false;
      state.chartDataDone = true;
      state.chartError = action.payload;
    },
  },
});

export default chartSlice;
