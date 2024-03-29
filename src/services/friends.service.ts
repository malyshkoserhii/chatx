import {
	DeclineFollowerPayload,
	DeleteFriendPayload,
	Friend,
	FriendIdPayload,
	GetFriendsResponse,
	InviteFriendPayload,
	ResponseMessage,
} from 'src/types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class FriendService {
	constructor(private httpService: HttpService) {}

	public async getFriends(): Promise<GetFriendsResponse> {
		return await this.httpService.get<GetFriendsResponse>(
			'friends/my-friends',
		);
	}

	public async inviteFriend(
		payload: InviteFriendPayload,
	): Promise<ResponseMessage> {
		return await this.httpService.post<
			ResponseMessage,
			InviteFriendPayload
		>('follows/invite-friend', payload);
	}

	public async getMyFollowers(): Promise<Array<Friend>> {
		return await this.httpService.get<Array<Friend>>(
			'follows/my-followers',
		);
	}

	public async getMyFollowings(): Promise<Array<Friend>> {
		return await this.httpService.get<Array<Friend>>(
			'follows/my-followings',
		);
	}

	public async cancelInvitation(
		payload: DeclineFollowerPayload,
	): Promise<ResponseMessage> {
		return await this.httpService.post<
			ResponseMessage,
			DeclineFollowerPayload
		>('follows/cancel-invitation', payload);
	}

	public async declineInvitation(
		payload: DeclineFollowerPayload,
	): Promise<ResponseMessage> {
		return await this.httpService.post<
			ResponseMessage,
			DeclineFollowerPayload
		>('follows/decline-invitation', payload);
	}

	public async addFriend(payload: FriendIdPayload): Promise<ResponseMessage> {
		return await this.httpService.post<ResponseMessage, FriendIdPayload>(
			'friends/add-friend',
			payload,
		);
	}

	public async myFriends(): Promise<Array<Friend>> {
		return await this.httpService.get<Array<Friend>>('friends/my-friends');
	}

	public async deleteFriend(
		payload: DeleteFriendPayload,
	): Promise<ResponseMessage> {
		return await this.httpService.post<
			ResponseMessage,
			DeleteFriendPayload
		>('friends/delete-friend', payload);
	}
}

const factory = new HttpFactoryService();
export const friendService = new FriendService(factory.createAuthHttpService());
