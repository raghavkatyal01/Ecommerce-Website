import React from 'react'
import Product from './Components/Product'
function ProductMapping({products}) {
  return (
    <div class="flex flex-wrap  ">
      {products.map(function(item){
        return( <Product {...item}></Product>)
      })}
      
    </div>
    
  )
}

export default ProductMapping
