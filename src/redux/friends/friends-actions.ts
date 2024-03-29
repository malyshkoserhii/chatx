import { createAction } from '@reduxjs/toolkit';
import { AuthUser, Follower, User } from 'src/types';

export const getAllUsersRequest = createAction('friends/getAllUsersRequest');
export const getAllUsersSuccess = createAction<Array<AuthUser>>(
	'friends/getAllUsersSuccess',
);
export const getAllUsersError = createAction<string>(
	'friends/getAllUsersError',
);

export const sendInviteRequest = createAction('friends/sendInviteRequest');
export const sendInviteSuccess = createAction<Follower>(
	'friends/sendInviteSuccess',
);
export const sendInviteError = createAction<string>('friends/sendInviteError');

export const cancelInviteRequest = createAction('friends/cancelInviteRequest');
export const cancelInviteSuccess = createAction<Follower>(
	'friends/cancelInviteSuccess',
);
export const cancelInviteError = createAction<string>(
	'friends/cancelInviteError',
);

export const declineInviteRequest = createAction(
	'friends/declineInviteRequest',
);
export const declineInviteSuccess = createAction<Follower>(
	'friends/declineInviteSuccess',
);
export const declineInviteError = createAction<string>(
	'friends/declineInviteError',
);

export const addFriendRequest = createAction('friends/addFriendRequest');
export const addFriendSuccess = createAction<Follower>(
	'friends/addFriendSuccess',
);
export const addFriendError = createAction<string>('friends/addFriendError');

export const deleteFriendRequest = createAction('friends/deleteFriendRequest');
export const deleteFriendSuccess = createAction<Follower>(
	'friends/deleteFriendSuccess',
);
export const deleteFriendError = createAction<string>(
	'friends/deleteFriendError',
);

export const getFriendsRequest = createAction('friends/getFriendsRequest');
export const getFriendsSuccess = createAction<Array<User>>(
	'friends/getFriendsSuccess',
);
export const getFriendsError = createAction<string>('friends/getFriendsError');
