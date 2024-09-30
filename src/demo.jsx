import React from 'react';
import './index.css';
import { Col, Row } from 'antd';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Category from './pages/Category.jsx';
import Cart from './pages/Cart.jsx';
const App = () => {
  const isDesktop = () => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    return !isMobile;
  };
  if(isDesktop()){
    alert('This app is designed for Android mobile devices only')
    return;
  }
  else{
    
  }
  return(
    <CartProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/category" element={<Category />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </CartProvider>
  );
}
 
;
export default App;