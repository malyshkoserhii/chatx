import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import {
	fetchCurrentUserRequest,
	fetchCurrentUserError,
	fetchCurrentUserSuccess,
	signInRequest,
	signInSuccess,
} from './auth-actions';
import { AuthData } from 'src/types';

const initialState: AuthData = {
	user: null,
	tokens: {
		access_token: '',
		refresh_token: '',
	},
};

const authData = createReducer(initialState, (builder) => {
	builder.addCase(signInRequest, (state) => {
		return {
			...state,
		};
	});
	builder.addCase(signInSuccess, (state, { payload }) => {
		return {
			...state,
			tokens: payload?.tokens,
			user: payload?.user,
		};
	});
	builder.addCase(fetchCurrentUserSuccess, (state, { payload }) => {
		return {
			...state,
			user: payload,
		};
	});
	builder.addCase(PURGE, () => initialState);
});

const isLoggedIn = createReducer(false, (builder) => {
	builder.addCase(signInSuccess, () => true);
	builder.addCase(fetchCurrentUserSuccess, () => true);
	builder.addCase(PURGE, () => false);
});

const isBeingLoggedIn = createReducer(false, (builder) => {
	builder.addCase(fetchCurrentUserRequest, () => true);
	builder.addCase(fetchCurrentUserSuccess, () => false);
	builder.addCase(fetchCurrentUserError, () => false);
});

export const authReducer = combineReducers({
	authData,
	isLoggedIn,
	isBeingLoggedIn,
});
