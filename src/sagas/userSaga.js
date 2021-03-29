import axios from 'axios';
import { call, put, take, all, fork } from 'redux-saga/effects';
import * as types from '@actionTypes';

function logInAPI() {
  return axios.post('/api/login');
}

function* logIn() {
  try {
    const result = yield call(logInAPI);
    yield put({
      type: types.LOG_IN_REQUEST,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: types.LOG_IN_ERROR,
      data: err.data,
    });
  }
}

function* watchLogIn() {
  yield take(types.LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield take(types.LOG_OUT_REQUEST);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
