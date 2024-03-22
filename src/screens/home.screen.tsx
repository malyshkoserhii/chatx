import * as React from 'react';

import { Text, View } from 'react-native';
import { Skeleton } from 'src/components/skeleton';

export const HomeScreen = () => {
	return (
		<Skeleton>
			<View>
				<Text>Home Screen</Text>
			</View>
		</Skeleton>
	);
};
