import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Alert, Text } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container } from 'src/components/container';
import { Skeleton } from 'src/components/skeleton';
import { Button } from 'src/components/button';
import { Input } from 'src/components/input';
import { LoginFormValues } from 'src/types';
import { loginSchema } from 'src/validation';

let render = 0;

export const LoginScreen = () => {
	const { control, handleSubmit } = useForm<LoginFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<LoginFormValues> = (
		data: LoginFormValues,
	) => {
		Alert.alert(JSON.stringify(data));
	};

	render++;

	return (
		<Skeleton>
			<Container>
				<Input
					name="email"
					control={control}
					label="Email"
					defaultValue=""
				/>

				<Input
					name="password"
					control={control}
					label="Password"
					defaultValue=""
				/>

				<Text style={{ marginBottom: 30 }}>Render:{render}</Text>

				<Button text="Login" onPress={handleSubmit(onSubmit)} />
			</Container>
		</Skeleton>
	);
};
