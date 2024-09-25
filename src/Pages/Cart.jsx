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
   margin:'12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // updated box shadow
    borderRadius: 4, // add a subtle border radius
    
    backgroundColor: '#fff', // set a white background color
  }}
>
<Row gutter={8} style={{margin:' 0'}}>
      <Col className="gutter-row" span={5}>
      <div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'60px',width:'60px'}}></div>

      </Col>
      <Col className="gutter-row" span={10}>
        <div >
          <span style={{fontSize:'13px',fontWeight:'bold'}}>Oreo Choco cream choclate</span>
          
          <div style={{fontSize:'11px'}}>6 pieces</div>
          </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div  style={{
          marginTop:'8px',
          width:'80px',
          height:'35px',
          boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3), 0 -0.5px 1px rgba(0, 0, 0, 0.3), 0.5px 0 1px rgba(0, 0, 0, 0.3), -0.5px 0 1px rgba(0, 0, 0, 0.3)', 
          borderRadius: 15,
    backgroundColor: '#fff',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    color:'#1677ff'
  }}>
    <div style={{fontSize:'20px',padding:'12px',fontWeight:'bold'}}>-</div>
    6
    <div style={{fontSize:'19px',padding:'12px',fontWeight:'bold'}}>+</div>
  
  </div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div >₹ 60</div>
      </Col>
    </Row>
    <Divider />
</Card>




</div>

    </>)
}
export default Cart;