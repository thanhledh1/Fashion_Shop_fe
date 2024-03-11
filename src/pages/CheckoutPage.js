import React from "react";
import MasterLayout from "../layouts/MasterLayout";
import { useDispatch, useSelector } from "react-redux";
import OrderModel from "../models/Order";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CheckoutPage(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    OrderModel.checkout({
      cart: cart,
      userdata: values,
    })
      .then(function (data) {
        // Xử lý thành công
      })
      .catch(function (error) {
        // Xử lý lỗi
      });
  };

  const cartSubtotal = cart.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );

  const validationSchema = Yup.object().shape({
    c_fname: Yup.string().required("First Name is required"),
    c_lname: Yup.string().required("Last Name is required"),
    c_address: Yup.string().required("Address is required"),
    c_email_address: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    c_phone: Yup.string().required("Phone is required"),
  });

  return (
    <MasterLayout>

      <>
        {/* Page Header Start */}
        <div className="container-fluid bg-secondary mb-5">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 300 }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">
              Checkout
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <a href="">Home</a>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Checkout</p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
      </>

      <>
        {/* Checkout Start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="+123 456 789"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select className="custom-select">
                      <option selected="">United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={123}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="newaccount"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="newaccount"
                      >
                        Create an account
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                     
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse mb-4" id="shipping-address">
                <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="+123 456 789"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select className="custom-select">
                      <option selected="">United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={123}
                    />
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col-lg-4">
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                </div>
                <div className="card-body">
                  <h5 className="font-weight-medium mb-3">Products</h5>
                  {cart.map((item, index) => (
                    <div className="d-flex justify-content-between" key={index}>
                      <p>{item.product.name}</p>
                      <strong className="">x</strong> {item.quantity}
                      <p>${item.product.price}</p>
                    </div>
                  ))}
                  <hr className="mt-0" />
                  <div className="d-flex justify-content-between mb-3 pt-1">
                    <h6 className="font-weight-medium">Subtotal</h6>
                    <h6 className="font-weight-medium">
                      {" "}
                      ${cartSubtotal.toFixed()}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Total</h5>
                    <h5 className="font-weight-bold">
                      ${cartSubtotal.toFixed() + 10}
                    </h5>
                  </div>
                  <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout End */}
      </>
{/* 
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border p-4 rounded" role="alert">
                Returning customer? <a href="#">Click here</a> to login
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <Formik
                  initialValues={{
                    c_fname: "",
                    c_lname: "",
                    c_address: "",
                    c_email_address: "",
                    c_phone: "",
                  }}
                  onSubmit={(values) => handleSubmit(values)}
                  validationSchema={validationSchema}
                >
                  <Form>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label htmlFor="c_fname" className="text-black">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="c_fname"
                          name="c_fname"
                        />
                        <ErrorMessage
                          name="c_fname"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="c_lname" className="text-black">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="c_lname"
                          name="c_lname"
                        />
                        <ErrorMessage
                          name="c_lname"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label htmlFor="c_address" className="text-black">
                          Address <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="c_address"
                          name="c_address"
                          placeholder="Street address"
                        />
                        <ErrorMessage
                          name="c_address"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-5">
                      <div className="col-md-6">
                        <label htmlFor="c_email_address" className="text-black">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="c_email_address"
                          name="c_email_address"
                        />
                        <ErrorMessage
                          name="c_email_address"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="c_phone" className="text-black">
                          Phone <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="c_phone"
                          name="c_phone"
                          placeholder="Phone Number"
                        />
                        <ErrorMessage
                          name="c_phone"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-black btn-lg py-3 btn-block"
                      >
                        Place Order
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Your Order</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item, index) => (
                          <tr key={index}>
                            <td>
                              {item.product.name}{" "}
                              <strong className="mx-2">x</strong>{" "}
                              {item.quantity}
                            </td>
                            <td>${item.product.price}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Cart Subtotal</strong>
                          </td>
                          <td className="text-black">
                            ${cartSubtotal.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td className="text-black font-weight-bold">
                            <strong>${cartSubtotal.toFixed(2)}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </MasterLayout>
  );
}

export default CheckoutPage;
