import * as React from 'react';
import { Text } from 'react-native';
import { Control, FieldValues, useFormState } from 'react-hook-form';

import { styles } from './error.styles';

type ErrorProps<T extends FieldValues> = {
	control: Control<T>;
	field: string;
};

export function Error<T extends FieldValues>({
	control,
	field,
}: ErrorProps<T>) {
	const { errors } = useFormState<T>({
		control,
	});

	return errors[field]?.message ? (
		<Text style={styles.error}>{String(errors[field]?.message)}</Text>
	) : null;
}
