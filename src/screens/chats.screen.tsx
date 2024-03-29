import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Skeleton } from 'src/components/skeleton';
import { useGetFriends } from 'src/hooks';
import { useAuthSelectors, useFriendsSelectors } from 'src/selectors';
import { FriendsList } from 'src/components/friends-list';
import { ListEmpty } from 'src/components/list-empty';
import { NAVIGATION_KEYS, RootStackParamList, User } from 'src/types';

type ChatScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.CHATS
>;

export const ChatsScreen = ({ navigation }: ChatScreenProps) => {
	useGetFriends();

	const { friends } = useFriendsSelectors();
	const { me } = useAuthSelectors();

	const onUserItem = (user: User) => {
		navigation.navigate(NAVIGATION_KEYS.CHAT, {
			user,
		});
	};

	return (
		<Skeleton>
			<FriendsList
				data={friends}
				user={me}
				onUserItem={onUserItem}
				ListEmptyComponent={<ListEmpty text="You have not friends." />}
			/>
		</Skeleton>
	);
};
