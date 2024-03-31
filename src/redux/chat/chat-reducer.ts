import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
	recieveMessage,
	getMessagesSuccess,
	sendMessage,
} from './chat-actions';
import { ChatMessage } from 'src/types/messages.type';

const messages = createReducer([] as Array<ChatMessage>, (builder) => {
	builder.addCase(getMessagesSuccess, (_, { payload }) => payload);

	builder.addCase(recieveMessage, (state, { payload }) => {
		return [...state, payload];
	});

	builder.addCase(sendMessage, (state, { payload }) => {
		return [...state, payload];
	});
});

export const chatReducer = combineReducers({ messages });
