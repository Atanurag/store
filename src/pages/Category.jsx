import React,{ useContext,useState } from 'react';
import { InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge, Select } from 'antd';
import '../assests/css/Category.css'
import { CartContext } from '../components/CartContext';
const Category = ()=>{
  // cart, addToCart, removeFromCart, updateQuantity 
  const {items,cart,totalItems,totalAmount,addToCart,removeFromCart,increaseItemToOne,increaseItem ,decreaseItem} = useContext(CartContext);
  console.log(cart,totalItems)
  // const [items,setItems] = useState([{
  //   name: 'Sambar',
  //   description: 'Lentil and vegetable stew',
  //   price: 40,
  //   isVeg: true,
  //   tag: 'Abcd tag',
  //   quantity: 0,
  //   img: 'https://c1.staticflickr.com/5/4610/27981857169_5234a6db7d_b.jpg',
  // },
  // {
  //   name: 'Rasam',
  //   description: 'Spicy lentil soup',
  //   price: 35,
  //   isVeg: true,
  //   tag: 'Soup',
  //   quantity: 0,
  //   img: 'https://media.istockphoto.com/id/1076130942/photo/green-peas-curry-matar-masala-north-indian-punjabi-cuisine-vegetarian-food.jpg?s=612x612&w=0&k=20&c=MfYEe2DJGAzJ7kvNcfhWaqfW1Ci80N-rt5HLImHKlk0=',
  // },
  // {
  //   name: 'Uttapam',
  //   description:
  //     'Thick pancake made from fermented rice and lentil batter',
  //   price: 55,
  //   isVeg: true,
  //   tag: 'Main Course',
  //   quantity: 0,
  //   img: 'https://images.pexels.com/photos/17869140/pexels-photo-17869140/free-photo-of-plate-of-small-uttapam.jpeg',
  // },
  // {
  //   name: 'Masala Dosa',
  //   description: 'Dosa stuffed with spiced potato filling',
  //   price: 60,
  //   isVeg: true,
  //   tag: 'Main Course',
  //   quantity: 0,
  //   img: 'https://media.istockphoto.com/id/183321245/photo/south-indian-crepe-masala-dosa.jpg?s=612x612&w=0&k=20&c=c6Z7P5uovp2M9JVS0rlS8nCKRL73QkTYRyL7FK348Os=',
  // },
  // {
  //   name: 'Rava Dosa',
  //   description: 'Dosa made from semolina batter',
  //   price: 50,
  //   isVeg: true,
  //   tag: 'Main Course',
  //   quantity: 0,
  //   img: 'https://media.istockphoto.com/id/1460788339/photo/south-indian-vegetarian-breakfast.jpg?s=612x612&w=0&k=20&c=_h9ObiAsvzhew_Mir9JHtSOwlvIUWj8awcvl-uStEfU=',
  // },
  // {
  //   name: 'Puri',
  //   description: 'Deep-fried unleavened bread',
  //   price: 25,
  //   isVeg: true,
  //   tag: 'Side Dish',
  //   quantity: 0,
  //   img: 'https://media.istockphoto.com/id/178612386/photo/puri-patty-curry-breakfast.jpg?s=612x612&w=0&k=20&c=NQnyqbzDfFu8o9c-PABAJH0HPEUqfFDDGxZRspoOApo=',
  // },
  // {
  //   name: 'Egg Bonda',
  //   description: 'Bonda stuffed with a boiled egg',
  //   price: 25,
  //   isVeg: false,
  //   tag: 'Non-Veg',
  //   quantity: 0,
  //   img: 'https://media.istockphoto.com/id/1128177492/photo/potato-dumpling-stuffed-with-greaves.jpg?s=612x612&w=0&k=20&c=OkoBgV2Jeo9fUDaIl8qRoKZUAjh5Sdn9cVghSwlm60g=',
  // },
  // {
  //   name: 'Medu Vada',
  //   description: 'Urad dal fritters shaped like donuts',
  //   price: 30,
  //   isVeg: true,
  //   tag: 'Side Dish',
  //   quantity: 0,
  //   img: 'https://media.istockphoto.com/id/1459336670/photo/image-of-asian-street-food-at-market-stall-for-sale-uludu-wade-dhal-vada-savoury-indian.jpg?s=612x612&w=0&k=20&c=mzbqFp371DUi_0PfHgymmsygTRDNVwFdeU21wtzoJXk=',
  // },
  // {
  //   name: 'Chicken ',
  //   description: 'Spicy chicken dish from the Chettinad region',
  //   price: 80,
  //   isVeg: false,
  //   tag: 'Non-Veg',
  //   quantity: 0,
  //   img: 'https://media.istockphoto.com/id/477108743/photo/chettinad-chicken.jpg?s=612x612&w=0&k=20&c=PkKlNaLCdESAmmFyk20LYtbanJaeDn9Ym-FtmHqTV7U=',
  // }])
    return (<>
   
    <div className='category'>
    

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
{totalItems > 0 &&  <Link to='/cart'><span style={{position:'relative'}}>
        <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/>
         <div style={{ position: 'absolute', background: 'red', top:'-4px', borderRadius: '50%', color: 'white', padding: '10px', fontSize:'13px',height: '12px', width: '12px', fontWeight:600, left: '13px', display: 'flex', justifyContent: "center", alignItems: 'center' ,fontFamily: 'Poppins, sans-serif'}}>{totalItems}</div>

  </span></Link>}
    <span> <MenuUnfoldOutlined style={{fontSize:'22px',color:'white'}} /></span>
</div>
</div>

</div>







<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px 20px'}}>

{items.slice(3).map((e,i)=>{
return (
<><div key={i}  className= 'category-card' style={{ marginRight:'10px',width:'100px',display:'flex',flexDirection:'column',gap:'6px',alignItems:'start'}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>{e.tag}</p>
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
{/* addToCart */}
<div style={{display:'flex',justifyContent:'space-between' ,margin:'15px',flexWrap:'wrap'}}>

{items.slice(3).map((e,i)=>{
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