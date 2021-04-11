import * as types from './actionTypes';

export const logInAction = data => ({
  type: types.LOG_IN_REQUEST,
});

export const signUpAction = data => ({
  type: types.SIGN_UP_REQUEST,
});

export const loadUserAction = data => ({
  type: types.LOAD_USER_INFO_REQUEST,
});

export const assignSiteName = data => ({
  type: types.ASSIGN_SITE_NAME,
  data,
});

export const togglePlaylist = () => ({
  type: types.TOGGLE_PLAYLIST,
});

export const addMusicToPlayList = data => ({
  type: types.ADD_MUSIC_TO_PLAYLIST,
  data,
});

export const selectItemInPlayList = data => ({
  type: types.SELECT_ITEM_PLAYLIST,
  data,
});
