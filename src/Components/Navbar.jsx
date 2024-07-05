import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
function Navbar({productCount,cartItems}) {
  return (
    <>
    <div className="flex w-full top-0 justify-between bg-gray-400">
        <div className="flex flex-col justify-center">
        
    <Link to="/"><img className=" ml-2 max-w-16"src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-1024.png" alt="" /></Link> 
    </div >
    <div className='flex flex-row gap-4 items-center'>
    <Link to="/login"><CgProfile className='text-3xl '/></Link>
    <div className="flex flex-col static">
     <Link to="/cart"><PiShoppingCartSimpleLight className=' mt-4 mr-2 text-3xl'/></Link>
     <span className=' relative left-2 bottom-9 border rounded-full border-black bg-red-500  text-white  px-1 hover:bg-black self-center text-xs ' >{productCount}</span>
     </div>
     </div>
    </div>
    </>
  )
}

export default Navbar
