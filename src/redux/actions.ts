import * as ActionTypes from './constant';

export const loginRequest = payload => ({
	type: ActionTypes.LOGIN_REQUEST,
	payload,
});

export const loginSuccess = payload => ({
	type: ActionTypes.LOGIN_SUCCESS,
	payload,
});

export const loginFailure = err => ({
	type: ActionTypes.LOGIN_FAILURE,
	err,
});

export const signupRequest = payload => ({
	type: ActionTypes.SIGNUP_REQUEST,
	payload,
});

export const signupSuccess = payload => ({
	type: ActionTypes.SIGNUP_SUCCESS,
	payload,
});

export const signupFailure = err => ({
	type: ActionTypes.SIGNUP_FAILURE,
	err,
});

