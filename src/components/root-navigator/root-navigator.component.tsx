import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container';
import { SCREEN_OPTIONS } from 'src/constants';
import { ChatsScreen, LoginScreen } from 'src/screens';
import { RootStackParamList, NAVIGATION_KEYS, RootState } from 'src/types';
import { useSelector } from 'react-redux';
import { BottomTabs } from '../bottom-tabs';
import { publicScreens } from 'src/routes';

export const RootNavigator = () => {
	const isLoggedIn = useSelector<RootState, boolean>(
		(state) => state.auth.isLoggedIn,
	);

	return (
		<NavContainer>
			{isLoggedIn ? <BottomTabs /> : publicScreens}
		</NavContainer>
	);
};
