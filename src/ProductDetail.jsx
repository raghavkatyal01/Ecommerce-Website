import React from 'react'
import { useParams } from 'react-router-dom'
import allData from './DummyData';
import { Link } from 'react-router-dom';
import { HiArrowSmLeft } from "react-icons/hi";
function ProductDetail() {
    const params=useParams();
    const sku=params.sku;
    let products;
    for(let i=0;allData.length;i++){
        const p=allData[i];
        if(p.sku==sku){
            products=allData[i];
            break;
        }
    }
    console.log(products);
  return (
<>
<Link to="/"><HiArrowSmLeft className='text-3xl'/></Link>
<div class="w-screen flex items-center justify-center">
      <div class="max-w-4xl flex items-start mt-2 m-8 gap-x-6 border-2 p-6  shadow-2xl">
        <img
          class="max-w-80"
          src={products.imgSrc}
          alt=""
        />
        <div class="flex flex-col items-start">
          <h1 class="text-4xl mb-8">{products.tittle}</h1>
          <p class="text-2xl mb-8 font-bold">Rs. {products.price}</p>
          <p class="mb-16 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem
            accusantium accusamus distinctio nesciunt iste ea reiciendis. Harum,
            autem, ipsum blanditiis natus dolore id quibusdam magni asperiores
            officiis explicabo omnis!
          </p>
          <div class="flex gap-x-4">
            <p class="border-2 pl-6 py-2 w-16">1</p>
            <a class="bg-gray-400 px-16 py-2">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default ProductDetail
