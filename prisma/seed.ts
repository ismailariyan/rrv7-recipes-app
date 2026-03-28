import { PrismaClient } from "../app/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const shelfData = [
  {
    name: "Produce",
    pantryItems: {
      create: [
        {
          name: "Onions",
        },
        {
          name: "Garlic",
        },
        {
          name: "Potatoes",
        },
      ],
    },
  },
  {
    name: "Grains",
    pantryItems: {
      create: [
        {
          name: "Rice",
        },
        {
          name: "Pasta",
        },
        {
          name: "Oats",
        },
      ],
    },
  },
  {
    name: "Canned Goods",
    pantryItems: {
      create: [
        {
          name: "Chickpeas",
        },
        {
          name: "Tomatoes",
        },
        {
          name: "Coconut Milk",
        },
      ],
    },
  },
];

export async function main() {
  // Keep seeding idempotent by removing existing rows first.
  await prisma.pantryItem.deleteMany();
  await prisma.pantryShelf.deleteMany();

  for (const shelf of shelfData) {
    await prisma.pantryShelf.create({ data: shelf });
  }
}

main()
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
