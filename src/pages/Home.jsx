import React, {useState,useEffect,useContext} from 'react';
import { InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag, Button,Tooltip, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import '../assests/css/Home.css'
const Home = () => {

  const {items,cart,totalItems,totalAmount,addToCart,removeFromCart,increaseItemToOne,increaseItem ,decreaseItem} = useContext(CartContext);
  // const [items,setItems]= useState([
  //   {
  //     name: 'Masala Dosa',
  //     description: 'Dosa stuffed with spiced potato filling',
  //     price: 60,
  //     isVeg: true,
  //     tag: 'Main Course',
  //     quantity: 0,
  //     gram:'100 g',
  //     img: 'https://media.istockphoto.com/id/183321245/photo/south-indian-crepe-masala-dosa.jpg?s=612x612&w=0&k=20&c=c6Z7P5uovp2M9JVS0rlS8nCKRL73QkTYRyL7FK348Os=',
  //   },
  //     {
  //       name: 'Pav Bhaji',
  //       description: 'Spiced mixture of mashed vegetables in a thick gravy served with pav',
  //       price: 40,
  //       isVeg: true,
  //       tag: 'Classic',
  //       quantity: 0,
  //       gram:'100 g',
  //       img: 'https://w0.peakpx.com/wallpaper/805/956/HD-wallpaper-food-delicious-food-food-holidays-indian-indian-food-pav-bhaji-spicy-food-street-food.jpg',
  //     },
  //     {
  //       name: 'Filter Coffee',
  //       description:
  //         'Strong coffee brewed in a traditional South Indian filter',
  //       price: 1,
  //       isVeg: true,
  //       tag: 'Beverage',
  //       quantity: 0,
  //       gram:'20 g',
  //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJz_8ItU9p_au1RhX_uEZXEXpaAOB1nSCPQ&s'
  //     },]
  // )
  //const [cart,setCart] =useState([]);
    return (
        <>
<div className='home-main'>
<div style={{height:'150px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'center'}}>

<div style={{padding:'4px',width:'100%',display:'flex',justifyContent:'space-between'}}>

<div style={{display:'flex',width:'230px',alignItems:'center',justifyContent:'space-around'}}>

<div style={{height:'70px',width:'70px',backgroundColor:'white',borderRadius:'4px'}}></div>
<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
<p style={{color:"white",fontSize:'15px',fontFamily: 'Poppins, sans-serif'}}> Hiramani Store <span style={{marginLeft:'10px'}}><Tooltip title="welcome!" placement="top"> <InfoCircleOutlined  style={{fontSize:'14px'}}/></Tooltip></span></p>
<p style={{textDecoration:'underline',color:'white',fontSize:'12px',fontFamily: 'Poppins, sans-serif'}}>Chunabhati</p>

<span style={{color:'rgb(90 194 100)',fontSize:'14px',marginTop:'4px',fontFamily: 'Poppins, sans-serif'}}>Open | Till 8pm</span>
</div>


</div>


<div style={{display:'flex',width:'30%',justifyContent:'flex-end',gap:'20px'}}>
  
{totalItems > 0 &&  <Link to='/cart'><span style={{position:'relative'}}>
        <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/>
         <div style={{ position: 'absolute', background: 'red', top:'-10px', borderRadius: '50%', color: 'white', padding: '10px', fontSize:'13px',height: '12px', width: '12px', fontWeight:600, left: '13px', display: 'flex', justifyContent: "center", alignItems: 'center' ,fontFamily: 'Poppins, sans-serif'}}>{totalItems}</div>

  </span></Link>}
    <span>
      {/* <svg style={{fontSize:'22px',color:'white',height:'26px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> */}

       {/* <MenuUnfoldOutlined style={{fontSize:'22px',color:'white'}} />*/}
       </span> 
</div>
</div>

</div>



<div className='home-item-section'>

<div className='input-box' style={{margin:'15px'}}>
  <Link to='/search'>
<Input size="large" placeholder="Search For Items..."
 suffix={<SearchOutlined style={{backgroundColor:'white'}}/>} /></Link>
                    </div>







{/* overflowX:'auto' */}
<div style={{ height: 150, backgroundColor: "#edeef0",width:'100%',padding:'20px 15px', }}>
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
      <><div key={i} className='offer-card'  style={{backgroundColor:'rgb(209 209 209)',display:'flex',minWidth:'200px',alignItems:'center',justifyContent:'space-between',borderRadius:'5px',marginRight:'12px'}}>

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









<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'15px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Your Favourites</p>
  <Link to='/category' style={{fontWeight:500,fontSize:'13px',color:'#1677ff',textDecoration:'underline',fontFamily: 'Poppins, sans-serif'}}>View All</Link>
</div>

<div style={{display:'flex',justifyContent:'space-between' ,margin:'9px'}}>

{items.slice(0,3).map((e,i)=>{
  return (<>
  <div key={i} className='card'>
  <div className='image-container'>
  <img  src={e.img} alt=""  style={{display: 'block',height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}}/>
  {e.quantity < 1?
     <><div style={{position:'absolute',bottom:'3px',right:'3px'}}>
    <Button style={{paddingBottom:'0.5px',fontWeight:'bold'}} type="primary" size={'small'} onClick={()=>{
      
        // setItems((js)=>
        // js.map((si,ind)=>{
        //   if(si.name === e.name){
        //     return {
        //       ...si,
        //       quantity : 1
        //     }
        //   }
        //   return si;
        // })
        // )
      addToCart(e);
      increaseItemToOne(e);
      //console.log(cart)
    }}>+</Button>
    </div></>:<>
    <div className='cart-btn'>

<Button type="primary" className='cart-btn-icon' onClick={()=>{
    // setItems((js)=>
    // js.map((si,ind)=>{
    //   if(si.name === e.name){
    //     return {
    //       ...si,
    //       quantity : si.quantity-=1
    //     }
    //   }
    //   return si;
    // })
    // )

    removeFromCart(e);
    decreaseItem(e);
    }}>-</Button>

      <div className='cart-quantity'>
      {e.quantity}
      </div>
      <Button   type="primary" className='cart-btn-icon'  
                onClick={()=>{
                  // setItems((js)=>
                  // js.map((si,ind)=>{
                  //   if(si.name === e.name){
                  //     return {
                  //       ...si,
                  //       quantity : si.quantity+=1
                  //     }
                  //   }
                  //   return si;
                  // })
                  // )
                  addToCart(e);
                  increaseItem(e);

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

<div style={{width:'110px'}}>
  <p style={{fontSize:'10px',color:'gray',fontFamily: 'Poppins, sans-serif'}}>{e.tag}</p>
  <span style={{fontSize:'12px',fontWeight:500,fontFamily: 'Poppins, sans-serif'}}>{e.name}</span>
  <div style={{display:'flex',justifyContent:'space-between'}}>
    <span style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>₹ {e.price}</span>
    <span style={{fontSize:'10px',color:'gray',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>{e.gram}</span>
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



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',marginTop:'15px',marginLeft:'15px',marginRight:'15px',marginBottom:totalItems > 0 ? '60px':'15px'}}>

{Array(5).fill('*').map((e,i)=>{
  return (
    <><div key={i} className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}>

    <div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'80px',width:'80px'}}></div>
    
    <p style={{fontSize:'12px',fontWeight:500,fontFamily: 'Poppins, sans-serif'}}>Top seller</p>
    </div>
    </>
  )
})

}


</div>





{ totalItems > 0 && <Link to='/cart'>
<div style={{ left: '50%',transform: 'translateX(-50%)',position:'fixed',bottom :'10px',zIndex:'99999', backgroundColor:'#1677ff',height:'50px',display:'flex',justifyContent:'space-around',alignItems:'center',width:'90%',borderRadius:'4px'}}>

<span style={{position:'relative'}}> <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/>         <div style={{ position: 'absolute', background: 'white', top:'-4px', borderRadius: '50%', color: 'red', padding: '10px', fontSize:'13px',height: '12px', width: '12px', fontWeight:600, left: '13px', display: 'flex', justifyContent: "center", alignItems: 'center' ,fontFamily: 'Poppins, sans-serif'}}>{totalItems}</div>
</span>

<span style={{color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif'}}>View your cart</span>
<span style={{color:'white',fontWeigt:500,fontFamily: 'Poppins, sans-serif'}}>₹ {totalAmount}</span>

  </div>
  </Link>}


</div>





</div>
        </>)
}
export default Home;
