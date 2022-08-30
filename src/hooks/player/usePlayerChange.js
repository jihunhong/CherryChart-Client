import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import usePlayList from './usePlayList';
import useScrollLock from './useScollLock';

const usePlayerChange = () => {
  const dispatch = useDispatch();
  const playing = useSelector(state => state.player.playing);
  const [playlistState] = usePlayList();
  useScrollLock();

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
        player.loadPlaylist(playlistState, player.getPlaylistIndex() + 1);
      }
    }
  };

  return { onStateChange };
};

export default usePlayerChange;
