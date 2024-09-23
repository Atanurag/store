import { CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge } from 'antd';

import './Home.css'
const Home = () => {

    return (
        <>
<div className='home-main'>
<div style={{height:'150px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'center'}}>

<div style={{padding:'4px',width:'100%',display:'flex',justifyContent:'space-between',border:'1px solid red'}}>

<div style={{display:'flex',width:'60%',alignItems:'center',justifyContent:'space-between',border:'1px solid yellow'}}>

<div style={{height:'50px',width:'50px',backgroundColor:'white'}}></div>
<div style={{display:'flex',flexDirection:'column'}}>
<p style={{color:"white",fontSize:'19px'}}> Hiramani Store <span style={{marginLeft:'10px'}}>I</span></p>
<p style={{textDecoration:'underline',color:'white',fontSize:'14px'}}>Chunabhati</p>

<span style={{color:'rgb(90 194 100)',fontSize:'15px',marginTop:'4px'}}>Open | Till 8pm</span>
</div>


</div>


<div style={{display:'flex',width:'40%',border:'1px solid blue',justifyContent:'flex-end',gap:'20px'}}>
    <span style={{position:'relative'}}> <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/><div style={{ position: 'absolute', background: 'red', top: 0, borderRadius: '50%', color: 'white', padding: '8px', height: '12px', width: '12px', fontWeight: '800', left: '16px', display: 'flex', justifyContent: "center", alignItems: 'center' }}>{5}</div>
  </span>
    <span> <MenuUnfoldOutlined style={{fontSize:'22px',color:'white'}} /></span>
</div>
</div>

</div>



<div className='home-item-section'>

<div className='input-box'>
                      <Input size="large" placeholder="Search For Items..." suffix={<SearchOutlined style={{backgroundColor:'white'}}/>} onChange={(e) => {
                    
                      }}  />
                    </div>

</div>



</div>
        </>)
}
export default Home;