import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ onStateChange }) => {
  const { selectedIndex, playList, loop, isExpand } = useSelector(state => state.player);
  const playing = useSelector(state => state.player.playing);
  const dispatch = useDispatch();
  const onPlayEnd = e => {
    const index = selectedIndex + 1;
    if (loop) {
      dispatch(playerSlice.actions.updatePlayingIndex(0));
    } else {
      dispatch(playerSlice.actions.updatePlayingIndex(index));
    }
  };
  const onReadyEnd = event => {
    window.YTPlayer = event.target;
    // persist된 index에 해당하는 영상정보를 load만하고 재생은 하지 않도록
    if (playing) {
      window.YTPlayer.playVideo();
    } else {
      window.YTPlayer.pauseVideo();
    }
  };
  return (
    <>
      {playing || isExpand ? (
        <YouTube
          onStateChange={onStateChange}
          containerClassName="youtube-container"
          width="200"
          videoId={playList[selectedIndex]?.videoId}
          opts={{
            playerVars: { autoplay: Number(playing), loop: 0, mute: 0, controls: 0 },
          }}
          onEnd={onPlayEnd}
          onReady={onReadyEnd}
        />
      ) : null}
    </>
  );
};

export default YoutubePlayer;
