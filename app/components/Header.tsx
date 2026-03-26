import classes from "./Header.module.css";
export function Header({ children }: { children: string }) {
  return <h1 className={classes.header}>{children}</h1>;
}
