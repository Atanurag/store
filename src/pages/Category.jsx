import React,{ useContext } from 'react';
import { InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge, Select } from 'antd';
import '../assests/css/Category.css'
import { CartProvider } from '../components/CartContext';
const Category = ()=>{
  cart, addToCart, removeFromCart, updateQuantity 
  const {cart} = useContext(CartProvider) ;
    return (<>
    <div className='category'>
{cart[0]}
    

   <div style={{height:'100px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'end'}}>

<div style={{padding:'4px 0',width:'100%',display:'flex',justifyContent:'space-between'}}>


<div style={{height:'40px',width:'40px',backgroundColor:'white',borderRadius:'4px'}}></div>

<div style={{marginLeft:'4px'}}>
<Select
    className="select-dropdown"
  //style={{border:'none'}}
    
    placeholder="Select category"
    optionFilterProp="label"
    
   
    options={[
      {
        value: 'jack',
        label: 'Dry Fruits',
      },
      {
        value: 'lucy',
        label: 'Soft Drinks',
      },
      {
        value: 'tom',
        label: 'Abc',
      },
    ]}
  />
</div>

<div style={{display:'flex',justifyContent:'flex-end',gap:'20px' ,alignItems:'center'}}>
    <span style={{position:'relative'}}>
        <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/><div style={{ position: 'absolute', background: 'red', top: 0, borderRadius: '50%', color: 'white', padding: '8px', height: '12px', width: '12px', fontWeight:600, left: '16px', display: 'flex', justifyContent: "center", alignItems: 'center' ,fontFamily: 'Poppins, sans-serif'}}>{5}</div>
  </span>
    <span> <MenuUnfoldOutlined style={{fontSize:'22px',color:'white'}} /></span>
</div>
</div>

</div>







<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px 20px'}}>

{Array(10).fill('*').map((e,i)=>{
return (
<><div  className= 'category-card' style={{ marginRight:'10px',width:'100px',display:'flex',flexDirection:'column',gap:'6px',alignItems:'start'}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>Abcdrf ere</p>
</div>
</>
)
})

}


</div>








<div className='category-item-section'>

<div className='input-box' style={{margin:'15px'}}>
  <Link to='/search'>
<Input size="large" placeholder="Search For Items..."
 suffix={<SearchOutlined style={{backgroundColor:'white'}}/>} /></Link>
                    </div>



<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'15px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Dry Fruits</p>
</div>

<div style={{display:'flex',justifyContent:'space-between' ,margin:'15px',flexWrap:'wrap'}}>

{Array(9).fill('*').map((e,i)=>{
  return (<>
  <div className='card'>
  <div className='image-container'>
{/* <img style={{height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}} src={'https://t3.ftcdn.net/jpg/02/72/47/94/360_F_272479453_Kl30iWCD9WWhlU8BNORRtNUR1ADxXTCh.jpg'}></img>, */}

    <div style={{position:'absolute',bottom:'3px',right:'3px'}}>
    <Button  type="primary" size={'small'} >+</Button>
    </div>
  {/* <div className='cart-btn'>

<Button  type="primary" className='cart-btn-icon' >-</Button>

      <div className='cart-quantity'>
      6
      </div>
      <Button  type="primary" className='cart-btn-icon'  

>+</Button>

    </div> */}

  </div>

<div style={{width:'100px'}}>
  <p style={{fontSize:'10px',color:'gray',fontFamily: 'Poppins, sans-serif'}}>Britiania</p>
  <span style={{fontSize:'12px',fontWeight:500,fontFamily: 'Poppins, sans-serif'}}>Bourbon Cream Buscuits</span>
  <div style={{display:'flex',justifyContent:'space-between'}}>
    <span style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>₹ 25</span>
    <span style={{fontSize:'10px',color:'gray',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>100 g</span>
  </div>
</div>


</div>
  </>)
})}

</div>



</div>


</div>
    </>)
}
export default Category;