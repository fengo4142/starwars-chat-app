import { put, call, takeLatest } from 'redux-saga/effects';
import {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
  getMessageSuccess,
  getMessageFailure,
} from './actions';
import { LOGIN_REQUEST, SIGNUP_REQUEST, GET_MESSAGE_REQUEST } from './constant';

import * as api from '../api';

function* loginRequestHandler({ payload }: ReturnType<any>) {
  try {
    const { user } = yield call(api.login, payload)
    console.log('data', user)
    yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

function* signupRequestHandler({ payload }: ReturnType<any>) {
  try {
    const response = yield call(api.signup, payload)
    console.log(response, "-ss-")

    yield put(signupSuccess(response));
  } catch (err) {
    yield put(signupFailure(err));
  }
}

function* getMessageRequestHandler() {
  try {
    const response = yield call(api.getMessage)
    console.log(response)
    yield put(getMessageSuccess(response));
  } catch (err) {
    yield put(getMessageFailure(err));
  }
}

export default function* saga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestHandler);
  yield takeLatest(SIGNUP_REQUEST, signupRequestHandler);
  yield takeLatest(GET_MESSAGE_REQUEST, getMessageRequestHandler);
}
