import React, { useEffect } from 'react'
import { CartContext } from '../Context';
import { useState } from 'react';
import { withUser } from '../Components/withProvider';
import { getCart,setCart } from '../Api';
function CartProvider({loggedIn,children}) {
     const [cartItems, setcartItems] = useState({});
    
     useEffect(()=>{
        if(!loggedIn){
            const savedData = localStorage.getItem("my-cart") || "{}";
            const storedData = JSON.parse(savedData);
            setcartItems(storedData)
        }else{
            getCart().then((response)=>{
                console.log("getting",response)
                setcartItems(response)
            }
               
        )
        }
     }
    ,[loggedIn])

   
   
    function onAddtoCart(productId, no) {
      const oldCount = cartItems[productId] || 0;
    
      const newCart = { ...cartItems,  [productId]:oldCount + no };
      updateCart(newCart);
    }

    function updateCart(newCart) {
        setcartItems(newCart);
        if(!loggedIn){
            const Data = JSON.stringify(newCart);
            localStorage.setItem("my-cart", Data);
         }
        else{
            setCart(newCart)
      }
     
    }

    const totalCount = Object.keys(cartItems).reduce(function (previus, current) {
      return previus + cartItems[current];
    }, 0);
  return (
    <CartContext.Provider value={{cartItems,onAddtoCart,updateCart,totalCount}}>{children}</CartContext.Provider>
  )
}

export default withUser(CartProvider)
