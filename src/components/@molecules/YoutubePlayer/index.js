import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const YoutubePlayer = () => {
  const { playList, selectedIndex } = useSelector(state => state.player);
  const dispatch = useDispatch();
  const onPlayEnd = e => {
    const index = selectedIndex + 1;
    dispatch(playerSlice.actions.updatePlayingIndex(index));
  };

  return (
    <>
      {playList.length ? (
        <YouTube
          width="420"
          videoId={playList[selectedIndex]?.videoId}
          opts={{ playerVars: { autoplay: 0 } }}
          onEnd={onPlayEnd}
        />
      ) : null}
    </>
  );
};

export default YoutubePlayer;
