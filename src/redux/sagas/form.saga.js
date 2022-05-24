import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "GET_PUBS" actions. Sets data to reducer.
function* getPubs() {
    try {
        const response = yield axios.get('/api/form/pubs');
        yield put({ type: 'SET_PUBS', payload: response.data });
    } catch (error) {
        console.log('error in *getPubs: ', error)
    }
}

// worker Saga: will be fired on "GET_MARKETS" actions. Sets data to reducer.
function* getMarkets() {
    try {
        const response = yield axios.get('/api/form/markets');
        yield put({ type: 'SET_MARKETS', payload: response.data });
    } catch (error) {
        console.log('error in *getPubs: ', error)
    }
}

// worker Saga: will be fired on "J_ASSESS" actions. Posts & Puts to database.
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

// worker Saga: will be fired on "B_ASSESS" actions. Post & Puts to database.
function* postBrand(action) {
    const state = action.payload
    console.log('from *postBrand: ', state)

    try {
        for (const market of state.markets) {
            yield axios.post(`/api/form/markets/${market}`)
        }

        for (const pub of state.pubs) {
            yield axios.post(`/api/form/publications/${pub}`)
        }

        yield axios.put('/api/form/brands', state)
    } catch (error) {
        console.log('error in *postBrand: ', error)
    }
}

function* putBrand(action) {
    const state = action.payload
    console.log('from *putBrand: ', state)

    try {
        yield axios.put('/api/form/brands', state)
    } catch (error) {
        console.log('error in *postBrand: ', error)
    }
}

// main Saga to act as a conductor to correct path:
function* formSaga() {
    yield takeLatest('GET_PUBS', getPubs);
    yield takeLatest('GET_MARKETS', getMarkets);
    yield takeLatest('J_ASSESS', postJournalist);
    yield takeLatest('B_ASSESS', postBrand);
    yield takeLatest('B_EDIT_ASSESS', putBrand);
}

export default formSaga;
