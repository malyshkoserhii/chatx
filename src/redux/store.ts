import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { authReducer } from '../redux/auth/auth-reducer';

const authPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['authData'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
	},
	middleware: (getDefaultMiddleware) => {
		return process.env.NODE_ENV === 'development'
			? getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			  }).concat(logger)
			: getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			  });
	},
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
