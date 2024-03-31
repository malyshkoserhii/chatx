import { createAction } from '@reduxjs/toolkit';
import { ChatMessage } from 'src/types';

export const getMessagesSuccess = createAction<Array<ChatMessage>>(
	'chat/getMessagesSuccess',
);

export const sendMessage = createAction<ChatMessage>('chat/sendMessage');

export const recieveMessage = createAction<ChatMessage>('chat/recieveMessage');
