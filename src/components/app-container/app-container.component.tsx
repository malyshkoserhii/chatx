import * as React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './app-container.styles';
import { AppDispatch, RootState } from 'src/types';
import * as authOperations from 'src/redux/auth/auth-operations';

type AppContainerProps = {
	children: React.ReactNode;
};

export const AppContainer: React.FunctionComponent<AppContainerProps> = ({
	children,
}) => {
	const dispatch: AppDispatch = useDispatch();

	const isBeingLoggedIn = useSelector<RootState, boolean>(
		(state) => state.auth.isBeingLoggedIn,
	);

	React.useEffect(() => {
		dispatch(authOperations.fetchCurrentUser());
	}, [dispatch]);

	if (isBeingLoggedIn) {
		return <Text>Splash Screen</Text>;
	}

	return <View style={styles.container}>{children}</View>;
};
