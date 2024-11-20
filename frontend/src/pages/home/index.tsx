import { Outlet } from "react-router-dom";

export function Home() {
	return (
		<>
			<h1>Olá mundo!</h1>
			<p>Tudo bem?</p>

			<a href="/signin">Login</a>
			<a href="/signup">Cadastro</a>
			<Outlet />
		</>
	);
}
