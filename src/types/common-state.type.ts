import { store } from 'src/redux/store';
import { AuthData } from './auth-state.type';
import { AuthUser, User } from './user.type';

export type AppDispatch = typeof store.dispatch;

export interface RootState {
	auth: {
		authData: AuthData;
		isLoggedIn: boolean;
		isBeingLoggedIn: boolean;
	};
	friends: {
		allUsers: Array<AuthUser>;
		loading: boolean;
		friends: Array<User>;
	};
}
