import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ onStateChange }) => {
  const { playList, selectedIndex } = useSelector(state => state.player);
  const dispatch = useDispatch();
  const onPlayEnd = e => {
    const index = selectedIndex + 1;
    dispatch(playerSlice.actions.updatePlayingIndex(index));
  };
  const onReadyEnd = event => {
    window.YTPlayer = event.target;
    window.YTPlayer.playVideoAt(selectedIndex);
    window.YTPlayer.stopVideo();
    // persist된 index에 해당하는 영상정보를 load만하고 재생은 하지 않도록;
  };

  return (
    <>
      {playList.length ? (
        <>
          <YouTube
            onStateChange={onStateChange}
            containerClassName="youtube-container"
            width="200"
            opts={{ playerVars: { autoplay: 0, controls: 1, playlist: playList.map(el => el.videoId).join(',') } }}
            onEnd={onPlayEnd}
            onReady={onReadyEnd}
          />
        </>
      ) : null}
    </>
  );
};

export default YoutubePlayer;
