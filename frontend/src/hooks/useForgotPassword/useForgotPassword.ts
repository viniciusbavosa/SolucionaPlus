import { useState } from "react";
import type { IError } from "~/@types";
import type { IRequestParams } from "~/@types/services/http";
import { Api } from "~/services";
import { cleanse } from "~/utils";
import { forgotPasswordSchema } from "~/validators";

export function useForgotPassword() {
	const [email, setEmail] = useState("");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<IError>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(event.currentTarget.value);

	const handleSubmit = async (event: React.FormEvent) => {
		try {
			event.preventDefault();
			setLoading(true);

			const cleanData = cleanse({
				schema: forgotPasswordSchema,
				data: email,
				behavior: "both"
			})

			if (!cleanData) throw new Error("Seu email não é válido");

			const params: IRequestParams<"POST"> = {
				method: "POST",
				body: JSON.stringify(cleanData)
			};

			const response = await Api.post("/user/token", params);
			
			if (!response) throw new Error("Erro ao enviar dados");

			setEmail("");
		
		} catch (err) {
			console.log(err);
			setError({
				error: true,
				message: err as string,
			});
		} finally {
			setLoading(false);
		}
	};

	return {
		email,
		loading,
		error,
		handleChange,
		handleSubmit,
	};
}
