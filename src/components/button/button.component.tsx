import * as React from 'react';
import {
	ActivityIndicator,
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';

import { styles } from './button.styles';

type ButtonProps = {
	onPress: () => void;
	text: string;
	icon?: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
	activityIndicatorSize?: number;
	additionalContentWrapperStyles?: StyleProp<ViewStyle>;
	additionalBtnStyles?: StyleProp<ViewStyle>;
	additionalTextStyles?: StyleProp<TextStyle>;
	additionalIconWrapperStyles?: StyleProp<ViewStyle>;
};

export const Button: React.FunctionComponent<ButtonProps> = ({
	onPress,
	text,
	icon,
	loading = false,
	disabled = false,
	activityIndicatorSize = 24,
	additionalContentWrapperStyles = {},
	additionalBtnStyles = {},
	additionalTextStyles = {},
	additionalIconWrapperStyles = {},
}) => {
	const isDisabled = React.useMemo(() => {
		return loading || disabled;
	}, [loading, disabled]);

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={isDisabled}
			style={[
				styles.button,
				isDisabled && styles.disabledBtn,
				additionalBtnStyles,
			]}
		>
			{loading ? (
				<ActivityIndicator size={activityIndicatorSize} />
			) : (
				<View style={[styles.content, additionalContentWrapperStyles]}>
					{icon && (
						<View
							style={[
								styles.iconWrapper,
								additionalIconWrapperStyles,
							]}
						>
							{icon}
						</View>
					)}
					<Text
						style={[
							styles.text,
							isDisabled && styles.disabledText,
							additionalTextStyles,
						]}
					>
						{text}
					</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};
