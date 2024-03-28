import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { COLORS } from 'src/themes';

export const styles = (insets: EdgeInsets) =>
	StyleSheet.create({
		safeArea: {
			flex: 1,
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
			paddingLeft: insets.left,
			paddingRight: insets.right,
			backgroundColor: COLORS.water,
		},
	});
