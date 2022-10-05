import usePlayList from '@hooks/player/usePlayList';
import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ onStateChange }) => {
  const { selectedIndex, loop } = useSelector(state => state.player);
  const [storageList, playlistState] = usePlayList();
  const dispatch = useDispatch();
  const onPlayEnd = e => {
    const player = window.YTPlayer;
    const index = selectedIndex + 1;
    if (player.getPlaylist().length !== playlistState?.length) {
      player.loadPlaylist(playlistState, selectedIndex + 1);
    } else {
      if (loop) {
        player.playVideoAt(0);
        dispatch(playerSlice.actions.updatePlayingIndex(0));
      }
    }
    dispatch(playerSlice.actions.updatePlayingIndex(index));
  };
  const onReadyEnd = event => {
    window.YTPlayer = event.target;
    window.YTPlayer.playVideoAt(selectedIndex);
    window.YTPlayer.stopVideo();
    // persist된 index에 해당하는 영상정보를 load만하고 재생은 하지 않도록;
  };
  return storageList.length ? (
    <>
      <YouTube
        onStateChange={onStateChange}
        containerClassName="youtube-container"
        width="200"
        opts={{ playerVars: { autoplay: 0, loop: 0, mute: 1, controls: 0, playlist: storageList } }}
        onEnd={onPlayEnd}
        onReady={onReadyEnd}
      />
    </>
  ) : null;
};

export default YoutubePlayer;
