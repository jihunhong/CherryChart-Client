import { createSlice } from '@reduxjs/toolkit';
import { likeChartSong, loadChart, unlikeChartSong } from '@actions/chartActions';

const initialState = {
  chartLoading: false,
  chartData: [],
  chartDataDone: false,
  chartError: null,
  selectedItems: [],
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    pushSelectedItems(state, action) {
      state.selectedItems = [...state.selectedItems, action.payload];
      state.selectedItems = state.selectedItems.sort((a, b) => a - b);
    },
  },
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
      })
      .addCase(likeChartSong.fulfilled, (state, action) => {
        const targetIndex = state.chartData.findIndex(el => el.music.id === action.payload.songId);
        state.chartData = state.chartData.map((item, index) => {
          if (index === targetIndex) {
            return {
              ...item,
              music: {
                ...item.music,
                liker: [...item.music.liker, action.payload.id],
              },
            };
          }
          return { ...item };
        });
      })
      .addCase(unlikeChartSong.fulfilled, (state, action) => {
        const targetIndex = state.chartData.findIndex(el => el.music.id === action.payload.songId);
        state.chartData[targetIndex].music.liker = state.chartData[targetIndex].music.liker.filter(
          item => item.id !== action.payload.id,
        );
        state.chartData = state.chartData.map((item, index) => {
          if (index === targetIndex) {
            return {
              ...item,
              music: {
                ...item.music,
                liker: item.music.liker.filter(id => id !== action.payload.id),
              },
            };
          }
          return { ...item };
        });
      }),
});

export default chartSlice;
