import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	AddFriendsStack,
	ChatsStack,
	FriendsStack,
	SettingsStack,
} from 'src/routes';
import { COLORS } from 'src/themes';
import { NAVIGATION_KEYS } from 'src/types';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: COLORS.cyan,
				tabBarInactiveTintColor: COLORS.dimGrey,
			}}
		>
			<Tab.Screen
				name={NAVIGATION_KEYS.CHATS_STACK}
				component={ChatsStack}
				options={{
					title: '',
					tabBarLabel: 'Chats',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="chat"
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={NAVIGATION_KEYS.ADD_FRIENDS_STACK}
				component={AddFriendsStack}
				options={{
					title: '',
					tabBarLabel: 'Add friends',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="account-plus"
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={NAVIGATION_KEYS.FRIENDS_STACK}
				component={FriendsStack}
				options={{
					title: '',
					tabBarLabel: 'Friends',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="account-group"
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={NAVIGATION_KEYS.SETTINGS_STACK}
				component={SettingsStack}
				options={{
					title: '',
					tabBarLabel: 'Settings',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="cog"
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};
