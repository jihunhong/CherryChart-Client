import { useSelector } from 'react-redux';

const useCurrent = () => {
  const playList = useSelector(state => state.player.playList);
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  if (playList?.length) {
    const filtered = playList.filter(item => item.videoId);
    return [filtered[selectedIndex]];
  }
  return [null];
};

export default useCurrent;
