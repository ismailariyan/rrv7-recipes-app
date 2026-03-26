import { NavLink } from "react-router";
import React from "react";
import classNames from "classnames";

type AppNavLinkProps = {
  to: string;
  children: React.ReactNode;
};
export default function AppNavLink({ to, children }: AppNavLinkProps) {
  return (
    <li className="w-16">
      <NavLink to={to}>
        {({ isActive }) => (
          <div
            className={classNames(
              "py-4 flex justify-center hover:bg-primary-light",
              {
                "bg-primary-light": isActive,
              },
            )}
          >
            {children}
          </div>
        )}
      </NavLink>
    </li>
  );
}
