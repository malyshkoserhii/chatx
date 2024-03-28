import { Control, UseFormSetValue, useController } from 'react-hook-form';
import { TouchableOpacity, Text } from 'react-native';
import { LoginFormValues } from 'src/types';
import { styles } from './checkbox.styles';

// Create reusable Checkbox component

type CheckBoxProps = {
	name: keyof LoginFormValues;
	control: Control<LoginFormValues>;
	setValue: UseFormSetValue<LoginFormValues>;
};

export const CheckBox: React.FunctionComponent<CheckBoxProps> = ({
	// value,
	// onPress,
	name,
	control,
	setValue,
}) => {
	const {
		field: { value },
	} = useController({
		control,
		// defaultValue: false,
		name,
	});

	// console.log('value: ', value);

	const onChangeValue = () => {
		// setValue('terms', !value);
	};

	return (
		<TouchableOpacity style={styles.checkbox} onPress={onChangeValue}>
			{value ? <Text style={styles.buttonText}>x</Text> : null}
		</TouchableOpacity>
	);
};
