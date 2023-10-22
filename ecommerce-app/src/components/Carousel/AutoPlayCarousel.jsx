import React, { useState, useEffect } from "react";
import "./autoplaycarousel.css";
import groceries from "../../../src/assets/images/groceries.png";
import { Link } from "react-router-dom";
const AutoPlayCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://wallpapers.com/images/featured/organic-farming-snmzav3nv42lgclu.jpg",
    "https://images.pexels.com/photos/625422/pexels-photo-625422.jpeg?cs=srgb&dl=pexels-frans-van-heerden-625422.jpg&fm=jpg",
    "https://i.pinimg.com/1200x/6c/0c/85/6c0c85ceacd04bfcf95027ca7ec8c824.jpg",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNTIyNzMyfHxlbnwwfHx8fHw%3D&w=1000&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change the interval (in milliseconds) to adjust the speed of the carousel

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main-slide">
      <div className="image">
        <img
          src={images[currentIndex]}
          alt={`carousel-image-${currentIndex}`}
        />
      </div>

      <div className="container">
        <div className="spl-box">
          <h4>
            Special <br />
            <span>Offers</span>
          </h4>
          <img src={groceries}></img>
        </div>
        <div className="content">
          <div className="paragraph">
            <p>
              {" "}
              Our farmers work tirelessly to bring you a diverse selection of
              fresh, organic items, including seasonal fruits, vegetables,
              grains, and dairy products.{" "}
            </p>
          </div>

          <div className="button">
            <button className="btn__plain">
            <Link to='/checkout'> Buy Now</Link>
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPlayCarousel;
