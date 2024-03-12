import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Sidebar(props) {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    // Xác định xem có phải trang chủ không dựa trên pathname
    setIsHomePage(location.pathname === '/' || location.pathname === '/index.html');
    // Đóng category menu khi không ở trang chủ
    setIsCategoryOpen(location.pathname === '/' || location.pathname === '/index.html');
  }, [location]);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen); // Toggle trạng thái khi click
  };

  return (

    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            onClick={toggleCategory} // Sử dụng hàm toggleCategory khi click
            style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className={`fa fa-angle-${isCategoryOpen ? 'up' : 'down'} text-dark`} />
          </a>
          <nav
            className={`collapse navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 ${isCategoryOpen ? 'show' : ''}`}
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: 410 }}
            >
              <div className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  Dresses <i className="fa fa-angle-down float-right mt-1" />
                </a>
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  <Link to="" className="dropdown-item">
                    Men's Dresses
                  </Link>
                  <Link to="" className="dropdown-item">
                    Women's Dresses
                  </Link>
                  <Link to="" className="dropdown-item">
                    Baby's Dresses
                  </Link>
                </div>
              </div>
              <Link to="" className="nav-item nav-link">
                Shirts
              </Link>
              <Link to="" className="nav-item nav-link">
                Jeans
              </Link>
              <Link to="" className="nav-item nav-link">
                Swimwear
              </Link>
              <Link to="" className="nav-item nav-link">
                Sleepwear
              </Link>
              <Link to="" className="nav-item nav-link">
                Sportswear
              </Link>
              <Link to="" className="nav-item nav-link">
                Jumpsuits
              </Link>
              <Link to="" className="nav-item nav-link">
                Blazers
              </Link>
              <Link to="" className="nav-item nav-link">
                Jackets
              </Link>
              <Link to="" className="nav-item nav-link">
                Shoes
              </Link>
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
                <Link to="shop.html" className="nav-item nav-link">
                  Shop
                </Link>
                <Link to="detail.html" className="nav-item nav-link">
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
                    <Link to="cart.html" className="dropdown-item">
                      Shopping Cart
                    </Link>
                    <Link to="checkout.html" className="dropdown-item">
                      Checkout
                    </Link>
                  </div>
                </div>
                <Link to="contact.html" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0">
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-item nav-link">
                  Register
                </Link>
              </div>
            </div>
          </nav>
          {isHomePage && (
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" style={{ height: 410 }}>
                  <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
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
                  <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
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
    </div >
  );
}

export default Sidebar;

