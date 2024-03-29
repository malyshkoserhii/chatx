import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREEN_OPTIONS } from 'src/constants';
import {
	AddFriendsScreen,
	ChatScreen,
	ChatsScreen,
	FriendsScreen,
	LoginScreen,
	SettingsScreen,
} from 'src/screens';
import { NAVIGATION_KEYS, RootStackParamList } from 'src/types';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export const publicScreens = (
	<Stack.Navigator>
		<Stack.Screen
			name={NAVIGATION_KEYS.LOGIN}
			component={LoginScreen}
			options={SCREEN_OPTIONS}
		/>
	</Stack.Navigator>
);

export const ChatsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATION_KEYS.CHATS}
				component={ChatsScreen}
				options={SCREEN_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATION_KEYS.CHAT}
				component={ChatScreen}
				options={SCREEN_OPTIONS}
			/>
		</Stack.Navigator>
	);
};

export const AddFriendsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATION_KEYS.ADD_FRIENDS}
				component={AddFriendsScreen}
				options={SCREEN_OPTIONS}
			/>
		</Stack.Navigator>
	);
};

export const FriendsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATION_KEYS.FRIENDS}
				component={FriendsScreen}
				options={SCREEN_OPTIONS}
			/>
		</Stack.Navigator>
	);
};

export const SettingsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATION_KEYS.SETTINGS}
				component={SettingsScreen}
				options={SCREEN_OPTIONS}
			/>
		</Stack.Navigator>
	);
};
