import { Outlet } from "react-router-dom";

export function Home() {
	
	return (
		<>
			<h1>Olá mundo!</h1>
			<p>Tudo bem?</p>

			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/signin">Login</a>
				</li>
				<li>
					<a href="/signup">Cadastre-se</a>
				</li>
				<li>
					<a href="/forgotPassword">Esqueceu a senha?</a>
				</li>
				<li>
					<a href="/ticket/new">Peça ajuda</a>
				</li>
			</ul>

			<Outlet />
		</>
	);
}
