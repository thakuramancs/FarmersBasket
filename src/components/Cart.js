import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  console.log('Cart Items:', cartItems); // Debug log

  useEffect(() => {
    console.log('Cart items updated:', cartItems);
  }, [cartItems]);

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 5.00 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart ({cartItems.length} items)</h2>
      
      {!cartItems || cartItems.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-cart-x display-1 text-muted"></i>
          <h3 className="mt-3">Your cart is empty</h3>
          <Link to="/" className="btn btn-success mt-3">Continue Shopping</Link>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-md-8">
            {cartItems.map(item => (
              <div key={item.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-start"
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{item.name}</h5>
                        <button 
                          className="btn btn-link text-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                      <p className="card-text text-success">₹{item.price.toFixed(2)}</p>
                      <div className="d-flex align-items-center">
                        <div className="input-group" style={{ width: '150px' }}>
                          <button 
                            className="btn btn-outline-secondary" 
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="form-control text-center"
                            value={item.quantity}
                            readOnly
                          />
                          <button 
                            className="btn btn-outline-secondary" 
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= 10}
                          >
                            +
                          </button>
                        </div>
                        <p className="ms-3 mb-0">
                          Total: ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Order Summary</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>₹{shipping.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>₹{total.toFixed(2)}</strong>
                </div>
                <button className="btn btn-success w-100">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 