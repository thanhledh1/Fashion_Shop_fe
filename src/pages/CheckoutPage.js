import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { useDispatch, useSelector } from "react-redux";
import OrderModel from "../models/Order";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function CheckoutPage(props) {
  const cart = useSelector((state) => state.cart);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    let login_user = localStorage.getItem("user");
    login_user = JSON.parse(login_user);
    setUser(login_user);
  }, []);

  const handleSubmit = () => {
    const values = {
      customer_id: user.id,
      name: user.name,
      address: user.address,
      email_address: user.email,
      phone: user.phone,
    };
  
    OrderModel.checkout({
      cart: cart,
      userdata: values,
    })
      .then(function (data) {
        console.log("Order placed successfully:", data);
        Swal.fire('Success', 'Order placed successfully!', 'success');
  
        // Xóa giỏ hàng từ localStorage
        localStorage.removeItem('cart');
  
        // Chuyển hướng đến trang chủ
        navigate("/");
      })
      .catch(function (error) {
        console.error("Error placing order:", error);
        Swal.fire('Error', 'Failed to place the order.', 'error');
      });
  };

  const cartSubtotal = cart.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );

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

      {/* Checkout Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div className="mb-4">
              <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label className="font-weight-medium">Name customer : </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={user.name}
                    readOnly
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="font-weight-medium">Email : </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={user.email}
                    readOnly
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="font-weight-medium">Phone Number : </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={user.phone}
                    readOnly
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="font-weight-medium">Address : </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={user.address}
                    readOnly
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
                  <div
                    className="d-flex justify-content-between"
                    key={index}
                  >
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
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3"
                  onClick={handleSubmit}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Checkout End */}
    </MasterLayout>
  );
}

export default CheckoutPage;