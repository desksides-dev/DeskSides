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

function* postJournalist(action) {
    const state = action.payload
    console.log('from postJournalist: ', state)

try {
    for (const market of state.markets) {
        yield axios.post(`/api/form/markets/${market}`)
    }

    for (const pub of state.pubs) {
        yield axios.post(`/api/form/publications/${pub}`)
    }

    yield axios.put('/api/form/journalist', state)
} catch (error) {
    console.log('error in *postJournalist: ', error)
}
}

function* formSaga() {
  yield takeLatest('GET_PUBS', getPubs);
  yield takeLatest('GET_MARKETS', getMarkets);
  yield takeLatest('J_ASSESS', postJournalist)
}

export default formSaga;
