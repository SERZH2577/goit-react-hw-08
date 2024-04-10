import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../redux/contactsOps";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <h1 className={css.title}> PHONEBOOK </h1>
      <ContactForm />
      <SearchBox />
      {error && <Error> Error !!! </Error>}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
}
