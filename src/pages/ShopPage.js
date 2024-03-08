import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import Product from "../models/Product";
import { Link } from "react-router-dom";

function ShopPage(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Product.all()
      .then(function (res) {
        // Log data trả về để kiểm tra dữ liệu
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch(function (error) {
        alert("500 error");
      });
  }, []);
  return (
    <MasterLayout>
      <h1>ShopPage</h1>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}

            {products.length
              ? products.map((product, key) => (
                  <div className="col-12 col-md-4 col-lg-3 mb-5">
                    <Link to={`/product/${product.id}`} className="product-item">
                      <img
                        src={product.image}
                        className="img-fluid product-thumbnail"
                      />
                      <h3 className="product-title">{product.name}</h3>
                      <strong className="product-price">{product.price}</strong>
                      <span className="icon-cross">
                        <img src="images/cross.svg" className="img-fluid" />
                      </span>
                    </Link>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}



{/* <div className="container-fluid pt-5">
<div className="text-center mb-4">
    <h2 className="section-title px-5">
        <span className="px-2">Trandy Products</span>
    </h2>
</div>
<div className="row px-xl-5 pb-3">
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">


        
    {products.length
              ? products.map((product, key) => (
        <div className="card product-item border-0 mb-4">

            
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100"  src={product.image} alt="" />
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
           ))
           : null}
    </div>
</div>
</div> */}






export default ShopPage;
