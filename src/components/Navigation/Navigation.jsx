import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <section className={css.navigation}>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navItem, isActive && css.isActive)
          }
          to="/"
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            className={({ isActive }) =>
              clsx(css.navItem, isActive && css.isActive)
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </section>
  );
}
