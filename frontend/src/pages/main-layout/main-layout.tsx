import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { Loader2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "~/components/ui/table";
import { useRouting, useMainLayout } from "~/hooks";

export function MainLayout() {
  const { handleToNewTicket } = useRouting();

  const { tickets, loading, error } = useMainLayout();

  return (
    <>
      <main>
        <section className="hero__section bg-linear-to-l from-[#0F2027] via-[#203A43] to-[#2C5364] text-center p-8 py-24 text-white">
          <h2 className="text-5xl font-medium">
            Precisando de ajuda? Abra um ticket e encontre soluções!
          </h2>
          <Button
            variant={"secondary"}
            onClick={handleToNewTicket}
            className="hero__button mt-6"
            type="button"
          >
            Abrir um ticket
          </Button>
        </section>

        <section className="category-section text-center p-8 py-24">
          <h2 className="category-section__title text-5xl text-white">
            Explore por categoria
          </h2>

          <div className="category__content flex justify-between">
            <Card className="category__item  bg-linear-to-l from-[#0F2027] via-[#203A43] to-[#2C5364] text-white border-6 border-[#203A43]">
              <a href="#" className="category__link">
                <CardHeader>
                  <CardTitle className="category__icon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={0.5}
                      stroke="currentColor"
                      className=""
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </CardTitle>
                  <CardContent>
                    <h2 className="category__title text-3xl font-medium">
                      Desenvolvimento Web
                    </h2>
                  </CardContent>
                </CardHeader>
              </a>
            </Card>

            <Card className="category__item  bg-linear-to-l from-[#0F2027] via-[#203A43] to-[#2C5364] text-white border-6 border-[#203A43]">
              <a href="#" className="category__link">
                <CardHeader>
                  <CardTitle className="category__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth=".5"
                      stroke="currentColor"
                      className=""
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                      />
                    </svg>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h2 className="category__title text-3xl font-medium">
                    Serviços Gerais
                  </h2>
                </CardContent>
              </a>
            </Card>

            <Card className="category__item bg-linear-to-l from-[#0F2027] via-[#203A43] to-[#2C5364] text-white border-6 border-[#203A43]">
              <a href="#" className="category__link">
                <CardHeader>
                  <CardTitle className="category__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth=".5"
                      stroke="currentColor"
                      className=""
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h2 className="category__title text-3xl font-medium">
                    Suporte Técnico
                  </h2>
                </CardContent>
              </a>
            </Card>
          </div>
        </section>

        <section className="help-section text-center p-8 py-24">
          <h2 className="help__title text-5xl font-medium text-white">
            Esses tickets precisam da sua ajuda!
          </h2>
          <ul className="help__list text-white">
            {loading ? (
              <Button disabled>
                <Loader2 className="animate-spin" /> Carregando...
              </Button>
            ) : error?.error ? (
              <Button variant={"destructive"} disabled>
                Algo deu errado
              </Button>
            ) : !tickets ? (
              <Button variant={"secondary"}>Crie o primeiro ticket</Button>
            ) : (
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
            )}
          </ul>
        </section>
      </main>
    </>
  );
}
