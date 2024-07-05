import React from 'react'
import Product from './Components/Product'
function ProductMapping({products}) {
  return (
    <div className=" flex flex-col sm:flex sm:flex-row sm:flex-wrap ">
      {products.map(function(item){
        return( <Product {...item}></Product>)
      })}
      
    </div>
    
  )
}

export default ProductMapping
