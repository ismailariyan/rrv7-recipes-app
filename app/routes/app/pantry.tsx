import classNames from "classnames";
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
      <ul
        className={classNames(
          "flex gap-8 overflow-x-auto",
          "snap-x snap-mandatory md:snap-none",
        )}
      >
        {shelves.map((shelf) => (
          <li
            key={shelf.id}
            className={classNames(
              "border-2 border-primary rounded-md p-4 h-fit",
              "w-[calc(100vw-2rem)] flex-none snap-center",
              "md:w-96",
            )}
          >
            <h1 className="text-2xl font-extrabold mb-2">{shelf.name}</h1>
            <ul>
              {shelf.pantryItems.map((item) => (
                <li key={item.id} className="py-2">
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
