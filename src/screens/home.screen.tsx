import * as React from 'react';

import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from 'src/components/button';
import { Skeleton } from 'src/components/skeleton';
import { AppDispatch } from 'src/types';
import * as authOperations from 'src/redux/auth/auth-operations';

export const HomeScreen = () => {
	const dispatch: AppDispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(authOperations.signOut());
	};

	const getMe = () => {
		dispatch(authOperations.fetchCurrentUser());
	};

	return (
		<Skeleton>
			<View>
				<Button text="Sign out" onPress={handleSignOut} />
				<Text>Home Screen</Text>
				<Button text="Get me" onPress={getMe} />
			</View>
		</Skeleton>
	);
};
