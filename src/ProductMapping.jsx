import React from 'react'
import Product from './Components/Product'
function ProductMapping({products}) {
  return (
    <div class="flex flex-wrap  ">
      {products.map(function(item){
        return( <Product tittle={item.tittle} imgSrc={item.imgSrc} price={item.price} sku={item.sku}></Product>)
      })}
      
    </div>
    
  )
}

export default ProductMapping
