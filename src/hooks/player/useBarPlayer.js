import useToggle from '@hooks/util/useToggle';
import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';

const useBarPlayer = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  const [playing, _, setPlaying] = useToggle(false);
  const onStateChange = e => {
    const currentProgress = window.YTPlayer.getCurrentTime();
    const videoDuration = window.YTPlayer.getDuration();
    if (window.YTPlayer.getPlayerState() === 1) {
      setPlaying(true);
    }
    if (window.YTPlayer.getPlayerState() === 2) {
      setPlaying(false);
    }
    // console.log({ currentProgress, videoDuration, status: window.YTPlayer.getPlayerState(), index: window.YTPlayer.getPlaylistIndex() });
    if (currentProgress === 0 && videoDuration === 0 && playing) {
      dispatch(playerSlice.actions.updatePlayingIndex(window.YTPlayer.getPlaylistIndex()));
    }
  };
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

  return { playing, onStateChange, playerHandler, nextHandler, previouseHandler };
};

export default useBarPlayer;
