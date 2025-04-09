import React from "react";
import { useState } from "react";

function SimpleState() {
  const [name, setName] = useState("Declan");
  const handleNameChange = () => {
    if (name == "Declan") {
      setName("Saka");
    } else {
      setName("Declan");
    }
  };
  const [num, setNum] = useState(0);
  // increase
  const handleIncrease = () => {
    setNum(num + 1);
  };
  // decrease
  const handleDecrease = () => {
    setNum(num - 1);
  };
  const detail = ` An Epic comeback from madrid, madrid were at the front foot from the
          moment the match commenced with the whole homee fans in support. The
          arsenal players couldn't understand the effect of the Bernabeu. Brahim
          Diaz led the line beautiful with a solo goal leaving a host of arsenal
          defense at his mercy Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eos nam odit vel dignissimos labore illum iste odio
          temporibus libero fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Praesentium assumenda porro animi quo, autem aperiam enim consectetur. Eius, odio quasi!`;
  const [show, setShow] = useState(false);
  const handleShowDetail = () => {
    setShow(!show);
  };
  return (
    <div className="py-10 text-center">
      <h1 className="txt-3xl font-bold">UseState 1</h1>
      <p>My name is {name}</p>
      <button onClick={handleNameChange} className="mybtn my-5">
        Change Name
      </button>
      <h1 className="text-4xl my-3">{num}</h1>
      <button onClick={handleIncrease} className="mybtn mx-3">
        Increase
      </button>
      <button className="mybtn mr-3" onClick={() => setNum(0)}>
        Reset
      </button>
      <button onClick={handleDecrease} className="mybtn">
        Decrease
      </button>
      <div className="max-w-[600px] mx-auto p-3 shadow-lg text-start mt-5">
        <h1 className="text-4xl font-bold">Top Football News</h1>
        <h2 className="text-2xl text-red-500 my-2">
          Madrid Will Come back at the Santiago Bernabeu
        </h2>
        <p>
          {show ? detail : detail.substr(0, 100)+('...')}
          <button onClick={handleShowDetail} className="mybtn ml-2">
            {show ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default SimpleState;
