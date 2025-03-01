import type { Prisma } from "@prisma/client";

type TableNames = "user" | "ticket" | "admin";

type Roles = TableNames;

type UserStatus = "active" | "inactive";

type TicketStatus = "active" | "inactive";


type UserProps = Prisma.UserCreateInput & Prisma.UserUncheckedCreateInput;

type TicketProps = Prisma.TicketCreateInput & Prisma.TicketUncheckedCreateInput;

type FindOneByProps =
	| Prisma.UserWhereUniqueInput
	| Prisma.TicketWhereUniqueInput;

type WhereClauseUpdate = FindOneByProps;

type UpdatedDataProps = Prisma.UserUpdateInput &
	Prisma.UserUncheckedUpdateInput &
	Prisma.Without<Prisma.TicketUncheckedUpdateInput, Prisma.TicketUpdateInput> &
	Prisma.TicketUpdateInput &
	Prisma.TicketUncheckedUpdateInput;

type LimitType = number;

export type {
	TableNames,
	UserProps,
	TicketProps,
	FindOneByProps,
	UpdatedDataProps,
	WhereClauseUpdate,
	LimitType
};