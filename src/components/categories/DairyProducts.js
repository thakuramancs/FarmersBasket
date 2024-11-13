import React from 'react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const DairyProducts = () => {
  const { addToCart } = useCart();
  const dairyProducts = products.filter(product => product.category === 'Dairy');

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Dairy Products</h2>
      <div className="row g-4">
        {dairyProducts.map(product => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
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
                  <span className="h5 mb-0">₹{product.price}</span>
                  <button 
                    className="btn btn-success"
                    onClick={() => addToCart(product)}
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
  );
};

export default DairyProducts; 