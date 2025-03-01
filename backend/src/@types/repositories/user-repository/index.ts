import type { Prisma } from "@prisma/client";
import type { CreateProps } from "../rest-repository/index.ts";

export type CreateUserProps = CreateProps;

export type AttributeProps = Prisma.UserWhereUniqueInput;

export type SelectFieldsProps =
	| Prisma.UserCountAggregateInputType
	| Prisma.TicketCountAggregateInputType;
