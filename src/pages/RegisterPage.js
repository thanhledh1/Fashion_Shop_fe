import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MasterLayout from '../layouts/MasterLayout';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function CustomerForm() {
  const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
            // .test('unique', 'Email already exists', async function(value) {
            //     try {
            //         const response = await axios.get(`'http://127.0.0.1:8000/api/check-email?email=${value}`);
            //         return !response.data.exists;
            //     } catch (error) {
            //         console.error('Error:', error);
            //         return false;
            //     }
            // }),
        phone: Yup.number().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        axios
            .post('http://127.0.0.1:8000/api/register', values)
            .then((response) => {
                if(response.data.success == false) {
                    Swal.fire({
                        title: 'Thất bại',
                        text: response.data.message,
                        icon: 'error',
                    });
                }else {
                    Swal.fire({
                        title: 'Thành công',
                        text: 'Đăng ký thành công!',
                        icon: 'success',
                    });
                }
              
                console.log(response.data);
                // Reset form after successful submission
                resetForm();
    navigate("/login");
                
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <MasterLayout>
            <div className="container">
            <div className="mb-4">
                <h4 className="font-weight-semi-bold mb-4">Register</h4>
                <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        phone: '',
                        address: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Name</label>
                                    <Field
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="John"
                                    />
                                    <ErrorMessage name="name" component="div" className="error-message"/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <Field
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="example@email.com"
                                    />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Mobile No</label>
                                    <Field
                                        className="form-control"
                                        type="number"
                                        name="phone"
                                        placeholder="+123 456 789"
                                    />
                                    <ErrorMessage name="phone" component="div" className="error-message" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address</label>
                                    <Field
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        placeholder="123 Street"
                                    />
                                    <ErrorMessage name="address" component="div" className="error-message" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Password</label>
                                    <Field
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                    />
                                    <ErrorMessage name="password" component="div" className="error-message" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Re-enter Password</label>
                                    <Field
                                        className="form-control"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Re-enter your password"
                                    />
                                    <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                                </div>
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            </div>
            <style>
                {`
                .error-message {
                    color: red;
                }
                `}
            </style>
        </MasterLayout>
    );
}

export default CustomerForm;