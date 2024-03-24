import * as React from 'react';
import { View } from 'react-native';

import { styles } from './container.styles';

type ContainerProps = {
	children: React.ReactNode;
};

export const Container: React.FunctionComponent<ContainerProps> = ({
	children,
}) => {
	return <View style={styles.container}>{children}</View>;
};
