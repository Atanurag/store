
import { InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import '../assests/css/Home.css'
const Home = () => {

    return (
        <>
<div className='home-main'>
<div style={{height:'150px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'center'}}>

<div style={{padding:'4px',width:'100%',display:'flex',justifyContent:'space-between',border:'1px solid red'}}>

<div style={{display:'flex',width:'260px',alignItems:'center',justifyContent:'space-around',border:'1px solid yellow'}}>

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
  <Link to='/search'>
<Input size="large" placeholder="Search For Items..."
 suffix={<SearchOutlined style={{backgroundColor:'white'}}/>} /></Link>
                    </div>



<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'16px',fontWeight:'bold'}}>Your Favourites</p>
  <Link to='/category' style={{fontSize:'14px',color:'#1677ff',textDecoration:'underline',fontWeight:'bold'}}>View All</Link>
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

    <div style={{  backgroundColor: "#edeef0",borderRadius:'4px',height:'80px',width:'80px'}}></div>
    
    <p style={{fontSize:'15px',fontWeight:'600'}}>Top seller</p>
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
    <p style={{ fontSize: 16, fontWeight: "bold" }}>Crazy Deals</p>
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

  
<div className='category-container' style={{display:'flex',justifyContent:'space-around', overflowX:'scroll'}}>
{
  Array(4).fill('*').map((e,i)=>{
    return (
      <><div className='offer-card'  style={{backgroundColor:'rgb(209 209 209)',display:'flex',minWidth:'200px',alignItems:'center',justifyContent:'space-between',borderRadius:'5px',marginRight:'12px'}}>

      <div style={{ backgroundColor: "#edeef0",height:'70px',width:'70px',backgroundColor:'white',borderRadius:'4px'}}></div>
      <div style={{display:'flex',flexDirection:'column',textAlign:'left',padding:'5px',gap:'3px'}}>
      <p style={{fontSize:'12px'}}>Match Day Mania</p>
      <p style={{fontSize:'15px',fontWeight:'bold'}}>Flat ₹ 125 Off</p>
      
      <span style={{fontSize:'13px'}}>On orders above ₹ 455</span>
      </div>
      
      
      </div>
      </>
    )
  })

}




</div>



</div>




<div style={{ left: '50%',transform: 'translateX(-50%)',position:'fixed',bottom :'10px',zIndex:'99999', backgroundColor:'#1677ff',height:'50px',display:'flex',justifyContent:'space-around',alignItems:'center',width:'90%',borderRadius:'4px'}}>
<span style={{position:'relative'}}> <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/><div style={{ position: 'absolute', background: 'white', top: 0, borderRadius: '50%', color: 'red', padding: '8px', height: '12px', width: '12px', fontWeight: '800', left: '16px', display: 'flex', justifyContent: "center", alignItems: 'center' }}>{5}</div></span>

<span style={{color:'white',fontWeight:'bold'}}>View your cart</span>
<span style={{color:'white',fontWeight:'bold'}}>₹ 50</span>
  </div>



</div>





</div>
        </>)
}
export default Home;
