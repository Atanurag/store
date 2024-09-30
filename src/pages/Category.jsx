import React,{ useContext,useState } from 'react';
import { InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge, Select } from 'antd';
import '../assests/css/Category.css'
import { CartContext } from '../components/CartContext';

let classicItems = [
  {
    name: 'Vada Pav',
    description: 'Fried doughnut sandwiched between a bread bun',
    price: 20,
    isVeg: true,
    tag: 'Classic',
    quantity: 0,
    gram: '150 g',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vada_Pav.jpg/1200px-Vada_Pav.jpg',
  },
  {
    name: 'Misal Pav',
    description: 'Curried lentil soup served with pav bread',
    price: 50,
    isVeg: true,
    tag: 'Classic',
    quantity: 0,
    gram: '300 g',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Misal_Pav.jpg/1200px-Misal_Pav.jpg',
  },
  {
    name: 'Bombay Sandwich',
    description: 'A layered sandwich with vegetables, cheese, and chutneys',
    price: 60,
    isVeg: true,
    tag: 'Classic',
    quantity: 0,
    gram: '250 g',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bombay_Sandwich.jpg/1200px-Bombay_Sandwich.jpg',
  },
  {
    name: 'Frankie',
    description: 'A wrap filled with vegetables, eggs, and chutneys',
    price: 70,
    isVeg: false,
    tag: 'Classic',
    quantity: 0,
    gram: '200 g',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Frankie.jpg/1200px-Frankie.jpg',
  },
  {
    name: 'Kanda Poha',
    description: 'A breakfast dish made with flattened rice, onions, and chutneys',
    price: 20,
    isVeg: true,
    tag: 'Classic',
    quantity: 0,
    gram: '120 g',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kanda_Poha.jpg/1200px-Kanda_Poha.jpg',
  },
  {
    name: 'Dabeli',
    description: 'A sandwich made with pav bread, filled with potatoes, onions, and chutneys',
    price: 25,
    isVeg: true,
    tag: 'Classic',
    quantity: 0,
    gram: '180 g',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dabeli.jpg/1200px-Dabeli.jpg',
  },
]


const Category = ()=>{
  // cart, addToCart, removeFromCart, updateQuantity 
  const {items,cart,totalItems,totalAmount,addToCart,removeFromCart,increaseItemToOne,increaseItem ,decreaseItem} = useContext(CartContext);
  console.log(cart,totalItems)
  const [dummyChoice,setDummyChoice] = useState('Classic')
    return (<>
   
    <div className='category'>
    

   <div style={{height:'100px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'end'}}>

<div style={{padding:'4px 0',width:'100%',display:'flex',justifyContent:'space-between'}}>


<div style={{height:'40px',width:'40px',backgroundColor:'white',borderRadius:'4px'}}></div>

<div style={{marginLeft:'4px'}}>
<Select
    className="select-dropdown"
  //style={{border:'none'}}
    onChange={(e)=>{
      setDummyChoice(e)
    }}
    placeholder="Select category"
    optionFilterProp="label"
    
   
    options={[
      {
        value: 'South Indian',
        label: 'South Indian',
      },
      {
        value: 'Beverage',
        label: 'Beverage',
      },
      {
        value: 'Classic',
        label: 'Classic',
      },
    ]}
  />
</div>

<div style={{display:'flex',justifyContent:'flex-end',gap:'20px' ,alignItems:'center'}}>
{totalItems > 0 &&  <Link to='/cart'><span style={{position:'relative'}}>
        <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/>
         <div style={{ position: 'absolute', background: 'red', top:'-10px', borderRadius: '50%', color: 'white', padding: '10px', fontSize:'13px',height: '12px', width: '12px', fontWeight:600, left: '13px', display: 'flex', justifyContent: "center", alignItems: 'center' ,fontFamily: 'Poppins, sans-serif'}}>{totalItems}</div>

  </span></Link>}
    <span>
    <svg style={{fontSize:'22px',color:'white',height:'26px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

       {/* <MenuUnfoldOutlined style={{fontSize:'22px',color:'white'}} />*/}
       </span> 
</div>
</div>

</div>







<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px 20px'}}>

{items.slice(5).map((e,i)=>{
return (
<><div key={i}  className= 'category-card' style={{ marginRight:'10px',width:'100px',display:'flex',flexDirection:'column',gap:'6px',alignItems:'start'}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>Top Seller</p>
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
  <p style={{fontSize:'15px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Abc Items</p>
</div>
{/* addToCart */}
<div style={{display:'flex',justifyContent:'space-between' ,margin:'9px',flexWrap:'wrap'}}>

{items.filter(e=>e.tag === dummyChoice).map((e,i)=>{
  return (<>
  <div key={i} className='card'>
  <div className='image-container'>
  <img  src={e.img} alt=""  style={{display: 'block',height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}}/>
  {e.quantity  <1?
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