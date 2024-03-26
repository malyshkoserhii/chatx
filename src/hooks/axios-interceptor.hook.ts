import * as React from 'react';
import { authAxios, authService } from 'src/services';
import * as authActions from 'src/redux/auth/auth-actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/types';

export const useAxiosInterceptors = (
	accessToken: string,
	refreshToken: string,
) => {
	const dispatch: AppDispatch = useDispatch();
	React.useLayoutEffect(() => {
		const requestIntercept = authAxios.interceptors.request.use(
			(config) => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error),
		);

		const responseIntercept = authAxios.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;

				if (error?.response?.status === 401 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const data = await authService.refresh(refreshToken);
					prevRequest.headers[
						'Authorization'
					] = `Bearer ${data.tokens.access_token}`;
					dispatch(authActions.signInSuccess(data));
					return authAxios(prevRequest);
				}
				return Promise.reject(error);
			},
		);

		return () => {
			authAxios.interceptors.request.eject(requestIntercept);
			authAxios.interceptors.response.eject(responseIntercept);
		};
	}, [accessToken, refreshToken]);
};
