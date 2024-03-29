import { User, USER_STATUS, AuthUser } from 'src/types';

type GetUserSattus = {
	me: AuthUser | null;
	user: User;
};

export const getUserStatus = ({ me, user }: GetUserSattus): USER_STATUS => {
	const isMyFriend = me?.friends.find((el) => el.id === user.id);
	const isMyFollower = me?.followers.find((el) => el.id === user.id);
	const isMyfollowing = me?.followings.find((el) => el.id === user.id);

	if (isMyFriend) {
		return USER_STATUS.FRIEND;
	}

	if (isMyFollower) {
		return USER_STATUS.FOLLOWER;
	}

	if (isMyfollowing) {
		return USER_STATUS.FOLLOWING;
	}

	return USER_STATUS.NONE;
};
