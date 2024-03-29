import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './friends-list-item.styles';
import { USER_STATUS, User, UserStatusActions } from 'src/types';
import { Button } from 'src/components/button';

type FriendsListItemProps = {
	user: User;
	onUserPress: (user: User) => void;
	isButtons: boolean;
	userStatus: USER_STATUS;
	action?: UserStatusActions;
	loading?: boolean;
};

const ListItem: React.FunctionComponent<FriendsListItemProps> = ({
	user,
	onUserPress,
	action,
	userStatus,
	isButtons,
	loading = false,
}) => {
	const onButton = () => {
		action?.handler({ id: user.id, email: user.email });
	};

	const onExtraButton = () => {
		action?.extraHandler &&
			action?.extraHandler({ id: user.id, email: user.email });
	};

	const onUser = () => {
		onUserPress(user);
	};

	return (
		<TouchableOpacity onPress={onUser} style={styles.container}>
			<Text numberOfLines={1} style={styles.text}>
				{user.email}
			</Text>

			{isButtons && action && (
				<View style={styles.btnsWrapper}>
					<Button
						text={action?.handlerBtnText ?? ''}
						onPress={onButton}
						extraBtnStyles={[
							styles.btn,
							userStatus === USER_STATUS.FOLLOWER && styles.btnMr,
							userStatus === USER_STATUS.FRIEND &&
								styles.btnDelete,
							userStatus === USER_STATUS.FOLLOWER &&
								styles.btnInvite,
							userStatus === USER_STATUS.FOLLOWING &&
								styles.btnCancel,
							userStatus === USER_STATUS.NONE && styles.btnInvite,
						]}
					/>
					{userStatus === USER_STATUS.FOLLOWER && (
						<Button
							text={action?.extraHandlerBtnText ?? ''}
							onPress={onExtraButton}
							loading={loading}
							extraBtnStyles={[
								styles.btn,
								userStatus === USER_STATUS.FOLLOWER &&
									styles.btnAccept,
							]}
						/>
					)}
				</View>
			)}
		</TouchableOpacity>
	);
};

export const FriendsListItem = React.memo(ListItem);
