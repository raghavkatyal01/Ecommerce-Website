import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { getProduct } from './Api';
import Loading from './Components/Loading';
import PageNotFound from './Components/PageNotFound';

function ProductDetail({addToCart}) {
    const[ProductDetail,setProductDetail] =useState();
    const [loading,setLoading] =useState(true);
    const [count,setCount] = useState(1);
    const id=+(useParams().id);
    function HandleInputChange(e){
      setCount(+(e.target.value));
    }
    function HandleAddtoCart(){
      addToCart(id,count);
    }
    useEffect(()=>{
        const p=getProduct(id);
        p.then((response)=>{
        
            setProductDetail(response)
            setLoading(false);
            setCount(1);
        }).catch(function(){
          setLoading(false);
        }
        )
    },[id])

   if(loading){
   return <Loading/>
   }
    if(!ProductDetail){
      return <PageNotFound/>
    }
  return (
ProductDetail ? <>
<div className='bg-gray-200'>
<Link to="/"><HiArrowSmLeft className='text-3xl'/></Link>
<div class=" max-h-80  flex items-center justify-center">
      <div class="max-w-4xl flex items-start  m-8 gap-x-6 border-2 p-6  shadow-2xl">
        <img
          class="max-w-80"
          src={ProductDetail.thumbnail}
          alt=""
        />
        <div class="flex flex-col items-start">
          <h1 class="text-4xl mb-8">{ProductDetail.title}</h1>
          <p class="text-2xl mb-8 font-bold">Rs. {ProductDetail.price}</p>
          <p class="mb-16 text-gray-700">
          {ProductDetail.description}
          </p>
          <div class="flex gap-x-4">
            <input class="border-2 pl-2 py-2 w-16" type="number" value={count} onChange={HandleInputChange}/>
          <button onClick={HandleAddtoCart} class="bg-gray-400 hover:bg-gray-500  px-16 py-2">Add to Cart</button> 
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
   <div class="p-2"> {id>1 && <Link to={"/ProductDetail/"+(id-1)}><HiArrowSmLeft className='text-5xl '/>Previous Item</Link>}</div>
   <div class="p-2"><Link to={"/ProductDetail/"+(id+1)}><HiArrowSmRight className='text-5xl '/>Next Item</Link></div>
    
    </div>
    </div>
</>:<Loading/>
  )
}

export default ProductDetail
