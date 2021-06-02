import contentSlice from '@reducers/content';
import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

function loadAlbum({ albumId }) {
  return axios.get(`/api/album/tracks/${albumId}`);
}

function* loadAlbumData(action) {
  try {
    const result = yield call(loadAlbum, action.payload);
    yield put(contentSlice.actions.albumDataSuccess(result.data));
  } catch (err) {
    yield put(contentSlice.actions.albumDataError(err.response?.data));
  }
}

function* watchAlbumLoadReq() {
  yield takeEvery(contentSlice.actions.albumDataRequest.type, loadAlbumData);
}

export default function* contentSaga() {
  yield all([fork(watchAlbumLoadReq)]);
}
