import playerSlice from '@reducers/player';
import { useDispatch } from 'react-redux';

const usePlayerControl = () => {
  const dispatch = useDispatch();
  const handlePlayItem = e => {
    const index = e.currentTarget.dataset.index;
    if (index) {
      dispatch(playerSlice.actions.updatePlayingIndex(index));
      if (window.YTPlayer) {
        window.YTPlayer.playVideoAt(index);
      }
    }
  };

  const handleMute = () => {
    if (window.YTPlayer.isMuted()) {
      window.YTPlayer.unMute();
    } else {
      window.YTPlayer.mute();
    }
  };

  const handleRepeat = () => {
    dispatch(playerSlice.actions.toggleRepeat());
  };

  const handleShuffle = () => {
    // window.YTPlayer.playVideo();
    // window.YTPlayer.setShuffle(true);
    // const shuffled = window.YTPlayer.getPlaylist();
    // const list = shuffled.map(videoId => {
    //   return playList.find(p => p.videoId === videoId);
    // });
    // dispatch(playerSlice.actions.assignPlayList(list));
  };

  const handleTogglePlaylist = () => {
    dispatch(playerSlice.actions.togglePlayList());
  };

  return { handleMute, handleRepeat, handleShuffle, handleTogglePlaylist, handlePlayItem };
};
export default usePlayerControl;
