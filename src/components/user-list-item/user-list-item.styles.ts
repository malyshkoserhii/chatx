import { StyleSheet } from 'react-native';

import { COLORS, commonStyles } from 'src/themes';

export const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: COLORS.cyan,
		borderBottomWidth: 2,
		borderBottomColor: COLORS.brilliantAzure,
		marginBottom: 10,
		borderRadius: 10,
		...commonStyles.rowBetween,
	},
	btnsWrapper: {
		...commonStyles.rowBetween,
	},
	text: {
		width: 100,
		...commonStyles.mediumText,
	},
	btn: {
		width: 80,
	},
	btnMr: {
		marginRight: 10,
	},
	btnInvite: {
		backgroundColor: COLORS.brilliantAzure,
	},
	btnCancel: {
		backgroundColor: COLORS.spanishPink,
	},
	btnDelete: {
		backgroundColor: COLORS.sinopia,
	},
	btnAccept: {
		backgroundColor: COLORS.peachOrange,
	},
});
