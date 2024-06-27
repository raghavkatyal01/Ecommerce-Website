import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function Navbar({productCount}) {
  return (
    <>
    <div class="flex w-full justify-between bg-gray-400">
        <div class="flex flex-col justify-center">
        
     <img class=" ml-2 max-w-16"src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-1024.png" alt="" />
    </div >
    <div class="flex flex-col static">
     <Link to="/cart"><PiShoppingCartSimpleLight className=' mt-4 mr-2 text-3xl'/></Link>
     <span className=' relative left-2 bottom-9 border rounded-full border-black bg-red-500  text-white  hover:bg-black self-center text-xs ' >{productCount}</span>
     </div>

    </div>
    </>
  )
}

export default Navbar
