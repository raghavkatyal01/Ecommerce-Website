import React, { useState, useEffect } from "react";
import { getProduct } from "../Api";
import Loading from "./Loading";
import { MdDelete } from "react-icons/md";

function CartList({ cartItems }) {
  const [product, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    const promises = Object.keys(cartItems).map(function (item) {
      return getProduct(item);
    });

    const allPromise = Promise.all(promises);

    allPromise.then(function (responses) {
      setProducts(responses);
      setLoading(true);
    });
  }, []);

  function handleInputChange(e){
    
  }
  if (!loading) {
    return <Loading />;
  }
  if (!product) {
    return <Loading />;
  }
  const calculateTotal =product.reduce((total, item) => {
    return total + (item.price || 0 )* (cartItems[item.id]||0);
  }, 0);
;
const total=calculateTotal;

  return (
    <>
      <div className="bg-white max-h-screen">
        <div className="p-2 border bg-gray-300 border-black  flex ">
          <div className="w-1/2 flex justify-center">
            <p>Product</p>
          </div>
          <div className="w-1/2 flex justify-between">
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>

        {product.map(function (item) {
          return (
            <div key={item.id} className=" border-b border-gray-500 bg-white px-4 flex">
              <div className="w-1/2  flex items-center">
                <MdDelete className="text-2xl " />
                <img className="max-w-20" src={item.thumbnail} alt="" />
                <p className="ml-20">{item.title}</p>
              </div>
              <div className="flex w-1/2 flex-row justify-between items-center">
                <p>{item.price}</p>

                <input type="number" value={cartItems[item.id]} onChange={handleInputChange} className="border px-1 w-11 py-2 border-gray-300 "/>
                  
                
                <p >{(item.price * cartItems[item.id]).toFixed(2)}</p>
              </div>
            </div>
          );
        })}
        <div className="flex bg-white pt-4  justify-between">
          <div>
            <input
              type="text"
              className=" px-2 py-2 mx-2 border border-black"
              placeholder="Apply Coupon"
            />
            <button className="bg-gray-400 hover:bg-gray-500  px-16 py-2">
              Apply coupon
            </button>
          </div>
          <div>
            <button className="bg-gray-400 hover:bg-gray-500  px-16 py-2">
              UPDATE CART
            </button>
          </div>
        </div>
        <div className=" flex flex-row bg-white justify-end ">
          <div className="flex mt-4 flex-col gap-8 border border-black w-64  h-28 justify-between">
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-row w-full justify-center border-b border-black">
                <h2>Cart Totals</h2>
              </div>

              <div className="flex flex-row justify-between border-b border-black ">
                <p>SubTotal</p>
                <p>{total.toFixed(2)}</p>
  
              </div>
              <div className="flex justify-between flex-row">
                <p>Total</p>
                <p>{total.toFixed(2)}</p>
              </div>
            </div>
            <div className="w-full bg-white">
            <button className="bg-gray-400 hover:bg-gray-500 mt-0 px-16 py-2">
              PROCEED TO CHECKOUT
            </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default CartList;
