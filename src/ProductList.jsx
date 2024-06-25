import React, { useEffect } from 'react'
import ProductMapping from './ProductMapping'
import { useState } from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import Loading from './Components/Loading';
import { getProduct,getProductList } from './Api';
function ProductList() {
const [query,setQuery]=useState('');
const [sort,setSort]=useState('lowTohigh');
const [productList,setProductList] = useState([]);
const [loading,setLoading]=useState(true);
useEffect( function(){
  let p =getProductList();
  p.then(function(response){
   setProductList(response)
   setLoading(false);
  })
},[])


function handleQuery(e){
  setQuery(e.target.value);


}

 let data=productList.filter(function(item){
  const allItem=item.title.toLowerCase();
  const searchItem=query.toLowerCase();

  return (allItem.indexOf(searchItem)!=-1);
})
if(sort=='lowTohigh'){
 data.sort(function(x,y){
    return x.price-y.price;
  })
}
else if(sort=='highTolow'){
  data.sort(function(x,y){
    return y.price-x.price;
  })
}
else if(sort=="name"){
  data.sort(function(x,y){
    return x.title < y.tittle ? -1 :1;
  }) 
}

function handleFilter(e){
  setSort(e.target.value);


}

if(loading){
 return <Loading/>
}

  return (

      
   <>
      <div class="flex justify-end max-w-full gap-4 p-2">
        <input type="text" class="w-11 md:w-44 p-2  border-black border-2" placeholder='Search Items' value={query} onChange={handleQuery}/>
        <select  class="p-2 border-2 w-11 md:w-44 border-black" name="Sorted" id="sort" onChange={handleFilter} value={sort}>
          <option value="default">Default Sorting</option>
          <option value="lowTohigh">Price Low to High</option>
          <option value="highTolow">Price High to Low</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

    {data.length>0 && <ProductMapping products={data}/>}
    {data.length==0 && <div className='flex h-80 items-center justify-center bg-gray-300 m-4 text-black text-3xl'>Result Not Found</div>}
    <div className='mt-6   flex items-center mb-2 ml-8 gap-1'>
      
   
    <a className='border border-black py-1 px-4 ' href="">1</a>
    <a className='border border-black  py-1 px-4' href="">2</a>
    <HiArrowNarrowRight className='text-4xl border border-black ' />
    </div>
   
  </>
  )
}

export default ProductList
