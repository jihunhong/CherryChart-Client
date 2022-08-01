import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';

const useAddChart = () => {
  const chartData = useSelector(state => state.chart.chartData);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const musics = chartData.map(item => {
      return { ...item.music, ...item.music?.video };
    });
    dispatch(playerSlice.actions.addMultiMusic(musics));
  };

  const handleShuffle = () => {
    const musics = chartData.map(item => {
      return { ...item.music, ...item.music?.video };
    });
    const shuffled = musics.sort(() => Math.random() - 0.5);
    dispatch(playerSlice.actions.addMultiMusic(shuffled));
  };

  return [handleAdd, handleShuffle];
};

export default useAddChart;
