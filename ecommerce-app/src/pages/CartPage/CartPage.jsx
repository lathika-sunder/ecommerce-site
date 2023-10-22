import React,{useState} from "react";
import CartComp from "../../components/CartComp/CartComp";
import ProductsComp from "../../components/ProductsComp/ProductsComp";



const CartPage = () => {


  return (
    <div>
      <h1>Your Cart</h1>
      
      <CartComp />
    </div>
  );
};

export default CartPage;

