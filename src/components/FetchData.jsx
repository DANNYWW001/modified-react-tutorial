import React from "react";
import { useEffect, useState } from "react";
import Product from "./Product";
import { SyncLoader } from "react-spinners";
// product ---> product(api)
// loading state where the loading start up as true
// loading(true) ===> loadng(false)

const url = "https://dummyjson.com/products";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      setIsLoading(false)
      setProducts(data.products);
    };
    getProducts();
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <SyncLoader color="#000000" />;
      </div>
    );
  }

  return (
    <div className="max-w-[1220px] mx-auto">
      <h1 className="text-[40px] font-bold">List Of Products</h1>
      <section className="flex items-center gap-5 flex-col lg:flex-row lg:flex-wrap">
        {products.map((product) => {
          const {
            id,
            title,
            price,
            images,
            stock,
            warrantyInformation,
            rating,
          } = product;
          return (
            <div key={id} className="w-full max-w-[380px] h-[400px] shadow-md">
              <img
                src={images[0]}
                alt={title}
                className="w-full h-[70%] object-center"
              />
              <p className="text-xl px-4 font-medium">{title}</p>
              <div className="flex justify-between px-4">
                <p className="text-2xl font-bold text-yellow-500">${price}</p>
                <p className={stock >= 30 ? "text-green-400" : "text-red-400"}>
                  {stock} items left in stock
                </p>
              </div>
              <div className="px-4">
                <p className="text-black">{warrantyInformation}</p>
                <p
                  className={rating >= 3.5 ? "text-green-400" : "text-red-400"}
                >
                  {rating}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchData;
