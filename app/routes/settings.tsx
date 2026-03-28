import React from "react";
import { Await, Link, Outlet, useLoaderData, useLocation } from "react-router";
import type { Route } from "./+types/settings";

export async function loader() {
  const slowMessage = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Slow message loaded!");
    }, 2000);
  });
  return {
    message: "Hello from the loader!",
    slowMessage,
  };
}

export default function Settings() {
  const location = useLocation();
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Settings</h1>
      <p> this is the settings page</p>
      <p> Message from loader: {data.message}</p>
      <React.Suspense fallback={<p>Loading...</p>} key={location.pathname}>
        <Await resolve={data.slowMessage}>
          {(slowMessage) => <p>{slowMessage}</p>}
        </Await>
      </React.Suspense>
      <nav>
        <Link to="/settings/app">App</Link>
        <Link to="/settings/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (error instanceof Error) {
    return (
      <div className="bg-red-300 border-2 border-red-600 rounded-md p-4">
        <h1>Settings Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }
  return <div>An unknown error occurred.</div>;
}
