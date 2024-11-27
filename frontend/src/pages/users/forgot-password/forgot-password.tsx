import { Button, TextField } from "~/components";
import { useForgotPassword } from "~/hooks";

export function ForgotPassword() {
	const { email, error, loading, handleChange, handleSubmit } =
		useForgotPassword();

	return (
		<div className="password-recovery">
			<form onSubmit={handleSubmit} className="password-recovery__form" noValidate>
				<TextField
					htmlFor="email"
					labelText="Email"
					type="email"
					id="email"
					name="email"
					value={email}
					autoComplete="email"
					placeholder="johndoe@gmail.com"
					onChange={handleChange}
				/>

				<Button
					bttnText="Enviar"
					type="submit"
					loading={loading}
					disabled={error?.error}
				/>
			</form>
		</div>
	);
}
