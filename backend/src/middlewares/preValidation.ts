import type { FastifyReply, FastifyRequest } from "fastify";
import type {
	ILoginRequestBody,
	IRegisterRequestBody,
} from "../@types/index.ts";
import { clientError } from "../errors/index.ts";

export default function preValidationHooks() {
	
	/* 
		Pre-validates requests sent it 
		to '/users/session' endpoint. 
		(Login endpoint)
	*/
	const preValidateLogin = (
		req: FastifyRequest,
		reply: FastifyReply,
		done: () => void,
	) => {
		const requestBody = req.body as ILoginRequestBody;

		/* 
			This switch conditional validates if the 
			users opt to log in with their username 
			or email, and based on their choices, applies 
			the appropriate logic
		*/
		switch (requestBody.credentialType) {
			case "email":
				if (!requestBody.email) {

					/* 
						If field 'email' is empty on request
						return 400 error
					*/

					clientError.setMessage("'email' field must not be empty");
					return reply.status(clientError.statusCode).send(clientError);
				}
				break;
			case "username":
				if (!requestBody.username) {

					/* 
						If field 'username' is empty on request
						return 400 error
					*/

					clientError.setMessage("'username' field must not be empty");
					return reply.status(clientError.statusCode).send(clientError);
				}
				break;
			default:
				/* 
					If field 'credentialType' is empty on request
					return 400 error
				*/
				clientError.setMessage("field 'credentialType' not defined");
	
				return reply.status(clientError.statusCode).send(clientError);
		};
		done();
	};

	
	/* 
		Pre-validates requests sent it 
		to the '/users/' endpoint. 
		(Register endpoint)
	*/
	const preValidatePassword = (
		req: FastifyRequest,
		reply: FastifyReply,
		done: () => void,
	) => {
		const { password, confirmPassword } = req.body as IRegisterRequestBody;

		/* 
			If field 'password' doesn't 
			match field 'confirmPassword',
			return 400 error
		*/
		if (password !== confirmPassword) {
			clientError.setMessage(
				"'password' and 'confirmPassword' fields must be identical.",
			);
			return reply.status(clientError.statusCode).send(clientError);
		};

		done();
	};

	return {
		preValidateLogin,
		preValidatePassword,
	};
}
