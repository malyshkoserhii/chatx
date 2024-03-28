import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { Container } from 'src/components/container';
import { Skeleton } from 'src/components/skeleton';
import { Button } from 'src/components/button';
import { Input } from 'src/components/input';
import { AppDispatch, LoginFormValues } from 'src/types';
import { loginSchema } from 'src/validation';
import * as authOperations from 'src/redux/auth/auth-operations';

let render = 0;

export const LoginScreen = () => {
	const dispatch: AppDispatch = useDispatch();

	const { control, handleSubmit } = useForm<LoginFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<LoginFormValues> = async (
		data: LoginFormValues,
	) => {
		dispatch(authOperations.signIn(data));
	};

	render++;

	return (
		<Skeleton>
			<Container>
				<Input
					name="email"
					control={control}
					label="Email"
					defaultValue="test@test.com"
				/>

				<Input
					name="password"
					control={control}
					label="Password"
					defaultValue="Pass1234!"
				/>

				{/* <Text>Render:{render}</Text> */}

				<Button text="Login" onPress={handleSubmit(onSubmit)} />
			</Container>
		</Skeleton>
	);
};
