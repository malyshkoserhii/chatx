import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';

import { Skeleton } from 'src/components/skeleton';
import {
	RootStackParamList,
	NAVIGATION_KEYS,
	AppDispatch,
	RootState,
} from 'src/types';
import { Container } from 'src/components/container';
import { Input } from 'src/components/input';
import { messageSchema } from 'src/validation';
import { Button } from 'src/components/button';
import * as chatActions from 'src/redux/chat/chat-actions';
import * as chatOperations from 'src/redux/chat/chat-operations';
import { useAuthSelectors } from 'src/selectors';
import { ChatMessage } from 'src/types';

type Message = {
	name: string;
	content: ChatMessage;
};

type ChatScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.CHAT
>;

type MessageFormValues = {
	message: string;
};

export const ChatScreen = ({ route }: ChatScreenProps) => {
	const user = React.useMemo(() => {
		return route?.params?.user;
	}, [route?.params]);

	const socket = io('http://localhost:3030');

	const dispatch: AppDispatch = useDispatch();

	React.useEffect(() => {
		dispatch(chatOperations.getMessages({ friendId: user.id }));
	}, [dispatch]);

	React.useEffect(() => {
		socket.on('connect', () => {
			console.log('Connected!');
		});

		socket.on('onMessage', (data: Message) => {
			dispatch(chatActions.recieveMessage(data.content));
			console.log('onMessage event recieved');
			console.log('DATA: ', data);
		});

		return () => {
			console.log('Uregistering Events ...');
			socket.off('connect');
			socket.off('onMessage');
		};
	}, []);

	const { me } = useAuthSelectors();

	const messages = useSelector<RootState, Array<ChatMessage>>(
		(state) => state.chat.messages,
	);

	console.log(messages);

	// const messages =

	const { control, handleSubmit } = useForm<MessageFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: yupResolver(messageSchema),
	});

	const onSubmit: SubmitHandler<MessageFormValues> = async (
		data: MessageFormValues,
	) => {
		const payload: Partial<ChatMessage> = {
			senderId: me?.id,
			recieverId: user?.id,
			message: data?.message,
		};
		console.log('value', data.message);
		socket.emit('newMessage', payload);
		// dispatch(
		// 	chatActions.sendMessage({
		// 		id: Math.random().toString(),
		// 		message: data.message,
		// 		senderId: me?.id ?? 0,
		// 		recieverId: user.id,
		// 		createdAt: '',
		// 		updatedAt: '',
		// 	}),
		// );
	};

	return (
		<Skeleton>
			<Text>{user.email}</Text>
			<Container>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: 20,
						// backgroundColor: 'red',
					}}
				>
					<Input
						name="message"
						control={control}
						defaultValue=""
						extraInputContainerStyles={{
							marginBottom: 0,
							paddingBottom: 0,
							width: 250,
						}}
						extraErrorStyles={{ bottom: -20 }}
					/>

					<Button
						text="Send"
						onPress={handleSubmit(onSubmit)}
						extraBtnStyles={{ width: 100 }}
					/>
				</View>
				{messages.map((message) => {
					return (
						<View>
							{me?.id === user.id ? (
								<Text>{message.recieverId}</Text>
							) : (
								<Text>{message.senderId}</Text>
							)}
							<Text key={message.id}>{message.message}</Text>
						</View>
					);
				})}
			</Container>
		</Skeleton>
	);
};
