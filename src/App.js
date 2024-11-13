import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Vegetables from './components/categories/Vegetables';
import Fruits from './components/categories/Fruits';
import DairyProducts from './components/categories/DairyProducts';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ paddingTop: '76px' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/vegetables" element={<Vegetables />} />
            <Route path="/category/fruits" element={<Fruits />} />
            <Route path="/category/dairyproducts" element={<DairyProducts />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
