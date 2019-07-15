import { call, put, takeLatest } from 'redux-saga/effects';
import { types } from './constants';
import { fetchListData } from './services';
 
export function* getListData() {
  try {
    const data = yield call(fetchListData);
    yield put({ type: types.RECEIVED_LIST_DATA, data });
  } catch (error) {
    console.log('error.in.getListData....', error);
  }
}

function* basketSaga() {
  yield takeLatest(types.LOAD_LIST, getListData);
}

export default basketSaga;