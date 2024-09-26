import {useState} from 'react';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';
import { ArrowLeftOutlined ,InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate, json } from 'react-router-dom';
import '../assests/css/Search.css'
const Search = () =>{

const [recentSearch, setRecentSearch] = useState(false);
const [searchedResult, setSearchedResult] = useState(false);
const [searchedCategory, setSearchedCategory] = useState(true);
const navigate = useNavigate();

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
  background:'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}} className='search-section'>

<ArrowLeftOutlined onClick={()=>{
   navigate(-1)
}} />
<div className='input-box' style={{margin:'15px'}}>
                      <Input  autoFocus size="large" placeholder="Search For Items..." suffix={<SearchOutlined style={{backgroundColor:'white',fontWeight:500,fontFamily: 'Poppins, sans-serif'}}/>} onChange={(e) => {
                    
                      }}  />
                    </div>
</div>

<div  className='search-section-main' style={{marginTop:'100px'}}>

{
  searchedCategory && 
  <div style={{display:'flex',justifyContent:'space-between' ,margin:'15px',flexWrap:'wrap'}}>

{Array(6).fill('*').map((e,i)=>{
return (<>
<div className='card'>
  <div className='image-container'>
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

</div>}
















{searchedResult &&
Array(5).fill('*').map((e,i)=>{
  return (
      <>
<div  style={{ display:'flex',alignItems:'center',gap:'6px',margin:'12px',padding:'4px'}} className='search-item'>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>Top seller</p>
</div>
      </>
  )
})
}





{ recentSearch && <>
<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
<p style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Your Recent Searches</p>

</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
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
}}>Chilly Sause</div>    


</>
)
})

}


</div>









<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
<p style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Popular Searches</p>

</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
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
}}>Chilly Sause</div>    


</>
)
})

}


</div>








<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
<p  style={{fontSize:'14px',fontWeight:600,fontFamily: 'Poppins, sans-serif'}}>Popular Brands</p>

</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
return (
<><div  className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>Top seller</p>
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

{Array(5).fill('*').map((e,i)=>{
return (
<><div  className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>

<p style={{fontSize:'10px',fontWeight:600,fontFamily: 'Poppins, sans-serif',color:'gray'}}>Top seller</p>
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