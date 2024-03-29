import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
	addFriendError,
	addFriendRequest,
	addFriendSuccess,
	cancelInviteError,
	cancelInviteRequest,
	cancelInviteSuccess,
	declineInviteError,
	declineInviteRequest,
	declineInviteSuccess,
	deleteFriendError,
	deleteFriendRequest,
	deleteFriendSuccess,
	getAllUsersError,
	getAllUsersRequest,
	getAllUsersSuccess,
	getFriendsError,
	getFriendsRequest,
	getFriendsSuccess,
	sendInviteError,
	sendInviteRequest,
	sendInviteSuccess,
} from './friends-actions';
import { User } from 'src/types';

export const allUsers = createReducer([] as Array<User>, (builder) => {
	builder.addCase(getAllUsersSuccess, (_, { payload }) => payload);
});

export const friends = createReducer([] as Array<User>, (builder) => {
	builder.addCase(getFriendsSuccess, (_, { payload }) => payload);
});

export const error = createReducer('', (builder) => {
	builder.addCase(getAllUsersError, (_, { payload }) => payload);
	builder.addCase(sendInviteError, (_, { payload }) => payload);
	builder.addCase(cancelInviteError, (_, { payload }) => payload);
	builder.addCase(addFriendError, (_, { payload }) => payload);
	builder.addCase(declineInviteError, (_, { payload }) => payload);
	builder.addCase(deleteFriendError, (_, { payload }) => payload);
});

export const loading = createReducer(false, (builder) => {
	builder.addCase(getAllUsersRequest, () => true);
	builder.addCase(getAllUsersSuccess, () => false);
	builder.addCase(getAllUsersError, () => false);

	builder.addCase(sendInviteRequest, () => true);
	builder.addCase(sendInviteSuccess, () => false);
	builder.addCase(sendInviteError, () => false);

	builder.addCase(cancelInviteRequest, () => true);
	builder.addCase(cancelInviteSuccess, () => false);
	builder.addCase(cancelInviteError, () => false);

	builder.addCase(addFriendRequest, () => true);
	builder.addCase(addFriendSuccess, () => false);
	builder.addCase(addFriendError, () => false);

	builder.addCase(declineInviteRequest, () => true);
	builder.addCase(declineInviteSuccess, () => false);
	builder.addCase(declineInviteError, () => false);

	builder.addCase(deleteFriendRequest, () => true);
	builder.addCase(deleteFriendSuccess, () => false);
	builder.addCase(deleteFriendError, () => false);

	builder.addCase(getFriendsRequest, () => true);
	builder.addCase(getFriendsSuccess, () => false);
	builder.addCase(getFriendsError, () => false);
});

export const friendsReducer = combineReducers({
	allUsers,
	loading,
	error,
	friends,
});
