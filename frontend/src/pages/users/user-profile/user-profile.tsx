import { useParams } from "react-router-dom";

export function UserProfile() {
	const { id } = useParams();

	return (
		<>
			<h1>Nome do usuário:</h1>

			<p>Cargo:</p>

			<p>Meus Tickets:</p>
		</>
	);
}
