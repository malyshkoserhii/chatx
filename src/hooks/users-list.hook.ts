import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as friendsOperations from 'src/redux/friends/friends-operations';
import { useAuthSelectors, useFriendsSelectors } from 'src/selectors';
import { AppDispatch, Follower, UserItemAction, USER_STATUS } from 'src/types';

export const useUsersList = () => {
	const dispatch: AppDispatch = useDispatch();

	const { me } = useAuthSelectors();
	const { loading } = useFriendsSelectors();

	const onSendInvite = (user: Follower) => {
		dispatch(friendsOperations.sendInvite(user));
	};
	const onCancelInvite = (user: Follower) => {
		dispatch(friendsOperations.cancelInvite(user));
	};

	const onAcceptFriend = (user: Follower) => {
		dispatch(friendsOperations.acceptFriend(user));
	};

	const onDeclineInvite = (user: Follower) => {
		dispatch(friendsOperations.declineInvite(user));
	};

	const onDeleteFriend = (user: Follower) => {
		dispatch(friendsOperations.deleteFriend(user));
	};

	const actions: UserItemAction = React.useMemo(() => {
		return {
			[USER_STATUS.FRIEND]: {
				handlerBtnText: 'Delete',
				handler: onDeleteFriend,
			},
			[USER_STATUS.FOLLOWER]: {
				handlerBtnText: 'Accept',
				handler: onAcceptFriend,
				extraHandlerBtnText: 'Decline',
				extraHandler: onDeclineInvite,
			},
			[USER_STATUS.FOLLOWING]: {
				handlerBtnText: 'Cancel',
				handler: onCancelInvite,
			},
			[USER_STATUS.NONE]: {
				handlerBtnText: 'Invite',
				handler: onSendInvite,
			},
		};
	}, []);

	return {
		actions,
		me,
		loading,
		onAcceptFriend,
		onCancelInvite,
		onDeclineInvite,
		onDeleteFriend,
		onSendInvite,
	};
};
