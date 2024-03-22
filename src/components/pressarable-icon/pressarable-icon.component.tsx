import * as React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

import {styles} from './pressasrable-icon.styles';

type PressarableIconProps = {
  icon: React.ReactNode;
  onPress: () => void;
  additionalStyles?: StyleProp<ViewStyle>;
};

export const PressarableIcon: React.FunctionComponent<PressarableIconProps> = ({
  icon,
  onPress,
  additionalStyles = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, additionalStyles]}
      onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};
