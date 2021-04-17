import produce from 'immer';
import * as types from '../actions/actionTypes';
import { setLocalStorage, getLocalStorage } from '@lib/localStorage';

export const playerInitialState = {
  isExpand: false,
  playList: getLocalStorage('playList') || [],
  selectedIndex: 0,
};

const reducer = (state = playerInitialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.TOGGLE_PLAYLIST:
        draft.isExpand = !draft.isExpand;
        break;
      case types.UPDATE_PLAYING_INDEX:
        if (draft.playList.length - 1 <= action.data.index) {
          // playlist의 인덱스 범위만 참조하도록
          draft.selectedIndex = action.data.index;
        }
        break;
      case types.ADD_MUSIC_TO_PLAYLIST:
        draft.playList.push(action.data);
        setLocalStorage('playList', draft.playList);
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
