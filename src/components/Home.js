import React from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (product) => {
    console.log('Attempting to add product:', product);
    try {
      addToCart(product);
      console.log('Current cart items:', cartItems);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div 
        className="container-fluid p-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/grocery-banner.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "50vh",
          marginBottom: "2rem"
        }}
      >
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="text-center text-white">
            <h1 className="display-4 mb-4">Fresh Groceries Delivered to Your Door</h1>
            <p className="lead mb-4">Shop fresh vegetables, fruits, and dairy products with convenient delivery options</p>
            <button className="btn btn-success btn-lg">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row flex-nowrap overflow-auto pb-3">
          {products.map(product => (
            <div key={product.id} className="col-9 col-md-4 col-lg-3">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">₹ {product.price}</span>
                    <button 
                      className="btn btn-success"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 