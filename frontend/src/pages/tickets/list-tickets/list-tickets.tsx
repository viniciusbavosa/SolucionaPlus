import { useListTickets } from "~/hooks/index";
import { Button } from "~/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
export function ListTickets() {
  const { tickets, updateTickets, loading, error, setUpdateTickets } =
    useListTickets();
  return (
    <section className="ticket-list__section">
      <div className="ticket-list__wrapper">
        <h1 className="ticket-list__title">Tickets abertos</h1>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Autor</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((t) => (
              <TableRow key={t.id} className="help__item">
                <TableCell>
                  <Link to={"#"} className="help__link">
                    {t.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to={"#"} className="help__link">
                    {t.author}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to={"#"} className="help__link">
                    {t.status}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          className="refresh__button"
          type="button"
          onClick={() => setUpdateTickets(updateTickets + 1)}
        >
          Atualizar
        </Button>
        {error.error && (
          <Button variant={"destructive"}>Tente mais tarde</Button>
        )}
      </div>
    </section>
  );
}
