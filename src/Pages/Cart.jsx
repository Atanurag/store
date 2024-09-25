import React from 'react';
import {useState} from 'react';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';
import { ArrowLeftOutlined ,InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
const Cart =()=>{
    const navigate = useNavigate();
    return(<>

<div style={{color:'white',height:'100px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'center' ,justifyContent:'start',}}>
<ArrowLeftOutlined onClick={()=>{
   navigate(-1)
}} />

       <div style={{display:'flex',flexDirection:'column',alignItems:'start',marginLeft:'19px'}}>
        <p style={{fontWeight:'bold',fontSize:'18px'}}>Review Cart</p>
        <p>Hiramani Store | Chunabhati</p>
        </div>             
</div>
    </>)
}
export default Cart;