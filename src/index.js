import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Components are created in separate files:

// src/components/Home.js
// src/components/Products.js 
// src/components/ProductDetails.js
// src/components/Cart.js
// src/components/Categories.js
// src/components/Brands.js
// src/components/Checkout.js
// src/components/NotFound.js





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
