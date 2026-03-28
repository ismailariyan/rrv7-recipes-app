import { Link, Outlet, useLoaderData } from "react-router";

export function loader() {
  return {
    message: "Hello from the loader!",
  };
}

export default function Settings() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Settings</h1>
      <p> this is the settings page</p>
      <p> Message from loader: {data.message}</p>
      <nav>
        <Link to="/settings/app">App</Link>
        <Link to="/settings/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}
