import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';
import { GetMessagesPayload, ChatMessage } from 'src/types';

export class MessagesService {
	constructor(private httpService: HttpService) {}

	public async getMessages(
		payload: GetMessagesPayload,
	): Promise<Array<ChatMessage>> {
		return await this.httpService.post<
			Array<ChatMessage>,
			GetMessagesPayload
		>('messages/get', payload);
	}
}

const factory = new HttpFactoryService();
export const messagesService = new MessagesService(
	factory.createAuthHttpService(),
);
