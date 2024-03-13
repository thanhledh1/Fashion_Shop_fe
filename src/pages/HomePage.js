import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Product from "../models/Product";
import { SET_CART } from "../redux/action";
import Swal from 'sweetalert2';


function HomePage(props) {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Product.all()
      .then(function (res) {
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch(function (error) {
        alert("500 error");
      });
  }, []);

  const handleAddtoCart = (productId) => {
    let newCart = [...cart];
    let isProductExist = false;

    newCart.forEach((item) => {
      if (item.product_id === productId) {
        item.quantity += 1;
        isProductExist = true;
      }
    });

    if (!isProductExist) {
      const foundProduct = products.find((p) => p.id === productId);
      newCart.push({
        product_id: productId,
        quantity: 1,
        product: foundProduct,
      });
    }

    dispatch({
      type: SET_CART,
      payload: newCart,
    });
    Swal.fire('Success', ' Add to card successfully!', 'success');
  };
  return (
    <MasterLayout>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trandy Products</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {products.length
            ? products.map((product, key) => (
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{product.name}</h6>
                      <div className="d-flex justify-content-center">
                        <h6>{product.price}</h6>
                        <h6 className="text-muted ml-2">
                          <del>$123.00</del>
                        </h6>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-sm text-dark p-0"
                      >
                        <i className="fas fa-eye text-primary mr-1" />
                        View Detail
                      </Link>
                      <button
                        className="btn btn-sm text-dark p-0"
                        onClick={() => handleAddtoCart(product.id)}
                      >
                        <i className="fas fa-shopping-cart text-primary mr-1" />
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </MasterLayout>
  );
}

export default HomePage;
