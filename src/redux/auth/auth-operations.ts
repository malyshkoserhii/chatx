import axios, { AxiosError } from 'axios';

import { RootState, SignInPayload } from 'src/types';
import * as authActions from '../auth/auth-actions';
import { AppDispatch } from 'src/types';
import { authService } from 'src/services';
import { userService } from 'src/services/user.service';
import { persistor } from 'src/redux/store';
import { authAxios } from 'src/services';

const unsetToken = () => {
	return (authAxios.defaults.headers.common.Authorization = '');
};

export const signIn =
	(credentials: SignInPayload) => async (dispatch: AppDispatch) => {
		dispatch(authActions.signInRequest());

		try {
			const data = await authService.signIn(credentials);
			dispatch(authActions.signInSuccess(data));
		} catch (error) {
			if (error instanceof AxiosError) {
				dispatch(authActions.signInError());
				throw new Error(error.response?.data?.message);
			}
		}
	};

export const fetchCurrentUser =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		try {
			const savedToken = getState().auth.authData.tokens.access_token;
			if (savedToken === '') {
				return;
			}
			dispatch(authActions.fetchCurrentUserRequest());
			const data = await userService.getUser();
			dispatch(authActions.fetchCurrentUserSuccess(data));
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				dispatch(authActions.fetchCurrentUserError());
				throw new Error(error.response?.data?.message);
			}
		}
	};

export const signOut = () => async () => {
	try {
		await userService.signOut();
		persistor.purge();
		unsetToken();
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data?.message);
		}
	}
};
