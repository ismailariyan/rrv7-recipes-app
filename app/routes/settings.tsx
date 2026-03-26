import { Link, Outlet } from "react-router";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p> this is the settings page</p>
      <nav>
        <Link to="/settings/app">App</Link>
        <Link to="/settings/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}
