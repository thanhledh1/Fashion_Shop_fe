import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MasterLayout from "../layouts/MasterLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfilePage(props) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const initialValues = {
    name: user.name,
    email: user.email,
    password: user.password,
    address: user.address,
    phone: user.phone,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://127.0.0.1:8000/api/customer/update",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      alert("Profile updated successfully!");
      navigate("/");
      localStorage.setItem("user", JSON.stringify(values));
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  return (
    <MasterLayout>
      <>
        <div className="container">
          <div className="mb-4">
            <h4 className="font-weight-semi-bold mb-4">Chỉnh sửa thông tin cá nhân</h4>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Họ tên:</label>
                    <Field   className="form-control" type="text" id="name" name="name"  />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="email">Email:</label>
                    <Field   className="form-control" type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <Field   className="form-control" type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="address">Địa chỉ:</label>
                    <Field   className="form-control" type="text" id="address" name="address" />
                    <ErrorMessage name="address" component="div" className="error-message" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="phone">Số điện thoại:</label>
                    <Field   className="form-control" type="tel" id="phone" name="phone" />
                    <ErrorMessage name="phone" component="div" className="error-message" />
                  </div>
                </div>
                <button type="submit">Lưu hồ sơ</button>
              </Form>
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
      </>
    </MasterLayout>
  );
}

export default ProfilePage;
