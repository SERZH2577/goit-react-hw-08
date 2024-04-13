import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

export default function AppBar() {
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <div className={css.nav}>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
