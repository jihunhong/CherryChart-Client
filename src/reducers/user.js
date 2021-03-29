import produce from 'immer';
import * as types from '../actions/actionTypes';

export const userInitialState = {
  me: {},
  isLoggedIn: false,

  logInLoading: false,
  logInDone: false,
  logInError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,

  loadUserInfoLoading: false,
  loadUserInfoDone: false,
  loadUserInfoError: null,

  signUpData: null,
};

const reducer = (state = userInitialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case types.LOG_IN_SUCCESS:
        draft.me = action.data.user;
        draft.isLoggedIn = true;
        draft.logInLoading = false;
        draft.logInDone = true;
        break;
      case types.LOG_IN_ERROR:
        draft.logInLoading = false;
        draft.logInError = action.data.error;
        break;

      case types.LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case types.LOG_OUT_SUCCESS:
        draft.me = null;
        draft.isLoggedIn = false;
        draft.logOutLoading = false;
        draft.logOutDone = true;
        break;
      case types.LOG_OUT_ERROR:
        draft.logOutLoading = false;
        draft.logOutError = action.data.error;
        break;

      case types.LOAD_USER_INFO_REQUEST:
        draft.loadUserInfoLoading = true;
        draft.loadUserInfoDone = false;
        draft.loadUserInfoError = null;
        break;
      case types.LOAD_USER_INFO_SUCCESS:
        draft.me = action.data.user;
        draft.isLoggedIn = true;
        draft.loadUserInfoLoading = false;
        draft.loadUserInfoDone = true;
        break;
      case types.LOAD_USER_INFO_ERROR:
        draft.loadUserInfoLoading = false;
        draft.loadUserInfoError = action.data.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
