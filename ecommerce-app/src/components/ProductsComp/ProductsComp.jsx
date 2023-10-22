import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductsComp.css";
import StarRating from "../StarRating/StarRating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsComp = () => {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const successNotify = () => {
    toast.success("Product added to cart!");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setData(response.data);
        setIsVisible(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures useEffect runs once when component mounts

  return (
    <div>
      <ToastContainer />
      <div className="heading">
        <h1>Hot Deals</h1>
      </div>
      <div className="product-list">
        <ul className="list-comp">
          <AnimatePresence>
            {isVisible &&
              data.map((product, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
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
                  <button className="btn__clr" onClick={successNotify}>
                    Add to Cart +
                  </button>
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default ProductsComp;
