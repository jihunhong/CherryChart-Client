import playerSlice from '@reducers/player';
import { useDebugValue } from 'react';
import { useDispatch } from 'react-redux';

const useRemoveItem = item => {
  const dispatch = useDispatch();
  useDebugValue(item);
  const onClick = () => {
    dispatch(playerSlice.actions.removeItem(item['data-index']));
  };

  return [onClick];
};

export default useRemoveItem;
