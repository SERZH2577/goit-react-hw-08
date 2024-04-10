import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilters } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const nameId = nanoid();
  const dispatch = useDispatch();
  const searchValue = useSelector(selectFilters);

  const changeInput = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <div className={css.searchNameContainer}>
      <label htmlFor={nameId} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="name"
        id={nameId}
        value={searchValue}
        onChange={changeInput}
        className={css.searchInput}
      />
    </div>
  );
}
