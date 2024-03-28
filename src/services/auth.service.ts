import { SignInData, SignInPayload } from '../types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class AuthService {
	constructor(private httpService: HttpService) {}

	public async signIn(payload: SignInPayload): Promise<SignInData> {
		return await this.httpService.post<SignInData, SignInPayload>(
			'auth/signin',
			payload,
		);
	}

	public async refresh(refreshToken: string): Promise<SignInData> {
		return await this.httpService.post<SignInData, object>(
			'auth/refresh',
			{},
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`,
				},
			},
		);
	}
}

const factory = new HttpFactoryService();

export const authService = new AuthService(factory.createHttpService());
