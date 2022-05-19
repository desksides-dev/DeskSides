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
    console.log('IN updateApprovalStatus, action = ', action);
    
    try {
        yield axios.put(`api/admin/${action.approvalStatus}/${action.payload}`)
        yield put({ type: 'GET_ADMIN_USERS'})
    } catch (err) {
        console.log(err);    
    }
}

function* getAdminUsersWatcher() {
    yield takeLatest('GET_ADMIN_USERS', getAdminUsers);
    yield takeLatest('UPDATE_APPROVAL_STATUS', updateApprovalStatus);
}

export default getAdminUsersWatcher;