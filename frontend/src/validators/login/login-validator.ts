import { z } from "zod";

const required_error = "O campo não pode estar vazio";

export const LoginSchema = z.object({
	// username: z.string().min(3, { message: required_error }).optional(),
	// email: z
	// 	.string()
	// 	.email({ message: "Email inválido" })
	// 	.min(1, { message: required_error }).optional(),
	password: z
		.string()
		.min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
});
