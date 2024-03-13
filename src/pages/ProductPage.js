import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import Product from "../models/Product";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../redux/action";

function ProductPage(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect(() => {
    Product.find(id)
      .then(function (res) {
        // Log data trả về để kiểm tra dữ liệu
        console.log(res);
        setProduct(res.data.data);
      })
      .catch(function (error) {
        alert("500 error");
      });
  }, [id]);

  const handleAddtoCart = () => {
    let newCart = [...cart];
    let isProductExist = false;
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    newCart.forEach((item) => {
      if (item.product_id === id) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1
        item.quantity += 1;
        isProductExist = true;
      }
    });
    // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
    if (!isProductExist) {
      newCart.push({
        product_id: id,
        quantity: 1,
        product: product,
      });
    }
    dispatch({
      type: SET_CART,
      payload: newCart,
    });

    navigate("/cart");
  };

  console.log(useParams());
  return (
    <MasterLayout>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Shop Detail
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop Detail</p>
          </div>
        </div>
      </div>
      <>
        {/* Shop Detail Start */}
        <div className="container-fluid py-5">
          <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
              <div
                id="product-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner border">
                  <div className="carousel-item active">
                    <img
                      className="w-100 h-100"
                      src={product.image}
                      alt="Image"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#product-carousel"
                  data-slide="prev"
                >
                  <i className="fa fa-2x fa-angle-left text-dark" />
                </a>
               
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <h3 className="font-weight-semi-bold">{product && product.name}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star-half-alt" />
                  <small className="far fa-star" />
                </div>
                <small className="pt-1">(50 Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">{product && product.price}</h3>
              <p className="mb-4">
              {product && product.description}
              </p>
              <div className="d-flex mb-3">
              </div>
              <div className="d-flex mb-4">
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: 130 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3">
                <Link to="/cart" className="btn btn-black py-3 px-5 mr-2" onClick={handleAddtoCart}>Add to Cart</Link>

                </button>
              </div>
              <div className="d-flex pt-2">
                <p className="text-dark font-weight-medium mb-0 mr-2">
                  Share on:
                </p>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-xl-5">
            <div className="col">
              <div className="nav nav-tabs justify-content-center border-secondary mb-4">
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Product Description</h4>
                  <p>
                  {product && product.description_ct}
                  </p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Additional Information</h4>
                  <p>
                  {product && product.description_ct}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shop Detail End */}
      </>
      <>
        {/* Products Start */}
        <div className="container-fluid py-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">You May Also Like</span>
            </h2>
          </div>
          <div className="row px-xl-5">
            <div className="col">
              <div className="owl-carousel related-carousel">
                <div className="card product-item border-0">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img
                      className="img-fluid w-100"
                      src="img/product-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">
                      Colorful Stylish Shirt
                    </h6>
                    <div className="d-flex justify-content-center">
                      <h6>$123.00</h6>
                      <h6 className="text-muted ml-2">
                        <del>$123.00</del>
                      </h6>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0">
                      <i className="fas fa-eye text-primary mr-1" />
                      View Detail
                    </a>
                    <a href="" className="btn btn-sm text-dark p-0">
                      <i className="fas fa-shopping-cart text-primary mr-1" />
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products End */}
      </>

     
    </MasterLayout>
  );
}

export default ProductPage;
