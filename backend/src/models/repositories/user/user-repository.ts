import type {
	AttributeProps,
	CreateUserProps,
	SelectFieldsProps,
} from "../../../@types/index.ts";
import { RestRepository } from "../rest-repository.ts";

/* 
	This class is responsable for user actions in the database
*/
export class UserRepository {
	private readonly baseInstance: RestRepository;

	constructor() {
		this.baseInstance = new RestRepository("user");
	}

	async createUser(data: CreateUserProps) {
		return await this.baseInstance.create(data);
	}

	async getAllUsers() {
		return await this.baseInstance.getAll();
	}

	async findUserBy(
		whereClause: AttributeProps,
		selectFields?: SelectFieldsProps,
	) {
		return await this.baseInstance.findOneBy(whereClause, selectFields);
	}

	async findFirstUser(whereClause: any) {
		return await this.baseInstance.findFirst(whereClause)
	}

	async deleteAllUsers() {
		return await this.baseInstance.deleteAll();
	}
}
