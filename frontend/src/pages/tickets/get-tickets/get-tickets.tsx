import { useEffect, useState } from "react"
import { IError, INewTicketFormState } from "~/@types";
import { IRequestParams } from "~/@types/services/http";
import { Button } from "~/components";
import { Api } from "~/services";

export function GetTickets() {
  const [tickets, setTickets] = useState<INewTicketFormState[]>([]);
  const [updateTickets, setUpdateTickets] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({
    error: false,
    message: ""
  });


  useEffect(() => {
    const getTickets = async () => {

      const params: IRequestParams<"GET"> = {
        method: "GET",
        credentials: "include"
      };

      try {

        setLoading(true);
        const response = await Api.get('/tickets', params);
        setTickets(response);

      } catch (err) {
        setError({
          error: true,
          message: `${err}`
        });

      } finally {
        setLoading(false);
      }
      
    };

    getTickets();

    return () => setUpdateTickets(0);

  }, [updateTickets]);


  return (
    <div>
      <Button bttnText="Atualizar" type="button" onClick={() => setUpdateTickets(updateTickets + 1)} loading={loading}/>
     <ul>
      {tickets.map((ticket) => (
        <li key={ticket.id}>
          <h1>{ticket.title}</h1>
          <p>
            {ticket.body}
          </p>
          <span>Status: {ticket.status}</span>
          <span>Categoria: {ticket.category}</span>
          <span>Atendendo: {ticket.helper}</span>
        </li>          
        ))}
     </ul>
     {error.error && "<span>Erro</span>"}
    </div>
  )
}