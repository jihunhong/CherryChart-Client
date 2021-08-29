import { createSlice } from '@reduxjs/toolkit';
import { loadChart } from '@actions/chartActions';

const initialState = {
  chartLoading: false,
  chartData: [],
  chartDataDone: false,
  chartError: null,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadChart.pending, (state, action) => {
        state.chartLoading = true;
        state.chartDataDone = false;
      })
      .addCase(loadChart.fulfilled, (state, action) => {
        state.chartData = action.payload;
        state.chartLoading = false;
        state.chartDataDone = true;
      })
      .addCase(loadChart.rejected, (state, action) => {
        state.chartLoading = false;
        state.chartDataDone = true;
        state.chartError = action.payload;
      }),
});

export default chartSlice;
