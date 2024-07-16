import React from 'react'
import { Link } from 'react-router-dom'
function Product({thumbnail,title,price,id}) {
  return (
   <>
   <Link to={"/ProductDetail/"+ id}>
   <div class=" max-w-96 flex flex-col ml-12 m-4 transform transition duration-150 hover:scale-105 hover:shadow-2xl shadow-xl">
   
    <img class=" h-full w-full"src={thumbnail} alt="" />
   

        <h1 class=" p-2 text-m">{title}</h1>
        <span class="grow"></span>
    
        <img class="w-16 hover:bg-sky-700"src="https://i.ibb.co/tc8FTpS/rating-1.png" alt="" />
        <p class="p-2 text-sm">Rs. {price}</p>
       

   
   </div>
   </Link> 
   </>
  )
}

export default Product
