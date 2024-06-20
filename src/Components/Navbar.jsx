import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div class="flex justify-between bg-gray-400">
        <div calss="flex flex-col justify-center">
     <img class=" ml-2 w-14"src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-1024.png" alt="" />
     </div>
     <div class="flex  gap-8 items-center justify-center mr-2 ">
        <Link to="/">HOME</Link>
        <a href="">BLOG</a>
        <a href="">CONTACT US</a>
     </div>
     </div>
    </>
  )
}

export default Navbar
