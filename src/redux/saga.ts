import { put, call, takeLatest } from 'redux-saga/effects';
import {
	loginSuccess,
	loginFailure,
	signupSuccess,
	signupFailure,
} from './actions';
import { LOGIN_REQUEST, SIGNUP_REQUEST } from './constant';

import * as api from '../api';

function* loginRequestHandler({ payload }: ReturnType<any>) {
	try {
		const { user } = yield call(api.login, payload)

		yield put(loginSuccess(user));
	} catch (err) {
		yield put(loginFailure(err));
	}
}

function* signupRequestHandler({ payload }: ReturnType<any>) {
	try {
		const response = yield call(api.signup, payload)

		yield put(signupSuccess(response));
	} catch (err) {
		yield put(signupFailure(err));
	}
}

export default function* saga() {
	yield takeLatest(LOGIN_REQUEST, loginRequestHandler);
	yield takeLatest(SIGNUP_REQUEST, signupRequestHandler);
}
