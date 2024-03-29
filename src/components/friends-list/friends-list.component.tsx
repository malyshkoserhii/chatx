import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { styles } from './friends-list.styles';
import { AuthUser, USER_STATUS, User, UserItemAction } from 'src/types';
import { getUserStatus } from 'src/utils';
import { FriendsListItem } from '../friends-list-item';

type FriendsListProps = {
	data: Array<User>;
	user: AuthUser | null;
	onUserItem: (user: User) => void;
	actions?: UserItemAction;
	userStatus?: USER_STATUS;
	isItemButtons?: boolean;
	loading?: boolean;
	ListEmptyComponent?: React.ReactElement;
};

export const FriendsList: React.FunctionComponent<FriendsListProps> = ({
	data,
	user,
	onUserItem,
	actions,
	userStatus,
	isItemButtons = true,
	loading = false,
	ListEmptyComponent = null,
}) => {
	const renderItem: ListRenderItem<User> = React.useCallback(
		({ item }) => {
			const status = getUserStatus({ me: user, user: item });
			const action = actions?.[userStatus ?? status];

			return (
				<FriendsListItem
					user={item}
					onUserPress={onUserItem}
					action={action}
					userStatus={userStatus ?? status}
					loading={loading}
					isButtons={isItemButtons}
				/>
			);
		},
		[user, actions, userStatus, loading, isItemButtons],
	);

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => String(item.id)}
			renderItem={renderItem}
			contentContainerStyle={styles.contetntContainer}
			ListEmptyComponent={ListEmptyComponent}
		/>
	);
};
