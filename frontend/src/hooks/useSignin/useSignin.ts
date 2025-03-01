import { useState } from "react";
import type { IError } from "~/@types";
import type { apiResponse, IRequestParams } from "~/@types";
import { Api } from "~/services";
import { LoginSchema } from "~/validators";

export function useSignin() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	/* 
		The state below is required by the backend 
		to identify the login method selected 
		by the user: Email or Username. 
	*/
	const [credentialType, setCredentialType] = useState("username");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<IError>({ error: false });

	/* 
		Toggle 'credentialType' state 
		based on user preference and clean
		previous state.

	*/
	const toggleCredentialType = () => {
		if (credentialType === "username") {
			setCredentialType("email");
			setUsername("");
		} else {
			setCredentialType("username");
			setEmail("");
		};
	};

	// Handles the input states and updates input fields.
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		switch (event.currentTarget.id) {
			case "username":
				setUsername(event.currentTarget.value);
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

			const validData = LoginSchema.safeParse({
				username,
				email,
				password,
			});

			console.log(validData);

			if (!validData.success) throw new Error("Verifique seus dados");

			/* 
				Checks whether the user has chosen 
				to log in using a username or an email address.

				And then...
				
				Builds a object with the user's 
				credentials that will be sent to the server. 
				
			*/
			 const userCredentials = (
				credentialType === "username" ? 
				{ username, password, credentialType } : 
				{ email, password, credentialType }
			);

			/* 
				Builds and sends Login request
			*/
			const params: IRequestParams<"POST"> = {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userCredentials),
				credentials: "include",
			};

			const response: apiResponse = await Api.post("/users/session", params);
			if (response.error) throw new Error("Erro ao logar");

			/* 
				Redirects to tickets page
			*/
			window.location.assign("/tickets");

			setUsername("");
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
		username,
		email,
		password,
		credentialType,
		toggleCredentialType,
		handleChange,
		handleSubmit,
		loading,
		error,
	};
}
