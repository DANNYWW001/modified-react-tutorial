import React from "react";
import { useState } from "react";


/// maintain the same data type

const cartItems = [
  {
    id: 1,
    product: "SB dunck low",
    price: 500,
  },
  {
    id: 2,
    product: "Black Airforce 1",
    price: 120,
  },
  {
    id: 3,
    product: "Nike Airjordan 1",
    price: 380,
  },
  {
    id: 4,
    product: "Converse Allstars",
    price: 245,
  },
];
const ComplexStateArrays = () => {
  const [cart, setCart] = useState(cartItems);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const handleRemoveItem = (itemId) => {
    const remaining = cart.filter((item) => item.id !== itemId);
    setCart(remaining);
  };
  if (cart.length === 0) {
    return (
      <div className="max-w-[400px] mx-auto my-4 shadow-2xl rounded-lg p-2.5 text-center">
        <h1 className="text-2xl mb-2.5">Your Bag is Empty</h1>
        <button
          onClick={() => setCart(cartItems)}
          className="bg-black text-white rounded-md px-4 py-4"
        >
          Continue Shopping
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-[400px] mx-auto my-4 shadow-2xl rounded-lg p-2.5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Your Bag</h1>
        <p>{cart.length}</p>
      </div>
      <div className="flex mt-2.5 flex-col gap-4">
        {cart.map((item) => {
          return (
            <section
              key={item.id}
              className="flex items-center justify-between"
            >
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="rounded-full cursor-pointer text-red-600 p-2"
                >
                  x
                </button>
                <p>{item.product}</p>
              </div>
              <p>${item.price}</p>
            </section>
          );
        })}
      </div>
      <div className="flex items-center justify-between font-bold mt-2.5">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
      <div className="my-2.5">
        <button
          onClick={() => setCart([])}
          className="bg-red-500 text-white rounded-md px-4 py-2"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ComplexStateArrays;
