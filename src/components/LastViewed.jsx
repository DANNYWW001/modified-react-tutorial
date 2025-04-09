import React from "react";
import LastViewedProducts from "./LastViewedProducts";

const LastViewed = () => {
  const Products = [
    {
      id: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/5550692/1.jpg?3713",
      title: "Syinix 10kg Twin",
      price: 266000,
    },
    {
      id: 2,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/0757773/1.jpg?4818",
      title: "SkyRun 70 Litres Double",
      price: 181750,
    },
    {
      id: 3,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/951058/1.jpg?8078",
      title: "Hisense Split Airconditioner",
      price: 345368,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <div className="bg-blue-500 text-3xl font-bold p-3 rounded-t-2xl text-white">
        <h1>Last Viewed Products</h1>
      </div>
      <section className="flex gap-2 items-center mt-2.5">
        {Products.map((product) => {
          return <LastViewedProducts key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default LastViewed;
