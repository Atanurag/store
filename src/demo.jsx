import React from 'react';
import './index.css';
import { Col, Row } from 'antd';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'
import Category from './Pages/Category.jsx'
const App = () => (
  <>
  <Routes >
    <Route path='/' element= {<Home/>}/>

   <Route path='/search' element={<Search/>}/>
   <Route path='/category' element={<Category/>}/>
    </Routes>
  </>
);
export default App;