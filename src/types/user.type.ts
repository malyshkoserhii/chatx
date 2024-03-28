export type User = {
	id: number;
	createdAt: string;
	updatedAt: string;
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
	user: User | null;
	tokens: Tokens;
};
