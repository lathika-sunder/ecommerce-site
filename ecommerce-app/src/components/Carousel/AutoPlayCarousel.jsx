import React, { useState, useEffect } from "react";
import "./autoplaycarousel.css";

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
    }, 3000); // Change the interval (in milliseconds) to adjust the speed of the carousel

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
      <div className="content">
        <div className="headers">
          <h1>Fresh.</h1>
          <h1>From.</h1>
          <h1>Farm.</h1>
        </div>
        <div className="paragraph">
        <p> Our farmers work tirelessly to bring you a diverse selection of fresh, organic items, including seasonal fruits, vegetables, grains, and dairy products. With every bite, you'll taste the difference that comes from our dedication to organic excellence.</p>
        </div>
        
       <div className="button">
       <button className="btn__plain">Buy Now</button>
       </div>
      </div>
    </div>
  );
};

export default AutoPlayCarousel;
