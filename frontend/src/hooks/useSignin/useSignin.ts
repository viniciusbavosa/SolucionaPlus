import { useState } from "react";
import type { IError } from "~/@types";
import type { IRequestParams } from "~/@types/services/http";
import { Api } from "~/services";
import { cleanse } from "~/utils";
import { LoginSchema } from "~/validators";

export function useSignin() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<IError>({ error: false });

	// Handles the state and updates input fields.
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		switch (event.currentTarget.id) {
			case "name":
				setName(event.currentTarget.value);
				break;
			case "email":
				setEmail(event.currentTarget.value);
				break;
			case "password":
				setPassword(event.currentTarget.value);
				break;
			default:
				setError({
					error: true,
					message: "Erro ao definir tipo de input",
				});
		}
	};

	// Handles form submit
	const handleSubmit = async (event: React.FormEvent) => {
		try {
			event.preventDefault();
			setLoading(true);

			const cleanData = cleanse({
				schema: LoginSchema,
				data: {
					name,
					email,
					password
				},
				behavior: "both"
			});

			if (!cleanData) throw new Error("Erro de validação");

			const params: IRequestParams<"POST"> = {
				method: "POST",
				body: JSON.stringify(cleanData)
			};

			const response = await Api.post("/session", params);

			if (!response) throw new Error("Erro ao enviar dados");


			setName("");
			setEmail("");
			setPassword("");
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
		name,
		email,
		password,
		handleChange,
		handleSubmit,
		loading,
		error,
	};
}
