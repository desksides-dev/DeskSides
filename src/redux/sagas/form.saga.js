import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* getPubs() {
  try {
    const response = axios.get('/api/form/pubs');
    put({type: 'SET_PUBS', payload: response.data});
  } catch (error) {
    console.log('error in *getPubs')
  }
}

function* getMarkets() {
    try {
      const response = axios.get('/api/form/markets');
      put({type: 'SET_MARKETS', payload: response.data});
    } catch (error) {
      console.log('error in *getPubs')
    }
  }

function* formSaga() {
  yield takeLatest('GET_PUBS', getPubs);
  yield takeLatest('GET_MARKETS', getMarkets);
}

export default formSaga;
