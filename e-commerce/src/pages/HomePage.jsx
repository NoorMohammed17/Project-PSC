import React from 'react'
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div>
   
      <div style={{display:'flex'}}>
      <div>
      <Sidebar/>

      </div>
      <div>
        <ProductList/>
      </div>

      </div>
     
      
    </div>
  )
}

export default HomePage
