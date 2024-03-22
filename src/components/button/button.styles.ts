import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/themes';

export const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		borderRadius: 32,
		backgroundColor: COLORS.internationalOrange,
	},
	text: {
		fontFamily: FONTS.Roboto.medium,
		fontSize: 16,
		lineHeight: 24,
		color: COLORS.antiFlashWhite,
	},
	disabledBtn: {
		backgroundColor: COLORS.dimGrey,
	},
	disabledText: {
		color: COLORS.chineseSilver,
	},
	content: {
		flexDirection: 'row',
	},
	iconWrapper: {
		marginRight: 8,
	},
});
