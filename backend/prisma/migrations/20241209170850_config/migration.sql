/*
  Warnings:

  - You are about to drop the column `canceled_at` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `canceled_by` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `closed_at` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `closed_by` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `modified_at` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `modified_by` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `ticket_id` on the `Ticket` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `disabled_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `modified_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `registered_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdById` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Ticket` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Ticket_ticket_id_key";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_user_id_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "canceled_at",
DROP COLUMN "canceled_by",
DROP COLUMN "closed_at",
DROP COLUMN "closed_by",
DROP COLUMN "created_at",
DROP COLUMN "created_by",
DROP COLUMN "modified_at",
DROP COLUMN "modified_by",
DROP COLUMN "ticket_id",
ADD COLUMN     "attendingById" TEXT,
ADD COLUMN     "canceledAt" TIMESTAMP(3),
ADD COLUMN     "canceledById" TEXT,
ADD COLUMN     "closedAt" TIMESTAMP(3),
ADD COLUMN     "closedById" TEXT,
ADD COLUMN     "completedById" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "modifiedAt" TIMESTAMP(3),
ADD COLUMN     "modifiedById" TEXT,
ADD CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "disabled_at",
DROP COLUMN "modified_at",
DROP COLUMN "registered_at",
DROP COLUMN "user_id",
ADD COLUMN     "disabledAt" TIMESTAMP(3),
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "modifiedAt" TIMESTAMP(3),
ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_id_key" ON "Ticket"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_completedById_fkey" FOREIGN KEY ("completedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_modifiedById_fkey" FOREIGN KEY ("modifiedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_attendingById_fkey" FOREIGN KEY ("attendingById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_closedById_fkey" FOREIGN KEY ("closedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_canceledById_fkey" FOREIGN KEY ("canceledById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
