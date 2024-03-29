import { useSelector } from 'react-redux';

import { AuthUser, Follower, RootState } from 'src/types';

export const useAuthSelectors = () => {
	const me = useSelector<RootState, AuthUser | null>(
		(state) => state.auth.authData.user,
	);

	const followers = useSelector<RootState, Array<Follower>>(
		(state) => state.auth.authData.user?.followers ?? [],
	);

	const followings = useSelector<RootState, Array<Follower>>(
		(state) => state.auth.authData.user?.followings ?? [],
	);

	const friends = useSelector<RootState, Array<Follower>>(
		(state) => state.auth.authData.user?.friends ?? [],
	);

	return {
		me,
		followers,
		followings,
		friends,
	};
};
