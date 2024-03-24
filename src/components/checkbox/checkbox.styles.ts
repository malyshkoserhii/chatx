import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/themes';

export const styles = StyleSheet.create({
	checkbox: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
		height: 50,
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderWidth: 1,
		borderColor: COLORS.dimGrey,
		borderRadius: 16,
		backgroundColor: COLORS.spanishPink,
		marginTop: 40,
		alignSelf: 'center',
	},
	buttonText: {
		fontFamily: FONTS.Roboto.regular,
		fontSize: 14,
		textAlign: 'center',
	},
});
