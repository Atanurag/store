import React from 'react';
import './index.css';
import { Col, Row } from 'antd';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import Home from './Pages/Home.jsx'
const App = () => (
  <>
  <Routes >
    <Route path='/' element= {<Home/>}/>
   
   <Route path='/p' element={<>erer</>}/>
    </Routes>
  </>
);
export default App;