import prisma from "~/lib/prisma";

export function getAllShelves() {
  return prisma.pantryShelf.findMany();
}
