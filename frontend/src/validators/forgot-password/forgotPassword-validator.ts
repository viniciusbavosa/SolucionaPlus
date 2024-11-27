import { z } from "zod";

export const forgotPasswordSchema = z
	.string()
	.email({ message: "Email inválido" })
	.min(1, { message: "O campo não pode estar vazio" });
