import * as React from 'react';

import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from 'src/components/button';
import { Skeleton } from 'src/components/skeleton';
import { AppDispatch } from 'src/types';
import * as authOperations from 'src/redux/auth/auth-operations';

export const AddFriendsScreen = () => {
	const dispatch: AppDispatch = useDispatch();

	return (
		<Skeleton>
			<Text>Add Friends Screen</Text>
		</Skeleton>
	);
};
