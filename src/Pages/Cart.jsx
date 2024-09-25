import React from 'react';
import {useState} from 'react';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch,  Steps ,Card, Badge } from 'antd';
import { ArrowLeftOutlined ,InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import '../assests/css/Cart.css'
const Cart =()=>{
    const navigate = useNavigate();
    const style = {
        background: '#0092ff',
        padding: '8px 0',
      };
    return(<>
<div className='cart'>
<div style={{color:'white',height:'100px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'center' ,justifyContent:'start',}}>
<ArrowLeftOutlined onClick={()=>{
   navigate(-1)
}} />

       <div style={{display:'flex',flexDirection:'column',alignItems:'start',marginLeft:'19px'}}>
        <p style={{fontWeight:'bold',fontSize:'18px'}}>Review Cart</p>
        <p>Hiramani Store | Chunabhati</p>
        </div>             
</div>


<div style={{padding:'12px'}}>


<Steps
    current={2}
    labelPlacement="horizontal" 
    size={'small'}
    responsive={false} 
    items={[
      {
        title: 'Cart',
       
      },
      {
        title: 'Menu',
        
       
      },
      {
        title: 'Payment',
       
      },
    ]}
  /></div>


<Card
  style={{
    width: 300,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // updated box shadow
    borderRadius: 4, // add a subtle border radius
    padding: 16, // add some padding for better content spacing
    backgroundColor: '#fff', // set a white background color
  }}
>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</Card>

<Row gutter={8} style={{margin:'12px 0'}}>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
    </Row>



</div>

    </>)
}
export default Cart;