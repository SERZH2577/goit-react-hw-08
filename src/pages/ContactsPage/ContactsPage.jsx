import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import css from "./Contacts.module.css";

export default function ContactsPage() {
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
