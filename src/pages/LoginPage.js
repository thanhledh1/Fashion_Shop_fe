import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MasterLayout from '../layouts/MasterLayout';

function LoginPage(props) {
  const [message, setMessage] = useState('');

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post('http://127.0.0.1:8000/api/login', values)
      .then(response => {
        console.log(response.data);
        setMessage(response.data.message);
        resetForm();
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <MasterLayout>
      <div className="container">
        <h1>Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="col-md-6 form-group">
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" className="error" />

                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" className="error" />

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
                <button type="button" className="btn btn-secondary cancelbtn">
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
        {message && <p>{message}</p>}
      </div>
    </MasterLayout>
  );
}

export default LoginPage;