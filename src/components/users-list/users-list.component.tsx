import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { styles } from './users-list.styles';
import { AuthUser, USER_STATUS, UserItemAction } from 'src/types';
import { UserListItem } from '../user-list-item';
import { getUserStatus } from 'src/utils';

type UsersListProps = {
	data: Array<AuthUser>;
	user: AuthUser | null;
	actions?: UserItemAction;
	userStatus?: USER_STATUS;
	isItemButtons?: boolean;
	loading?: boolean;
};

export const UsersList: React.FunctionComponent<UsersListProps> = ({
	data,
	user,
	actions,
	userStatus,
	isItemButtons = true,
	loading = false,
}) => {
	const renderItem: ListRenderItem<AuthUser> = React.useCallback(
		({ item }) => {
			const status = getUserStatus({ me: user, user: item });
			const action = actions?.[userStatus ?? status];

			return (
				<UserListItem
					user={item}
					onUserPress={() => {}}
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
		/>
	);
};
