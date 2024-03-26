import { createAction } from '@reduxjs/toolkit';
import { SignInData, User } from 'src/types';

export const signInRequest = createAction('auth/signInRequest');
export const signInSuccess = createAction<SignInData>('auth/signInSuccess');
export const signInError = createAction('auth/signInError');

export const signOut = createAction('auth/signOut');

export const fetchCurrentUserRequest = createAction(
	'auth/fetchCurrentUserRequest',
);
export const fetchCurrentUserSuccess = createAction<User>(
	'auth/fetchCurrentUserSuccess',
);
export const fetchCurrentUserError = createAction('auth/fetchCurrentUserError');

export const isLoggedInRequest = createAction('auth/isLoggedInRequest');
export const isLoggedInSuccess = createAction('auth/isLoggedInSuccess');
export const isLoggedInError = createAction('auth/isLoggedInError');

export const isBeingLoggedIn = createAction('auth/isBeingLoggedIn');
