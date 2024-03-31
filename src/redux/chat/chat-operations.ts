import { AppDispatch } from 'src/types';
import * as chatOperations from './chat-actions';
import { messagesService } from 'src/services';
import { GetMessagesPayload } from 'src/types/messages.type';

export const getMessages =
	(payload: GetMessagesPayload) => async (dispatch: AppDispatch) => {
		try {
			const data = await messagesService.getMessages(payload);
			dispatch(chatOperations.getMessagesSuccess(data));
		} catch (error) {}
	};
