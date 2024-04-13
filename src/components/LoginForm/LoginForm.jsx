import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

// const initialValues = {
//   email: "",
//   password: "",
// };

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={emailId}>
            Email
          </label>
          <Field type="email" className={css.input} name="email" id={emailId} />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div>
          <label className={css.label} htmlFor={passwordId}>
            Password
          </label>
          <Field
            type="password"
            className={css.input}
            name="password"
            id={passwordId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.button} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
}
