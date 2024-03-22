import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container';
import { SCREEN_OPTIONS } from 'src/constants';
import { HomeScreen } from 'src/screens';
import { RootStackParamList, NAVIGATION_KEYS } from 'src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const screens = React.useMemo(() => {
		return (
			<>
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
			<Stack.Navigator initialRouteName={NAVIGATION_KEYS.HOME}>
				{screens}
			</Stack.Navigator>
		</NavContainer>
	);
};
