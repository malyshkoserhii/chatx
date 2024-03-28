import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/themes';

export const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		fontFamily: FONTS.Roboto.regular,
		fontSize: 12,
		color: COLORS.sinopia,
	},
});
