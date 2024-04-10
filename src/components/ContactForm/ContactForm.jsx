import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("This field is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactNameId = nanoid();
  const contactNumberId = nanoid();

  const handleSubmit = (values, actions) => {
    const { contactName, number } = values;
    dispatch(addContact({ name: contactName, number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ contactName: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <div className={css.inputContainer}>
          <label htmlFor={contactNameId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="contactName"
            id={contactNameId}
            className={css.contactInput}
          />
          <ErrorMessage
            name="contactName"
            className={css.error}
            component="p"
          />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor={contactNumberId} className={css.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id={contactNumberId}
            className={css.contactInput}
          />
          <ErrorMessage name="number" className={css.error} component="p" />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
