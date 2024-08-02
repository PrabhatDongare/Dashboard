-- CreateTable
CREATE TABLE "Comparison" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "last_year" INTEGER NOT NULL,
    "this_year" INTEGER NOT NULL,

    CONSTRAINT "Comparison_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopProducts" (
    "id" SERIAL NOT NULL,
    "product" TEXT NOT NULL,
    "sold_amount" INTEGER NOT NULL,
    "unit_price" INTEGER NOT NULL,
    "revenue" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TopProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerByDevice" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "web_sales" INTEGER NOT NULL,
    "offline_sales" INTEGER NOT NULL,

    CONSTRAINT "CustomerByDevice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comparison_month_key" ON "Comparison"("month");

-- CreateIndex
CREATE UNIQUE INDEX "TopProducts_product_key" ON "TopProducts"("product");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerByDevice_date_key" ON "CustomerByDevice"("date");
