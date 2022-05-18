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

function* getAdminUsersWatcher() {
    yield takeLatest('GET_ADMIN_USERS', getAdminUsers);
}

export default getAdminUsersWatcher;