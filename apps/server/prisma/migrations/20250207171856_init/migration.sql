-- CreateEnum
CREATE TYPE "HistoryType" AS ENUM ('link', 'qr');

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "uriId" TEXT NOT NULL,
    "type" "HistoryType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "History_id_key" ON "History"("id");

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_uriId_fkey" FOREIGN KEY ("uriId") REFERENCES "Uri"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
