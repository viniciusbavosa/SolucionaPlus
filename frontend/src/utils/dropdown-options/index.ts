import { IOptionElement } from "~/@types";

export function getDropdownOptions() {

  const statusOptions: IOptionElement[] = [
		{ value: "aberto", text: "Aberto", disabled: false },
		{ value: "em-andamento", text: "Em andamento", disabled: true },
		{ value: "cancelado", text: "Cancelado", disabled: true },
		{ value: "finalizado", text: "Finalizado", disabled: true },
	];

  const categoryOptions: IOptionElement[] = [
		{ value: "webdev", text: "Desenvolvimento Web", disabled: false },
		{ value: "servicos-gerais", text: "Serviços Gerais", disabled: false },
		{ value: "suporte-tecnico", text: "Suporte Técnico", disabled: false },
		{ value: "recuperacao-de-senha", text: "Recuperação de Senha", disabled: false },
		{ value: "software", text: "Software", disabled: false },
	];

  return {
    status: statusOptions,
    category: categoryOptions
  };
};