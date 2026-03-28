import { useLoaderData } from "react-router";
import { getAllShelves } from "~/models/pantry-shelf.server";

export async function loader() {
  const shelves = await getAllShelves();
  return { shelves };
}
export default function Pantry() {
  const { shelves } = useLoaderData<typeof loader>();
  return (
    <div>
      <p>This is the pantry page.</p>
      <ul>
        {shelves.map((shelf) => (
          <li key={shelf.id}>{shelf.name}</li>
        ))}
      </ul>
    </div>
  );
}
