import { StyleSheet } from 'react-native';

import { COLORS } from 'src/themes';

export const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: COLORS.water,
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 16,
	},
});
