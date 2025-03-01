import type {
	AttributeProps,
	CreateTicketsProps,
	LimitType,
	SelectFieldsProps,
} from "../../../@types/index.ts";
import { RestRepository } from "../rest-repository.ts";

export class TicketRepository {
	private readonly baseInstance: RestRepository;

	constructor() {
		this.baseInstance = new RestRepository("ticket");
	}

	async createTicket(data: CreateTicketsProps) {
		return await this.baseInstance.create(data);
	}

	async getAllTickets(limit?: LimitType) {
		return await this.baseInstance.getAll(limit);
	}

	async findTicketBy(
		attribute: AttributeProps,
		selectFields?: SelectFieldsProps,
	) {
		return await this.baseInstance.findOneBy(attribute, selectFields);
	}

	async deleteAllTickets() {
		return await this.baseInstance.deleteAll();
	}
}
