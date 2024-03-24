import * as yup from 'yup';

import { PASSWORD } from 'src/regex';

export const loginSchema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Required field'),
	password: yup
		.string()
		.min(8, 'Password should contain at least 8 symbols')
		.matches(PASSWORD, 'Incorect password')
		.required('Required'),
	// terms: yup.boolean().required(),
});
