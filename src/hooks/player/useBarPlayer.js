import useToggle from '@hooks/util/useToggle';
import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';

const useBarPlayer = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  const [playing, togglePlay] = useToggle(false);
  const playerHandler = () => {
    if (playing) window.YTPlayer.pauseVideo();
    else window.YTPlayer.playVideo();
  };

  const nextHandler = () => {
    dispatch(playerSlice.actions.updatePlayingIndex(selectedIndex + 1));
    window.YTPlayer.nextVideo();
  };

  const previouseHandler = () => {
    dispatch(playerSlice.actions.updatePlayingIndex(selectedIndex - 1));
    window.YTPlayer.previousVideo();
  };

  return { playing, toggler: togglePlay, playerHandler, nextHandler, previouseHandler };
};

export default useBarPlayer;
