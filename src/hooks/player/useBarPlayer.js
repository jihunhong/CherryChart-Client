import useToggle from '@hooks/util/useToggle';
import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import usePlayList from './usePlayList';

const useBarPlayer = () => {
  const dispatch = useDispatch();
  const { selectedIndex, playing } = useSelector(state => state.player);
  const [storageList, playlistState] = usePlayList();
  const onStateChange = e => {
    const player = window.YTPlayer;
    const currentProgress = player.getCurrentTime();
    const videoDuration = player.getDuration();
    if (player.getPlayerState() === 1) {
      // 재생중
      dispatch(playerSlice.actions.switchPlay(true));
    }
    if (player.getPlayerState() === 2) {
      // 일시중지
      dispatch(playerSlice.actions.switchPlay(false));
    }
    if (currentProgress === 0 && videoDuration === 0 && playing) {
      // 영상이 끝나고나서 다음 영상으로 가는 시점
      // dispatch(playerSlice.actions.updatePlayingIndex(player.getPlaylistIndex()));
      if (player.getPlaylist().length !== playlistState?.length) {
        console.log('sync');
        player.loadPlaylist(playlistState, player.getPlaylistIndex() + 1);
      }
    }
  };
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

  return { playing, onStateChange, playerHandler, nextHandler, previouseHandler };
};

export default useBarPlayer;
