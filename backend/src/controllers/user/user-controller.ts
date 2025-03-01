import type { FastifyReply, FastifyRequest } from "fastify";
import type {
	UserProps,
	FindOneByProps,
	ILoginRequestBody,
	IRecoveryAccountBody,
	IRegisterRequestBody,
} from "../../@types/index.ts";
import { clientError, serverError, success } from "../../errors/index.ts";
import { UserRepository } from "../../models/index.ts";
import { sendEmail } from "../../services/index.ts";
import encrypt from "../../utils/hash-password.ts";

export class UserController {
	private readonly userRepository: UserRepository;

	constructor() {
		this.userRepository = new UserRepository;
	};

	// Controller function that handles user login logic
	public async loginHandler(req: FastifyRequest, reply: FastifyReply) {
		try {
			const { username, email, password } = req.body as ILoginRequestBody;

			/* 
				Fetch user credentials from database

			- The first parameter is an object with 
				user attributes (e.g., `username`, `email`) 
				used to find the user in the database.

			-	The second parameter is an object specifying 
				the fields to retrieve from the user table if a 
				matching record is found (e.g., password, id).

				Returns the user object if found, or null if no matching record exists.
			*/
			const hasUser: FindOneByProps | null = await this.userRepository.findUserBy(
				{ username, email },
				{ password: true, id: true },
			);
			console.log(hasUser);
			/* 
				If user not found in database, 
				return 404 error to the client
			*/
			clientError
				.setStatusCode(404)
				.setMessage("Invalid credentials")
				.setCode("AUTHORIZATION_ERROR");
			if (!hasUser) return reply.status(clientError.statusCode).send(clientError);

			/* 
				Checks if the 'password' property exists 
				in the 'hasUser' variable. If it does, it ensures that 
				'hasUser' contains data from the user table 
				and not from other tables (e.g., ticket table, admin table).
			*/
			if ("password" in hasUser) {
				/* 
					If password from the client doesn't match 
					password from the database, return 401 error
				*/
				const isPasswordValid = await encrypt.comparePassword(password, hasUser.password.toString());

				if (!isPasswordValid) {
					clientError
					.setStatusCode(401)
					.setMessage("Invalid credentials")
					.setCode("AUTHORIZATION_ERROR");
			
					return reply.status(clientError.statusCode).send(clientError);
				}
			};

			/* 
				If all operations above goes well, return 200 success 
				to the client and set cookie authentication 
			*/
			success
				.setMessage("Successfully logged in")
				.setCode("SUCCESS_CODE")
			return reply
				.status(success.statusCode)
				.setCookie("id", hasUser.id, { maxAge: 3000, path: "/" })
				.send(success);

		} catch (err) {
			console.error("An unexpected error occured at handler 'loginHandler", err);

			/* If an unexpected error occurs, return 500 Internal Server Error */
			serverError
				.setMessage("Internal Server Error")
				.setCode("SERVER_ERROR");
			return reply.status(serverError.statusCode).send(serverError);
		};
	}

	// Controller function that handles user sign-in logic
	public async registerHandler(req: FastifyRequest, reply: FastifyReply) {
		try {
			const { name, username, email, password } = req.body as IRegisterRequestBody;

			/* 
				Fetch for a user in the database 
				with the credentials received from the client...
			*/
			const hasUser = await this.userRepository.findFirstUser({ OR: [{ username }, { email }] });
			console.log(hasUser);
			/* 
				...and checks if there's already a 
				user registered with those credentials.
				If does, returns 409 conflict error
			*/
			if (hasUser) {
				clientError
					.setStatusCode(409)
					.setMessage("This user already exists")
					.setCode("CONFLICT_ERROR");
				return reply.status(clientError.statusCode).send(clientError);
			};

			/* 
				Encrypts user's password
			*/
			const hashPassword = await encrypt.hashPassword(password);

			/* 
				Creates user in the Database. If an 
				error occurs, Prisma will throw 
				it
			*/
			await this.userRepository.createUser({
				name,
				username,
				email,
				password: hashPassword
			});

			/* 
				If all operations above goes well, 
				return 200 success to the client 
			*/
			success
				.setStatusCode(201)
				.setMessage("Successfully registered");
			return reply.status(success.statusCode).send(success);

		} catch (err) {
			console.error("An unexpected error occured at handler 'registerHandler' ", err);

			/* If an unexpected error occurs, return 500 Internal Server Error */
			serverError
				.setMessage("Internal Server Error");
			return reply.status(serverError.statusCode).send(serverError);
		};
	};

	// Controller function that handles user recovery account logic
	public async recoveryAccountHandler(
		req: FastifyRequest,
		reply: FastifyReply,
	) {
		try {

			const { email } = req.body as IRecoveryAccountBody;

			/* 
				Fetch for a user in the database 
				with the credentials received from the client...
			*/
			const isEmailValid = await this.userRepository.findUserBy({ email });

			/* 
				...and checks if there's a email 
				registered with those credentials.
				If doesn't, log the error server-side only.
				If does, send the email.
			*/
			if (!isEmailValid) {
				clientError
					.setStatusCode(404)
					.setMessage("Email not found");
				console.error(clientError);
			} else {
				sendEmail().catch(console.error);
			}

			/* 
				For security reasons, always return
				200 success to the client. 
			*/
			success
				.setStatusCode(200)
				.setMessage("If the email exists in our system, a recovery link has been sent.")
			return reply.status(success.statusCode).send(success);

		} catch (err) {
			console.error("An unexpected error occured at handler 'recoveryAccountHandler' ", err);

			/* If an unexpected error occurs, return 500 Internal Server Error */
			serverError
				.setMessage("Internal Server Error");
			return reply.status(serverError.statusCode).send(serverError);
		};

	};
}
