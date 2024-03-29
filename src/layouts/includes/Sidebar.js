import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Category from '../../models/Category';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Sidebar(props) {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const name = user.name;
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Gửi yêu cầu API để đăng xuất
      await axios.post("http://127.0.0.1:8000/api/logout", {
        // Gửi token JWT hiện tại trong yêu cầu
        token: localStorage.getItem("token"),
        cart: localStorage.getItem("cart"),
      });
      // Xóa token JWT khỏi localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("cart");

      // Điều hướng người dùng đến trang chủ
      Swal.fire('Success', 'LogOut successfully!', 'success');
      Navigate('/');
    } catch (error) {
      console.log(error);
      // Xử lý lỗi khi gọi API đăng xuất
    }
  };
  useEffect(() => {

    setIsHomePage(location.pathname === '/' || location.pathname === '/index.html');
    setIsCategoryOpen(location.pathname === '/' || location.pathname === '/index.html');

    Category.all()
      .then(function (res) {
        console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch(function (error) {
        alert("500 error");
      });

    // Xác định xem có phải trang chủ không dựa trên pathname
    setIsHomePage(
      location.pathname === "/" || location.pathname === "/index.html"
    );
    // Đóng category menu khi không ở trang chủ
    setIsCategoryOpen(
      location.pathname === "/" || location.pathname === "/index.html"
    );
  }, [location]);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            onClick={toggleCategory}
            style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i
              className={`fa fa-angle-${
                isCategoryOpen ? "up" : "down"
              } text-dark`}
            />
          </a>
          <nav
            className={`collapse navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 ${
              isCategoryOpen ? "show" : ""
            }`}
            id="navbar-vertical"
          >
            <div className="row px-xl-5 pb-3">
              <div className="col-12">
                  <ul className="list-group">
                    {categories.length ? (
                      categories.map((category, key) => (
                        <li className="list-group-item" key={key}>
                          <Link to={`/categories/${category.id}`}>
                            {category.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="list-group-item"></li>
                    )}
                  </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <Link to="" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>

                <Link to="" className="nav-item nav-link">
                  Shop
                </Link>
                <Link to="" className="nav-item nav-link">
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/cart" className="dropdown-item">
                      Shopping Cart
                    </Link>
                    <Link to="/checkout" className="dropdown-item">
                      Checkout
                    </Link>
                  </div>
                </div>
                <Link to="" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0">
                {localStorage.getItem("token") ? (
                  <>
                   <Link  to="/profile" className="nav-item nav-link">Hello, {name}
                </Link>

                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="nav-item nav-link">
                      Login
                    </Link>
                    <Link to="/register" className="nav-item nav-link">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
          {isHomePage && (
            <div
              id="header-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" style={{ height: 410 }}>
                  <img
                    className="img-fluid"
                    src="img/carousel-1.jpg"
                    alt="Image"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">
                        10% Off Your First Order
                      </h4>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                        Fashionable Dress
                      </h3>
                      <a href="" className="btn btn-light py-2 px-3">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" style={{ height: 410 }}>
                  <img
                    className="img-fluid"
                    src="img/carousel-2.jpg"
                    alt="Image"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">
                        10% Off Your First Order
                      </h4>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                        Reasonable Price
                      </h3>
                      <a href="" className="btn btn-light py-2 px-3">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#header-carousel"
                data-slide="prev"
              >
                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                  <span className="carousel-control-prev-icon mb-n2" />
                </div>
              </a>
              <a
                className="carousel-control-next"
                href="#header-carousel"
                data-slide="next"
              >
                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                  <span className="carousel-control-next-icon mb-n2" />
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
