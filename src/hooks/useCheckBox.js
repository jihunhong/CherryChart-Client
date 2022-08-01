import chartSlice from '@reducers/chart';
import { useDispatch } from 'react-redux';

const useCheckBox = rank => {
  const dispatch = useDispatch();
  const handleCheck = e => {
    if (e.target.checked) {
      dispatch(chartSlice.actions.pushSelectedItems(rank));
    }
  };
  return [handleCheck];
};

export default useCheckBox;
