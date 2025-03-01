import { IOptions } from "~/@types";

export function getDropdownOptions() {
  const statusOptions: IOptions[] = [
    {
      value: "OPEN",
      text: "Aberto",
      disabled: false,
    },
    {
      value: "CLOSED",
      text: "Encerrado",
      disabled: true,
    },
    {
      value: "ONATTENDANCE",
      text: "Em atendimento",
      disabled: true,
    },
    {
      value: "CANCELED",
      text: "Cancelado",
      disabled: true,
    },
  ];

  const categoryOptions: IOptions[] = [
    {
      value: "webdev",
      text: "Desenvolvimento Web",
      disabled: false,
    },
    {
      value: "software",
      text: "Software",
      disabled: false,
    },
    {
      value: "generalservices",
      text: "Serviços Gerais",
      disabled: false,
    },
    {
      value: "technicalproblems",
      text: "Problemas Técnicos",
      disabled: false,
    },
  ];

  return {
    statusOptions,
    categoryOptions,
  };
}
