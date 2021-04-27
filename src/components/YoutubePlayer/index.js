import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import { updatePlayingIndex } from '@actions/';
import playerSlice from '@reducers/player';

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
        <YouTube width="420" videoId={playList[selectedIndex]?.videoId} opts={{ playerVars: { autoplay: 1 } }} onEnd={onPlayEnd} />
      ) : null}
    </>
  );
};

export default YoutubePlayer;
