export type User = {
	id: number;
	createdAt: string;
	updatedAt: string;
	email: string;
};

export type AuthUser = {
	followers: Array<Follower>;
	followings: Array<Follower>;
	friends: Array<Follower>;
} & User;

export type Follower = {
	id: number;
	email: string;
};

export type Tokens = {
	access_token: string;
	refresh_token: string;
};

export type SignInPayload = {
	email: string;
	password: string;
};

export type SignInData = {
	user: AuthUser | null;
	tokens: Tokens;
};

export type UserStatus = 'friend' | 'follower' | 'following' | 'none';

export enum USER_STATUS {
	FRIEND = 'FRIEND',
	FOLLOWER = 'FOLLOWER',
	FOLLOWING = 'FOLLOWING',
	NONE = 'NONE',
}

export type UserStatusActions = {
	handlerBtnText: string;
	extraHandlerBtnText?: string;
	handler: (user: Follower) => void;
	extraHandler?: (user: Follower) => void;
};

export type UserItemAction = {
	[key in USER_STATUS]: UserStatusActions;
};
