import React from "react";
import DropList from "./DropList";
import { withFormik, ErrorMessage, Field, Form } from "formik";
import * as Yup from 'yup'
import Error from './Error'


const options = [
  { value: "Art", label: "Art" },
  { value: "Sport", label: "Sport" },
  { value: "Technology", label: "Technology" },
  { value: "Machine learning", label: "Machine learning" },
  { value: "Science", label: "Science" }
];

const formikWrapper = withFormik({
  mapPropsToValues: () => ({
    username: "",
    email: "",
    topics: []
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      topics: values.topics.map(t => t.value)
    };

    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 3000);
  },
  validationSchema: Yup.object().shape({
      username: Yup.string().required('Please enter a username'),
      email: Yup.string().email('Please enter a valid email-address')
      .required('Please enter your email'),
      topics: Yup.array().min(3, "Please select 3 items")
      .of(Yup.object().shape({
          value: Yup.string().required(),
          label: Yup.string().required()
      }))
  })
});

const SignupForm = props => {
  const {
    values,
    setFieldValue,
    setFieldTouched,
    handleReset,
    isSubmitting,
    dirty
  } = props;

  return (
    <Form className="p-5" >
      <h1>Sign up form</h1>

      <div className="form-group">
        <label>User name:</label>
        <Field
          name="username"
          type="text"
          placeholder="Enter username"
          className="form-control"
        />
        <ErrorMessage component={Error} name="username" />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <Field
          type="email"
          name="email"
          placeholder="Enter your email"
          className="form-control"
        />
        <ErrorMessage component={Error} name="email" />
      </div>

      <div className="form-group">
        <label>Fav topics</label>
        <DropList
          options={options}
          value={values.topics}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
        />
        <ErrorMessage component={Error} name="topics" />
      </div>
      <span className="p-1">
        <button
          onClick={handleReset}
          className="btn btn-secondary"
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>
      </span>

      <span>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </span>
    </Form>
  );
};

const EnhancedForm = formikWrapper(SignupForm);

export default EnhancedForm;
