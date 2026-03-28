import { useLoaderData } from "react-router";
import type { PantryShelf } from "~/generated/prisma/client";
import prisma from "~/lib/prisma";

export async function loader() {
  const shelves = await prisma.pantryShelf.findMany();
  return { shelves };
}
export default function Pantry() {
  const { shelves } = useLoaderData();
  return (
    <div>
      <p>This is the pantry page.</p>
      <ul>
        {shelves.map((shelf: PantryShelf) => (
          <li key={shelf.id}>{shelf.name}</li>
        ))}
      </ul>
    </div>
  );
}
