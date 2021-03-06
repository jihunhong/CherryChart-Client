import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './userSaga';

import { baseURL } from '../config';

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([
      fork(userSaga),
    ]);
  }