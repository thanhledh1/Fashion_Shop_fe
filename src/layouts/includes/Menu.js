import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div
    classname="collapse navbar-collapse justify-content-between"
    id="navbarCollapse"
  >
    <div classname="navbar-nav mr-auto py-0">
      <a href="index.html" classname="nav-item nav-link active">
        Home
      </a>
      <a href="shop.html" classname="nav-item nav-link">
        Shop
      </a>
      <a href="detail.html" classname="nav-item nav-link">
        Shop Detail
      </a>
      <div classname="nav-item dropdown">
        <a href="#" classname="nav-link dropdown-toggle" data-toggle="dropdown">
          Pages
        </a>
        <div classname="dropdown-menu rounded-0 m-0">
          <a href="cart.html" classname="dropdown-item">
            Shopping Cart
          </a>
          <a href="checkout.html" classname="dropdown-item">
            Checkout
          </a>
        </div>
      </div>
      <a href="contact.html" classname="nav-item nav-link">
        Contact
      </a>
    </div>
    <div classname="navbar-nav ml-auto py-0">
      <a href="" classname="nav-item nav-link">
        Login
      </a>
      <a href="" classname="nav-item nav-link">
        Register
      </a>
    </div>
  </div>
  
  
  );
}

export default Menu;
