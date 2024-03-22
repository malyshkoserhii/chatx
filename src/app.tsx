import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './components/root-navigator';
import { useDevtools } from './hooks/devtools.hook';

const App = () => {
	useDevtools();

	return (
		<SafeAreaProvider>
			<RootNavigator />
		</SafeAreaProvider>
	);
};

export default App;
