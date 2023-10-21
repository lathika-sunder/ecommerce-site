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
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
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
