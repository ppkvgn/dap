-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'PARTNER', 'LAWYER', 'ADMIN', 'CLIENT', 'COUNTER', 'VALUER', 'VALUER_MANAGER', 'CMM');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
