import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import PageNotFound from "./Components/PageNotFound";
import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartList from "./Components/CartList";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";

import AuthRoute from "./Components/AuthRoute";
import Alert from "./Components/Alert";
import AlertProvider from "./Providers/AlertProvider";

import UserProvider from "./Providers/UserProvider";

function App() {
  const savedData = localStorage.getItem("my-cart") || "{}";
  const storedData = JSON.parse(savedData);
  const [cartItems, totalcartItems] = useState(storedData);

  


  function handleAddtoCart(productId, no) {
    const oldCount = cartItems[productId] || 0;
    const newCart = { ...cartItems, [productId]: oldCount + no };
    updateCart(newCart);
  }
 
  function updateCart(newCart) {
    const Data = JSON.stringify(newCart);
    localStorage.setItem("my-cart", Data);
    totalcartItems(newCart);
  }
  const totalCount = Object.keys(cartItems).reduce(function (previus, current) {
    return previus + cartItems[current];
  }, 0);

  const location = useLocation();
  const showNavbarFooter =
    location.pathname !== "/login" && location.pathname !== "/signUp";
  
  
  return (
    <>
      <div className="max-h-screen overflow-scroll    flex flex-col ">
        <UserProvider>
          <AlertProvider>
            {showNavbarFooter && <Navbar productCount={totalCount} />}
            <Alert></Alert>
            <Routes>
              <Route path="/" element={<ProductList />}></Route>
              <Route
                path="/ProductDetail/:id"
                element={<ProductDetail addToCart={handleAddtoCart} />}
              ></Route>
              <Route
                path="/cart"
                element={
                  <CartList cartItems={cartItems} updateMyCart={updateCart} />
                }
              ></Route>

             
              <Route
                path="/login"
                element={
                  <AuthRoute>
                    <LoginPage />{" "}
                  </AuthRoute>
                }
              ></Route>
              <Route
                path="/signUp"
                element={
                  <AuthRoute>
                    <SignUp />{" "}
                  </AuthRoute>
                }
              ></Route>
              <Route
                path="/ForgotPassword"
                element={<ForgotPassword />}
              ></Route>
             
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </AlertProvider>
          </UserProvider>
        {showNavbarFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
