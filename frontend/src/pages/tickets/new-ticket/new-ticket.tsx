import { NewTicketForm } from "~/components";

export function NewTicket() {

	return (
		<div className="new-ticket">
			<h1 className="new-ticket__title">Crie seu ticket</h1>

			<p className="new-ticket__description">
				Forneça detalhes sobre o seu problema. Não economize.
			</p>

			<NewTicketForm />
		</div>
	);
}
