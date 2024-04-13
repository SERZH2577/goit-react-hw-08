import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./HomePage.module.css";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <p className={css.text}>
        Hello, this is the phone book. Here you can save your contacts.
      </p>
      {!isLoggedIn && (
        <p className={css.textLast}>
          If you want to see a your phone numbers, please to{" "}
          <Link className={css.link} to="/register">
            Register
          </Link>{" "}
          or{" "}
          <Link className={css.link} to="/login">
            Login
          </Link>{" "}
          in this application.
        </p>
      )}
    </div>
  );
}
