import produce from 'immer';
import * as types from '../actions/actionTypes';

export const playerInitialState = {
  isExpand: false,
  playList: [],
  selectedIndex: 0,
};

const reducer = (state = playerInitialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.TOGGLE_PLAYLIST:
        draft.isExpand = !draft.isExpand;
        break;
      case types.ADD_MUSIC_TO_PLAYLIST:
        draft.playList.push(action.data);
        break;
      case types.SELECT_ITEM_PLAYLIST:
        draft.selectedIndex = action.data.index;
        break;
      default:
        break;
    }
  });
};

export default reducer;
