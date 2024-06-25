import React from 'react'
import { Link } from 'react-router-dom'
function Product({thumbnail,title,price,id}) {
  return (
   <>
   <Link to={"/ProductDetail/"+ id}>
   <div class=" w-64  m-4 shadow-xl">
   
    <img class=" w-full"src={thumbnail} alt="" />
    <div>
        <h1 class=" p-2 text-xl">{title}</h1>
        <img class="w-16"src="https://i.ibb.co/tc8FTpS/rating-1.png" alt="" />
        <p class="p-2 text-sm">Rs. {price}</p>
       
    </div>
   
   </div>
   </Link> 
   </>
  )
}

export default Product
