import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductsComp.css";
import StarRating from "../StarRating/StarRating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const ProductsComp = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const successNotify = async (product) => {
    
    try {
        setCartItems([...cartItems, product]); // Add the clicked product to the cartItems state
        await axios.post("http://localhost:3000/api/cart-products", cartItems);
        console.log("Product added Successfully",cartItems)
        toast.success("Added to Cart");
      } catch (error) {
        console.error("Error adding product to cart:", error);
        toast.error("Failed to add product to Cart");
      }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts(); // Call fetchProducts immediately after defining it
  }, []); // Empty dependency array ensures useEffect runs once when component mounts

  return (
    <React.Fragment>
      <div className="heading">
        <h1>
          {" "}
          <FontAwesomeIcon icon={faFire} /> Hot Deals
        </h1>
      </div>

      <div className="main-slide">
        <ToastContainer />

        <div className="product-list">
          <ul className="list-comp">
            {data.map((product, index) => (
              index < 6 && (
                <li key={index}>
                  <img className="product-image" src={product.image} alt={product.name} />

                  <div className="numericals">
                    <p>₹{product.price}</p>
                    <p>
                      {product.quantity} {product.quantity_unit}
                    </p>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <StarRating rating={product.rating} />
                  </div>
                  <button className="btn__clr" onClick={() => successNotify(product)}>
                    Add to Cart +
                  </button>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductsComp;
