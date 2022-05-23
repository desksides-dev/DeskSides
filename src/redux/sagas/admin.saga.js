import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAdminUsers() {
    try {
        const adminUsers = yield axios.get(`/api/admin`);
        console.log('get all users:', adminUsers.data);
        yield put({ type: 'SET_ADMIN_USERS', payload: adminUsers.data });

    } catch (err) {
        console.log('getAdminUsers error', err);
    }
}

function* updateApprovalStatus(action) {
    try {
        yield axios.put(`api/admin/${action.approvalStatus}/${action.payload}`)
        yield put({ type: 'GET_ADMIN_USERS' })
    } catch (err) {
        console.log(err);
    }
}

// POST user to user matches to database
function* postMatches(action) {
    const matches = action.state.matches;
    const id = action.payload.id
    console.log('%%%% in postMatches saga. matches =', matches);

    if (action.payload.user_type === 'journalist') {
        try {
            for (const matchId of matches) {
                yield axios.post(`/api/admin/${id}/${matchId}`)
            }
            yield put({ type: 'GET_ADMIN_MATCHES', payload: action.payload });

        } catch (error) {
            console.log(error);
        }
    }
    else {
        try {
            for (const matchId of matches) {
                yield axios.post(`/api/admin/${matchId}/${id}`)
            }
            yield put({ type: 'GET_ADMIN_MATCHES', payload: action.payload });

        } catch (error) {
            console.log(error);
        }
    }
}

//DELETE matches from database
function* deleteMatches(action) {
    const matches = action.state.toDelete;
    const id = action.payload.id

    console.log('^^^^^^^^^^^^^^delete Matches. matches =', matches, 'id =', id);

    try {
        for (const matchId of matches) {
            yield axios.delete(`/api/admin/${id}/${matchId}`)
        }
        yield put({ type: 'GET_ADMIN_MATCHES', payload: action.payload });
    } catch (error) {
        console.log(error);
    }
}

function* getAdminMatches(action) {

    const id = action.payload.id;
    let userMatchType = 'journalist';
    if (action.payload.user_type === 'journalist') {
        userMatchType = 'brand'
    } else if (action.payload.user_type === 'brand') { userMatchType = 'journalist' }
    try {
        const adminMatches = yield axios.get(`/api/admin/matches/${id}/${userMatchType}`)
        console.log('@@@@@@ get all matches, id:', action.payload.id, 'userMatchType:', userMatchType, 'adminMatches.data:', adminMatches.data);
        yield put({ type: 'SET_ADMIN_MATCHES', payload: adminMatches.data });
    } catch (err) {
        console.log('getAdminMatches error', err);
    }
}

function* getAdminBrands() {
    try {
        const adminBrands = yield axios.get(`/api/admin/brands`);
        console.log('get all brands:', adminBrands.data);
        yield put({ type: 'SET_ADMIN_BRANDS', payload: adminBrands.data });
    } catch (err) {
        console.log('getAdminBrands error', err);
    }
}

function* getAdminJournos() {
    try {
        const adminJournos = yield axios.get(`/api/admin/journos`);
        console.log('get all journos:', adminJournos.data);
        yield put({ type: 'SET_ADMIN_JOURNOS', payload: adminJournos.data });
    } catch (err) {
        console.log('getAdminJournos error', err);
    }
}

function* getAdminUsersWatcher() {
    yield takeLatest('GET_ADMIN_USERS', getAdminUsers);
    yield takeLatest('UPDATE_APPROVAL_STATUS', updateApprovalStatus);
    yield takeLatest('POST_MATCHES', postMatches);
    yield takeLatest('GET_ADMIN_MATCHES', getAdminMatches);
    yield takeLatest('DELETE_MATCHES', deleteMatches);
    yield takeLatest('GET_ADMIN_BRANDS', getAdminBrands);
    yield takeLatest('GET_ADMIN_JOURNOS', getAdminJournos);
}

export default getAdminUsersWatcher;