import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LoginPage from "./pages/Loginpage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProductDetailsPage from "./pages/ProductDeails/ProductDetailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import ProductsComp from "./components/ProductsComp/ProductsComp";
import AddDataPage from "./pages/AddData/AddDataPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            exact
            path="/shop/:id"
            element={<ProductDetailsPage />}
          ></Route>
          {/* <Route exact path="/cart" element={<CartPage />}></Route> */}
          <Route exact path="/checkout" element={<CheckoutPage />}></Route>
          <Route exact path="/signup" element={<SignUpPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
            <Route exact path="/home" element={<HomePage />}></Route>
            <Route exact path="/shop" element={<ShopPage />}></Route>
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/add-data" element={<AddDataPage />}></Route>
            
          </Routes>
  
      </BrowserRouter>
    </>
  );
}

export default App;
