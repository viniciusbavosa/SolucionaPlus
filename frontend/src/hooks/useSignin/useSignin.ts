import { useState } from "react";
import type { IError } from "~/@types";
import type { IRequestParams } from "~/@types/services/http";
import { Api } from "~/services";
import { sanitize } from "~/utils";
import { LoginSchema } from "~/validators";

export function useSignin() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<IError>({ error: false });

	// Handles the state and updates of input fields.
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

			const isValid = LoginSchema.safeParse({
				name,
				email,
				password,
			});

			if (!isValid.success) {
				setError({
					error: true,
					message: "Erro ao validar dados: " + isValid.error.format(),
				});

				return;
			}

			const formDataSanitized = {
				name: sanitize(name),
				email: sanitize(email),
				password: sanitize(password)
			};
			
			const params: IRequestParams<"POST"> = {
				method: "POST",
				body: JSON.stringify(formDataSanitized),
			};

			const response = await Api.post("/signin", params);
			console.log(response);

			setName("");
			setEmail("");
			setPassword("");

		} catch (err) {
			console.log(err);
			setError({
				error: true,
				message: "Erro ao enviar requisição: " + err
			})
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
