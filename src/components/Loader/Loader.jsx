import { PulseLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.load}>
      <PulseLoader color="#668ee6" />
    </div>
  );
}
