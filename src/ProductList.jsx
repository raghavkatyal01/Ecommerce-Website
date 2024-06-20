import React from 'react'
import ProductMapping from './ProductMapping'
import { useState } from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import allData from './DummyData';
function ProductList() {
const [query,setQuery]=useState('');
const [sort,setSort]=useState('lowTohigh');

  console.log(allData)
function handleQuery(e){
  setQuery(e.target.value);


}

let data=allData.filter(function(item){
  const allItem=item.tittle.toLowerCase();
  const searchItem=query.toLowerCase();

  return (allItem.indexOf(searchItem)!=-1);
})
if(sort=='lowTohigh'){
  data=data.sort(function(x,y){
    return x.price-y.price;
  })
}
else if(sort=='highTolow'){
  data=data.sort(function(x,y){
    return y.price-x.price;
  })
}
else if(sort=="name"){
  data=data.sort(function(x,y){
    return x.tittle < y.tittle ? -1 :1;
  }) 
}

function handleFilter(e){
  setSort(e.target.value);


}
  return (

      
    <div class=" min-h-full ml-8 mt-4 mb-4 mr-4 items-start bg-gray-200">
      <div class="flex justify-end w-full gap-4 p-2">
        <input type="text" class="p-2  border-black border-2" placeholder='Search Items' value={query} onChange={handleQuery}/>
        <select  class="p-2 border-2 border-black" name="Sorted" id="sort" onChange={handleFilter} value={sort}>
          <option value="default">Default Sorting</option>
          <option value="lowTohigh">Price Low to High</option>
          <option value="highTolow">Price High to Low</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

    {data.length>1 && <ProductMapping products={data}/>}
    {data.length==0 && <div className='flex justify-center bg-gray-700 text-white text-3xl'>Result Not Found</div>}
    <div className='mt-6  h-20 flex items-center ml-8 gap-1'>
      
   
    <a className='border border-black py-1 px-4 ' href="">1</a>
    <a className='border border-black  py-1 px-4' href="">2</a>
    <HiArrowNarrowRight className='text-4xl border border-black ' />
    </div>
    </div>
    
  )
}

export default ProductList
