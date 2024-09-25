import React from 'react';
import { useState } from 'react';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Steps, Card, Badge } from 'antd';
import { ArrowLeftOutlined, InfoCircleOutlined, CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import '../assests/css/Cart.css'
const Cart = () => {
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
          <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Review Cart</p>
          <p>Hiramani Store | Chunabhati</p>
        </div>
      </div>


      <div style={{ padding: '12px' }}>


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
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // updated box shadow
          borderRadius: 4, // add a subtle border radius

          backgroundColor: '#fff', // set a white background color
        }}
      >
        <Row gutter={8} style={{ margin: ' 0' }}>
          <Col className="gutter-row" span={5}>
            <div style={{ backgroundColor: "#edeef0", borderRadius: '4px', height: '60px', width: '60px' }}></div>

          </Col>
          <Col className="gutter-row" span={9}>
            <div >
              <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Oreo Choco cream choclate</span>

              <div style={{ fontSize: '11px' }}>6 pieces</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{
              marginTop: '8px',
              width: '80px',
              height: '35px',
              boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3), 0 -0.5px 1px rgba(0, 0, 0, 0.3), 0.5px 0 1px rgba(0, 0, 0, 0.3), -0.5px 0 1px rgba(0, 0, 0, 0.3)',
              borderRadius: 15,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: '#1677ff'
            }}>
              <div style={{ fontSize: '20px', padding: '12px', fontWeight: 'bold' }}>-</div>
              6
              <div style={{ fontSize: '19px', padding: '12px', fontWeight: 'bold' }}>+</div>

            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '14px', textAlign: 'right' }}>₹ 60</div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={8} style={{ margin: ' 0' }}>
          <Col className="gutter-row" span={5}>
            <div style={{ backgroundColor: "#edeef0", borderRadius: '4px', height: '60px', width: '60px' }}></div>

          </Col>
          <Col className="gutter-row" span={9}>
            <div >
              <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Oreo Choco cream choclate</span>

              <div style={{ fontSize: '11px' }}>6 pieces</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{
              marginTop: '8px',
              width: '80px',
              height: '35px',
              boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3), 0 -0.5px 1px rgba(0, 0, 0, 0.3), 0.5px 0 1px rgba(0, 0, 0, 0.3), -0.5px 0 1px rgba(0, 0, 0, 0.3)',
              borderRadius: 15,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: '#1677ff'
            }}>
              <div style={{ fontSize: '20px', padding: '12px', fontWeight: 'bold' }}>-</div>
              6
              <div style={{ fontSize: '19px', padding: '12px', fontWeight: 'bold' }}>+</div>

            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '14px', textAlign: 'right' }}>₹ 60</div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={8} style={{ margin: ' 0' }}>
          <Col className="gutter-row" span={5}>
            <div style={{ backgroundColor: "#edeef0", borderRadius: '4px', height: '60px', width: '60px' }}></div>

          </Col>
          <Col className="gutter-row" span={9}>
            <div >
              <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Oreo Choco cream choclate</span>

              <div style={{ fontSize: '11px' }}>6 pieces</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{
              marginTop: '8px',
              width: '80px',
              height: '35px',
              boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3), 0 -0.5px 1px rgba(0, 0, 0, 0.3), 0.5px 0 1px rgba(0, 0, 0, 0.3), -0.5px 0 1px rgba(0, 0, 0, 0.3)',
              borderRadius: 15,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: '#1677ff'
            }}>
              <div style={{ fontSize: '20px', padding: '12px', fontWeight: 'bold' }}>-</div>
              6
              <div style={{ fontSize: '19px', padding: '12px', fontWeight: 'bold' }}>+</div>

            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '14px', textAlign: 'right' }}>₹ 60</div>
          </Col>
        </Row>
        <Divider />
        <Link to='/' style={{ marginTop: '12px', textDecoration: 'underline' }}>+ Add More Items</Link>
      </Card>




      <Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // updated box shadow
          borderRadius: 4, // add a subtle border radius

          backgroundColor: '#fff', // set a white background color
        }}
      >
        <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Bill Details</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '14px' }}>Item Total</p>
          <p style={{ fontWeight: 'bold', fontSize: '14px' }}>₹ 240</p>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline' }}>GST Charges</p>
          <p style={{ fontWeight: 'bold', fontSize: '14px' }}>₹ 10</p>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '14px' }}>To Pay</p>
          <p style={{ fontWeight: 'bold', fontSize: '14px' }}>₹ 250</p>
        </div>
      </Card>


      <div style={{ padding: '0px 12px', backgroundColor: '#1677ff', height: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '94%', borderRadius: '4px', margin: '12px auto' }}>

        <span style={{ color: 'white', fontWeight: 'bold' }}>Make Payment</span>
        <span style={{ color: 'white', fontWeight: 'bold' }}>₹ 250</span>
      </div>


      <Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          backgroundColor: '#fff',
        }}>
        <Input inputMode="numeric" placeholder='Phone Number' style={{ textAlign: 'center' }} onKeyDown={(event) => {
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
        <Button type="primary" onClick={() => {

         // sendOtp(phoneNumber)
        }}>
          Confirm
        </Button>
      </Card>



    </div>

  </>)
}
export default Cart;