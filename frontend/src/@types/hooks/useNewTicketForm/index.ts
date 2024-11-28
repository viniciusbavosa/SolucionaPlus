export interface INewTicketFormState {
  id?: number;
  title: string;
  body: string;
  status: string;
  category: string;
  helper?: number | string;
}