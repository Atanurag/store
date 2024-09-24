
import { InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';

import './Home.css'
const Home = () => {

    return (
        <>
<div className='home-main'>
<div style={{height:'150px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'center'}}>

<div style={{padding:'4px',width:'100%',display:'flex',justifyContent:'space-between',border:'1px solid red'}}>

<div style={{display:'flex',width:'240px',alignItems:'center',justifyContent:'space-between',border:'1px solid yellow'}}>

<div style={{height:'70px',width:'70px',backgroundColor:'white',borderRadius:'4px'}}></div>
<div style={{display:'flex',flexDirection:'column'}}>
<p style={{color:"white",fontSize:'19px'}}> Hiramani Store <span style={{marginLeft:'10px'}}><InfoCircleOutlined  style={{fontSize:'14px'}}/></span></p>
<p style={{textDecoration:'underline',color:'white',fontSize:'14px'}}>Chunabhati</p>

<span style={{color:'rgb(90 194 100)',fontSize:'15px',marginTop:'4px'}}>Open | Till 8pm</span>
</div>


</div>


<div style={{display:'flex',width:'30%',border:'1px solid blue',justifyContent:'flex-end',gap:'20px'}}>
    <span style={{position:'relative'}}> <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/><div style={{ position: 'absolute', background: 'red', top: 0, borderRadius: '50%', color: 'white', padding: '8px', height: '12px', width: '12px', fontWeight: '800', left: '16px', display: 'flex', justifyContent: "center", alignItems: 'center' }}>{5}</div>
  </span>
    <span> <MenuUnfoldOutlined style={{fontSize:'22px',color:'white'}} /></span>
</div>
</div>

</div>



<div className='home-item-section'>

<div className='input-box' style={{margin:'15px'}}>
                      <Input size="large" placeholder="Search For Items..." suffix={<SearchOutlined style={{backgroundColor:'white'}}/>} onChange={(e) => {
                    
                      }}  />
                    </div>



<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'16px',fontWeight:'bold'}}>Your Favourites</p>
  <p style={{fontSize:'14px',color:'#1677ff',textDecoration:'underline',fontWeight:'bold'}}>View All</p>
</div>

<div style={{display:'flex',justifyContent:'space-between' ,margin:'15px'}}>

{Array(3).fill('*').map((e,i)=>{
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
  <p style={{fontSize:'12px',color:'gray',fontWeight:'bold'}}>Britiania</p>
  <span style={{fontSize:'14px',fontWeight:'bold'}}>Bourbon Cream Buscuits</span>
  <div style={{display:'flex',justifyContent:'space-between'}}>
    <span style={{fontSize:'16px',fontWeight:'bold'}}>₹ 25</span>
    <span style={{fontSize:'12px',color:'gray',fontWeight:'bold'}}>100 g</span>
  </div>
</div>


</div>
  </>)
})}

</div>


<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'16px',fontWeight:'bold'}}>Shop by Category</p>
  <p style={{fontSize:'14px',color:'#1677ff',textDecoration:'underline',fontWeight:'bold'}}>View All</p>
</div>



<div  className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'auto',margin:'15px'}}>

{Array(5).fill('*').map((e,i)=>{
  return (
    <><div  className= 'category-card' style={{ marginRight:'9px',width:'100px',display:'flex',flexDirection:'column',gap:'6px'}}>

    <div style={{borderRadius:'4px',height:'80px',width:'80px',border:'1px solid black'}}></div>
    
    <p style={{fontSize:'15px',fontWeight:'600'}}>Top seller</p>
    </div>
    </>
  )
})

}


</div>




{/* overflowX:'auto' */}
<div style={{ height: 130, backgroundColor: "#edeef0" }}>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding:'15px'
      
    }}
  >
    <p style={{ fontSize: 16, fontWeight: "bold" }}>Shop by Category</p>
    <p
      style={{
        fontSize: 14,
        color: "#1677ff",
        textDecoration: "underline",
        fontWeight: "bold"
      }}
    >
      View All
    </p>
  </div>

  
<div style={{display:'flex',justifyContent:'space-around', overflowX:'auto',}}>

<div style={{backgroundColor:'#b6babf',display:'flex',width:'200px',alignItems:'center',justifyContent:'space-between',borderRadius:'5px'}}>

<div style={{height:'70px',width:'70px',backgroundColor:'white',borderRadius:'4px'}}></div>
<div style={{display:'flex',flexDirection:'column',textAlign:'left',padding:'3px',gap:'3px'}}>
<p style={{color:"white",fontSize:'12px'}}>Match Day Mania</p>
<p style={{color:'white',fontSize:'15px',fontWeight:'bold'}}>Flat ₹ 125 Off</p>

<span style={{fontSize:'13px'}}>On orders above ₹ 455</span>
</div>


</div>

</div>



</div>







</div>





</div>
        </>)
}
export default Home;
