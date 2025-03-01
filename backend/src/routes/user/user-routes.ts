import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import { UserController } from "../../controllers/index.ts";
import preValidationHooks from "../../middlewares/preValidation.ts";
import { loginBodySchema, recoveryAccountBodySchema, registerBodySchema } from "../../validators/index.ts";

export async function userRoutes(app: FastifyInstance, _options: FastifyPluginOptions) {

	const user = new UserController; // Instantiate user's controller class	

	const { preValidateLogin, preValidatePassword } = preValidationHooks();
	
	/* 
		This route handles user login.
		It has two middlewares: 
		- The first one validates if the user chose
			to login with username or email.
		- The second one validates all data sent by the client for this endpoint.
	*/
	app.post("/session", { preValidation: preValidateLogin, schema: loginBodySchema }, user.loginHandler.bind(user));

	/* 
		This route handles user register.
		It has two middlewares: 
		- The first one validates if the fields
			'password' and 'confirmPassword' match.
		- The second one validates all data sent by the client for this endpoint.
	*/
	app.post("/", { preValidation: preValidatePassword, schema: registerBodySchema }, user.registerHandler.bind(user));

	/* 
		This route handles user recovery password.
		Its middleware validates all data sent by the client for this endpoint.
	*/
	app.post("/token", { schema: recoveryAccountBodySchema }, user.recoveryAccountHandler.bind(user));
}


/* 
	The user instance's methods are being bound back to the object 'user'. 
	This is necessery because, by default, normal functions doesn't inherit 
	the execution context from its parent as do arrow functions. The keyword 'this' of 
	normal functions always points to the global object and, in this case, we need them 
	to point to the 'user' object.
*/