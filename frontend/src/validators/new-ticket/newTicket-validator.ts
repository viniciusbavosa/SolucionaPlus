import { z } from "zod";

const statusOptions = ["aberto", "em-andamento", "cancelado", "finalizado"] as const;

const error = "O campo não pode estar vazio";

export const ticketDataSchema = z.object({
	title: z.string().max(100, {message: "Máximo de caracteres: 100"}),
	body: z.string().min(1, {message: error}),
	status: z.enum(statusOptions),
	category: z.string().min(1, {message: error})
});
