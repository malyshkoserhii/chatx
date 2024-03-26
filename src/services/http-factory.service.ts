import axios from 'axios';

import { HttpService } from './http.service';
import { authAxios } from './auth-axios.service';

export class HttpFactoryService {
	createHttpService() {
		return new HttpService(axios);
	}

	createAuthHttpService() {
		return new HttpService(authAxios);
	}
}
