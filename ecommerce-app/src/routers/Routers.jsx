import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import Layout from "../components/Layout/Layout";
import ProductDetailsPage from "../pages/ProductDeails/ProductDetailsPage";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/Loginpage/LoginPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/shop/:id">Product Details</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route exact path="/shop" element={<ShopPage />}></Route>
        <Route exact path="/shop/:id" element={<ProductDetailsPage />}></Route>
        <Route exact path="/cart" element={<CartPage />}></Route>
        <Route exact path="/checkout" element={<CheckoutPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
