import { Button } from "~/components/button";
import { TextField } from "~/components/form_elements";
import { useSignin } from "~/hooks/useSignin";
export function SignIn() {
	const { 
		name, 
		email, 
		password,
		loading, 
		error, 
		handleSubmit, 
		handleChange } = useSignin();
		
	return (
		<>
			<form onSubmit={handleSubmit}>
				<TextField
					htmlFor="name"
					labelText="Nome"
					type="text"
					id="name"
					name="name"
					value={name}
					placeholder="Nome"
					autoComplete="name"
					required={true}
					minLength={3}
					onChange={handleChange}
				/>

				<TextField
					htmlFor="email"
					labelText="Email"
					type="email"
					id="email"
					name="email"
					value={email}
					placeholder="E-mail"
					autoComplete="email"
					required={true}
					minLength={1}
					onChange={handleChange}
				/>

				<TextField
					htmlFor="password"
					labelText="Senha"
					type="password"
					id="password"
					name="password"
					value={password}
					placeholder="Senha"
					autoComplete="current-password"
					required={true}
					minLength={8}
					onChange={handleChange}
				/>

				<Button
					type="submit"
					bttnText="Enviar"
					loading={loading}
					disabled={error.error}
				/>
			</form>
		</>
	);
}
