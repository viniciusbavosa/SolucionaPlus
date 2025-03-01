// export const bearerTokenSchema = z.string().min(1, 'Token inválido')

// export const setNewPasswordSchema = z.object({
// 	password: z.string().min(1, 'Senha inválida'),
// 	confirmPassword: z.string().min(1, 'Senha inválida'),
// })

// export const passwordRecoverySchema = z.object({
// 	email: z.string().min(1, 'Email inválido'),
// })

// export const userQuerySchema = z.object({
// 	name: z.string().optional(),
// })

// export const userParamsSchema = z.object({
// 	id: z.string().min(1, 'ID inválido'),
// })
const regex = {
	noWhiteSpace: "^\\S+$", // This pattern doesn't allow whitespace
	email: "[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]{2,}" // This pattern ensures a concise email
}; 

export const loginBodySchema = {
	body: {
		type: "object",
		properties: {
			username: { type: "string", minLength: 1, pattern: regex.noWhiteSpace },
			email: { type: "string", minLength: 1, pattern: regex.email },
			password: { type: "string", minLength: 8, pattern: regex.noWhiteSpace },
			credentialType: { type: "string", default: "username" }
		},
		required: ["password", "credentialType"],
	},
};

export const registerBodySchema = {
	body: {
		type: "object",
		properties: {
			name: { type: "string", minLength: 1 },
			username: { type: "string", minLength: 1, pattern: regex.noWhiteSpace },
			email: { type: "string", minLength: 1, pattern: regex.email },
			password: { type: "string", minLength: 8, pattern: regex.noWhiteSpace },
			confirmPassword: { type: "string", minLength: 8, pattern: regex.noWhiteSpace },
		},
		required: ["name", "username", "email", "password", "confirmPassword"],
	},
};

export const recoveryAccountBodySchema = {
	body: {
		type: "object",
		properties: {
			email: { type: "string", minLength: 1, pattern: regex.email },
		},
		required: ["email"],
	},
};
