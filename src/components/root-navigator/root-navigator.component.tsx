import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container';
import { SCREEN_OPTIONS } from 'src/constants';
import { HomeScreen, LoginScreen } from 'src/screens';
import { RootStackParamList, NAVIGATION_KEYS, RootState } from 'src/types';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

const publicScreens = (
	<>
		<Stack.Screen
			name={NAVIGATION_KEYS.LOGIN}
			component={LoginScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);

const privateScreens = (
	<>
		<Stack.Screen
			name={NAVIGATION_KEYS.HOME}
			component={HomeScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);

export const RootNavigator = () => {
	const isLoggedIn = useSelector<RootState, boolean>(
		(state) => state.auth.isLoggedIn,
	);

	return (
		<NavContainer>
			<Stack.Navigator>
				{/* {screens} */}
				{isLoggedIn ? privateScreens : publicScreens}
			</Stack.Navigator>
		</NavContainer>
	);
};
