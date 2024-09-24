import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';
import { ArrowLeftOutlined ,InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import '../assests/css/Search.css'
const Search = () =>{
    return (<>

<div style={{
    
    position:'fixed',
    width:'100%',
    top:'0',
    zindex:'999',
  height: '80px',
  padding: '0 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-around',
  background:'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}} className='search-section'>

<ArrowLeftOutlined  />
<div className='input-box' style={{margin:'15px'}}>
                      <Input size="large" placeholder="Search For Items..." suffix={<SearchOutlined style={{backgroundColor:'white'}}/>} onChange={(e) => {
                    
                      }}  />
                    </div>
</div>

<div  className='search-section-main' style={{marginTop:'100px'}}>


{Array(5).fill('*').map((e,i)=>{
    return (
        <>
<div  style={{ display:'flex',alignItems:'center',gap:'6px',margin:'12px'}}>

<div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>

<p style={{fontSize:'12px',fontWeight:'600',color:'gray'}}>Top seller</p>
</div>
        </>
    )
})}






<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'14px',fontWeight:'bold'}}>Your Recent Searches</p>
 
</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
  return (
    <>

<div style={{
  borderRadius: '30px',
  padding: '8px',
  border: '1px solid black',
  textAlign: 'center',
  marginRight: '12px',
  whiteSpace: 'nowrap' 
}}>Chilly Sause</div>    
   
   
    </>
  )
})

}


</div>









<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'14px',fontWeight:'bold'}}>Popular Searches</p>
 
</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
  return (
    <>

<div style={{
  borderRadius: '30px',
  padding: '8px',
  border: '1px solid black',
  textAlign: 'center',
  marginRight: '12px',
  whiteSpace: 'nowrap' 
}}>Chilly Sause</div>    
   
   
    </>
  )
})

}


</div>








<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'14px',fontWeight:'bold'}}>Popular Brands</p>
 
</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
  return (
    <><div  className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}>

    <div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>
    
    <p style={{fontSize:'12px',fontWeight:'600',color:'gray'}}>Top seller</p>
    </div>
    </>
  )
})

}


</div>




<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'14px',fontWeight:'bold'}}>Popular Categories</p>
 
</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
  return (
    <><div  className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}>

    <div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'50px',width:'50px'}}></div>
    
    <p style={{fontSize:'12px',fontWeight:'600',color:'gray'}}>Top seller</p>
    </div>
    </>
  )
})

}


</div>

</div>
        </>);
}
export default Search;