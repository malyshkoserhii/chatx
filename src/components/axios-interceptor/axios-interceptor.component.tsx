import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/types';
import { useAxiosInterceptors } from 'src/hooks';

type AxiosInterceptorProps = {
	children: React.ReactNode;
};

export const AxiosInterceptor: React.FunctionComponent<
	AxiosInterceptorProps
> = ({ children }) => {
	const accessToken = useSelector<RootState, string>(
		(state) => state.auth.authData.tokens.access_token,
	);

	const refreshToken = useSelector<RootState, string>(
		(state) => state.auth.authData.tokens.refresh_token,
	);

	useAxiosInterceptors(accessToken, refreshToken);

	return <>{children}</>;
};
