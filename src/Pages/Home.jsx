import {useState,useEffect} from 'react';
import { InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag, Button,Tooltip, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../assests/css/Home.css'
const Home = () => {

  const [json,setJson]= useState([
      {
        name: 'Dosa',
        description:
          'A thin, crispy crepe made from fermented rice and lentil batter',
        price: 50,
        isVeg: true,
        tag: 'Classic',
        quantity: 0,
        img: 'https://t3.ftcdn.net/jpg/02/72/47/94/360_F_272479453_Kl30iWCD9WWhlU8BNORRtNUR1ADxXTCh.jpg',
      },
      {
        name: 'Pav Bhaji',
        description: 'Spiced mixture of mashed vegetables in a thick gravy served with pav',
        price: 40,
        isVeg: true,
        tag: 'Classic',
        quantity: 0,
        img: 'https://w0.peakpx.com/wallpaper/805/956/HD-wallpaper-food-delicious-food-food-holidays-indian-indian-food-pav-bhaji-spicy-food-street-food.jpg',
      },
      {
        name: 'Vada',
        description: 'Lentil fritters',
        price: 20,
        isVeg: true,
        tag: 'Classic',
        quantity: 0,
        img: 'https://img.freepik.com/premium-photo/sago-delight-sabudana-wada-vada-classic-indian-snack-vertical-mobile-wallpaper_896558-36481.jpg',
      },]
  )
  const [cart,setCart] =useState([]);
useEffect(()=>{
console.log(cart)
},[cart])
    return (
        <>
<div className='home-main'>
<div style={{height:'150px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'center'}}>

<div style={{padding:'4px',width:'100%',display:'flex',justifyContent:'space-between',border:'1px solid red'}}>

<div style={{display:'flex',width:'230px',alignItems:'center',justifyContent:'space-around',border:'1px solid yellow'}}>

<div style={{height:'70px',width:'70px',backgroundColor:'white',borderRadius:'4px'}}></div>
<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
<p style={{color:"white",fontSize:'15px',fontFamily: 'Poppins, sans-serif'}}> Hiramani Store <span style={{marginLeft:'10px'}}><Tooltip title="welcome!" placement="top"> <InfoCircleOutlined  style={{fontSize:'14px'}}/></Tooltip></span></p>
<p style={{textDecoration:'underline',color:'white',fontSize:'12px',fontFamily: 'Poppins, sans-serif'}}>Chunabhati</p>

<span style={{color:'rgb(90 194 100)',fontSize:'14px',marginTop:'4px',fontFamily: 'Poppins, sans-serif'}}>Open | Till 8pm</span>
</div>


</div>


<div style={{display:'flex',width:'30%',border:'1px solid blue',justifyContent:'flex-end',gap:'20px'}}>
    <span style={{position:'relative'}}> <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/><div style={{ position: 'absolute', background: 'red', top: 0, borderRadius: '50%', color: 'white', padding: '8px', height: '12px', width: '12px', fontWeight:600, left: '16px', display: 'flex', justifyContent: "center", alignItems: 'center' ,fontFamily: 'Poppins, sans-serif'}}>{5}</div>
  </span>
    <span> <MenuUnfoldOutlined style={{fontSize:'22px',color:'white'}} /></span>
</div>
</div>

</div>



<div className='home-item-section'>

<div className='input-box' style={{margin:'15px'}}>
  <Link to='/search'>
<Input size="large" placeholder="Search For Items..."
 suffix={<SearchOutlined style={{backgroundColor:'white'}}/>} /></Link>
                    </div>



<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'15px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Your Favourites</p>
  <Link to='/category' style={{fontWeight:500,fontSize:'13px',color:'#1677ff',textDecoration:'underline',fontFamily: 'Poppins, sans-serif'}}>View All</Link>
</div>

<div style={{display:'flex',justifyContent:'space-between' ,margin:'15px'}}>

{json.map((e,i)=>{
  return (<>
  <div className='card'>
  <div className='image-container'>
 
    <img  src={e.img} alt=""  style={{display: 'block',height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}}/>
    {e.quantity < 1 ?
     <><div style={{position:'absolute',bottom:'3px',right:'3px'}}>
    <Button  type="primary" size={'small'} onClick={()=>{
      setJson((js)=>
      js.map((si,ind)=>{
        if(si.name === e.name){
          return {
            ...si,
            quantity : 1
          }
        }
        return si;
      })
      )
      setCart([...cart, {...e,quantity:1}])
    }}>+</Button>
    </div></>:<>
    <div className='cart-btn'>

<Button  type="primary" className='cart-btn-icon' onClick={()=>{
      setJson((js)=>
      js.map((si,ind)=>{
        if(si.name === e.name){
          return {
            ...si,
            quantity : si.quantity-=1
          }
        }
        return si;
      })
      )
      setCart((prevCart) =>
      prevCart.map((data) => {
        if (data.name === e.name) {
          return { ...data, quantity: data.quantity - 1 };
        }
        return data;
      }).filter((data) => data.quantity > 0)
    );




    }}>-</Button>

      <div className='cart-quantity'>
      {e.quantity}
      </div>
      <Button  type="primary" className='cart-btn-icon'  
                onClick={()=>{
                  setJson((js)=>
                  js.map((si,ind)=>{
                    if(si.name === e.name){
                      return {
                        ...si,
                        quantity : si.quantity+=1
                      }
                    }
                    return si;
                  })
                  )


                  setCart((pr)=>pr.map((data)=>{
                    if(data.name === e.name){
                      return{
                        ...data,
                        quantity:data.quantity+=1
                      }
                    }
                    return data;
                  }))
                  

                }}
>+</Button>

    </div>
    </>
    
  }
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
  <p style={{fontSize:'10px',color:'gray',fontFamily: 'Poppins, sans-serif'}}>{e.tag}</p>
  <span style={{fontSize:'12px',fontWeight:500,fontFamily: 'Poppins, sans-serif'}}>{e.name}</span>
  <div style={{display:'flex',justifyContent:'space-between'}}>
    <span style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>₹ {e.price}</span>
    <span style={{fontSize:'10px',color:'gray',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>100 g</span>
  </div>
</div>


</div>
  </>)
})}

</div>


<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'15px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Shop by Category</p>
  <Link to='/category' style={{fontWeight:500,fontSize:'13px',color:'#1677ff',textDecoration:'underline',fontFamily: 'Poppins, sans-serif'}}>View All</Link>
</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
  return (
    <><div  className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}>

    <div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'80px',width:'80px'}}></div>
    
    <p style={{fontSize:'12px',fontWeight:500,fontFamily: 'Poppins, sans-serif'}}>Top seller</p>
    </div>
    </>
  )
})

}


</div>



{/* overflowX:'auto' */}
<div style={{ height: 150, backgroundColor: "#edeef0",width:'100%',padding:'20px 15px', marginBottom:'40px'}}>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginTop:'2px',
      marginBottom:'15px'
      
    }}
  >
    <p style={{fontSize:'15px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Crazy Deals</p>
    <Link to='/category' style={{fontWeight:500,fontSize:'13px',color:'#1677ff',textDecoration:'underline',fontFamily: 'Poppins, sans-serif'}}>View All</Link>

  </div>

  
<div className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'scroll'}}>
{
  Array(4).fill('*').map((e,i)=>{
    return (
      <><div className='offer-card'  style={{backgroundColor:'rgb(209 209 209)',display:'flex',minWidth:'200px',alignItems:'center',justifyContent:'space-between',borderRadius:'5px',marginRight:'12px'}}>

      <div style={{ backgroundColor: "#edeef0",height:'70px',width:'70px',backgroundColor:'white',borderRadius:'4px'}}></div>
      <div style={{display:'flex',flexDirection:'column',textAlign:'left',padding:'5px',gap:'3px'}}>
      <p style={{fontSize:'10px',fontFamily: 'Poppins, sans-serif'}}>Match Day Mania</p>
      <p style={{fontSize:'12px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Flat ₹ 125 Off</p>
      
      <span style={{fontSize:'10px',fontFamily: 'Poppins, sans-serif'}}>On orders above ₹ 455</span>
      </div>
      
      
      </div>
      </>
    )
  })

}




</div>



</div>



<Link to='/cart'>
<div style={{ left: '50%',transform: 'translateX(-50%)',position:'fixed',bottom :'10px',zIndex:'99999', backgroundColor:'#1677ff',height:'50px',display:'flex',justifyContent:'space-around',alignItems:'center',width:'90%',borderRadius:'4px'}}>

<span style={{position:'relative'}}> <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/><div style={{ position: 'absolute', background: 'white', top: 0, borderRadius: '50%', color: 'red', padding: '8px', height: '12px', width: '12px', fontWeight:600, left: '16px', display: 'flex', justifyContent: "center", alignItems: 'center' ,fontFamily: 'Poppins, sans-serif'}}>{5}</div></span>

<span style={{color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif'}}>View your cart</span>
<span style={{color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif'}}>₹ 50</span>

  </div>
  </Link>


</div>





</div>
        </>)
}
export default Home;
