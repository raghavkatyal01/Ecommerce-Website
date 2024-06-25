import React from 'react'
import { Link } from 'react-router-dom'
function Product({thumbnail,title,price,id}) {
  return (
   <>
   <Link to={"/ProductDetail/"+ id}>
   <div class=" max-w-64 flex flex-col m-4 shadow-xl">
   
    <img class=" aspect-square w-full"src={thumbnail} alt="" />
   
    
        <h1 class=" p-2 text-xl">{title}</h1>
        <span class="grow"></span>
        <img class="w-16 hover:bg-sky-700"src="https://i.ibb.co/tc8FTpS/rating-1.png" alt="" />
        <p class="p-2 text-sm">Rs. {price}</p>
       

   
   </div>
   </Link> 
   </>
  )
}

export default Product
