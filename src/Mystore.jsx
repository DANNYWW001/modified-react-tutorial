import React from "react";
import MyStoreSingleProduct from "./MyStoreSingleProduct";

const Mystore = () => {
  const topProducts = [
    {
      id: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3088932/1.jpg?3620",
      title: "Ace Powerbank",
      price: 7900,
    },
    {
      id: 2,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/9107893/1.jpg?0142",
      title: "SilverCrest Blender",
      price: 24900,
    },
    {
      id: 3,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/7595563/1.jpg?1325",
      title: "Itel Powerbank",
      price: 20000,
    },
    {
      id: 4,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/5136773/1.jpg?2578",
      title: "RealMe Note Phone",
      price: 30000,
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="bg-purple-500 text-3xl font-bold p-3 rounded-t-2xl text-white">
        <h1>Top Seller</h1>
      </div>
      <section className="flex gap-2 items-center mt-2.5">
        {topProducts.map((product) => {
          return <MyStoreSingleProduct key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Mystore;
