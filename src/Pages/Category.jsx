import { InfoCircleOutlined ,CloseOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import { Divider, Flex, Tag, Button, Layout, Input, Row, Col, Switch, Card, Badge, Select } from 'antd';
import '../assests/css/Category.css'
const Category = ()=>{
    return (<>
    <div className='category'>

    

   <div style={{height:'100px',backgroundColor:'#444444',padding:'0 12px',display:'flex',alignItems:'end'}}>

<div style={{padding:'4px',width:'100%',display:'flex',justifyContent:'space-between',border:'1px solid red'}}>


<div style={{height:'40px',width:'40px',backgroundColor:'white',borderRadius:'4px'}}></div>

<div>
<Select
    className="select-dropdown"
  //style={{border:'none'}}
    showSearch
    placeholder="Select a person"
    optionFilterProp="label"
    
   
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
</div>

<div style={{display:'flex',border:'1px solid blue',justifyContent:'flex-end',gap:'20px' ,alignItems:'center'}}>
    <span style={{position:'relative'}}>
        <ShoppingOutlined  style={{fontSize:'22px',color:'white'}}/><div style={{ position: 'absolute', background: 'red', top: 0, borderRadius: '50%', color: 'white', padding: '8px', height: '12px', width: '12px', fontWeight: '800', left: '16px', display: 'flex', justifyContent: "center", alignItems: 'center' }}>{5}</div>
  </span>
    <span> <MenuUnfoldOutlined style={{fontSize:'22px',color:'white'}} /></span>
</div>
</div>

</div>








<div className='category-item-section'>

<div className='input-box' style={{margin:'15px'}}>
  <Link to='/search'>
<Input size="large" placeholder="Search For Items..."
 suffix={<SearchOutlined style={{backgroundColor:'white'}}/>} /></Link>
                    </div>



<div style={{display:'flex',justifyContent:'space-between',margin:'20px 15px '}}>
  <p style={{fontSize:'16px',fontWeight:'bold'}}>Dry Fruits</p>
</div>

<div style={{display:'flex',justifyContent:'space-between' ,margin:'15px',flexWrap:'wrap'}}>

{Array(9).fill('*').map((e,i)=>{
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



</div>


</div>
    </>)
}
export default Category;