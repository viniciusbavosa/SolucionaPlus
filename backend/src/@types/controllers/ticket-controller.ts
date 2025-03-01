import type { TicketStatus } from "@prisma/client";

export interface ITicketBody {
	title: string;
	body: string;
	status: TicketStatus;
	category: string;
}
