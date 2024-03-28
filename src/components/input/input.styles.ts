import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/themes';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		paddingBottom: 20,
		marginBottom: 10,
	},
	input: {
		width: '100%',
		paddingHorizontal: 16,
		paddingVertical: 10,
		fontFamily: FONTS.Roboto.regular,
		fontSize: 14,
		borderWidth: 1,
		borderColor: COLORS.eerieBlack,
		borderRadius: 24,
	},
	label: {
		marginBottom: 6,
		fontFamily: FONTS.Roboto.medium,
		fontSize: 14,
	},
	focused: {
		borderWidth: 1,
		borderColor: COLORS.brilliantAzure,
	},
	wrong: {
		borderWidth: 1,
		borderColor: COLORS.sinopia,
	},
	correct: {
		borderWidth: 1,
		borderColor: COLORS.americanGreen,
	},
});
