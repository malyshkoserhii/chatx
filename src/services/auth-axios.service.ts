import axios from 'axios';

export const authAxios = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
});
