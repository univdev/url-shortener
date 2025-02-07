-- CreateTable
CREATE TABLE "Uri" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "shortKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Uri_id_key" ON "Uri"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Uri_shortKey_key" ON "Uri"("shortKey");
