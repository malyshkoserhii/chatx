import { AuthUser, Tokens } from './user.type';

export type AuthData = {
	user: AuthUser | null;
	tokens: Tokens;
};
