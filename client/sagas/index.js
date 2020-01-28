import { fork, put } from 'redux-saga/effects';
import { updateAppLoading } from '../actions/app';

export default function* appRootSaga() {
    // perform action here
    yield put((updateAppLoading(true)));
}