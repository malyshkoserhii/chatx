import { AppDispatch, Follower } from 'src/types';
import * as friendsActions from './friends-actions';
import { userService } from 'src/services/user.service';
import { setError } from 'src/utils';
import { friendService } from 'src/services';

export const getAllUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(friendsActions.getAllUsersRequest());
		const data = await userService.getAll();
		dispatch(friendsActions.getAllUsersSuccess(data));
	} catch (error) {
		setError({
			error,
			dispatch,
			action: friendsActions.getAllUsersError,
		});
	}
};

export const getFriends = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(friendsActions.getFriendsRequest());
		const data = await friendService.getFriends();
		dispatch(friendsActions.getFriendsSuccess(data.friends));
	} catch (error) {
		setError({
			error,
			dispatch,
			action: friendsActions.getFriendsError,
		});
	}
};

export const sendInvite = (user: Follower) => async (dispatch: AppDispatch) => {
	try {
		dispatch(friendsActions.sendInviteRequest());
		await friendService.inviteFriend({ followingId: user.id });
		dispatch(friendsActions.sendInviteSuccess(user));
	} catch (error) {
		setError({
			error,
			dispatch,
			action: friendsActions.sendInviteError,
		});
	}
};

export const cancelInvite =
	(user: Follower) => async (dispatch: AppDispatch) => {
		try {
			dispatch(friendsActions.cancelInviteRequest());
			await friendService.cancelInvitation({
				myFollowerUserId: user.id,
			});
			dispatch(friendsActions.cancelInviteSuccess(user));
		} catch (error) {
			setError({
				error,
				dispatch,
				action: friendsActions.cancelInviteError,
			});
		}
	};

export const acceptFriend =
	(user: Follower) => async (dispatch: AppDispatch) => {
		try {
			dispatch(friendsActions.addFriendRequest());
			await friendService.addFriend({ friendId: user.id });
			dispatch(friendsActions.addFriendSuccess(user));
			getFriends()(dispatch);
		} catch (error) {
			setError({
				error,
				dispatch,
				action: friendsActions.addFriendError,
			});
		}
	};

export const declineInvite =
	(user: Follower) => async (dispatch: AppDispatch) => {
		try {
			dispatch(friendsActions.declineInviteRequest());
			await friendService.declineInvitation({
				myFollowerUserId: user.id,
			});
			dispatch(friendsActions.declineInviteSuccess(user));
		} catch (error) {
			setError({
				error,
				dispatch,
				action: friendsActions.declineInviteError,
			});
		}
	};

export const deleteFriend =
	(user: Follower) => async (dispatch: AppDispatch) => {
		try {
			dispatch(friendsActions.declineInviteRequest());
			await friendService.deleteFriend({ myFriendId: user.id });
			dispatch(friendsActions.deleteFriendSuccess(user));
			getFriends()(dispatch);
		} catch (error) {
			setError({
				error,
				dispatch,
				action: friendsActions.getAllUsersError,
			});
		}
	};
