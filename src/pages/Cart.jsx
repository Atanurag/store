import React,{ useContext,useEffect,useState } from 'react';
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
const [forNowHidePayBtn, setForNowHidePayBtn] = useState(false)
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
                console.log('done payment!');
                setForNowHidePayBtn(true);
                setCurrentProgress(2);
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
              setForNowHidePayBtn(false);
              setCurrentProgress(1);
              console.log(err);
            });
        }


useEffect(()=>{
if(cart?.length < 1){
  setCurrentProgress(0);
}
},[cart])
  
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

 
      {cart.length > 0 && showCart  && !forNowHidePayBtn?  <><Card
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




    { !forNowHidePayBtn && <Card
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
      </Card>}


      {!forNowHidePayBtn && <Button style={{position:'relative',padding: '0px 12px', backgroundColor: 'black', height: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '94%', borderRadius: '4px', margin: '12px auto' }} onClick={()=>{
        //setShowCart(false)
        onBuyClicked();
       
        
      }}>
<img 
style={{
    position: "absolute",
    top: "50%",
    left: "46%",
    transform: "translate(-50%, -46%)",
    height: 24,
    width:24
  }}  src="data:image/png;base64,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" alt="" />
<span style={{color:'white',position: "absolute",
    top: "50%",
    left: "54%",
    transform: "translate(-50%, -53%)",
    fontWeight:500,fontSize:'18px'}}>Pay</span>
        {/* <span style={{ color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif' }}>Make Payment</span>
        <span style={{color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif' }}>₹ {totalAmount}</span> */}
      </Button>} </> :
      ''
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



// 1. So search doesn't function. 

// 2. when the item added to the cart there should 
// option or easy click avaiable to goto cart directly.
//  Now we need to scroll up and click on cart.
// 3. Make Payment button should not have amount
//  mentioned. Its should be just Pay or use Gpay logo.
//   Currently it looks like clicking on label.
// 4. There is no navigation to goto Home Screen. 

// 5. Select category drop down does not work.
 
// So overall does not look to be better integrated. Work
//  on above items, lets have efforts shared by EOD everyday. I also want you to start on CXO mobile app we discussed in morning. Deviate your 50-50 time in both, get me daily updates here on chat on 
// both what's happening.

