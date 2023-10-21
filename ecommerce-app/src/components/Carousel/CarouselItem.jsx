import React from "react";

export default function CarouselItem({ imgUrl, imgTitle, itemId }) {
  return (
    <div className="carousel-card" key={itemId}>
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}
