import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { ToastContainer, toast } from "react-toastify";
import "./CartComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const CartComp = ({ cartItems, removeFromCart }) => {
  const [cartData, setCartData] = useState([]); // State to hold fetched cart data

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/cart-products"
        ); // Make a GET request to fetch cart products from the API endpoint
        setCartData(response.data); // Update cartData state with the fetched data
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData(); // Call fetchCartData when the component mounts
  }, []); // Empty dependency array ensures useEffect runs once when component mounts

  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + item.price, 0);
  };
  const removeFromCartHandler = async (index) => {
    try {
      // Send a DELETE request to the API endpoint to remove the item at the given index
      await axios.delete(`http://localhost:3000/api/cart-products/${index}`);
      // Update local state by filtering out the item at the given index
      setCartData(cartData.filter((_, i) => i !== index));
      toast.success("Deleted From Cart");
    } catch (error) {
      toast.error("Failed deleting From Cart");
      console.error("Error removing item from cart:", error);
    }
  };
  return (
    <div className="product-list">
      <ToastContainer />
      <ul className="list-comp">
        {cartData.map((item, index) => (
          <li key={index}>
            <div className="item-info">
              <img className="product-image" src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCartHandler(index)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
      <div className="bill">
      <div className="total">
        <h2>
          Total<span>₹{calculateTotal()}</span>{" "}
        </h2>
        <div className="button">
          <button className="btn__clr">
            <Link className="btn__text" to="/checkout">
              {" "}
              Buy Now
            </Link>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CartComp;
