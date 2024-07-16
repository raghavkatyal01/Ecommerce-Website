
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import PageNotFound from './Components/PageNotFound'
import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CartList from './Components/CartList'
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp'
import ForgotPassword from './Components/ForgotPassword' 
import axios from 'axios'
import Loading from './Components/Loading'
import AuthRoute from './Components/AuthRoute'
import Alert from './Components/Alert'

import { userContext,AlertContext } from './Context'
function App() {
 const savedData= localStorage.getItem("my-cart")||"{}";
 const storedData=JSON.parse(savedData);
  const[cartItems,totalcartItems]=useState(storedData);
  const [user,setUser]=useState();
  const[loading,setLoading]=useState(false)
  const [alert,setAlert] =useState()
  const token=localStorage.getItem("token")
  
useEffect(()=>{
  setLoading(true)
  if(token){
    
  axios.get("https://myeasykart.codeyogi.io/me",
    {
      headers:{
          Authorization:token
  }
}
).then((response)=>{
  setUser(response.data)
  setLoading(false)
})
}
else{
  setLoading(false)
}
},[])
if(loading){
  return <Loading/>
}
  function handleAddtoCart(productId,no){
    const oldCount=cartItems[productId]||0;
    const newCart={...cartItems,[productId]:oldCount+no};
    updateCart(newCart);
    }
    function removeAlert(){
      setAlert(undefined)
    }
  function updateCart(newCart){
    const Data=JSON.stringify(newCart);
    localStorage.setItem("my-cart",Data);
  totalcartItems(newCart);
  }
  const totalCount=Object.keys(cartItems).reduce(function(previus,current){
    return previus+cartItems[current];
  },0)
  

  const location = useLocation();
  const showFooter = (location.pathname !== '/login' && location.pathname !== '/signUp');
 
  return (
    <>
 <div className="max-h-screen overflow-scroll    flex flex-col ">
  <userContext.Provider value={{user,setUser}}>
    <AlertContext.Provider value={{alert,setAlert,removeAlert}}>

    <Navbar productCount={totalCount}  />
   <Alert ></Alert>
<Routes>
  <Route path='/' element={<ProductList />}></Route>
  <Route path="/ProductDetail/:id" element={<ProductDetail addToCart={handleAddtoCart}/>}></Route>
  <Route path="/cart" element={<CartList cartItems={cartItems} updateMyCart={updateCart}/>}></Route>
 
  <Route path="/signUp" element={<SignUp/>}></Route> 
  <Route path="/login" element={<AuthRoute ><LoginPage /> </AuthRoute>}></Route>
  <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
  <Route path="*" element={<PageNotFound/>}></Route>
 
</Routes>
</AlertContext.Provider>
</userContext.Provider>
{showFooter && <Footer />}
</div> 
    </>
  )
}

export default App
