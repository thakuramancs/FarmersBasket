import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.jpeg" alt="Logo" height="40" />
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category/vegetables">
                    <i className="bi bi-flower1 me-2"></i>Vegetables
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/fruits">
                    <i className="bi bi-apple me-2"></i>Fruits
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/dairyproducts">
                    <i className="bi bi-cup-hot me-2"></i>Dairy Products
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex mx-auto" style={{ width: '40%' }}>
            <div className="input-group">
              <input 
                type="search" 
                className="form-control" 
                placeholder="Search products..." 
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

          <div className="d-flex align-items-center ms-auto">
            <Link to="/cart" className="btn btn-outline-success position-relative me-4 cart-badge-bounce">
              <i className="bi bi-cart3"></i>
              {cartItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              )}
              <span className="ms-2">Cart</span>
            </Link>

            <div className="nav-item dropdown ms-2">
              <a 
                className="nav-link dropdown-toggle d-flex align-items-center" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-1"></i>
                <span>Account</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/login">
                    <i className="bi bi-box-arrow-in-right me-2"></i>Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register">
                    <i className="bi bi-person-plus me-2"></i>Register
                  </Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="bi bi-person me-2"></i>My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/orders">
                    <i className="bi bi-bag me-2"></i>My Orders
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
