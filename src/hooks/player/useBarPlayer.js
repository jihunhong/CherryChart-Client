import useToggle from '@hooks/util/useToggle';
import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import usePlayList from './usePlayList';

const useBarPlayer = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  const [storageList, playlistState] = usePlayList();
  const [playing, _, setPlaying] = useToggle(false);
  const onStateChange = e => {
    const player = window.YTPlayer;
    const currentProgress = player.getCurrentTime();
    const videoDuration = player.getDuration();
    if (player.getPlayerState() === 1) {
      setPlaying(true);
    }
    if (player.getPlayerState() === 2) {
      setPlaying(false);
    }
    if (currentProgress === 0 && videoDuration === 0 && playing) {
      dispatch(playerSlice.actions.updatePlayingIndex(player.getPlaylistIndex()));
    }
  };
  const playerHandler = () => {
    const player = window.YTPlayer;
    if (playing) player.pauseVideo();
    else player.playVideo();
  };

  const nextHandler = () => {
    const player = window.YTPlayer;
    dispatch(playerSlice.actions.updatePlayingIndex(selectedIndex + 1));
    if (player.getPlaylist().length !== playlistState?.length) {
      player.loadPlaylist(playlistState, selectedIndex + 1);
    } else {
      player.nextVideo();
    }
  };

  const previouseHandler = () => {
    const player = window.YTPlayer;
    dispatch(playerSlice.actions.updatePlayingIndex(selectedIndex - 1));
    if (player.getPlaylist().length !== playlistState?.length) {
      player.loadPlaylist(playlistState, selectedIndex - 1);
    } else {
      player.previousVideo();
    }
  };

  return { playing, onStateChange, playerHandler, nextHandler, previouseHandler };
};

export default useBarPlayer;
