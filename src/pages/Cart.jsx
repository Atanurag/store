import React,{ useContext,useState } from 'react';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Steps, Card, Badge } from 'antd';
import { ArrowLeftOutlined, InfoCircleOutlined, CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import { InputOTP } from "antd-input-otp";
import { CartContext } from '../components/CartContext';
import '../assests/css/Cart.css'
const Cart = () => {
  const {items,cart,totalItems,totalAmount,addToCart,removeFromCart,increaseItemToOne,increaseItem ,decreaseItem} = useContext(CartContext);
  const [currentProgress, setCurrentProgress] = useState( cart.length > 0 ? 1:0)
  const [showCart, setShowCart] = useState(true);
  const navigate = useNavigate();
  const style = {
    background: '#0092ff',
    padding: '8px 0',
  };





//for checking gpay installed or not 
  /**
   *
   * @private
   * @param {PaymentRequest} request The payment request object.
   * @return {Promise} a promise containing the result of whether can make payment.
   */
  const canMakePaymentCache = 'canMakePaymentCache';

  async function checkCanMakePayment(request) {
    // Check canMakePayment cache, use cache result directly if it exists.
    if (sessionStorage.hasOwnProperty(canMakePaymentCache)) {
      return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
    }
    // If canMakePayment() isn't available, default to assume the method is
    // supported.
    var canMakePaymentPromise = Promise.resolve(true);

    // Feature detect canMakePayment().
    if (request.canMakePayment) {
      canMakePaymentPromise = request.canMakePayment();
    }

    return canMakePaymentPromise
      .then((result) => {
        // Store the result in cache for future usage.
        sessionStorage[canMakePaymentCache] = result;
        return result;
      })
      .catch((err) => {
        console.log('Error calling canMakePayment: ' + err);
      });
  }



  let tx = Math.random().toString(36).slice(2, 12).toUpperCase()

  /** Launches payment request flow when user taps on buy button. */
  function onBuyClicked() {
    //console.log(`user_id=${JSON.parse(localStorage.getItem('isVerified'))?.userId}&selectedItem=${selFood}`,selFood)
    if (!window.PaymentRequest) {
      alert('Web payments are not supported in this browser.');
      // toast.error('Web payments are not supported in this browser.', {
      //   style: {
      //     color: 'red',
      //     minWidth: '300px'
      //   },
      //   duration: 2200,
      //   position: 'top-center',
      // });
      return;
    }
    
          const supportedInstruments = [
            {
              supportedMethods: ['https://tez.google.com/pay'],
              data: {
                pa: '7875853859@pthdfc',
                pn: 'Anurag Tiwari',
                tr: tx,
                //tr: 'aw43r51xkvodj5',
                url: 'https://annapoorna.snazzy.live/contact-us',
                mc: '5812',
              },
            }
          ];
          const details = {
                total: {
                  label: 'Total',
                  amount: {
                    currency: 'INR',
                    value: totalAmount.toFixed(2),
                  },
                },
                displayItems: [{
                  label: 'Original Amount',
                  amount: {
                    currency: 'INR',
                    value: totalAmount.toFixed(2),
                  },
                }],
              };
          let request = null;
          try {
            //console.log(data?.response_object, details)
            request = new PaymentRequest(supportedInstruments, details);
          } catch (e) {
            console.log('Payment Request Error: ' + e.message);
            return;
          }
          if (!request) {
            console.log('Web payments are not supported in this browser.');
            return;
          }

          var canMakePaymentPromise = checkCanMakePayment(request);
          canMakePaymentPromise
            .then((result) => {
              showPaymentUI(request, result);
            })
            .catch((err) => {
              console.log('Error calling checkCanMakePayment: ' + err);
            });

        }
       


        function showPaymentUI(request, canMakePayment) {
          if (!canMakePayment) {
          
            alert('GPay is not ready to pay');
            setCurrentProgress(1);
            //handleNotReadyToPay();
            return;
          }
      
          // Set payment timeout.
          let paymentTimeout = window.setTimeout(function () {
            window.clearTimeout(paymentTimeout);
            request.abort()
              .then(function () {
                console.log('Payment timed out after 20 minutes.');
              })
              .catch(function () {
                console.log('Unable to abort, user is in the process of paying.');
              });
          }, 20 * 60 * 1000); /* 20 minutes */
      
          request.show()
            .then(function (instrument) {
      
              window.clearTimeout(paymentTimeout);
      
              // const status = instrument.details.Status;
              // const txnRef = instrument.details.txnRef;
      
              instrument.complete('success').then(function () {
                console.log('done payment!')
                //setPaymentState({ status, txnRef });
               // document.body.style.overflow = 'hidden';
                //document.getElementsByTagName('body')[0].style.background = 'inherit';
              })
              // BE api start
              //https://annapoorna.snazzy.live/api/v1/items/order-validation
             
              //processResponse(instrument); // Handle response from browser.
            })
            .catch(function (err) {
              // setPaymentState({
              //   status: 'FAILED',
              //   txnRef: '-'
              // }
              // );
            
              console.log(err);
            });
        }



  
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
          current={currentProgress}
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


      {cart.length > 0 && showCart ?  <><Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          backgroundColor: '#fff',
        }}
      >

{cart.map((e,i)=>{
  return (
    <>
     <Row gutter={8} style={{ margin: ' 0' }}>
          <Col className="gutter-row" span={5}>
            <div style={{ backgroundColor: "#edeef0", borderRadius: '4px', height: '60px', width: '60px' }}>
            <img  src={e.img} alt=""  style={{display: 'block',height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}}/>
            </div>

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
                decreaseItem(e);
              }}>-</div>
              {e.quantity}
              <div style={{ fontSize: '16px', padding: '10px',  fontWeight:600,fontFamily: 'Poppins, sans-serif',}} onClick={()=>{
                addToCart(e);
                increaseItem(e);
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


      <div style={{ padding: '0px 12px', backgroundColor: '#1677ff', height: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '94%', borderRadius: '4px', margin: '12px auto' }} onClick={()=>{
        //setShowCart(false)
        onBuyClicked();
        setCurrentProgress(2);
        
      }}>

        <span style={{ color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif' }}>Make Payment</span>
        <span style={{color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif' }}>₹ {totalAmount}</span>
      </div> </> :
      ''
//       <div  style={{
//   position: 'absolute',
//   bottom: 5,
//   left: 0,
//   right: 0,
//   textAlign: 'center',
// }}>
//   <Button type='primary' style={{margin: 'auto'}}>Please add Items to cart</Button>
// </div>
 }

{/* 
      {!showCart  && <Card
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
        <div style={{display:'flex',justifyContent:'flex-end',margin:'20px 15px '}} onClick={()=>{
        setShowCart(true);
        setCurrentProgress(1);
      }}>
  <p style={{fontWeight:500,fontSize:'13px',color:'#1677ff',textDecoration:'underline',fontFamily: 'Poppins, sans-serif'}}> <ArrowLeftOutlined style={{marginRight:'4px'}}/>  Back to Cart</p>
</div>
      </Card>} */}

      {/* <Card
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
         
         <div style={{display:'flex',justifyContent:'flex-end',margin:'20px 15px '}}>
  <p style={{fontWeight:500,fontSize:'13px',color:'#1677ff',textDecoration:'underline',fontFamily: 'Poppins, sans-serif'}}> <ArrowLeftOutlined style={{marginRight:'4px'}}/>  Back to Cart</p>
</div>
    </Card> */}


{/* <Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          backgroundColor: '#fff',
        }}
        size="small"
      title="Order Details"
      >
         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', }}>Order Status</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif'}}>Success</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', }}>Order Id</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif'}}>IGHBE5854</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', }}>Total</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif'}}>₹ 40</p>
        </div>
      </Card> */}
      
      {/* <Card
        style={{
          margin: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          backgroundColor: '#fff',
        }}
        size="small"
      title="Order IGHBE5854"
      >
         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', }}>Order Status</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif'}}>Success</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', }}>Order Id</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif'}}>IGHBE5854</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif', }}>Total</p>
          <p style={{ fontWeight: 500, fontSize: '14px',fontFamily: 'Poppins, sans-serif'}}>₹ 40</p>
        </div>
      </Card> */}
  </div >

  </>)
}
export default Cart;