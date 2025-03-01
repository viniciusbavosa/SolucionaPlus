import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import { TicketController } from "../../controllers/ticket/ticket-controller.ts";

export async function ticketRoutes(app: FastifyInstance, _options: FastifyPluginOptions) {
  const ticket = new TicketController;

  app.post('/ticket', ticket.createTicketHandler.bind(ticket));

  app.get('/tickets', ticket.getTicketsHandler.bind(ticket));
}