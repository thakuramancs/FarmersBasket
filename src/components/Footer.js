import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light mt-5">
      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card h-100 text-center p-3 shadow-sm">
              <i className="bi bi-truck display-4 text-success mb-3"></i>
              <div className="card-body">
                <h3 className="card-title h5">Fast Delivery</h3>
                <p className="card-text">Same-day delivery for orders placed before 2 PM</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 text-center p-3 shadow-sm">
              <i className="bi bi-bag-heart display-4 text-success mb-3"></i>
              <div className="card-body">
                <h3 className="card-title h5">Fresh Products</h3>
                <p className="card-text">100% fresh and quality products from local farmers</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 text-center p-3 shadow-sm">
              <i className="bi bi-shield-check display-4 text-success mb-3"></i>
              <div className="card-body">
                <h3 className="card-title h5">Safe Payment</h3>
                <p className="card-text">Secure payment options and money-back guarantee</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 text-center p-3 shadow-sm">
              <i className="bi bi-headset display-4 text-success mb-3"></i>
              <div className="card-body">
                <h3 className="card-title h5">24/7 Support</h3>
                <p className="card-text">Round-the-clock customer support for your queries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us and Footer Links Section */}
      <div className="bg-dark text-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="mb-3">About Us</h5>
              <p>We are committed to providing fresh, high-quality groceries directly to your doorstep. Our mission is to make grocery shopping convenient and enjoyable for everyone.</p>
            </div>
            <div className="col-md-4">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
                <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
                <li><a href="/terms" className="text-light text-decoration-none">Terms & Conditions</a></li>
                <li><a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="mb-3">Contact Info</h5>
              <ul className="list-unstyled">
                <li><i className="bi bi-geo-alt me-2"></i>123 Grocery St, City, Country</li>
                <li><i className="bi bi-telephone me-2"></i>+1 234 567 8900</li>
                <li><i className="bi bi-envelope me-2"></i>info@grocerystore.com</li>
              </ul>
              <div className="mt-3">
                <a href="#" className="btn btn-link text-light me-3 p-0"><i className="bi bi-facebook"></i></a>
                <a href="#" className="btn btn-link text-light me-3 p-0"><i className="bi bi-twitter"></i></a>
                <a href="#" className="btn btn-link text-light me-3 p-0"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-darker text-light py-3">
        <div className="container text-center">
          <small>&copy; 2024 Grocery Store. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 