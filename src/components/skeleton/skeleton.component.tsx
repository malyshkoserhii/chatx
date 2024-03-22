import * as React from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';

import { styles } from './skeleton.styles';

type SkeletonProps = {
	children: React.ReactNode;
	extraSafeAreaStyles?: StyleProp<ViewStyle>;
};

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({
	children,
	extraSafeAreaStyles = {},
}) => {
	return (
		<SafeAreaView style={[styles.safeArea, extraSafeAreaStyles]}>
			{children}
		</SafeAreaView>
	);
};
