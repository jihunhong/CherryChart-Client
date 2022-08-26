import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';

const useBarAction = () => {
  const dispatch = useDispatch();
  const playList = useSelector(state => state.player.playList);
  const playing = useSelector(state => state.player.playing);
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

  return { handleRepeat, handleShuffle, handleTogglePlaylist };
};
export default useBarAction;
