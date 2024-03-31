export type ChatMessage = {
	id: string;
	message: string;
	senderId: number;
	recieverId: number;
	createdAt: string;
	updatedAt: string;
};

export type GetMessagesPayload = {
	friendId: number;
};
