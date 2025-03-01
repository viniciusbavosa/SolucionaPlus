-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "registered_at" TIMESTAMP(3) NOT NULL,
    "modified_at" TIMESTAMP(3) NOT NULL,
    "disabled_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "ticket_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "created_by" INTEGER NOT NULL,
    "modified_by" INTEGER NOT NULL,
    "closed_by" INTEGER NOT NULL,
    "canceled_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "modified_at" TIMESTAMP(3) NOT NULL,
    "closed_at" TIMESTAMP(3) NOT NULL,
    "canceled_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_ticket_id_key" ON "Ticket"("ticket_id");
