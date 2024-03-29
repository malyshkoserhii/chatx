import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppDispatch } from 'src/types';

type SetError = {
	error: unknown;
	dispatch: AppDispatch;
	action: ActionCreatorWithPayload<string, string>;
};

export const setError = ({ error, dispatch, action }: SetError) => {
	if (error instanceof AxiosError) {
		return dispatch(action(error.response?.data?.message));
	}

	if (error instanceof Error) {
		return dispatch(action(error.message));
	}

	throw error;
};
