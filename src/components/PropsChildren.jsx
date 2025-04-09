import React from "react";

const Product = ({ image, price, title, children }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{title}</p>
      <p>${price}</p>
      {children}
    </div>
  );
};

function PropsChildren() {
  return (
    <div>
      <h1>List Of Available Products</h1>
      <div className="flex gap-2.5">
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/7595563/1.jpg?1325"
          }
          title={"Itel Powerbank"}
          price={8000}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/8832004/1.jpg?8765https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/8832004/1.jpg?8765"
          }
          title={"Apple Iphone 6 plus"}
          price={89000}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/6867973/1.jpg?9252"
          }
          title={"Apple IPhone 16"}
          price={200}
        >
          <p className="text-red-600 font-bold">Black Friday Deal</p>
        </Product>
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/9625323/1.jpg?9652"
          }
          title={"Ps5 sony"}
          price={500}
        >
          <p className="text-red-600 font-bold">Flash Sale Deals</p>
        </Product>
      </div>
    </div>
  );
}

export default PropsChildren;
