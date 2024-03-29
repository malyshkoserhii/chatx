import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as friendsOperations from 'src/redux/friends/friends-operations';
import { AppDispatch } from 'src/types';

export const useGetAllUsers = () => {
	const dispatch: AppDispatch = useDispatch();

	React.useEffect(() => {
		dispatch(friendsOperations.getAllUsers());
	}, [dispatch]);
};
