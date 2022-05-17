import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* getPubs() {
  try {
    const response = yield axios.get('/api/form/pubs');
    yield put({type: 'SET_PUBS', payload: response.data});
  } catch (error) {
    console.log('error in *getPubs: ', error)
  }
}

function* getMarkets() {
    try {
      const response = yield axios.get('/api/form/markets');
      yield put({type: 'SET_MARKETS', payload: response.data});
    } catch (error) {
      console.log('error in *getPubs: ', error)
    }
  }

function* formSaga() {
  yield takeLatest('GET_PUBS', getPubs);
  yield takeLatest('GET_MARKETS', getMarkets);
}

export default formSaga;
