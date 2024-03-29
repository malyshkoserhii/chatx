import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import { Skeleton } from 'src/components/skeleton';
import { RootStackParamList, NAVIGATION_KEYS } from 'src/types';

type ChatScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.CHAT
>;

export const ChatScreen = ({ route }: ChatScreenProps) => {
	const user = React.useMemo(() => {
		return route?.params?.user;
	}, [route?.params]);

	return (
		<Skeleton>
			<Text>{user.email}</Text>
		</Skeleton>
	);
};
