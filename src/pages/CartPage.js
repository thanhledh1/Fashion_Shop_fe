import React, { useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItemFromCart, updateCartItemQuantity } from "../redux/action";

function CartPage(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Thêm biến trạng thái isLoggedIn

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.product.price * cartItem.quantity;
    });
    return total;
  };

  const handleCheckOut = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      alert("Bạn phải đăng nhập trước khi thanh toán.");
      navigate("/login"); // Chuyển hướng đến trang đăng nhập
    }
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateCartItemQuantity(productId, quantity));
  };

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
        Shopping Cart
      </h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <a href="">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Shopping Cart</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
</>

<>
  {/* Cart Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
        <table className="table table-bordered text-center mb-0">
          <thead className="bg-secondary text-dark">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
          {cart.map((cartItem, key) => (
            <tr key={key}>
              <td className="align-middle">
                <img  src={cartItem.product.image} alt="" style={{ width: 50 }} />{" "}
                {cartItem.product.name}
              </td>
              <td className="align-middle">{cartItem.product.price}</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus"
                    type="button"
                    onClick={() => handleQuantityChange(cartItem.product.id, cartItem.quantity - 1)}
                    >
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary text-center"
                    value={cartItem.quantity}
                    readOnly
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus"
                     onClick={() => handleQuantityChange(cartItem.product.id, cartItem.quantity + 1)}>
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">${cartItem.product.price * cartItem.quantity}</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-primary"
                onClick={() => handleRemoveItem(cartItem.product.id)}
                >
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-4">
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3 pt-1">
                    <h6 className="font-weight-medium">Subtotal</h6>
                    <h6 className="font-weight-medium">
                      ${calculateTotal()}
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
                      ${calculateTotal() + 10}
                    </h5>
                  </div>
                  <button
                    className="btn btn-block btn-primary my-3 py-3"
                    onClick={handleCheckOut}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
  {/* Cart End */}
</>





      {/* <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((cartItem, key) => (
                      <tr key={key}>
                        <td className="product-thumbnail">
                          <img
                            src={cartItem.product.image}
                            alt="Image"
                            className="img-fluid"
                          />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">
                            {cartItem.product.name}
                          </h2>
                        </td>
                        <td>{cartItem.product.price}</td>
                        <td>
                          <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: 120 }}>
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-black decrease"
                                type="button"
                                onClick={() => handleQuantityChange(cartItem.product.id, cartItem.quantity - 1)}
                              >
                                −
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              value={cartItem.quantity}
                              readOnly
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-black increase"
                                type="button"
                                onClick={() => handleQuantityChange(cartItem.product.id, cartItem.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>${cartItem.product.price * cartItem.quantity}</td>
                        <td>
                          <button
                            className="btn btn-black btn-sm"
                            onClick={() => handleRemoveItem(cartItem.product.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        ${calculateTotal()}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        ${calculateTotal()}
                      </strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="btn btn-black btn-lg py-3 btn-block"
                        onClick={handleCheckOut}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
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

export default CartPage;
