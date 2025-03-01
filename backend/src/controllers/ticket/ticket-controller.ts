import type { FastifyReply, FastifyRequest } from "fastify";
import type { ITicketBody } from "../../@types/index.ts";
import { TicketRepository } from "../../models/index.ts";

export class TicketController {
	private readonly ticketRepository: TicketRepository;

	constructor() {
		this.ticketRepository = new TicketRepository();
	};

	public async createTicketHandler(req: FastifyRequest, reply: FastifyReply) {

		const { title, body, category, status } = req.body as ITicketBody;

		const { id } = req.cookies;

		const ticket = await this.ticketRepository.createTicket({
			title,
			description: body,
			category,
			status,
			createdById: id
		});

		console.log(ticket);
		reply.status(201).send({ message: "Ticket criado com sucesso" });
	};

	public async getTicketsHandler(req: FastifyRequest, reply: FastifyReply) {

		/* 
			Recupera o último caractere da string
		*/
		const limit = req.url.slice(-1);

		const tickets = await this.ticketRepository.getAllTickets(Number(limit));

		reply.status(200).send(tickets);
	};
}
