import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MasterLayout from '../layouts/MasterLayout';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function LoginPage(props) {
  const [message, setMessage] = useState('');
  const Navigate = useNavigate();


  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post('http://127.0.0.1:8000/api/login', values)
      .then(response => {
        const user = response.data.user;
        const token = response.data.authorization.token;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        setMessage(response.data.message);
        resetForm();
        Navigate('/checkout');
        Swal.fire('Success', 'Login successfully!', 'success');


        
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.message) {
          setMessage(error.response.data.message);
        } else {
          setMessage('Đã xảy ra lỗi. Vui lòng thử lại.');
        }
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
        {message && <p className="error">{message}</p>}
      </div>
      <style>
                {`
                .error {
                    color: red;
                }
                `}
            </style>
    </MasterLayout>
  );
}

export default LoginPage;