import * as React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { Control, FieldValues, useFormState } from 'react-hook-form';

import { styles } from './error.styles';

type ErrorProps<T extends FieldValues> = {
	control: Control<T>;
	field: string;
	extraErrorStyles?: StyleProp<TextStyle>;
};

export function Error<T extends FieldValues>({
	control,
	field,
	extraErrorStyles,
}: ErrorProps<T>) {
	const { errors } = useFormState<T>({
		control,
	});

	return errors[field]?.message ? (
		<Text style={[styles.error, extraErrorStyles]}>
			{String(errors[field]?.message)}
		</Text>
	) : null;
}
