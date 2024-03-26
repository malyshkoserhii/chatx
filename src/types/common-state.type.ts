import { store } from 'src/redux/store';
import { AuthData } from './auth-state.type';

export type AppDispatch = typeof store.dispatch;

export interface RootState {
	auth: {
		authData: AuthData;
		isLoggedIn: boolean;
		isBeingLoggedIn: boolean;
	};
}
