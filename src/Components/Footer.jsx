import React from 'react'

function Footer() {
  return (
    <>
    <div class="flex flex-col justify-between gap-4 bg-gray-400">
    <div class="flex flex-col justify-center items-center">
      <h1 class="py-2 font-bold text-xl">SUBSCRIBE</h1>
      
      <p>Be the first to get the latest news about trends, promotions, and much more!</p>
    </div>
      <div class="flex justify-evenly 6 p-4">
        <div class="w-44 text-center">
            <p>Karnal(Indri) Main Bajar near old thana Gait 9896366377 </p>
        </div>
        <div class="flex flex-col">
            <h2 class="font-bold text-xl">COMPANY</h2>
            <a href="">About Us</a>
            <a href="">Carrers</a>
            <a href="">Affilates</a>
            <a href="">Blog</a>
        </div>
        <div class="flex flex-col">
            <h2 class="font-bold text-xl">INFORMATION</h2>
            <a href="">Delivery Information</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Contact Us</a>
            <a href="">Returns</a>
        </div>
        <div class="flex flex-col">
            <h2 class="font-bold text-xl">MY ACCOUNT</h2>
            <a href="">My account</a>
            <a href="">Order History</a>
            <a href="">Wishlist</a>
            <a href="">Shipping</a>
            <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
