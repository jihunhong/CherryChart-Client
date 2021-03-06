import { baseURL } from '@config';
import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import chartSaga from './chartSaga';
import contentSaga from './contentSaga';

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(chartSaga), fork(contentSaga)]);
}
