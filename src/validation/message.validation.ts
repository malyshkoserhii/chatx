import * as yup from 'yup';

// import { PASSWORD } from 'src/regex';

export const messageSchema = yup.object().shape({
	message: yup.string().required("Message shouldn't be empty"),
});
