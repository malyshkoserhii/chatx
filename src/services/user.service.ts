import { User } from 'src/types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class UserService {
	constructor(private httpService: HttpService) {}

	public async getUser(): Promise<User> {
		return await this.httpService.get<User>('user/me');
	}

	public async signOut(): Promise<void> {
		return await this.httpService.post<undefined, object>(
			'auth/logout',
			{},
		);
	}
}

const factory = new HttpFactoryService();
export const userService = new UserService(factory.createAuthHttpService());
