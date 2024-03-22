import * as React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

import Arrow from '../../../assets/icons/arrow.svg';
import { PressarableIcon } from '../pressarable-icon';
import { styles } from './header.styles';

type HeaderProps = {
	title: string;
	onArrow?: () => void;
	centralElement?: React.ReactNode;
	rightButton?: React.ReactNode;
	additionalContainerStyles?: StyleProp<ViewStyle>;
	additionalArrowStyles?: StyleProp<ViewStyle>;
	additionalTitleBoxStyles?: StyleProp<ViewStyle>;
	additionalTitleStyles?: StyleProp<TextStyle>;
};

export const Header: React.FunctionComponent<HeaderProps> = ({
	onArrow,
	title,
	centralElement,
	rightButton,
	additionalContainerStyles = {},
	additionalArrowStyles = {},
	additionalTitleStyles = {},
}) => {
	return (
		<View style={[styles.container, additionalContainerStyles]}>
			{onArrow ? (
				<PressarableIcon
					icon={<Arrow />}
					onPress={onArrow}
					additionalStyles={[
						styles.pressarableIcon,
						additionalArrowStyles,
					]}
				/>
			) : (
				<View style={styles.dummy} />
			)}

			{centralElement ? (
				centralElement
			) : (
				<Text style={[styles.title, additionalTitleStyles]}>
					{title}
				</Text>
			)}

			{rightButton ? (
				<View style={styles.rightButtonWrapper}>{rightButton}</View>
			) : (
				<View style={styles.dummy} />
			)}
		</View>
	);
};
