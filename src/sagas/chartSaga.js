import chartSlice from '@reducers/chart';
import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

function loadChartAPI({ site }) {
  return axios.get(`/api/chart/${site}`);
}

function* loadChartData(action) {
  try {
    const result = yield call(loadChartAPI, action.payload);
    yield put(chartSlice.actions.chartDataSuccess(result.data));
  } catch (err) {
    yield put(chartSlice.actions.chartDataError(err.response?.data));
  }
}

function* watchChartReq() {
  yield takeEvery(chartSlice.actions.chartDataRequest.type, loadChartData);
}

export default function* chartSaga() {
  yield all([fork(watchChartReq)]);
}
