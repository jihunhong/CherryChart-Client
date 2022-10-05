import playerSlice from '@reducers/player';
import { useDispatch, useSelector } from 'react-redux';

const usePlayControl = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  const playing = useSelector(state => state.player.playing);

  const playerHandler = () => {
    if (playing) {
      dispatch(playerSlice.actions.switchPlay(false));
    } else {
      dispatch(playerSlice.actions.switchPlay(true));
    }
  };

  const nextHandler = () => {
    dispatch(playerSlice.actions.updatePlayingIndex(selectedIndex + 1));
  };

  const previouseHandler = () => {
    dispatch(playerSlice.actions.updatePlayingIndex(selectedIndex - 1));
  };

  return { playerHandler, nextHandler, previouseHandler };
};

export default usePlayControl;
