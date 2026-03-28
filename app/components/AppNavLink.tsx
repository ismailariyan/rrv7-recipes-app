import { NavLink, useNavigation, useResolvedPath } from "react-router";
import React from "react";
import classNames from "classnames";

type AppNavLinkProps = {
  to: string;
  children: React.ReactNode;
};
export default function AppNavLink({ to, children }: AppNavLinkProps) {
  const navigation = useNavigation();
  const path = useResolvedPath(to);
  const isLoading =
    navigation.state === "loading" &&
    navigation.location.pathname === path.pathname;
  return (
    <li className="w-16">
      <NavLink to={to}>
        {({ isActive }) => (
          <div
            className={classNames(
              "py-4 flex justify-center hover:bg-primary-light",
              {
                "bg-primary-light": isActive || isLoading,
                "animate-pulse": isLoading,
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
