import { useState, useEffect } from "react";
import { IError, IRequestParams, IMainPageTicket } from "~/@types";
import { Api } from "~/services";

export function useListTickets() {
  const [tickets, setTickets] = useState<IMainPageTicket[]>([]);
  const [updateTickets, setUpdateTickets] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({
    error: false,
    message: "",
  });

  useEffect(() => {
    const getTickets = async () => {
      const params: IRequestParams<"GET"> = {
        method: "GET",
        credentials: "include",
      };

      try {
        setLoading(true);
        const response = await Api.get("/tickets", params);
        setTickets(response);
      } catch (err) {
        setError({
          error: true,
          message: `${err}`,
        });
      } finally {
        setLoading(false);
      }
    };

    getTickets();

    return () => setUpdateTickets(0);
  }, [updateTickets]);

  return {
    tickets,
    loading,
    error,
    updateTickets,
    setUpdateTickets,
  };
}
