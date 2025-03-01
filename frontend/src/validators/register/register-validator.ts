import { z } from "zod";

const required_error = "O campo não pode estar vazio";

const registerSchema = z
	.object({
		name: z.string().min(3, { message: required_error }),
		username: z.string().min(1),
		email: z
			.string()
			.email({ message: "Email inválido" })
			.min(1, { message: required_error }),
		password: z
			.string()
			.min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
		confirmPassword: z.string().min(8, 'A confirmação de senha deve conter no mínimo 8 caracteres'),
	})
	.refine((data) => data.confirmPassword === data.password, {
		message: "As senhas não correspondem.",
		path: ["confirmPassword"],
	});

export { registerSchema };
