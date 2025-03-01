import type {
	FindOneByProps,
	LimitType,
	TableNames,
	UpdatedDataProps,
	WhereClauseUpdate,
} from "../../@types/index.ts";
import prismaClient from "../../config/prisma.ts";

export class RestRepository {
	private readonly table: TableNames;

	constructor(table: TableNames) {
		this.table = table;
		console.log("Tabela criada ao instanciar 'RestRepository'", this.table);
	};


	/* 
		The switch statements below execute
		the appropiate logic based in
		the value of the property `this.table`.
	
		If a method is called and "this.table"
		is set to "user", then "case 'user'" logic
		will be implemented. Same goes to "case 'ticket'"
		and "case 'admin'".
	*/



	/* 
		Creates data in the database
	*/
	async create(data: any) {
		let response: Awaited<Promise<unknown>>; // Criar tipagem para as respostas do DB: usuario ticket

		console.log("Tabela criada ao usar o método 'create'", this.table);
		switch (this.table) {
			case "user":
				response = await prismaClient.user.create({
					data,
				});
				break;

			case "ticket":
				response = await prismaClient.ticket.create({
					data,
				});
				break;

			/* case "admin":
				const admin = await prismaClient[this.table].create({
					data,
				});
				console.log(admin)
			break; */

			default:
				console.log("Tabela não especificada");
		}
		return response;
	};


	/* 
		Retrieves all data from a table in the database.
		If a limit agent is specified, then it will return
		its quantity.
	*/
	async getAll(limit?: LimitType) {
		let response: Awaited<Promise<unknown>>;

		switch (this.table) {
			case "user":
				response = await prismaClient[this.table].findMany(limit && { take: limit });
				break;

			case "ticket":
				response = await prismaClient[this.table].findMany(limit && { take: limit });
				break;

			/* case "admin":
				const admin = await prismaClient[this.table].create({
					data,
				});
				console.log(admin)
			break; */

			default:
				console.log("Tabela não especificada");
		}
		return response;
	}

	/* 
		Retrieves specific data from the database
	*/
	async findOneBy<T extends FindOneByProps, U>(
		whereClause: T,
		selectClause?: U,
	) {
		let response: Awaited<Promise<FindOneByProps>>;

		switch (this.table) {
			case "user":
				if ("username" in whereClause || "email" in whereClause) {
					response = await prismaClient[this.table].findUnique({
						where: whereClause,
						select: selectClause,
					});
				}
				break;

			case "ticket":
				if ("title" in whereClause) {
					response = await prismaClient[this.table].findUnique({
						where: whereClause,
						select: selectClause,
					});
				}
				break;

			/* case "admin":
				const admin = await prismaClient[this.table].create({
					data,
				});
				console.log(admin)
			break; */

			default:
				console.log("Tabela não especificada");
		}

		return response;
	}

	async findFirst(whereClause: any) {
		let response;

		switch (this.table) {
			case "user":
				response = await prismaClient[this.table].findFirst({
					where: whereClause
				});

				break;

			case "ticket":
				if ("title" in whereClause) {
					response = await prismaClient[this.table].findFirst({
						where: whereClause
					});
				}
				break;

			/* case "admin":
				const admin = await prismaClient[this.table].create({
					data,
				});
				console.log(admin)
			break; */

			default:
				console.log("Tabela não especificada");
		}

		return response;
	}

	async update<T extends WhereClauseUpdate, U extends UpdatedDataProps>(
		whereClause: T,
		updatedData: U,
	) {
		let response: Awaited<Promise<unknown>>;

		switch (this.table) {
			case "user":
				if ("username" in whereClause || "email" in whereClause) {
					response = await prismaClient[this.table].update({
						where: whereClause,
						data: updatedData,
					});
				}
				break;

			case "ticket":
				if ("title" in whereClause) {
					response = await prismaClient[this.table].update({
						where: whereClause,
						data: updatedData,
					});
				}
				break;

			/* case "admin":
				const admin = await prismaClient[this.table].create({
					data,
				});
				console.log(admin)
			break; */

			default:
				console.log("Tabela não especificada");
		}
		return response;
	}

	/* 
		**WARNING** Delete all data from a table **WARNING**
	*/
	async deleteAll() {
		let response: Awaited<Promise<unknown>>;

		switch (this.table) {
			case "user":
				response = await prismaClient[this.table].deleteMany();
				break;

			case "ticket":
				response = await prismaClient[this.table].deleteMany();
				break;

			/* case "admin":
				const admin = await prismaClient[this.table].create({
					data,
				});
				console.log(admin)
			break; */

			default:
				console.log("Tabela não especificada");
		}
		return response;
	}
}
