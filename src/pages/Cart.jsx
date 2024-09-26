import React,{ useContext,useState } from 'react';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Steps, Card, Badge } from 'antd';
import { ArrowLeftOutlined, InfoCircleOutlined, CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import { InputOTP } from "antd-input-otp";
import { CartContext } from '../components/CartContext';
import '../assests/css/Cart.css'
const Cart = () => {
  const {cart,totalItems,totalAmount,addToCart,removeFromCart} = useContext(CartContext);
  const navigate = useNavigate();
  const style = {
    background: '#0092ff',
    padding: '8px 0',
  };
  return (<>
    <div className='cart'>
      <div style={{ color: 'white', height: '100px', backgroundColor: '#444444', padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'start', }}>
        <ArrowLeftOutlined onClick={() => {
          navigate(-1)
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '19px' }}>
          <p style={{ fontSize: '14px',fontWeight:500,fontFamily: 'Poppins, sans-serif', }}>Review Cart</p>
          <p style={{fontSize: '12px',fontWeight:500,fontFamily: 'Poppins, sans-serif', }}>Hiramani Store | Chunabhati</p>
        </div>
      </div>


      <div style={{ padding: '12px' }}>


        <Steps
          current={1}
          labelPlacement="horizontal"
          size={'small'}
          responsive={false}
          items={[
            {
              title: 'Menu',

            },
            {
              title: 'Cart',


            },
            {
              title: 'Payment',

            },
          ]}
        /></div>


      <Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // updated box shadow
          borderRadius: 4, // add a subtle border radius

          backgroundColor: '#fff', // set a white background color
        }}
      >

{cart.map((e,i)=>{
  return (
    <>
     <Row gutter={8} style={{ margin: ' 0' }}>
          <Col className="gutter-row" span={5}>
            <div style={{ backgroundColor: "#edeef0", borderRadius: '4px', height: '60px', width: '60px' }}></div>

          </Col>
          <Col className="gutter-row" span={9}>
            <div >
              <span style={{ fontSize: '12px', fontWeight:600,fontFamily: 'Poppins, sans-serif',  }}>{e.name}</span>

              <div style={{ fontSize: '10px',fontFamily: 'Poppins, sans-serif' }}>{e.quantity} pieces</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{
              marginTop: '10px',
              
              width: '75px',
              height: '30px',
              boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3), 0 -0.5px 1px rgba(0, 0, 0, 0.3), 0.5px 0 1px rgba(0, 0, 0, 0.3), -0.5px 0 1px rgba(0, 0, 0, 0.3)',
              borderRadius: 15,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: '#1677ff',
             
            }}>
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',  }} onClick={()=>{
                removeFromCart(e);
              }}>-</div>
              {e.quantity}
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',}} onClick={()=>{
                addToCart(e);
              }}>+</div>

            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={{ fontSize: '16px', fontWeight:600,fontFamily: 'Poppins, sans-serif', marginTop: '14px', textAlign: 'right' }}>₹ {e.quantity * e.price}</div>
          </Col>
        </Row>
        <Divider />
    </>
  )
})}


        {/* <Row gutter={8} style={{ margin: ' 0' }}>
          <Col className="gutter-row" span={5}>
            <div style={{ backgroundColor: "#edeef0", borderRadius: '4px', height: '60px', width: '60px' }}></div>

          </Col>
          <Col className="gutter-row" span={9}>
            <div >
              <span style={{ fontSize: '12px', fontWeight:600,fontFamily: 'Poppins, sans-serif',  }}>Oreo Choco cream choclate</span>

              <div style={{ fontSize: '10px',fontFamily: 'Poppins, sans-serif' }}>6 pieces</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{
              marginTop: '10px',
              marginLeft:'9px',
              width: '75px',
              height: '30px',
              boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3), 0 -0.5px 1px rgba(0, 0, 0, 0.3), 0.5px 0 1px rgba(0, 0, 0, 0.3), -0.5px 0 1px rgba(0, 0, 0, 0.3)',
              borderRadius: 15,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: '#1677ff',
             
            }}>
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',  }}>-</div>
              6
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',}}>+</div>

            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={{ fontSize: '16px', fontWeight:600,fontFamily: 'Poppins, sans-serif', marginTop: '14px', textAlign: 'right' }}>₹ 60</div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={8} style={{ margin: ' 0' }}>
          <Col className="gutter-row" span={5}>
            <div style={{ backgroundColor: "#edeef0", borderRadius: '4px', height: '60px', width: '60px' }}></div>

          </Col>
          <Col className="gutter-row" span={9}>
            <div >
              <span style={{ fontSize: '12px', fontWeight:600,fontFamily: 'Poppins, sans-serif',  }}>Oreo Choco cream choclate</span>

              <div style={{ fontSize: '10px',fontFamily: 'Poppins, sans-serif' }}>6 pieces</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{
              marginTop: '10px',
              marginLeft:'9px',
              width: '75px',
              height: '30px',
              boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3), 0 -0.5px 1px rgba(0, 0, 0, 0.3), 0.5px 0 1px rgba(0, 0, 0, 0.3), -0.5px 0 1px rgba(0, 0, 0, 0.3)',
              borderRadius: 15,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: '#1677ff',
             
            }}>
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',  }}>-</div>
              6
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',}}>+</div>

            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={{ fontSize: '16px', fontWeight:600,fontFamily: 'Poppins, sans-serif', marginTop: '14px', textAlign: 'right' }}>₹ 60</div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={8} style={{ margin: ' 0' }}>
          <Col className="gutter-row" span={5}>
            <div style={{ backgroundColor: "#edeef0", borderRadius: '4px', height: '60px', width: '60px' }}></div>

          </Col>
          <Col className="gutter-row" span={9}>
            <div >
              <span style={{ fontSize: '12px', fontWeight:600,fontFamily: 'Poppins, sans-serif',  }}>Oreo Choco cream choclate</span>

              <div style={{ fontSize: '10px',fontFamily: 'Poppins, sans-serif' }}>6 pieces</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{
              marginTop: '10px',
              marginLeft:'9px',
              width: '75px',
              height: '30px',
              boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3), 0 -0.5px 1px rgba(0, 0, 0, 0.3), 0.5px 0 1px rgba(0, 0, 0, 0.3), -0.5px 0 1px rgba(0, 0, 0, 0.3)',
              borderRadius: 15,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: '#1677ff',
             
            }}>
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',  }}>-</div>
              6
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',}}>+</div>

            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={{ fontSize: '16px', fontWeight:600,fontFamily: 'Poppins, sans-serif', marginTop: '14px', textAlign: 'right' }}>₹ 60</div>
          </Col>
        </Row>
        <Divider /> */}
        <Link to='/' style={{ marginTop: '12px', textDecoration: 'underline',fontFamily: 'Poppins, sans-serif', }}>+ Add More Items</Link>
      </Card>




      <Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // updated box shadow
          borderRadius: 4, // add a subtle border radius

          backgroundColor: '#fff', // set a white background color
        }}
      >
        <p style={{ fontWeight: 600, fontSize: '15px',fontFamily: 'Poppins, sans-serif', }}>Bill Details</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', }}>Item Total</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif'}}>₹ {totalAmount}</p>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', textDecoration: 'underline' }}>GST Charges</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif',}}>₹ 0</p>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', }}>To Pay</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif',}}>₹ {totalAmount}</p>
        </div>
      </Card>


      <div style={{ padding: '0px 12px', backgroundColor: '#1677ff', height: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '94%', borderRadius: '4px', margin: '12px auto' }}>

        <span style={{ color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif' }}>Make Payment</span>
        <span style={{color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif' }}>₹ {totalAmount}</span>
      </div>


      {/* <Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          backgroundColor: '#fff',
        }}>
        <p style={{ textAlign: 'center', marginBottom: '12px', fontWeight: 600 ,fontFamily: 'Poppins, sans-serif'}}>Please Verify Phone Number</p>
        <Input inputMode="numeric" placeholder='Phone Number' style={{ fontSize: '16px', textAlign: 'center' }} onKeyDown={(event) => {
          if (!/[0-9]/.test(event.key) &&
            event.key !== "Backspace" && event.key !== "Delete"
          ) {
            event.preventDefault();
          }
        }} minLength={10} maxLength={10}
          onChange={(e) => {
            //setPhoneNumber(e.target.value);
          }}
        //value={phoneNumber}
        />
        <Button style={{ width: '100%', marginTop: '15px', fontSize: '16px', padding: '18px',color:'white',fontFamily: 'Poppins, sans-serif' }} type="primary" onClick={() => {

          // sendOtp(phoneNumber)
        }}>
          Confirm
        </Button>
      </Card>

      <Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          backgroundColor: '#fff',
        }}>
        <p style={{ textAlign: 'center', marginBottom: '12px', fontWeight: 600 ,fontFamily: 'Poppins, sans-serif'}}>Please Enter OTP</p>
        <InputOTP  autoComplete="one-time-code" autoFocus={true}  className="custom-otp-input"
          inputMode="numeric" inputRegex={/^\d+$/}
        />
        <Button  style={{ width: '100%', marginTop: '15px', fontSize: '16px', padding: '18px',color:'white',fontFamily: 'Poppins, sans-serif' }} type="primary" onClick={() => {

          //verifyOtp(phoneNumber, otpValue)
        }}> Verify OTP</Button>

        <Button  style={{ width: '100%', marginTop: '15px', fontSize: '16px', padding: '18px',fontFamily: 'Poppins, sans-serif' }} onClick={() => {
          // setOtpValue([]);
          // otpFocusRef.current[0].focus()
          // sendOtp(phoneNumber)
        }}> Resend OTP</Button>
         
       
    </Card> */}

  </div >

  </>)
}
export default Cart;