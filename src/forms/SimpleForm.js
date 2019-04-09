import React from "react";
import { Formik, ErrorMessage } from "formik";

const SimpleForm = () => {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(values)
          console.log("form values", values);
          setSubmitting(false)
        }, 5000)
      }}
      validate= {values => {
        let errors = {}

        if (!values.name){
          errors.name = "Please enter a name"
        }

        return errors;
      }}
      render = { ({ handleSubmit, handleChange, values, errors , handleBlur, touched, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            name="name"
            placeHolder="Enter your name"
            onBlur={handleBlur}
          />

          <button disabled={isSubmitting}>Submit</button>

          <ErrorMessage name="name" />
        </form>
      )}
    />
  );
};

export default SimpleForm;
