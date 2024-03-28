import { Tokens, User } from './user.type';

export type AuthData = {
	user: User | null;
	tokens: Tokens;
};
