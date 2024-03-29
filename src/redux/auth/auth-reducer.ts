import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import {
	fetchCurrentUserRequest,
	fetchCurrentUserError,
	fetchCurrentUserSuccess,
	signInRequest,
	signInSuccess,
} from './auth-actions';
import { AuthData, AuthUser, Follower } from 'src/types';
import {
	addFriendSuccess,
	cancelInviteSuccess,
	declineInviteSuccess,
	deleteFriendSuccess,
	sendInviteSuccess,
} from '../friends/friends-actions';

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

	builder.addCase(sendInviteSuccess, (state, { payload }) => {
		return {
			user: {
				...(state.user as AuthUser),
				followings: [
					...(state.user?.followings ?? []),
					payload,
				] as Array<Follower>,
			},
			tokens: {
				...state.tokens,
			},
		};
	});

	builder.addCase(cancelInviteSuccess, (state, { payload }) => {
		return {
			user: {
				...(state.user as AuthUser),
				followings: state.user?.followings.filter(
					(following) => following.id !== payload.id,
				) as Array<Follower>,
			},
			tokens: {
				...state.tokens,
			},
		};
	});

	builder.addCase(declineInviteSuccess, (state, { payload }) => {
		return {
			user: {
				...(state.user as AuthUser),
				followers: state.user?.followers.filter(
					(folower) => folower.id !== payload.id,
				) as Array<Follower>,
			},
			tokens: {
				...state.tokens,
			},
		};
	});

	builder.addCase(addFriendSuccess, (state, { payload }) => {
		return {
			user: {
				...(state.user as AuthUser),
				friends: [
					...(state.user?.friends ?? []),
					payload,
				] as Array<Follower>,
				followers: state.user?.followers.filter(
					(folower) => folower.id !== payload.id,
				) as Array<Follower>,
			},
			tokens: {
				...state.tokens,
			},
		};
	});

	builder.addCase(deleteFriendSuccess, (state, { payload }) => {
		return {
			user: {
				...(state.user as AuthUser),
				friends: state.user?.friends.filter(
					(friend) => friend.id !== payload.id,
				) as Array<Follower>,
			},
			tokens: {
				...state.tokens,
			},
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
