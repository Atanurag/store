import React from 'react';
import './index.css';
import { Col, Row } from 'antd';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Category from './pages/Category.jsx';
import Cart from './pages/Cart.jsx';
const App = () => (
  <>
  <Routes >
    <Route path='/' element= {<Home/>}/>

   <Route path='/search' element={<Search/>}/>
   <Route path='/category' element={<Category/>}/>
   <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </>
);
export default App;