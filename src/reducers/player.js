import produce from 'immer';
import * as types from '../actions/actionTypes';

export const playerInitialState = {
  isExpand: false,
  playList: [],
};

const reducer = (state = playerInitialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.TOGGLE_PLAYLIST:
        draft.isExpand = !draft.isExpand;
        break;
      case types.ADD_MUSIC_TO_PLAYLIST:
        draft.isExpand = true;
        draft.playList.push(action.data);
        break;
      default:
        break;
    }
  });
};

export default reducer;
