import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import usePlayList from './usePlayList';

const usePlayControl = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  const playing = useSelector(state => state.player.playing);
  const [playlistState] = usePlayList();

  const playerHandler = () => {
    const player = window.YTPlayer;
    if (playing) {
      player.pauseVideo();
      dispatch(playerSlice.actions.switchPlay(false));
    } else {
      player.playVideo();
      dispatch(playerSlice.actions.switchPlay(true));
    }
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

  return { playerHandler, nextHandler, previouseHandler };
};

export default usePlayControl;
