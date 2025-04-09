import React from "react";
import mycar from "../assets/car-img.png";
import mycar2 from "../assets/car2-img.png";

const Product = () => {
  return (
    <div>
      <img src={mycar} alt="my car" />
      <img src={mycar2} alt="my car2" />
    </div>
  );
};

export default Product;
