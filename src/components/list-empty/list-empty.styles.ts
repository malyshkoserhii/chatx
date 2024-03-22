import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/themes';

export const styles = StyleSheet.create({
	text: {
		fontFamily: FONTS.Roboto.medium,
		fontSize: 16,
		lineHeight: 18,
		color: COLORS.dimGrey,
		textAlign: 'center',
	},
});
