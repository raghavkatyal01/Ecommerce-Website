
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import PageNotFound from './Components/PageNotFound'
import { useState } from 'react'
function App() {
 const savedData= localStorage.getItem("my-cart")||"{}";
 const storedData=JSON.parse(savedData);
  const[cartItems,totalcartItems]=useState(storedData);
  function handleAddtoCart(productId,no){
    const oldCount=cartItems[productId]||0;
    const newCart={...cartItems,[productId]:oldCount+no};
    const Data=JSON.stringify(newCart);
    localStorage.setItem("my-cart",Data);
  totalcartItems(newCart);
  }
  const totalCount=Object.keys(cartItems).reduce(function(previus,current){
    return previus+cartItems[current];
  },0)
  
  return (
    <>

    <Navbar productCount={totalCount}/>
    <div class="max-h-screen overflow-scroll  ml-16 mr-16 mt-4 mb-8  flex flex-col bg-gray-200">
<Routes>
  <Route index element={<ProductList/>}></Route>
  <Route path="/ProductDetail/:id" element={<ProductDetail addToCart={handleAddtoCart}/>}></Route>
  <Route path="*" element={<PageNotFound/>}></Route>
  <Route></Route>
</Routes>
</div>
    <Footer></Footer>
   
    </>
  )
}

export default App
