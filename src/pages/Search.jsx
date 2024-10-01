import React, {useState,useEffect,useContext} from 'react';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';
import { ArrowLeftOutlined ,InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import '../assests/css/Search.css'
import { CartContext } from '../components/CartContext';
const Search = () =>{
  const {items,cart,totalItems,totalAmount,addToCart,removeFromCart,increaseItemToOne,increaseItem ,decreaseItem} = useContext(CartContext);

const [recentSearch, setRecentSearch] = useState(true);
const [searchedResult, setSearchedResult] = useState(false);
const [searchedCategory, setSearchedCategory] = useState(false);
const navigate = useNavigate();

//practise
const [userInput, setUserInput] = useState('');
const [userSearched, setUserSearched] = useState([]);
const [userItems, setUserItems] = useState([]);

const getSearched = (input)=>{


setUserSearched(items.filter(e=>e.name.toLowerCase().includes(input.toLowerCase()) || e.name.toLowerCase() === input.toLowerCase()))
// console.log(items.filter(e=>e.name.toLowerCase().includes(userInput.toLowerCase()) || e.name.toLowerCase() === userInput.toLowerCase()))
setUserItems([]);
setRecentSearch(false);

}
useEffect(()=>{
console.log(userSearched)
},[userSearched])

const getRelatedItem = (userClicked)=>{
  setUserItems(items.filter((e,i)=>e.name === userClicked))
  setRecentSearch(false);
  setUserSearched([]);
  // fetch(`https://api.disneyapi.dev/character?name=${userClicked}`).then((e)=>e.json()).then((data)=>{
  //   setUserItems(data.data)
  //   console.log(data)
  //   //setRecentSearch(false)
  //     })
}
    return (<>
<div style={{
    
    position:'fixed',
    width:'100%',
    top:'0',
    zIndex:'999',
  height: '80px',
  padding: '0 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-around',
  backgroundColor:'#444444',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}} className='search-section'>

<ArrowLeftOutlined style={{color:'white'}} onClick={()=>{
   navigate(-1)
}} />
<div className='input-box' style={{margin:'15px'}}>
                      <Input  autoFocus size="large" placeholder="Search For Items..." suffix={<SearchOutlined style={{backgroundColor:'white',fontWeight:500,fontFamily: 'Poppins, sans-serif'}}/>} onChange={(e) => {
                      setUserInput(e.target.value)
                      getSearched(e.target.value);
                      if(e.target.value.length === 0){
setRecentSearch(true);
                      }
                      // console.log(e.target.value.length)
                      }}  value={userInput} />
                    </div>
                    {totalItems > 0 &&  <Link to='/cart' style={{marginRight:'5px'}}><span style={{position:'relative'}}>
        <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/>
         <div style={{ position: 'absolute', background: 'red', top:'-10px', borderRadius: '50%', color: 'white', padding: '10px', fontSize:'13px',height: '12px', width: '12px', fontWeight:600, left: '13px', display: 'flex', justifyContent: "center", alignItems: 'center' ,fontFamily: 'Poppins, sans-serif'}}>{totalItems}</div>

  </span></Link>}
</div>

<div  className='search-section-main' style={{marginTop:'100px'}}>

{
  userItems.length > 0 && <>
  <div style={{display:'flex',justifyContent:'flex-start',margin:'20px 15px '}} onClick={()=>{
    setRecentSearch(true);
    setUserItems([]);
    setUserInput('');
   
  }}>
  <p style={{fontWeight:500,fontSize:'13px',color:'#1677ff',textDecoration:'underline',fontFamily: 'Poppins, sans-serif'}}> <ArrowLeftOutlined style={{marginRight:'4px'}}/>  Recent Search</p>
</div>
  <div style={{display:'flex',justifyContent:'space-between' ,margin:'15px',flexWrap:'wrap'}}>



{userItems.map((e,i)=>{
return (<>
<div key={i} className='card'>
  <div className='image-container'>
  <img  src={e.img} alt=""  style={{display: 'block',height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}}/>
  {e.quantity < 1 ?
     <><div style={{position:'absolute',bottom:'3px',right:'3px'}}>
    <Button style={{paddingBottom:'0.5px',fontWeight:'bold'}} type="primary" size={'small'} onClick={()=>{
      addToCart(e);
      increaseItemToOne(e);

      // this editing update is for only searched Item quantity
        setUserItems((js)=>
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

      // this editing update is for only searched Item quantity
      console.log('add 1')
    }}>+</Button>
    </div></>:<>
    <div className='cart-btn'>

<Button type="primary" className='cart-btn-icon' onClick={()=>{
   // this editing update is for only searched Item quantity
    setUserItems((js)=>
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
 // this editing update is for only searched Item quantity
    removeFromCart(e);
    decreaseItem(e);
    }}>-</Button>

      <div className='cart-quantity'>
      {e.quantity}
      </div>
      <Button   type="primary" className='cart-btn-icon'  
                onClick={()=>{
                   // this editing update is for only searched Item quantity
                  setUserItems((js)=>
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
                   // this editing update is for only searched Item quantity
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
</>}
















{
(userSearched.length > 0 && userInput.length > 0 && !recentSearch)
?
userSearched.map((e,i)=>{
  return (
      <>
<div  style={{ display:'flex',alignItems:'center',gap:'6px',margin:'12px',padding:'4px'}} className='search-item' onClick={()=>{
  getRelatedItem(e.name)
}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}>
<img  src={e.img} alt=""  style={{display: 'block',height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}}/>
</div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>{e.name}</p>
</div>
      </>
  )
})
: (userInput.length > 0 && userItems.length < 1 )  &&( <p style={{textAlign:'center',fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>No Items Found</p>)
}





{ recentSearch && <>
<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
<p style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Your Recent Searches</p>

</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{items.slice(3).map((e,i)=>{
return (
<>

<div style={{
borderRadius: '30px',
padding: '6px',
border: '1px solid black',
textAlign: 'center',
marginRight: '12px',
whiteSpace: 'nowrap',
fontFamily: 'Poppins, sans-serif',
fontSize:'14px'
}} onClick={()=>{
  getRelatedItem(e.name);
}}   >{e.name}</div>    


</>
)
})

}


</div>









<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
<p style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Popular Searches</p>

</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{items.slice(3).map((e,i)=>{
return (
<>

<div style={{
borderRadius: '30px',
padding: '6px',
border: '1px solid black',
textAlign: 'center',
marginRight: '12px',
whiteSpace: 'nowrap',
fontFamily: 'Poppins, sans-serif',
fontSize:'14px'
}} onClick={()=>{
  getRelatedItem(e.name);
}}   >{e.name}</div>    


</>
)
})

}


</div>








<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
<p  style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Popular Brands</p>

</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{items.slice(4).map((e,i)=>{
return (
<><div  className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}  onClick={()=>{
  getRelatedItem(e.name)
}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}>
<img  src={e.img} alt=""  style={{display: 'block',height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}}/>

</div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>{e.name}</p>
</div>
</>
)
})

}


</div>




<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
<p style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Popular Categories</p>

</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{items.slice(4).map((e,i)=>{
return (
<><div  className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}  onClick={()=>{
  getRelatedItem(e.name)
}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}>
<img  src={e.img} alt=""  style={{display: 'block',height:'100%',width:'100%',objectFit:'cover',borderRadius:'4px'}}/>

</div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>{e.name}</p>
</div>
</>
)
})

}
</div> </>}
</div>
        </>);
}
export default Search;