import React from 'react'
import { Link } from 'react-router-dom'
function Product({imgSrc,tittle,price,sku}) {
  return (
   <>
   <Link to={"/ProductDetail/"+ sku}>
   <div class=" w-64  m-4 shadow-xl">
   
    <img class=" w-full"src={imgSrc} alt="" />
    <div>
        <h1 class=" p-2 text-xl">{tittle}</h1>
        <img class="w-16"src="https://i.ibb.co/tc8FTpS/rating-1.png" alt="" />
        <p class="p-2 text-sm">Rs. {price}</p>
       
    </div>
   
   </div>
   </Link> 
   </>
  )
}

export default Product
