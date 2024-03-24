import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container';
import { SCREEN_OPTIONS } from 'src/constants';
import { HomeScreen, LoginScreen } from 'src/screens';
import { RootStackParamList, NAVIGATION_KEYS } from 'src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const screens = React.useMemo(() => {
		return (
			<>
				<Stack.Screen
					name={NAVIGATION_KEYS.LOGIN}
					component={LoginScreen}
					options={SCREEN_OPTIONS}
				/>
				<Stack.Screen
					name={NAVIGATION_KEYS.HOME}
					component={HomeScreen}
					options={SCREEN_OPTIONS}
				/>
			</>
		);
	}, []);

	return (
		<NavContainer>
			<Stack.Navigator initialRouteName={NAVIGATION_KEYS.LOGIN}>
				{screens}
			</Stack.Navigator>
		</NavContainer>
	);
};
