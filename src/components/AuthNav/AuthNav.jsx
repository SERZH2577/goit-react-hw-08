import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink
        className={({ isActive }) =>
          clsx(css.navItem, isActive && css.isActive)
        }
        to="/register"
      >
        Register
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          clsx(css.navItem, isActive && css.isActive)
        }
        to="/login"
      >
        LogIn
      </NavLink>
    </div>
  );
}
