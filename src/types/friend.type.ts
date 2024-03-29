import { User } from './user.type';

export type Friend = {
	id: number;
	email: string;
};

export type InviteFriendPayload = {
	followingId: number;
};

export type DeclineFollowerPayload = {
	myFollowerUserId: number;
};

export type FriendIdPayload = {
	friendId: number;
};

export type DeleteFriendPayload = {
	myFriendId: number;
};

export type GetFriendsResponse = {
	friends: Array<User>;
};
