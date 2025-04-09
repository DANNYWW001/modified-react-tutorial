import React from "react";
const SingleProduct = ({ image, price, title }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p className="text-xl font-medium">{title}</p>
      <p className="text-2xl font-bold"># {price}</p>
    </div>
  );
};

const JumiaClone = () => {
  return (
    <div>
      <h1>ALL Products</h1>
      <div className="flex gap-3">
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/1724373/1.jpg?0045"
          }
          price={55000}
          title={"Synix 2.2l Kettle"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/3172113/1.jpg?4689"
          }
          price={14950}
          title={"Itel water proof native"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/797234/1.jpg?9713"
          }
          price={177000}
          title={"Hisense 7.5kg Twin tub"}
        />
      </div>
    </div>
  );
};

export default JumiaClone;
