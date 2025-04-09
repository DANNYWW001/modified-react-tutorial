import React from "react";

const LastViewedProducts = ({ image, title, price }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default LastViewedProducts;
