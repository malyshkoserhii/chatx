import { useSelector } from 'react-redux';

import { AuthUser, RootState, User } from 'src/types';

export const useFriendsSelectors = () => {
	const allUsers = useSelector<RootState, Array<AuthUser>>(
		(state) => state.friends.allUsers,
	);

	const friends = useSelector<RootState, Array<User>>(
		(state) => state.friends.friends,
	);

	const loading = useSelector<RootState, boolean>(
		(state) => state.friends.loading,
	);

	return {
		allUsers,
		loading,
		friends,
	};
};
