import { useEffect, useState } from "react";
import { IError, IMainPageTicket, IRequestParams } from "~/@types";
import { Api } from "~/services";

export function useMainLayout() {
  /* 
    Armazena os tickets. O react monitora
    variáveis definidas com useState, e 
    re-renderiza o componente cada vez que
    ela muda.
  */
  const [tickets, setTickets] = useState<IMainPageTicket[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({
    error: false,
    message: "",
  });

  useEffect(() => {
    /* 
     Essa função realiza uma requisição http e
     busca 5 tickets para exibir na página principal
    */
    const fetchTickets = async () => {
      try {
        setLoading(true);

        /* 
          Define, como parâmetro de consulta da requisição, o limite de tickets a serem recuperados
        */
        const pagination = new URLSearchParams({ limit: "5" });

        /* 
          Define os parâmetros da requisição
        */
        const params: IRequestParams<"GET"> = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };

        /* 
          Realiza uma requisição para
          o endpoint "/tickets" com um
          parametro de consulta "limit:5", 
          ou seja, a api deve retornar apenas
          5 tickets
        */
        const response: Awaited<Promise<IMainPageTicket[]>> = await Api.get(
          `/tickets?${pagination}`,
          params
        );

        if (!response) {
          throw new Error("Failed Request");
        }

        /* 
          Essa verificação evita re-renderizações
          desnecessárias caso os dados sejam iguais
        */
        if (tickets !== response) {
          setTickets(response);
        }
      } catch (err) {
        console.log(err);
        setError({
          error: true,
          message: "Erro ao buscar tickets para a página inicial",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  return {
    tickets,
    loading,
    error,
  };
}
