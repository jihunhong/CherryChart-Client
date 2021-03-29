import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { baseURL } from '@config';
import userSaga from './userSaga';

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
