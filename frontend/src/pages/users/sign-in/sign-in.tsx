import { Button } from "~/components";
import { TextField } from "~/components";
import { useSignin } from "~/hooks/";
export function SignIn() {
	const { name, email, password, loading, error, handleSubmit, handleChange } =
		useSignin();

	return (
		<>
			<form onSubmit={handleSubmit} noValidate>
				<TextField
					htmlFor="name"
					labelText="Nome"
					type="text"
					id="name"
					name="name"
					value={name}
					placeholder="Nome"
					autoComplete="name"
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
