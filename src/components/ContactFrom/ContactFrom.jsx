import css from "./ContactFrom.module.css";
import { Field, Formik, Form } from "formik";
import { useId } from "react";

export default function ContactForm({ handelContactFrom }) {
  const id = useId();
  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handelContactFrom}
      >
        <Form className={css.form}>
          <label htmlFor={id} className={css.formlabel}>
            Name
            <Field
              type="text"
              name="name"
              id={id}
              className={css.formInput}
            ></Field>
          </label>
          <label htmlFor={id} className={css.formlabel}>
            Number
            <Field
              type="text"
              name="number"
              id={id}
              className={css.formInput}
            ></Field>
          </label>
          <button type="submit" className={css.formButton}>
            Add concat
          </button>
        </Form>
      </Formik>
    </>
  );
}
