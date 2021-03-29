import produce from 'immer';
import * as types from '../actions/actionTypes';

export const playerInitialState = {
  isExpand: false,
};

const reducer = (state = playerInitialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.TOGGLE_PLAYLIST:
        draft.isExpand = !draft.isExpand;
        break;
      default:
        break;
    }
  });
};

export default reducer;
