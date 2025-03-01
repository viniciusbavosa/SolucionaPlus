export interface INewTicketFormState {
	id?: number | undefined;
	title: string;
	body: string;
	status: string;
	category: string;
	helper?: number | string;
}
