import * as React from 'react';

import { useDispatch } from 'react-redux';
import { Skeleton } from 'src/components/skeleton';
import { AppDispatch } from 'src/types';
import { useGetAllUsers, useUsersList } from 'src/hooks';
import { useFriendsSelectors } from 'src/selectors';
import { UsersList } from 'src/components/users-list';

export const AddFriendsScreen = () => {
	const dispatch: AppDispatch = useDispatch();

	useGetAllUsers();

	const { allUsers, loading } = useFriendsSelectors();

	const { actions, me } = useUsersList();

	return (
		<Skeleton>
			<UsersList
				data={allUsers}
				user={me}
				actions={actions}
				loading={loading}
			/>
		</Skeleton>
	);
};
