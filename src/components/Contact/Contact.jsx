import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <div id={id} className={css.contactContainer}>
      <div>
        <div className={css.contactDetailsContainer}>
          <FaUser />
          <p className={css.contactDetails}>{name}</p>
        </div>
        <div className={css.contactDetailsContainer}>
          <FaPhone />
          <p className={css.contactDetails}>{number}</p>
        </div>
      </div>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </div>
  );
}
