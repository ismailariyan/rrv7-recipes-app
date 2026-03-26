import { Link } from "react-router";
import React from "react";

type AppNavLinkProps = {
  to: string;
  children: React.ReactNode;
};
export default function AppNavLink({ to, children }: AppNavLinkProps) {
  return (
    <li className="w-16">
      <Link to={to}>
        <div className="py-4 flex justify-center hover:bg-primary-light ">
          {children}
        </div>
      </Link>
    </li>
  );
}
