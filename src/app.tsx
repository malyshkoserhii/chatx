import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AxiosInterceptor } from './components/axios-interceptor';
import { AppContainer } from './components/app-container';
import { RootNavigator } from './components/root-navigator';
import { useDevtools } from './hooks/devtools.hook';
import { store, persistor } from './redux/store';

const App = () => {
	useDevtools();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaProvider>
					<AxiosInterceptor>
						<AppContainer>
							<RootNavigator />
						</AppContainer>
					</AxiosInterceptor>
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
