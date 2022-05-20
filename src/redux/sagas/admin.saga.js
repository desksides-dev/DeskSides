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

function* updateApprovalStatus(action){    
    try {
        yield axios.put(`api/admin/${action.approvalStatus}/${action.payload}`)
        yield put({ type: 'GET_ADMIN_USERS'})
    } catch (err) {
        console.log(err);    
    }
}

function* postMatches(action){
    const matches = action.state.matches;
    const id = action.payload.id
    console.log('%%%% in postMatches saga. matches =', matches);

    if (action.payload.user_type === 'journalist'){
        try {
            for(const matchId of matches){
                yield axios.post(`/api/admin/${id}/${matchId}`)
            }
        } catch (error) {
            console.log(error);    
        }
    }
    else{
        try {
            for(const matchId of matches){
                yield axios.post(`/api/admin/${matchId}/${id}`)
            }
        } catch (error) {
            console.log(error);    
        }
    }
}

function* getAdminMatches(action){

    console.log('getAdminMatches id =', action.payload.id);
    
    const id = action.payload.id;

    try {
        const adminMatches = yield axios.get(`/api/admin/matches/${id}`);
        console.log('@@@@@@ get all matches:', adminMatches.data);
        yield put({ type: 'SET_ADMIN_MATCHES', payload: adminMatches.data });

    } catch (err) {
        console.log('getAdminMatches error', err);
    }
}

function* getAdminUsersWatcher() {
    yield takeLatest('GET_ADMIN_USERS', getAdminUsers);
    yield takeLatest('UPDATE_APPROVAL_STATUS', updateApprovalStatus);
    yield takeLatest('POST_MATCHES', postMatches);
    yield takeLatest('GET_ADMIN_MATCHES', getAdminMatches);
}

export default getAdminUsersWatcher;